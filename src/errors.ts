export class KaitenHttpError extends Error {
  readonly status: number;
  readonly body: unknown;
  readonly headers: Headers;
  readonly method: string;
  readonly url: string;

  constructor(response: Response, body: unknown, method: string, url: string) {
    super(`Kaiten API request failed with HTTP ${response.status}`);
    this.name = "KaitenHttpError";
    this.status = response.status;
    this.body = body;
    this.headers = response.headers;
    this.method = method;
    this.url = url;
  }
}

/** A successful HTTP response that does not contain the expected payload. */
export class KaitenResponseError extends Error {
  readonly status: number;
  readonly body: string;
  readonly headers: Headers;
  readonly method: string;
  readonly url: string;

  constructor(
    message: string,
    response: Response,
    body: string,
    method: string,
    url: string,
    cause?: unknown,
  ) {
    super(message, { cause });
    this.name = "KaitenResponseError";
    this.status = response.status;
    this.body = body;
    this.headers = response.headers;
    this.method = method;
    this.url = url;
  }
}
