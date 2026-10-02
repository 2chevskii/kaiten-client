import { KaitenHttpError, KaitenResponseError } from "./errors.ts";
import { readJsonResponse } from "./http-response.ts";

export { KaitenHttpError, KaitenResponseError } from "./errors.ts";

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
  fetch?: typeof fetch | undefined;
}

export interface RestClientOptions extends ClientOptions {
  apiVersion?: "v1" | "latest";
}

export interface OperationOptions {
  signal?: AbortSignal | undefined;
}

export interface FileUploadOptions extends OperationOptions {
  filename?: string | undefined;
}

export interface FileRedirectResponse {
  location: string;
}

export interface OperationRequest extends OperationOptions {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  path: string;
  query?: object | undefined;
  jsonQuery?: readonly string[];
  body?: unknown;
  responseMode?: "json" | "redirect" | "void" | undefined;
}

export class HttpTransport {
  private readonly origin: URL;
  private readonly token: TokenProvider;
  private readonly fetcher: typeof fetch;
  private readonly prefix: string;

  constructor(options: ClientOptions, prefix: string) {
    const origin = new URL(options.origin);
    if (
      origin.protocol !== "https:" &&
      !(
        origin.protocol === "http:" &&
        ["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname)
      )
    ) {
      throw new TypeError("The Kaiten origin must use HTTPS");
    }
    if (
      origin.pathname !== "/" ||
      origin.search ||
      origin.hash ||
      origin.username ||
      origin.password
    ) {
      throw new TypeError(
        "The Kaiten origin must not contain a path, credentials, query, or fragment",
      );
    }
    this.origin = origin;
    this.token = options.token;
    this.fetcher = options.fetch ?? fetch;
    this.prefix = prefix;
  }

  async request<T>(operation: OperationRequest): Promise<T> {
    operation.signal?.throwIfAborted();
    if (operation.method === "GET" && operation.body !== undefined) {
      throw new TypeError("GET operations must not contain a request body");
    }
    const url = new URL(`${this.prefix}${operation.path}`, this.origin);
    for (const [name, value] of Object.entries(operation.query ?? {})) {
      if (value !== undefined && value !== null) {
        if (operation.jsonQuery?.includes(name)) {
          url.searchParams.set(name, JSON.stringify(value));
        } else if (Array.isArray(value)) {
          if (!value.every(isQueryScalar)) {
            throw new TypeError(`Unsupported query value for ${name}`);
          }
          url.searchParams.set(name, value.join(","));
        } else if (isQueryScalar(value)) {
          url.searchParams.set(name, String(value));
        } else {
          throw new TypeError(`Unsupported query value for ${name}`);
        }
      }
    }

    const token =
      typeof this.token === "string" ? this.token : await this.token();
    if (typeof token !== "string" || !token.trim()) {
      throw new TypeError("A non-empty Kaiten token is required");
    }
    operation.signal?.throwIfAborted();

    const headers = new Headers({
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    });
    let body: BodyInit | undefined;
    if (operation.body instanceof FormData) {
      body = operation.body;
    } else if (operation.body !== undefined) {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(operation.body);
    }

    const response = await this.fetcher(url, {
      method: operation.method,
      headers,
      body: body ?? null,
      signal: operation.signal ?? null,
      redirect: "manual",
    });

    if (
      operation.responseMode === "redirect" &&
      response.status >= 300 &&
      response.status < 400
    ) {
      const location = response.headers.get("Location");
      if (!location) {
        throw new KaitenHttpError(
          response,
          undefined,
          operation.method,
          url.toString(),
        );
      }
      return { location } as T;
    }

    if (operation.responseMode === "redirect" && response.ok) {
      throw new KaitenResponseError(
        "Kaiten returned a successful response where a file redirect was expected",
        response,
        await response.text(),
        operation.method,
        url.toString(),
      );
    }
    return readJsonResponse<T>(
      response,
      operation.method,
      url.toString(),
      operation.responseMode === "void",
    );
  }
}

export function pathSegment(value: string | number): string {
  if (
    (typeof value !== "string" && typeof value !== "number") ||
    (typeof value === "number" && !Number.isFinite(value))
  ) {
    throw new TypeError("A path segment must be a string or a finite number");
  }
  const segment = String(value);
  if (!segment || segment === "." || segment === "..") {
    throw new TypeError("Empty and dot path segments are not allowed");
  }
  return encodeURIComponent(segment);
}

function isQueryScalar(value: unknown): value is string | number | boolean {
  return (
    typeof value === "string" ||
    typeof value === "boolean" ||
    (typeof value === "number" && Number.isFinite(value))
  );
}
