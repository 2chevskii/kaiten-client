import { KaitenHttpError } from "./http.js";
import type { CardsCreateNewCardResponse } from "./generated/rest.js";

export { WEBHOOK_EVENT_METADATA } from "./generated/webhook-events.js";
export type * from "./generated/webhook-events.js";

export interface CardWebhookLink {
  url: string;
  description?: string | null;
}

/** Payload accepted by a Kaiten incoming card creation webhook. */
export interface CardWebhookRequest {
  title: string;
  description?: string;
  asap?: boolean;
  due_date?: string;
  owner_id?: number;
  links?: CardWebhookLink[];
  members?: number[];
  tags?: string[];
  properties?: Record<`id_${number}`, unknown>;
}

export interface SendCardWebhookOptions {
  url: string;
  body: CardWebhookRequest;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** Sends a card payload to a webhook URL configured in Kaiten. */
export async function sendCardWebhook(
  options: SendCardWebhookOptions,
): Promise<CardsCreateNewCardResponse> {
  const url = new URL(options.url);
  if (
    url.protocol !== "https:" &&
    !(
      url.protocol === "http:" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
    )
  ) {
    throw new TypeError("A Kaiten webhook URL must use HTTPS");
  }

  const response = await (options.fetch ?? fetch)(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(options.body),
    signal: options.signal ?? null,
    redirect: "manual",
  });
  const text = await response.text();
  let body: unknown;
  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      body = text;
    }
  }
  if (!response.ok) {
    throw new KaitenHttpError(response, body, "POST", url.toString());
  }
  return body as CardsCreateNewCardResponse;
}
