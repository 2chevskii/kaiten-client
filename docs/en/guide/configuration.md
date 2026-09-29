# Configuration, cancellation, and errors

## Client options

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token: async () => await getCurrentToken(),
  apiVersion: "latest",
  fetch: globalThis.fetch,
});
```

`token` accepts a string or a function returning a string or `Promise<string>`. The function runs before every request. Replace `fetch`, for example, in tests. REST uses `/api/v1` by default; `apiVersion: "latest"` selects `/api/latest`. SCIM always uses `/scim/v2`.

Exported types include `ClientOptions`, `RestClientOptions`, `TokenProvider`, `OperationOptions`, and `QueryValue`. API fields retain Kaiten's `snake_case` names and dates stay strings. The client does not validate data schemas at runtime.

## Cancel a request

```ts
const controller = new AbortController();
const request = client.cards.retrieveCardList({
  query: { limit: 50 },
  signal: controller.signal,
});

controller.abort();
await request; // Rejects with the fetch abort error.
```

## HTTP errors

```ts
import { KaitenHttpError } from "@2chevskii/kaiten-client";

try {
  await client.cards.retrieveCard({ card_id: 123 });
} catch (error) {
  if (error instanceof KaitenHttpError) {
    console.error(error.status, error.method, error.url);
    console.error(error.headers.get("X-RateLimit-Reset"));
    console.error(error.body);
  } else {
    throw error;
  }
}
```

`body` is `unknown`: it can contain JSON, text, or `undefined` for an empty response. Network and abort errors come from `fetch`. Requests are never retried automatically; implement retries in your application with the method and Kaiten limits in mind.
