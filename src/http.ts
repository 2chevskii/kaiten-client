export type TokenProvider = string | (() => string | Promise<string>);

export type QueryValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly (string | number | boolean)[];

export interface ClientOptions {
  /** Company origin, for example https://acme.kaiten.ru. */
  origin: string;
  token: TokenProvider;
  fetch?: typeof fetch;
}

export interface RestClientOptions extends ClientOptions {
  apiVersion?: 'v1' | 'latest';
}

export interface OperationOptions {
  signal?: AbortSignal | undefined;
}

export interface OperationRequest extends OperationOptions {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  path: string;
  query?: object | undefined;
  body?: unknown;
  responseMode?: 'json' | 'redirect' | undefined;
}

export class KaitenHttpError extends Error {
  readonly status: number;
  readonly body: unknown;
  readonly headers: Headers;
  readonly method: string;
  readonly url: string;

  constructor(response: Response, body: unknown, method: string, url: string) {
    super(`Kaiten API request failed with HTTP ${response.status}`);
    this.name = 'KaitenHttpError';
    this.status = response.status;
    this.body = body;
    this.headers = response.headers;
    this.method = method;
    this.url = url;
  }
}

export class HttpTransport {
  private readonly origin: URL;
  private readonly token: TokenProvider;
  private readonly fetcher: typeof fetch;
  private readonly prefix: string;

  constructor(options: ClientOptions, prefix: string) {
    const origin = new URL(options.origin);
    if (
      origin.protocol !== 'https:' &&
      !(origin.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname))
    ) {
      throw new TypeError('The Kaiten origin must use HTTPS');
    }
    if (origin.pathname !== '/' || origin.search || origin.hash || origin.username || origin.password) {
      throw new TypeError('The Kaiten origin must not contain a path, credentials, query, or fragment');
    }
    this.origin = origin;
    this.token = options.token;
    this.fetcher = options.fetch ?? fetch;
    this.prefix = prefix;
  }

  async request<T>(operation: OperationRequest): Promise<T> {
    const url = new URL(`${this.prefix}${operation.path}`, this.origin);
    for (const [name, value] of Object.entries(operation.query ?? {})) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          url.searchParams.set(name, value.join(','));
        } else if (['string', 'number', 'boolean'].includes(typeof value)) {
          url.searchParams.set(name, String(value));
        } else {
          throw new TypeError(`Unsupported query value for ${name}`);
        }
      }
    }

    const token = typeof this.token === 'string' ? this.token : await this.token();
    if (!token) {
      throw new TypeError('A non-empty Kaiten token is required');
    }

    const headers = new Headers({ Accept: 'application/json', Authorization: `Bearer ${token}` });
    let body: BodyInit | undefined;
    if (operation.body instanceof FormData) {
      body = operation.body;
    } else if (operation.body !== undefined) {
      headers.set('Content-Type', 'application/json');
      body = JSON.stringify(operation.body);
    }

    const response = await this.fetcher(url, {
      method: operation.method,
      headers,
      body: body ?? null,
      signal: operation.signal ?? null,
      redirect: 'manual',
    });

    if (operation.responseMode === 'redirect' && response.status >= 300 && response.status < 400) {
      const location = response.headers.get('Location');
      if (!location) {
        throw new KaitenHttpError(response, undefined, operation.method, url.toString());
      }
      return { location } as T;
    }

    const contentType = response.headers.get('Content-Type') ?? '';
    const text = await response.text();
    let responseBody: unknown;
    if (text) {
      if (contentType.includes('json')) {
        try {
          responseBody = JSON.parse(text) as unknown;
        } catch {
          responseBody = text;
        }
      } else {
        responseBody = text;
      }
    }

    if (!response.ok) {
      throw new KaitenHttpError(response, responseBody, operation.method, url.toString());
    }
    return responseBody as T;
  }
}

export function pathSegment(value: string | number): string {
  return encodeURIComponent(String(value));
}
