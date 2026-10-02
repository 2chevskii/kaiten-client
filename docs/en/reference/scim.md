# SCIM: all operations

Operations are grouped by client resource. Method and type names match the package exports. Use your editor for nested fields and exact TypeScript types. Each entry links to the original Kaiten documentation.

[`groups`](#groups) · [`users`](#users)

## groups

### addGroup

**`client.groups.addGroup`** · `POST /scim/v2/Groups`

Add group. [Kaiten documentation](https://developers.kaiten.ru/scim/groups/add-group).

`...args: GroupsAddGroupParams`

```ts
declare const addGroup: (
  displayName: string,
  options?: OperationOptions,
) => Promise<GroupsAddGroupResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field         | Type   | Presence |
| ------------- | ------ | -------- |
| `displayName` | string | Required |

**Response:** Object. Fields: `schemas`, `id`, `displayName`, `meta`.

### getGroup

**`client.groups.getGroup`** · `GET /scim/v2/Groups/{group_id}`

Get group. [Kaiten documentation](https://developers.kaiten.ru/scim/groups/get-group).

`...args: GroupsGetGroupParams`

```ts
declare const getGroup: (
  groupId: string | number,
  options?: OperationOptions,
) => Promise<GroupsGetGroupResponse>;
```

**Path parameters**

| Field      | Type             | Presence |
| ---------- | ---------------- | -------- |
| `group_id` | string \| number | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `schemas`, `id`, `displayName`, `meta`, `members`.

### getGroups

**`client.groups.getGroups`** · `GET /scim/v2/Groups`

Get groups. [Kaiten documentation](https://developers.kaiten.ru/scim/groups/get-groups).

`...args: GroupsGetGroupsParams`

```ts
declare const getGroups: (
  startIndex?: number,
  count?: number,
  options?: OperationOptions,
) => Promise<GroupsGetGroupsResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `startIndex` | number | Optional |
| `count`      | number | Optional |

**Response:** Object. Fields: `schemas`, `Resources`, `totalResults`, `itemsPerPage`, `startIndex`.

### updateGroup

**`client.groups.updateGroup`** · `PATCH /scim/v2/Groups/{group_id}`

Update group. [Kaiten documentation](https://developers.kaiten.ru/scim/groups/update-group).

`...args: GroupsUpdateGroupParams`

```ts
declare const updateGroup: (
  groupId: string | number,
  operations: ScimGroupPatchOperation[],
  options?: OperationOptions,
) => Promise<GroupsUpdateGroupResponse>;
```

**Path parameters**

| Field      | Type             | Presence |
| ---------- | ---------------- | -------- |
| `group_id` | string \| number | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type             | Presence |
| ------------ | ---------------- | -------- |
| `Operations` | array of objects | Required |

**Response:** Object. Fields: `schemas`, `id`, `displayName`, `meta`, `members`.

## users

### addUser

**`client.users.addUser`** · `POST /scim/v2/Users`

Add user. [Kaiten documentation](https://developers.kaiten.ru/scim/users/add-user).

`...args: UsersAddUserParams`

```ts
declare const addUser: (
  body: UsersAddUserBody,
  options?: OperationOptions,
) => Promise<UsersAddUserResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field      | Type                                                              | Presence |
| ---------- | ----------------------------------------------------------------- | -------- |
| `userName` | string                                                            | Optional |
| `emails`   | object Schema Name Type Constraints Description 0 string 1 string | Required |

**Response:** Object. Fields: `schemas`, `meta`, `id`, `name`, `userName`, `active`, `emails`.

### getUser

**`client.users.getUser`** · `GET /scim/v2/Users/{user_id}`

Get user. [Kaiten documentation](https://developers.kaiten.ru/scim/users/get-user).

`...args: UsersGetUserParams`

```ts
declare const getUser: (
  userId: number,
  options?: OperationOptions,
) => Promise<UsersGetUserResponse>;
```

**Path parameters**

| Field     | Type   | Presence |
| --------- | ------ | -------- |
| `user_id` | number | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `schemas`, `meta`, `id`, `name`, `userName`, `active`, `emails`, `groups`.

### getUsers

**`client.users.getUsers`** · `GET /scim/v2/Users`

Get users. [Kaiten documentation](https://developers.kaiten.ru/scim/users/get-users).

`...args: UsersGetUsersParams`

```ts
declare const getUsers: (
  startIndex?: number,
  count?: number,
  filter?: string,
  options?: OperationOptions,
) => Promise<UsersGetUsersResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `startIndex` | number | Optional |
| `count`      | number | Optional |
| `filter`     | string | Optional |

**Response:** Object. Fields: `schemas`, `Resources`, `totalResults`, `itemsPerPage`, `startIndex`.

### updateUser

**`client.users.updateUser`** · `PATCH /scim/v2/Users/{user_id}`

Update user. [Kaiten documentation](https://developers.kaiten.ru/scim/users/update-user).

`...args: UsersUpdateUserParams`

```ts
declare const updateUser: (
  userId: number,
  operations: ScimUserPatchOperation[],
  options?: OperationOptions,
) => Promise<UsersUpdateUserResponse>;
```

**Path parameters**

| Field     | Type   | Presence |
| --------- | ------ | -------- |
| `user_id` | number | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type             | Presence |
| ------------ | ---------------- | -------- |
| `Operations` | array of objects | Required |

**Response:** Object. Fields: `schemas`, `meta`, `id`, `name`, `userName`, `active`, `emails`, `groups`.
