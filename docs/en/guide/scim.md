# SCIM

`KaitenScimClient` is a separate export at `@2chevskii/kaiten-client/scim`. It uses `/scim/v2` and provides eight user and group operations.

```ts
import { KaitenScimClient } from "@2chevskii/kaiten-client/scim";

const scim = new KaitenScimClient({
  origin: "https://your-company.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const users = await scim.users.getUsers(1, 20);

console.log(users.Resources, users.totalResults);
```

SCIM fields preserve the specification's casing: `startIndex`, `displayName`, `Resources`. Methods accept IDs and small sets of fields separately, filters as `Query` objects, and cancellation through the last `{ signal }` argument. `KaitenHttpError` works as it does in the REST client. The [SCIM reference](/en/reference/scim) lists every method and type.

```ts
await scim.users.updateUser(123, [
  { op: "replace", path: "active", value: false },
]);
const group = await scim.groups.addGroup("Developers");
await scim.groups.getGroup(group.id);
```

`updateUser` and `updateGroup` accept `ScimUserPatchOperation` and `ScimGroupPatchOperation` arrays; the client constructs the request's `Operations` field. Group IDs accept the string values returned by SCIM.
