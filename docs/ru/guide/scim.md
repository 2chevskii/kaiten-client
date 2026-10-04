# SCIM

`KaitenScimClient` доступен через отдельный экспорт `@2chevskii/kaiten-client/scim`. Он использует `/scim/v2` и предоставляет операции для пользователей и групп. Используйте автодополнение редактора и экспортируемые типы SCIM для изучения полей запросов и ответов.

```ts
import {KaitenScimClient} from '@2chevskii/kaiten-client/scim';

const scim = new KaitenScimClient({
  origin: 'https://your-company.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers(1, 20);

console.log(users.Resources, users.totalResults);
```

Поля SCIM сохраняют регистр спецификации: `startIndex`, `displayName`, `Resources`. Методы принимают ID, параметры пагинации и фильтры позиционными аргументами, а отмену — через последний аргумент `{ signal }`. Обработка `KaitenHttpError` работает так же, как в REST-клиенте.

Ответы используют общие экспортируемые контракты `ScimName`, `ScimEmail`, `ScimResourceMeta` и `ScimResourceReference`. У участников групп и членства пользователя в группах поле `value` числовое, а у самих ресурсов групп поле `id` строковое.

```ts
await scim.users.updateUser(123, [
  {op: 'replace', path: 'active', value: false},
]);
const group = await scim.groups.addGroup('Разработчики');
await scim.groups.getGroup(group.id);
```

Также можно найти пользователя по SCIM-фильтру и деактивировать найденную запись:

```ts
const matchingUsers = await scim.users.getUsers(
  1,
  20,
  'userName eq "alex@example.com"',
);
const user = matchingUsers.Resources[0];

if (user) {
  await scim.users.updateUser(user.id, [
    {op: 'replace', path: 'active', value: false},
  ]);
}
```

`updateUser` и `updateGroup` принимают массивы `ScimUserPatchOperation` и `ScimGroupPatchOperation`; клиент формирует поле `Operations` в запросе. ID групп допускают строковые значения, которые возвращает SCIM.

## Автоматическая пагинация

`users.iterate(startIndex?, count?, filter?, options?)` и `groups.iterate(startIndex?, count?, options?)` лениво перебирают списки SCIM:

```ts
for await (const user of scim.users.iterate(1, 50)) {
  console.log(user.id, user.userName);
}

for await (const group of scim.groups.iterate()) {
  console.log(group.id, group.displayName);
}
```

По умолчанию запросы начинаются с индекса 1. Следующий индекс увеличивается на фактически полученное число элементов, поэтому ограничение размера страницы на сервере не приводит к пропускам. Перебор завершается при достижении `totalResults` или пустой странице. Поле `startIndex` ответа не используется для продвижения: примеры Kaiten возвращают 0, хотя индексы запросов документированы как начинающиеся с 1.

До начала перебора запросы не выполняются, а `break` прекращает загрузку следующих страниц. Последний аргумент `{ signal }` отменяет перебор между элементами или во время запроса. Значения `count` и фильтра пользователей сохраняются на каждой странице. Для получения отдельных страниц и их метаданных остаются методы `getUsers` и `getGroups`.

Сигнал сохраняется при создании итератора. Для отмены используйте его контроллер; последующие изменения объекта опций не заменяют сохранённый сигнал.
