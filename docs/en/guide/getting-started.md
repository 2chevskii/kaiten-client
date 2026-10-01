# Install and make your first request

## Requirements

- Node.js 24 or newer;
- TypeScript with ESM compatible `module` and `moduleResolution`;
- a Kaiten company origin and an API token.

Install a published version from npm:

```sh
npm install @2chevskii/kaiten-client
```

The package includes JavaScript and type declarations. When upgrading from the GitHub `1.0.0` version, follow the [migration guide](/en/guide/migration).

## First request

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";

const token = process.env.KAITEN_TOKEN;
if (!token) throw new Error("Set KAITEN_TOKEN");

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token,
});

const cards = await client.cards.retrieveCardList({ limit: 10 });

for (const card of cards) {
  console.log(card.id, card.title);
}
```

`origin` is the company URL without a path or query. Use HTTPS. Keep the token outside source control.

The repository includes a [runnable sample](https://github.com/2chevskii/kaiten-client/tree/develop/samples/kaiten-rest): set `KAITEN_ORIGIN` and `KAITEN_TOKEN`, then run `npm run sample:kaiten-rest`.

Next: [client configuration](/en/guide/configuration), [REST operations](/en/guide/rest).
