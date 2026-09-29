# Install and make your first request

## Requirements

- Node.js 20 or newer;
- TypeScript with ESM compatible `module` and `moduleResolution`;
- a Kaiten company origin and an API token.

Install version `1.0.0` from GitHub:

```sh
npm install github:2chevskii/kaiten-client#v1.0.0
```

The package is not published to npm yet. GitHub installation runs the `prepare` build.

## First request

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";

const token = process.env.KAITEN_TOKEN;
if (!token) throw new Error("Set KAITEN_TOKEN");

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token,
});

const cards = await client.cards.retrieveCardList({
  query: { limit: 10 },
});

for (const card of cards) {
  console.log(card.id, card.title);
}
```

`origin` is the company URL without a path or query. Use HTTPS. Keep the token outside source control.

The repository includes a [runnable sample](https://github.com/2chevskii/kaiten-client/tree/develop/samples/kaiten-rest): set `KAITEN_ORIGIN` and `KAITEN_TOKEN`, then run `npm run sample:kaiten-rest`.

Next: [client configuration](/en/guide/configuration), [REST operations](/en/guide/rest).
