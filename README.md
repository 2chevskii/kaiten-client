# Kaiten Client

[![CI](https://img.shields.io/github/actions/workflow/status/2chevskii/kaiten-client/ci.yml?branch=master&label=CI)](https://github.com/2chevskii/kaiten-client/actions/workflows/ci.yml)
![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-339933?logo=node.js&logoColor=white)
[![MIT License](https://img.shields.io/github/license/2chevskii/kaiten-client)](LICENSE)

Typed TypeScript clients and API contracts for [Kaiten](https://developers.kaiten.ru/): REST, SCIM, webhooks, imports, user metadata, and addons.

## Install

```sh
npm install @2chevskii/kaiten-client
```

Requires Node.js 24 or newer. Set `KAITEN_TOKEN` to an API token and use your Kaiten company URL as `origin`:

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

## What’s included

- `KaitenClient` provides typed methods for Kaiten’s REST API.
- `KaitenScimClient` provides SCIM user and group operations.
- The `webhooks`, `imports`, `metadata`, `addons`, and `addon-oauth` exports provide helpers and types for Kaiten integrations.

## Documentation

Read the [Documentation website](https://2chevskii.github.io/kaiten-client/) for the detailed package documentation.
