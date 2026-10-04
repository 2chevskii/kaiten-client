# REST API

`KaitenClient` groups methods by resource: `client.cards`, `client.boards`, `client.users`, `client.cardComments`, and others. The [reference](/reference/rest) lists all 214 operations with method name, HTTP path, parameters, request body, response shape, and a Kaiten source link.

## Requests and types

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';
import type {
  CardsCreateNewCardBody,
  CardsCreateNewCardResponse,
} from '@2chevskii/kaiten-client';

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const request: CardsCreateNewCardBody = {
  title: 'Prepare release',
  board_id: 10,
};
const card: CardsCreateNewCardResponse =
  await client.cards.createNewCard(request);
```

Methods take IDs as separate arguments. Small sets of body fields are separate too: `client.cardComments.addComment(cardId, text)`. Larger bodies and filters retain their `Body` and `Query` objects: `client.cards.create(body)`, `client.cards.retrieveCardList(query)`. The optional last argument is `OperationOptions`, which carries `signal`. Endpoint methods return a `Promise`; `iterate` methods return an async iterator. `Params` types describe the method's argument tuple, which can be passed with `...args`.

`client.cards.create(...)` is an alias for `client.cards.createNewCard(...)`. Beta and deprecated operations remain available and are marked in the types and [reference](/reference/rest).

## Automations

The root export also provides `AutomationBody`, `AutomationTrigger`, `AutomationTriggerType`, `AutomationAction`, `AutomationCondition`, and `AutomationConditionGroup` for `client.automations`. Trigger names are enumerated; action data that Kaiten does not specify remains `unknown`.

```ts
import type {AutomationBody} from '@2chevskii/kaiten-client';

const automation: AutomationBody = {
  type: 'on_demand',
  name: 'Update card',
  actions: [{type: 'change_asap', data: {asap: true}}],
};
```

## Cursor based search

Card and document search supports two response versions. `version: 1` returns an array, while `version: 2` returns `{ result, position }`.

```ts
const firstPage = await client.cards.retrieveCardList({
  version: 2,
  limit: 50,
});

const nextPage = await client.cards.retrieveCardList({
  version: 2,
  start_position: firstPage.position,
});

console.log(firstPage.result, nextPage.result);
```

The root package exports `SearchResponseV2<Result>`. Pass literal `1` or `2` so TypeScript infers the matching result type. A normal list call without `version: 2` returns an array.

## Automatic pagination

`cards.iterate`, `documents.iterate`, and `documentGroups.iterate` fetch version 2 search pages as you consume their items:

```ts
for await (const card of client.cards.iterate({board_id: 10, limit: 50})) {
  console.log(card.id, card.title);
  if (card.asap) break;
}
```

No request starts until iteration begins. Breaking the loop prevents further page requests. Use the last `{ signal }` argument to cancel, including between items of an already fetched page. `start_position` resumes from an existing cursor. `version` and `offset` are omitted from the iterator query types because iteration uses cursor pagination with version 2.

Iteration ends on an empty page or an empty cursor. Pages must contain a `result` array and a string `position`; invalid pagination metadata throws `TypeError`. A repeated cursor on a nonempty page throws an error before that page's items are yielded. Single-page methods remain available when you need to control pagination yourself.

Iterators copy query values, including arrays and nested filters, and capture the signal when created. Every page uses that snapshot. Abort the captured signal's controller to cancel the iteration.

### Users and tags

`users.iterate` and `tags.iterate` use offset pagination and accept the same query objects as their single-page list methods:

```ts
for await (const user of client.users.iterate({include_inactive: true})) {
  console.log(user.id, user.full_name);
}

for await (const tag of client.tags.iterate({space_id: 10, limit: 50})) {
  console.log(tag.id, tag.name);
}
```

`offset` defaults to 0 and must be a non-negative safe integer; `limit` defaults to 100 and must be an integer from 1 to 100. The offset advances by the actual page length, including short pages. An empty page ends iteration, so fully consuming the iterator makes a final empty-page request. A non-array response fails with `TypeError`.

These iterators also snapshot their query and signal, support early exit and cancellation, and fetch one page at a time. `users.retrieveListOfUsers` and `tags.retrieveListOfTags` return individual pages as before.

## Typed card filters

Comma-separated card query fields also accept readonly arrays. Use numeric arrays for ID filters, states `1 | 2 | 3`, and sorting directions `"asc" | "desc"`:

```ts
const page = await client.cards.retrieveCardList({
  owner_ids: [123, 456],
  tag_ids: [10, 20],
  states: [1, 2],
  additional_card_fields: ['description'],
  order_by: ['created', 'id'],
  order_direction: ['desc', 'asc'],
});
```

The exported `QueryList<T>` type accepts a string or `readonly T[]`. The transport joins arrays with commas; existing strings such as `owner_ids: "123,456"` remain valid. The same fields are available on `cards.iterate`.

The `filter` field accepts a `CardFilter` object or an existing base64 string. Object filters are encoded automatically using UTF-8:

```ts
import type {CardFilter} from '@2chevskii/kaiten-client';

const filter = {
  key: 'and',
  value: [
    {
      key: 'or',
      value: [
        {key: 'owner_id', comparison: 'eq', value: 123},
        {key: 'asap', comparison: 'true'},
      ],
    },
  ],
} satisfies CardFilter;

for await (const card of client.cards.iterate({filter})) {
  console.log(card.title);
}
```

The types follow Kaiten's [filter schema](https://developers.kaiten.ru/cards/retrieve-card-list): a top-level `and`/`or` contains groups of conditions, and each condition's key and comparison determine its value type. Numeric custom-property comparisons use string values; checkbox and attachment comparisons require `value: null`. `encodeCardFilter(filter)` is exported when you need the encoded string separately. Other API operations that accept filter strings keep their existing contracts.

## IDs and responses

`users.retrieveListOfUsers` and `tags.retrieveListOfTags` accept `ids` as `QueryList<number>`. The time-log filters `tag_ids`, `user_ids`, `group_ids`, `space_ids`, `board_ids`, `column_ids`, `card_ids`, and `visible_column_ids` use the same type:

```ts
const users = await client.users.retrieveListOfUsers({ids: [123, 456]});
const tags = await client.tags.retrieveListOfTags({ids: [10, 20]});
const timeLogs = await client.timesheet.getList({
  from: '2026-10-01',
  to: '2026-10-31',
  user_ids: [123, 456],
  board_ids: [10],
});
```

User queries also support `exclude_members_by_entity_uid` to exclude direct, group, and inherited members of an entity. `exclude_directly_added_members_by_entity_uid` keeps its narrower meaning of excluding direct invitations only.

Kaiten uses both numeric IDs and UUIDs. Pass the identifier type required by the particular method, such as `card_id: number` or `card_uid: string`. Dates remain strings, documented nullable fields allow `null`, and incomplete schemas use `unknown`.

For operations without an iterator, use `limit`, `offset`, or a cursor where supported. Read the [file guide](/guide/files) for file routes.
