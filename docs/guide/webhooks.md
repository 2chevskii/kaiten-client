# Вебхуки

Экспорт `@2chevskii/kaiten-client/webhooks` содержит типы 22 событий исходящих вебхуков и функцию отправки во входящий вебхук создания карточки.

## Исходящие события

```ts
import type { KaitenWebhookEvent } from "@2chevskii/kaiten-client/webhooks";

function handleEvent(event: KaitenWebhookEvent): void {
  switch (event.event) {
    case "card:add":
      console.log(event.data.title);
      break;
    case "card:update":
      console.log(event.data.old.id, event.data.changes);
      break;
  }
}
```

`KaitenWebhookEvent` — объединение по полю `event`; проверка значения сужает тип `data`. Отдельные типы событий и список `WEBHOOK_EVENT_METADATA` тоже экспортируются и перечислены в [справочнике](/reference/integrations). Приём HTTP, проверка подлинности, хранение и повторная обработка событий остаются ответственностью вашего сервера. Схемы основаны на [примерах Kaiten](https://developers.kaiten.ru/external-webhooks).

## Входящий вебхук карточки

```ts
import { sendCardWebhook } from "@2chevskii/kaiten-client/webhooks";

const card = await sendCardWebhook({
  url: process.env.KAITEN_WEBHOOK_URL!,
  body: {
    title: "Задача из интеграции",
    tags: ["integration"],
    properties: { id_42: "priority" },
  },
});

console.log(card.id);
```

URL берите из настройки входящего вебхука Kaiten. Функция отправляет JSON методом `POST`, поддерживает `fetch` и `signal`, а HTTP-ошибки представлены `KaitenHttpError`. Типы `CardWebhookRequest`, `CardWebhookLink` и `SendCardWebhookOptions` описывают входные данные. [Первичный источник](https://developers.kaiten.ru/webhooks).
