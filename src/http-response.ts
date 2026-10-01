import { KaitenHttpError, KaitenResponseError } from "./errors.js";

/** Preserve error payloads while rejecting malformed successful JSON responses. */
export async function readJsonResponse<T>(
  response: Response,
  method: string,
  url: string,
  emptyResponse = false,
): Promise<T> {
  const text = await response.text();
  if (response.ok && emptyResponse) {
    return undefined as T;
  }
  let body: unknown;

  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch (cause) {
      if (response.ok) {
        throw new KaitenResponseError(
          "Kaiten returned invalid JSON",
          response,
          text,
          method,
          url,
          cause,
        );
      }
      body = text;
    }
  }

  if (!response.ok) {
    throw new KaitenHttpError(response, body, method, url);
  }
  if (!text) {
    throw new KaitenResponseError(
      "Kaiten returned an empty response where JSON was expected",
      response,
      text,
      method,
      url,
    );
  }
  return body as T;
}
