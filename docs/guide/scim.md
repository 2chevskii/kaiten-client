# SCIM

`KaitenScimClient` доступен через отдельный экспорт `@2chevskii/kaiten-client/scim`. Он использует `/scim/v2` и предоставляет восемь операций для пользователей и групп.

```ts
import { KaitenScimClient } from "@2chevskii/kaiten-client/scim";

const scim = new KaitenScimClient({
  origin: "https://your-company.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers(1, 20);

console.log(users.Resources, users.totalResults);
```

Поля SCIM сохраняют регистр спецификации: `startIndex`, `displayName`, `Resources`. Методы принимают ID, параметры пагинации и фильтры позиционными аргументами, а отмену — через последний аргумент `{ signal }`. Обработка `KaitenHttpError` работает так же, как в REST-клиенте. Список всех методов и типов — в [SCIM-справочнике](/reference/scim).

Ответы используют общие экспортируемые контракты `ScimName`, `ScimEmail`, `ScimResourceMeta` и `ScimResourceReference`. У участников групп и членства пользователя в группах поле `value` числовое, а у самих ресурсов групп поле `id` строковое.

```ts
await scim.users.updateUser(123, [
  { op: "replace", path: "active", value: false },
]);
const group = await scim.groups.addGroup("Разработчики");
await scim.groups.getGroup(group.id);
```

`updateUser` и `updateGroup` принимают массивы `ScimUserPatchOperation` и `ScimGroupPatchOperation`; клиент формирует поле `Operations` в запросе. ID групп допускают строковые значения, которые возвращает SCIM.
