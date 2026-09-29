# SCIM

`KaitenScimClient` доступен через отдельный экспорт `@2chevskii/kaiten-client/scim`. Он использует `/scim/v2` и предоставляет восемь операций для пользователей и групп.

```ts
import { KaitenScimClient } from "@2chevskii/kaiten-client/scim";

const scim = new KaitenScimClient({
  origin: "https://your-company.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers({
  query: { startIndex: 1, count: 20 },
});

console.log(users.Resources, users.totalResults);
```

Параметры и поля SCIM сохраняют регистр спецификации: `startIndex`, `displayName`, `Resources`. Создание и изменение передают данные в `body`; `signal` и обработка `KaitenHttpError` работают так же, как в REST-клиенте. Список всех методов и типов — в [SCIM-справочнике](/reference/scim).
