import type {CardsCreateNewCardResponse} from '../rest/index.ts';
import {readJsonResponse} from '../http-response.ts';
import type {OperationOptions} from '../http.ts';
import type {CustomPropertyValues} from '../types.ts';

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
  properties?: CustomPropertyValues;
}

export interface SendCardWebhookOptions extends OperationOptions {
  fetch?: typeof fetch;
}

/** Sends a card payload to a webhook URL configured in Kaiten. */
export async function sendCardWebhook(
  webhookUrl: string,
  body: CardWebhookRequest,
  options: SendCardWebhookOptions = {},
): Promise<CardsCreateNewCardResponse> {
  const url = new URL(webhookUrl);
  if (
    url.protocol !== 'https:' &&
    !(
      url.protocol === 'http:' &&
      ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
    )
  ) {
    throw new TypeError('A Kaiten webhook URL must use HTTPS');
  }

  const response = await (options.fetch ?? fetch)(url, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(body),
    signal: options.signal ?? null,
    redirect: 'manual',
  });
  return readJsonResponse<CardsCreateNewCardResponse>(
    response,
    'POST',
    url.toString(),
  );
}
