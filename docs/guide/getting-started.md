# Install and make your first request

## Requirements

- Node.js 24 or newer;
- for TypeScript projects, `module: "Node20"` is recommended (TypeScript 5.9 or newer);
- a Kaiten company origin and an API token.

The current `edge` build is published to GitHub Packages. Create a GitHub personal access token (classic) with the `read:packages` scope and add it to your user-level `.npmrc` (outside your repository). See [GitHub's npm registry instructions](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry):

```ini
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install the package:

```sh
npm install --registry=https://npm.pkg.github.com @2chevskii/kaiten-client@edge
```

The package includes compiled ESM JavaScript and type declarations. Node.js 24 supports both `import` and `require()`:

```js
const {KaitenClient} = require('@2chevskii/kaiten-client');
```

Source files and declaration maps are included for editor navigation. Run Node.js with `--enable-source-maps` for stack traces pointing to the original source. No TypeScript runtime loader is required.

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

Next: [client configuration](/guide/configuration), [REST operations](/guide/rest).
