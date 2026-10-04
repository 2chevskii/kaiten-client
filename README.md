# @2chevskii/kaiten-client

TypeScript client for the [Kaiten developer APIs](https://developers.kaiten.ru/). Version 2.0.0 covers all 214 documented REST operations and eight SCIM operations. The package also provides contracts for outgoing webhooks, incoming card webhooks, user metadata, imports, and the Kaiten addon browser SDK.

Install a published version from npm:

```sh
npm install @2chevskii/kaiten-client
```

Node.js 24 or newer is required. The package ships compiled ESM JavaScript and
type declarations. Both `import` and Node.js 24's `require()` are supported:

```js
const {KaitenClient} = require('@2chevskii/kaiten-client');
```

Source files and declaration maps are included for editor navigation. JavaScript
source maps support debugging with `node --enable-source-maps`. No TypeScript
runtime loader is needed.

The bilingual [documentation site](https://2chevskii.github.io/kaiten-client/) has Russian and English guides, plus a reference for every REST and SCIM operation. Run it locally with `npm run docs:dev` or build it with `npm run docs:build`. The documentation is a private npm workspace in `docs/`; you can also run `npm run dev --workspace docs` or `npm run build --workspace docs`. Version 2 uses positional arguments; see the [migration guide](https://2chevskii.github.io/kaiten-client/en/guide/migration).

## REST client

```ts
import {KaitenClient, KaitenHttpError} from '@2chevskii/kaiten-client';

const client = new KaitenClient({
  origin: 'https://acme.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const card = await client.cards.create({
  title: 'Prepare release',
  board_id: 10,
});

const firstPage = await client.cards.retrieveCardList({limit: 100});
const nextSearchPage = await client.cards.retrieveCardList({
  version: 2,
  start_position: 'cursor-from-previous-page',
});
console.log(card.id, firstPage.length, nextSearchPage.position);

for await (const item of client.cards.iterate({board_id: 10, limit: 50})) {
  console.log(item.id, item.title);
}

try {
  await client.cards.retrieveCard(card.id);
} catch (error) {
  if (error instanceof KaitenHttpError) {
    console.error(
      error.status,
      error.body,
      error.headers.get('X-RateLimit-Reset'),
    );
  }
}
```

Methods are grouped by the sections in Kaiten's REST documentation. For example, `client.cardComments.addComment`, `client.customProperties.getProperty`, and `client.iterations.createIteration` correspond to their documentation pages. The [REST reference](https://2chevskii.github.io/kaiten-client/en/reference/rest) links methods to their source documentation. `client.cards.create` is an alias for `client.cards.createNewCard`.

The client accepts a token string or an async token provider, an optional `fetch` implementation, and `apiVersion: 'v1' | 'latest'` (default: `v1`). Pass `{ signal }` as the last options argument to cancel an operation. Path IDs and small sets of body fields are separate arguments; larger bodies and filters retain their typed objects. HTTP errors expose status, headers, body, method, and URL. `KaitenResponseError` reports malformed or unexpectedly empty successful responses. Requests are not automatically retried.

The [source layout](https://github.com/2chevskii/kaiten-client/blob/develop/docs/architecture.md) maps REST resources to their domain modules.

### Files

Restricted file access uses UUID paths and `Blob` uploads:

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard(
  'card-uuid',
  new Blob(['report'], {type: 'text/plain'}),
  {filename: 'report.txt'},
);

const file = await client.restrictedAccessCardFiles.getCardFile(
  'card-uuid',
  uploaded.id,
);
```

For `redirect: true`, the method returns `{ location: string }` instead of following the redirect. Download the temporary signed URL separately, without the Kaiten bearer token. The deprecated public file upload method remains available with a `@deprecated` annotation.

## SCIM

```ts
import {KaitenScimClient} from '@2chevskii/kaiten-client/scim';

const scim = new KaitenScimClient({
  origin: 'https://acme.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers();
```

## Webhooks and metadata

```ts
import {sendCardWebhook} from '@2chevskii/kaiten-client/webhooks';
import type {KaitenWebhookEvent} from '@2chevskii/kaiten-client/webhooks';
import type {UserMetadataHandler} from '@2chevskii/kaiten-client/metadata';

await sendCardWebhook(process.env.KAITEN_WEBHOOK_URL!, {
  title: 'Created from an integration',
  tags: ['integration'],
});

function handleEvent(event: KaitenWebhookEvent) {
  if (event.event === 'card:add') {
    console.log(event.data.title);
  }
}

const metadataHandler: UserMetadataHandler = ({email}) => ({
  description: `Requested by ${email}`,
});

void handleEvent;
void metadataHandler;
```

Outgoing webhook types follow the 22 documented event payload examples. Kaiten sends metadata requests to an endpoint you host; the package supplies request, response, and handler types without binding you to an HTTP framework.

## Imports

```ts
import type {
  ImportMetaDataRecord,
  ImportCardsRecord,
} from '@2chevskii/kaiten-client/imports';

const metadata: ImportMetaDataRecord = {
  entities: ['boards', 'columns', 'cards'],
  entities_paths_map: {
    boards: 'boards.json',
    columns: 'columns.json',
    cards: 'cards.json',
  },
};

const cards: ImportCardsRecord[] = [
  {
    id: 'external-card-1',
    column_id: 'external-column-1',
    title: 'Imported card',
  },
];

void metadata;
void cards;
```

The import subpath describes the 15 documented entity files, ID mappings, and color values. Kaiten processes these files outside the REST API.

## Addons

The browser types describe Kaiten's [hosted Web SDK](https://developers.kaiten.ru/addons); load its script in your addon page, then import the type declarations:

```html
<script src="https://files.kaiten.ru/web-sdk/v1.min.js"></script>
```

```ts
import type {AddonCapabilities} from '@2chevskii/kaiten-client/addons';

const capabilities: AddonCapabilities = {
  card_buttons: () => [
    {
      text: 'Open card',
      callback: async context => {
        const card = await context.getCard();
        console.log(card.title);
      },
    },
  ],
};

Addon.initialize(capabilities);
```

For an addon backend, use the separate OAuth token endpoints with the addon secret:

```ts
import {AddonOAuthClient} from '@2chevskii/kaiten-client/addon-oauth';

const oauth = new AddonOAuthClient({
  origin: 'https://acme.kaiten.ru',
  addonSecret: process.env.KAITEN_ADDON_SECRET!,
});

const token = await oauth.getToken('addon-uuid', 1, 1);
```

## Development and verification

```sh
npm ci
npm run check
npm pack
```

`npm run build` writes JavaScript, declarations, and source maps to `lib/`.
`npm pack` creates `artifacts/2chevskii-kaiten-client-<version>.tgz`.
The archive contains `lib/` and `src/` at its package root, with declaration maps
pointing to the included sources.

The [documentation audit](https://github.com/2chevskii/kaiten-client/blob/develop/docs/documentation-audit.md) records 310 pages reviewed for this release. No live Kaiten account or token was available for this release, so server behavior has not been verified against a real tenant. Types represent documented schemas and examples; fields Kaiten leaves unspecified use `unknown`.

MIT licensed.
