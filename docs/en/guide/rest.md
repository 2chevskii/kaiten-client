# REST API

`KaitenClient` groups methods by resource: `client.cards`, `client.boards`, `client.users`, `client.cardComments`, and others. The [reference](/en/reference/rest) lists all 214 operations with method name, HTTP path, parameters, request body, response shape, and a Kaiten source link.

## Requests and types

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";
import type {
  CardsCreateNewCardBody,
  CardsCreateNewCardResponse,
} from "@2chevskii/kaiten-client";

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const request: CardsCreateNewCardBody = {
  title: "Prepare release",
  board_id: 10,
};
const card: CardsCreateNewCardResponse =
  await client.cards.createNewCard(request);
```

Methods take IDs as separate arguments. Small sets of body fields are separate too: `client.cardComments.addComment(cardId, text)`. Larger bodies and filters retain their `Body` and `Query` objects: `client.cards.create(body)`, `client.cards.retrieveCardList(query)`. The optional last argument is `OperationOptions`, which carries `signal`. Every method returns a `Promise`. `Params` types describe the method's argument tuple, which can be passed with `...args`.

`client.cards.create(...)` is an alias for `client.cards.createNewCard(...)`. Beta and deprecated operations remain available and are marked in the types and [reference](/en/reference/rest).

## Automations

The root export also provides `AutomationBody`, `AutomationTrigger`, `AutomationTriggerType`, `AutomationAction`, `AutomationCondition`, and `AutomationConditionGroup` for `client.automations`. Trigger names are enumerated; action data that Kaiten does not specify remains `unknown`.

```ts
import type { AutomationBody } from "@2chevskii/kaiten-client";

const automation: AutomationBody = {
  type: "on_demand",
  name: "Update card",
  actions: [{ type: "change_asap", data: { asap: true } }],
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

## IDs and responses

Kaiten uses both numeric IDs and UUIDs. Pass the identifier type required by the particular method, such as `card_id: number` or `card_uid: string`. Dates remain strings, documented nullable fields allow `null`, and incomplete schemas use `unknown`.

The client does not paginate automatically: use `limit`, `offset`, or a cursor where supported. Read the [file guide](/en/guide/files) for file routes.
