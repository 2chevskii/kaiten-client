# Install and make your first request

## Requirements

- Node.js 24 or newer;
- for TypeScript projects, `module: "Node20"` is recommended (TypeScript 5.9 or newer);
- a Kaiten company origin and an API token.

Install a published version from npm:

```sh
npm install @2chevskii/kaiten-client
```

The package includes compiled ESM JavaScript and type declarations. Node.js 24 supports both `import` and `require()`:

```js
const {KaitenClient} = require('@2chevskii/kaiten-client');
```

Source files and declaration maps are included for editor navigation. Run Node.js with `--enable-source-maps` for stack traces pointing to the original source. No TypeScript runtime loader is required.

When upgrading from the GitHub `1.0.0` version, follow the [migration guide](/en/guide/migration).

## First request

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';

const token = process.env.KAITEN_TOKEN;
if (!token) throw new Error('Set KAITEN_TOKEN');

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token,
});

const cards = await client.cards.retrieveCardList({limit: 10});

for (const card of cards) {
  console.log(card.id, card.title);
}
```

`origin` is the company URL without a path or query. Use HTTPS. Keep the token outside source control.

Next: [client configuration](/en/guide/configuration), [REST operations](/en/guide/rest).
