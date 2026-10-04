# Переход на 2.0

Версия 2.0 требует Node.js 24+ и меняет сигнатуры REST, SCIM и серверного OAuth-клиента. Экспорты пакета сохраняются.

## Аргументы методов

ID и небольшие наборы полей передаются отдельно. Большие тела и фильтры остаются объектами. Необязательный последний аргумент содержит настройки операции.

```ts
const card = await client.cards.retrieveCard(123);
await client.cardComments.addComment(card.id, 'Комментарий');
await client.cardMembers.addMemberToCard(card.id, 456);
await client.cards.updateCard(card.id, {title: 'Новое название'});
const page = await client.cards.retrieveCardList({version: 2, limit: 50});

const controller = new AbortController();
await client.cards.retrieveCard(card.id, undefined, {
  signal: controller.signal,
});
```

Типы с суффиксом `Params` теперь являются кортежами, полученными из сигнатуры метода:

```ts
import type {CardsRetrieveCardParams} from '@2chevskii/kaiten-client';

const args: CardsRetrieveCardParams = [123];
await client.cards.retrieveCard(...args);
```

Актуальные сигнатуры всех операций приведены в [REST](/ru/reference/rest) и [SCIM](/ru/reference/scim).

## Файлы, SCIM и OAuth

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard(
  'card-uuid',
  new Blob(['report']),
  {filename: 'report.txt'},
);
const file = await client.restrictedAccessCardFiles.getCardFile(
  'card-uuid',
  uploaded.id,
);
console.log(file.url);

await scim.users.updateUser(123, [
  {op: 'replace', path: 'active', value: false},
]);
await oauth.getToken('addon-uuid', 123, 1);
```

`getCardFile`, `getCommentFile` и `getCustomPropertyFile` выводят тип ответа по `redirect`. Поиск выводит форму ответа по обязательному `version: 2`; переменная с необязательным `version` даёт объединение массива и ответа с курсором.

## Ответы и вебхуки

Вложенные объекты и массивы имеют соответствующие типы. Nullable-поля допускают `null`. `properties` использует динамические ID пользовательских полей, а `changes` в вебхуках содержит необязательные поля изменяемой сущности. Опечатки из старых примеров Kaiten сохранены как необязательные legacy-поля рядом с правильными именами.

Браузерный SDK имеет отдельные типы `AddonCard` и `AddonCurrentUser`; связанные сущности карточки загружаются через `getCardProperties`. `window.Addon`, callback-действия диалогов и отсутствие badges через `null` поддерживаются декларациями.

Повреждённый JSON и неожиданный пустой успешный ответ вызывают `KaitenResponseError`. Документированные операции без тела ответа возвращают `undefined`. HTTP-ошибки по-прежнему представлены `KaitenHttpError`.
