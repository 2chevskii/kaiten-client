# Addons

There are two separate exports: browser SDK types at `@2chevskii/kaiten-client/addons` and the server-side OAuth client at `@2chevskii/kaiten-client/addon-oauth`.

## Browser SDK

Kaiten provides the runtime SDK. Load it in your addon page:

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

The export declares the global `Addon` and types for `KaitenAddonSdk`, `AddonContext`, `AddonCapabilities`, `AddonPlatformApiClient`, dialogs, and menus. Importing types does not load the runtime SDK. In an iframe, use `Addon.iframe()` and its context methods. [SDK documentation](https://developers.kaiten.ru/addons).

## Server-side OAuth

```ts
import {AddonOAuthClient} from '@2chevskii/kaiten-client/addon-oauth';

const oauth = new AddonOAuthClient({
  origin: 'https://your-company.kaiten.ru',
  addonSecret: process.env.KAITEN_ADDON_SECRET!,
});

const key = ['addon-uuid', 1, 1] as const;
const token = await oauth.getToken(...key);
if (token.has_token) console.log(token.access_token);

const refreshed = await oauth.refreshToken(...key);
```

`addonSecret` accepts a string or a token provider. Both operations support `signal`; the result is discriminated by `has_token`. Keep the secret on the server. [Kaiten OAuth documentation](https://developers.kaiten.ru/addons/api-access).
