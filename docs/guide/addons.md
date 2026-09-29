# Аддоны

Есть два отдельных экспорта: типы браузерного SDK в `@2chevskii/kaiten-client/addons` и серверный OAuth-клиент в `@2chevskii/kaiten-client/addon-oauth`.

## Браузерный SDK

SDK предоставляет Kaiten. Загрузите его в странице аддона:

```html
<script src="https://files.kaiten.ru/web-sdk/v1.min.js"></script>
```

```ts
import type { AddonCapabilities } from "@2chevskii/kaiten-client/addons";

const capabilities: AddonCapabilities = {
  card_buttons: () => [
    {
      text: "Открыть карточку",
      callback: async (context) => {
        const card = await context.getCard();
        console.log(card.title);
      },
    },
  ],
};

Addon.initialize(capabilities);
```

Экспорт объявляет глобальный `Addon` и типы `KaitenAddonSdk`, `AddonContext`, `AddonCapabilities`, `AddonPlatformApiClient`, диалогов и меню. Типы не загружают SDK во время выполнения. Для iframe используйте `Addon.iframe()` и методы полученного контекста. [Документация SDK](https://developers.kaiten.ru/addons).

## Серверный OAuth

```ts
import { AddonOAuthClient } from "@2chevskii/kaiten-client/addon-oauth";

const oauth = new AddonOAuthClient({
  origin: "https://your-company.kaiten.ru",
  addonSecret: process.env.KAITEN_ADDON_SECRET!,
});

const key = { addon_uid: "addon-uuid", user_id: 1, company_id: 1 };
const token = await oauth.getToken(key);
if (token.has_token) console.log(token.access_token);

const refreshed = await oauth.refreshToken(key);
```

`addonSecret` принимает строку или поставщик токена. Обе операции поддерживают `signal`; результат имеет объединение по `has_token`. Храните секрет на сервере. [Документация OAuth Kaiten](https://developers.kaiten.ru/addons/api-access).
