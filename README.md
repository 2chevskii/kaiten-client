# @2chevskii/kaiten-client

TypeScript client for the [Kaiten developer APIs](https://developers.kaiten.ru/). Version 1.0.0 covers all 214 documented REST operations and eight SCIM operations. The package also provides contracts for outgoing webhooks, incoming card webhooks, user metadata, imports, and the Kaiten addon browser SDK.

The package is available from GitHub and has not been published to npm:

```sh
npm install github:2chevskii/kaiten-client#v1.0.0
```

Node.js 20 or newer is required. The package is ESM only.

## REST client

```ts
import { KaitenClient, KaitenHttpError } from "@2chevskii/kaiten-client";

const client = new KaitenClient({
  origin: "https://acme.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const card = await client.cards.create({
  body: { title: "Prepare release", board_id: 10 },
});

const firstPage = await client.cards.retrieveCardList({
  query: { limit: 100 },
});
const nextSearchPage = await client.cards.retrieveCardList({
  query: { version: 2, start_position: "cursor-from-previous-page" },
});
console.log(card.id, firstPage.length, nextSearchPage.position);

try {
  await client.cards.retrieveCard({ card_id: card.id });
} catch (error) {
  if (error instanceof KaitenHttpError) {
    console.error(
      error.status,
      error.body,
      error.headers.get("X-RateLimit-Reset"),
    );
  }
}
```

Methods are grouped by the sections in Kaiten's REST documentation. For example, `client.cardComments.addComment`, `client.customProperties.getProperty`, and `client.iterations.createIteration` correspond to their documentation pages. The [operation registry](https://github.com/2chevskii/kaiten-client/blob/v1.0.0/docs/api-coverage.json) links every method to its source page. `client.cards.create` is an alias for `client.cards.createNewCard`.

The client accepts a token string or an async token provider, an optional `fetch` implementation, and `apiVersion: 'v1' | 'latest'` (default: `v1`). Pass `signal` on any operation to cancel it. HTTP errors expose status, headers, body, method, and URL. Requests are not automatically retried.

The [source layout](docs/architecture.md) maps REST resources to their domain modules.

A runnable TypeScript example is in [samples/kaiten-rest](samples/kaiten-rest/README.md).

### Files

Restricted file access uses UUID paths and `Blob` uploads:

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard({
  card_uid: "card-uuid",
  file: new Blob(["report"], { type: "text/plain" }),
  filename: "report.txt",
});

const file = await client.restrictedAccessCardFiles.getCardFile({
  card_uid: "card-uuid",
  id: uploaded.id,
});
```

For `redirect: true`, the method returns `{ location: string }` instead of following the redirect. Download the temporary signed URL separately, without the Kaiten bearer token. The deprecated public file upload method remains available with a `@deprecated` annotation.

## SCIM

```ts
import { KaitenScimClient } from "@2chevskii/kaiten-client/scim";

const scim = new KaitenScimClient({
  origin: "https://acme.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers();
```

## Webhooks and metadata

```ts
import { sendCardWebhook } from "@2chevskii/kaiten-client/webhooks";
import type { KaitenWebhookEvent } from "@2chevskii/kaiten-client/webhooks";
import type { UserMetadataHandler } from "@2chevskii/kaiten-client/metadata";

await sendCardWebhook({
  url: process.env.KAITEN_WEBHOOK_URL!,
  body: { title: "Created from an integration", tags: ["integration"] },
});

function handleEvent(event: KaitenWebhookEvent) {
  if (event.event === "card:add") {
    console.log(event.data.title);
  }
}

const metadataHandler: UserMetadataHandler = ({ email }) => ({
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
} from "@2chevskii/kaiten-client/imports";

const metadata: ImportMetaDataRecord = {
  entities: ["boards", "columns", "cards"],
  entities_paths_map: {
    boards: "boards.json",
    columns: "columns.json",
    cards: "cards.json",
  },
};

const cards: ImportCardsRecord[] = [
  {
    id: "external-card-1",
    column_id: "external-column-1",
    title: "Imported card",
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
import type { AddonCapabilities } from "@2chevskii/kaiten-client/addons";

const capabilities: AddonCapabilities = {
  card_buttons: () => [
    {
      text: "Open card",
      callback: async (context) => {
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
import { AddonOAuthClient } from "@2chevskii/kaiten-client/addon-oauth";

const oauth = new AddonOAuthClient({
  origin: "https://acme.kaiten.ru",
  addonSecret: process.env.KAITEN_ADDON_SECRET!,
});

const token = await oauth.getToken({
  addon_uid: "addon-uuid",
  user_id: 1,
  company_id: 1,
});
```

## Development and verification

```sh
npm ci
npm run check
npm pack --dry-run
```

The [documentation audit](https://github.com/2chevskii/kaiten-client/blob/v1.0.0/docs/documentation-audit.md) records 310 pages reviewed for this release. Contract tests cover every documented REST and SCIM method; a local HTTP server checks authentication, JSON, SCIM, multipart uploads, errors, and cancellation. Type tests check representative consumer calls. No live Kaiten account or token was available for this release, so server behavior has not been verified against a real tenant. Types represent documented schemas and examples; fields Kaiten leaves unspecified use `unknown`.

MIT licensed.
