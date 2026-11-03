---
layout: home
hero:
  name: Kaiten Client
  text: Build with Kaiten.
  tagline: A typed TypeScript client for Kaiten's API and integrations.
  image:
    src: /kaiten-client-artwork.svg
    alt: Kaiten logo inside curly braces
  actions:
    - theme: brand
      text: Get started
      link: /guide/getting-started
    - theme: alt
      text: Explore the API
      link: /reference/rest
features:
  - title: REST and SCIM
    details: Typed REST resources and SCIM user and group operations.
    link: /guide/rest
  - title: Integrations
    details: Contracts for webhooks, metadata, imports, and the browser addon SDK.
    link: /reference/integrations
  - title: Simple transport
    details: Built-in fetch, AbortSignal, file uploads, and configurable tokens.
    link: /guide/configuration
---

## Get started

Install the package with Node.js 24 or newer:

```sh
npm install @2chevskii/kaiten-client
```

Create a client and retrieve cards from your company:

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const cards = await client.cards.retrieveCardList({limit: 10});
```

See the [getting started guide](/guide/getting-started) for installation options and a complete example.

[Source code](https://github.com/2chevskii/kaiten-client) · [Kaiten documentation](https://developers.kaiten.ru/) · [Русский](/ru/)
