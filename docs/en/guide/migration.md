# Migrating to 2.0

Version 2.0 requires Node.js 24+ and changes the REST, SCIM, and server OAuth client signatures. Package entry points remain available.

## Method arguments

IDs and small sets of fields are separate arguments. Larger bodies and filters remain objects. The optional last argument contains operation options.

```ts
const card = await client.cards.retrieveCard(123);
await client.cardComments.addComment(card.id, 'Comment');
await client.cardMembers.addMemberToCard(card.id, 456);
await client.cards.updateCard(card.id, {title: 'New title'});
const page = await client.cards.retrieveCardList({version: 2, limit: 50});

const controller = new AbortController();
await client.cards.retrieveCard(card.id, undefined, {
  signal: controller.signal,
});
```

Types ending in `Params` are now argument tuples derived from the method signature:

```ts
import type {CardsRetrieveCardParams} from '@2chevskii/kaiten-client';

const args: CardsRetrieveCardParams = [123];
await client.cards.retrieveCard(...args);
```

Current signatures for every operation appear in the [REST](/en/reference/rest) and [SCIM](/en/reference/scim) references.

## Files, SCIM, and OAuth

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

`getCardFile`, `getCommentFile`, and `getCustomPropertyFile` infer their result from `redirect`. Search infers its result from a required `version: 2`; a variable with an optional `version` produces a union of an array and a cursor response.

## Responses and webhooks

Nested objects and arrays have matching types. Nullable fields accept `null`. `properties` uses dynamic custom-property IDs, and webhook `changes` contains optional fields of the updated entity. Misspellings from older Kaiten examples remain available as optional legacy fields alongside the correct names.

The browser SDK has separate `AddonCard` and `AddonCurrentUser` contracts; related card entities are loaded through `getCardProperties`. Declarations support `window.Addon`, dialog action callbacks, and absent badges represented by `null`.

Malformed JSON and unexpectedly empty successful responses throw `KaitenResponseError`. Documented operations without a response body return `undefined`. HTTP errors continue to use `KaitenHttpError`.
