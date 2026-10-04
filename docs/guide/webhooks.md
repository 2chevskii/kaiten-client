# Webhooks

`@2chevskii/kaiten-client/webhooks` exports types for 22 outgoing webhook events and a function for posting to an incoming card creation webhook.

## Outgoing events

```ts
import type {KaitenWebhookEvent} from '@2chevskii/kaiten-client/webhooks';

function handleEvent(event: KaitenWebhookEvent): void {
  switch (event.event) {
    case 'card:add':
      console.log(event.data.title);
      break;
    case 'card:update':
      console.log(event.data.old.id, event.data.changes);
      break;
  }
}
```

`KaitenWebhookEvent` is a discriminated union on `event`, which narrows the `data` type. Individual event types are listed in the [reference](/reference/integrations). Your server is responsible for HTTP reception, authenticity checks, persistence, and event retry handling. Contracts follow [Kaiten's examples](https://developers.kaiten.ru/external-webhooks).

## Incoming card webhook

```ts
import {sendCardWebhook} from '@2chevskii/kaiten-client/webhooks';

const card = await sendCardWebhook(process.env.KAITEN_WEBHOOK_URL!, {
  title: 'Task from an integration',
  tags: ['integration'],
  properties: {id_42: 'priority'},
});

console.log(card.id);
```

Get the URL from Kaiten's incoming webhook configuration. The function posts JSON, accepts `fetch` and `signal`, and reports HTTP failures as `KaitenHttpError`. `CardWebhookRequest`, `CardWebhookLink`, and `SendCardWebhookOptions` describe the input. [Original documentation](https://developers.kaiten.ru/webhooks).
