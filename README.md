# Kaiten Client

[![CI](https://img.shields.io/github/actions/workflow/status/2chevskii/kaiten-client/ci.yml?branch=master&label=CI)](https://github.com/2chevskii/kaiten-client/actions/workflows/ci.yml)
![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-339933?logo=node.js&logoColor=white)

A typed TypeScript client for building [Kaiten](https://developers.kaiten.ru/) integrations. Access REST resources and SCIM users and groups, or use the integration contracts for webhooks, imports, metadata, and addons.

## Install

Requires Node.js 24 or newer, a Kaiten company URL, and an API token.

```sh
npm install @2chevskii/kaiten-client
```

The package includes ESM JavaScript and TypeScript declarations. For TypeScript projects, `module: "Node20"` is recommended (TypeScript 5.9 or newer).

## Quick start

Set `KAITEN_TOKEN` in your environment and use your company URL as the origin:

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

Use an HTTPS origin without a path or query, and keep your token outside source control.

## Capabilities

- **REST:** Typed operations for cards, boards, users, documents, files, and other resources. Supported lists provide lazy async iterators for pagination.
- **SCIM:** Manage users and groups through `@2chevskii/kaiten-client/scim`.
- **Webhooks:** Type outgoing events and send incoming card creation webhooks with `@2chevskii/kaiten-client/webhooks`.
- **Integrations:** Use the `imports`, `metadata`, `addons`, and `addon-oauth` subpath exports for Kaiten integrations.
- **Transport:** Configure a token provider or custom `fetch`, cancel requests with `AbortSignal`, and inspect typed HTTP errors.

For example, iterate through cards without managing cursors yourself:

```ts
for await (const card of client.cards.iterate({board_id: 10, limit: 50})) {
  console.log(card.id, card.title);
}
```

Requests use `/api/v1` by default; set `apiVersion: 'latest'` when an operation requires it. API fields retain Kaiten's naming and dates remain strings. Responses are not validated against schemas at runtime, and requests are not retried automatically.

## Documentation

Explore the [documentation](https://2chevskii.github.io/kaiten-client/) in English or Russian, including guides for [REST](https://2chevskii.github.io/kaiten-client/guide/rest), [SCIM](https://2chevskii.github.io/kaiten-client/guide/scim), [webhooks](https://2chevskii.github.io/kaiten-client/guide/webhooks), and [configuration and errors](https://2chevskii.github.io/kaiten-client/guide/configuration).

## Development

Install dependencies with `npm ci`, then run the project checks:

```sh
npm run build
npm run lint
npm run format:check
npm run docs:build
```

Run `npm run docs:dev` to serve the documentation locally.
