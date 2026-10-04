# SCIM

`KaitenScimClient` is a separate export at `@2chevskii/kaiten-client/scim`. It uses `/scim/v2` and provides eight user and group operations.

```ts
import {KaitenScimClient} from '@2chevskii/kaiten-client/scim';

const scim = new KaitenScimClient({
  origin: 'https://your-company.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers(1, 20);

console.log(users.Resources, users.totalResults);
```

SCIM fields preserve the specification's casing: `startIndex`, `displayName`, `Resources`. Methods accept IDs, pagination, and filters as positional arguments, and cancellation through the last `{ signal }` argument. `KaitenHttpError` works as it does in the REST client. The [SCIM reference](/en/reference/scim) lists every method and type.

Responses share the exported `ScimName`, `ScimEmail`, `ScimResourceMeta`, and `ScimResourceReference` contracts. Group members and user group memberships use numeric `value` IDs, while group resources expose a string `id`.

```ts
await scim.users.updateUser(123, [
  {op: 'replace', path: 'active', value: false},
]);
const group = await scim.groups.addGroup('Developers');
await scim.groups.getGroup(group.id);
```

`updateUser` and `updateGroup` accept `ScimUserPatchOperation` and `ScimGroupPatchOperation` arrays; the client constructs the request's `Operations` field. Group IDs accept the string values returned by SCIM.

## Automatic pagination

`users.iterate(startIndex?, count?, filter?, options?)` and `groups.iterate(startIndex?, count?, options?)` lazily traverse SCIM lists:

```ts
for await (const user of scim.users.iterate(1, 50)) {
  console.log(user.id, user.userName);
}

for await (const group of scim.groups.iterate()) {
  console.log(group.id, group.displayName);
}
```

Requests start at index 1 by default. The next index advances by the number of resources actually received, so a server-side page-size cap does not skip records. Iteration stops at `totalResults` or an empty page. The response's `startIndex` is not used to advance requests because Kaiten's examples report 0 even though request indices are documented as one-based.

No request starts until iteration begins, and `break` prevents further page requests. Pass `{ signal }` in the final argument to cancel between items or during a request. The iterator preserves `count` and the user filter on every page. `getUsers` and `getGroups` remain available for individual pages or access to their pagination metadata.

The signal is captured when the iterator is created. Cancel through that signal's controller; subsequent changes to the options object do not replace the captured signal.
