# Настройка, отмена и ошибки

## Параметры клиента

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token: async () => await getCurrentToken(),
  apiVersion: 'latest',
  fetch: globalThis.fetch,
});
```

`token` принимает строку или функцию, возвращающую строку либо `Promise<string>`. Функция вызывается перед каждым запросом. `fetch` можно заменить, например, при тестировании. По умолчанию REST использует `/api/v1`; `apiVersion: "latest"` задаёт `/api/latest`. Для SCIM префикс всегда `/scim/v2`.

Импортируемые типы: `ClientOptions`, `RestClientOptions`, `TokenProvider`, `OperationOptions`, `QueryValue`. Параметры API сохраняют имена Kaiten в `snake_case`, даты передаются строками. Клиент не проверяет схемы данных во время выполнения.

## Отмена запроса

```ts
const controller = new AbortController();
const request = client.cards.retrieveCardList(
  {limit: 50},
  {signal: controller.signal},
);

controller.abort();
await request; // Отклоняется ошибкой отмены.
```

Отмена также прерывает ожидание асинхронного провайдера токена с причиной из сигнала. Отменой собственной работы управляет сам провайдер. Токен, полученный позднее, не запустит отменённый HTTP-запрос. Это действует для REST, SCIM и клиента OAuth аддонов.

## HTTP-ошибки

```ts
import {KaitenHttpError} from '@2chevskii/kaiten-client';

try {
  await client.cards.retrieveCard(123);
} catch (error) {
  if (error instanceof KaitenHttpError) {
    console.error(error.status, error.method, error.url);
    console.error(error.headers.get('X-RateLimit-Reset'));
    console.error(error.body);
  } else {
    throw error;
  }
}
```

`body` имеет тип `unknown`: это JSON, текст или `undefined` для пустого ответа. Ошибки сети и провайдера токена передаются без изменений. Автоматических повторных запросов нет; если они нужны, управляйте ими в приложении с учётом метода и ограничений Kaiten.

Для успешного ответа с повреждённым JSON или неожиданно пустым телом клиент выбрасывает `KaitenResponseError`. Ошибка содержит `status`, `headers`, `method`, `url`, исходный текст `body` и причину ошибки парсинга в `cause`. Операции с документированным пустым ответом возвращают `undefined`.
