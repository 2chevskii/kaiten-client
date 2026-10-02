# REST API: all operations

Operations are grouped by client resource. Method and type names match the package exports. Use your editor for nested fields and exact TypeScript types. Each entry links to the original Kaiten documentation.

`cards.iterate`, `documents.iterate`, and `documentGroups.iterate` provide automatic pagination over the corresponding search operations. See the [pagination and typed filter guide](/en/guide/rest#automatic-pagination).

`users.iterate` and `tags.iterate` traverse their lists with offset pagination. See [users and tags](/en/guide/rest#users-and-tags).

Paths below use the version shown in Kaiten's documentation. The REST client defaults to `/api/v1`; `apiVersion: "latest"` switches the prefix to `/api/latest`.

[`auditLogs`](#auditlogs) · [`automations`](#automations) · [`boards`](#boards) · [`cardAllowedUsers`](#cardallowedusers) · [`cardBlockerCategories`](#cardblockercategories) · [`cardBlockerUsers`](#cardblockerusers) · [`cardBlockers`](#cardblockers) · [`cardChecklistItems`](#cardchecklistitems) · [`cardChecklists`](#cardchecklists) · [`cardChildren`](#cardchildren) · [`cardComments`](#cardcomments) · [`cardExternalLinks`](#cardexternallinks) · [`cardFiles`](#cardfiles) · [`cardMembers`](#cardmembers) · [`cardServiceDeskExternalRecipients`](#cardservicedeskexternalrecipients) · [`cardSla`](#cardsla) · [`cardTags`](#cardtags) · [`cardTimeLogs`](#cardtimelogs) · [`cardTypeTreeEntities`](#cardtypetreeentities) · [`cardTypes`](#cardtypes) · [`cards`](#cards) · [`checklistItems`](#checklistitems) · [`checklists`](#checklists) · [`columns`](#columns) · [`companyUsers`](#companyusers) · [`customDirectories`](#customdirectories) · [`customDirectoryFields`](#customdirectoryfields) · [`customDirectoryRecords`](#customdirectoryrecords) · [`customProperties`](#customproperties) · [`customPropertyCatalogValues`](#custompropertycatalogvalues) · [`customPropertyCollectiveScoreValues`](#custompropertycollectivescorevalues) · [`customPropertyCollectiveVoteValues`](#custompropertycollectivevotevalues) · [`customPropertySelectValues`](#custompropertyselectvalues) · [`customPropertyTreeEntities`](#custompropertytreeentities) · [`documentGroups`](#documentgroups) · [`documentSchemas`](#documentschemas) · [`documents`](#documents) · [`groupAdmins`](#groupadmins) · [`groupEntities`](#groupentities) · [`groupUsers`](#groupusers) · [`groups`](#groups) · [`iterations`](#iterations) · [`lanes`](#lanes) · [`restrictedAccessCardFiles`](#restrictedaccesscardfiles) · [`restrictedAccessCommentFiles`](#restrictedaccesscommentfiles) · [`restrictedAccessCustomPropertyFiles`](#restrictedaccesscustompropertyfiles) · [`serviceDeskServices`](#servicedeskservices) · [`spaceBoards`](#spaceboards) · [`spaceTemplateChecklistItems`](#spacetemplatechecklistitems) · [`spaceTemplateChecklist`](#spacetemplatechecklist) · [`spaceUsers`](#spaceusers) · [`spaces`](#spaces) · [`sprints`](#sprints) · [`subcolumn`](#subcolumn) · [`tags`](#tags) · [`timesheet`](#timesheet) · [`treeEntities`](#treeentities) · [`treeEntityRoles`](#treeentityroles) · [`userRoles`](#userroles) · [`users`](#users)

## auditLogs

### retrieveAuditLogEvents

**`client.auditLogs.retrieveAuditLogEvents`** · `GET /api/latest/audit-logs`

Retrieve audit log events. [Kaiten documentation](https://developers.kaiten.ru/audit-logs/retrieve-audit-log-events).

`...args: AuditLogsRetrieveAuditLogEventsParams`

```ts
declare const retrieveAuditLogEvents: (
  query?: AuditLogsRetrieveAuditLogEventsQuery,
  options?: OperationOptions,
) => Promise<AuditLogsRetrieveAuditLogEventsResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `from`       | string  | Optional |
| `to`         | string  | Optional |
| `author_id`  | integer | Optional |
| `author_uid` | string  | Optional |
| `categories` | string  | Optional |
| `actions`    | string  | Optional |
| `id`         | string  | Optional |
| `limit`      | integer | Optional |
| `offset`     | integer | Optional |

**Response:** Array. Fields: `id`, `app_name`, `company_uid`, `author_id`, `author_uid`, `author_username`, `author_remote_address`, `author`, `category`, `action`, `message`, `details`, `created`.

## automations

### createAutomation

**`client.automations.createAutomation`** · `POST /api/latest/spaces/{space_id}/automations`

Create automation. [Kaiten documentation](https://developers.kaiten.ru/automations/create-automation).

`...args: AutomationsCreateAutomationParams`

```ts
declare const createAutomation: (
  spaceId: number,
  body: AutomationsCreateAutomationBody,
  options?: OperationOptions,
) => Promise<AutomationsCreateAutomationResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type                              | Presence |
| ------------ | --------------------------------- | -------- |
| `type`       | on_action \| on_date \| on_demand | Required |
| `name`       | string                            | Optional |
| `trigger`    | AutomationTrigger                 | Optional |
| `conditions` | AutomationConditionGroup          | Optional |
| `actions`    | array of AutomationAction         | Required |

**Response:** Object. Fields: `created`, `updated`, `id`, `company_id`, `space_uid`, `updater_id`, `name`, `status`, `trigger`, `actions`, `conditions`, `type`, `sort_order`.

### deleteAutomation

**`client.automations.deleteAutomation`** · `DELETE /api/latest/spaces/{space_id}/automations/{automation_uid}`

Delete automation. [Kaiten documentation](https://developers.kaiten.ru/automations/delete-automation).

`...args: AutomationsDeleteAutomationParams`

```ts
declare const deleteAutomation: (
  spaceId: number,
  automationUid: string,
  options?: OperationOptions,
) => Promise<AutomationsDeleteAutomationResponse>;
```

**Path parameters**

| Field            | Type    | Presence |
| ---------------- | ------- | -------- |
| `space_id`       | integer | Required |
| `automation_uid` | string  | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `message`.

### getListOfAutomations

**`client.automations.getListOfAutomations`** · `GET /api/latest/spaces/{space_id}/automations`

Get list of automations. [Kaiten documentation](https://developers.kaiten.ru/automations/get-list-of-automations).

`...args: AutomationsGetListOfAutomationsParams`

```ts
declare const getListOfAutomations: (
  spaceId: number,
  options?: OperationOptions,
) => Promise<AutomationsGetListOfAutomationsResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `company_id`, `space_uid`, `updater_id`, `name`, `status`, `trigger`, `actions`, `conditions`, `type`, `sort_order`.

### updateAutomation

**`client.automations.updateAutomation`** · `PATCH /api/latest/spaces/{space_id}/automations/{automation_uid}`

Update automation. [Kaiten documentation](https://developers.kaiten.ru/automations/update-automation).

`...args: AutomationsUpdateAutomationParams`

```ts
declare const updateAutomation: (
  spaceId: number,
  automationUid: string,
  body: AutomationsUpdateAutomationBody,
  options?: OperationOptions,
) => Promise<AutomationsUpdateAutomationResponse>;
```

**Path parameters**

| Field            | Type    | Presence |
| ---------------- | ------- | -------- |
| `space_id`       | integer | Required |
| `automation_uid` | string  | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type                              | Presence |
| ------------ | --------------------------------- | -------- |
| `type`       | on_action \| on_date \| on_demand | Optional |
| `name`       | string                            | Optional |
| `trigger`    | AutomationTrigger                 | Optional |
| `conditions` | AutomationConditionGroup          | Optional |
| `actions`    | array of AutomationAction         | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `company_id`, `space_uid`, `updater_id`, `name`, `status`, `trigger`, `actions`, `conditions`, `type`, `sort_order`.

## boards

### getBoard

**`client.boards.getBoard`** · `GET /api/latest/boards/{id}`

Get board. [Kaiten documentation](https://developers.kaiten.ru/boards/get-board).

`...args: BoardsGetBoardParams`

```ts
declare const getBoard: (
  boardId: number,
  options?: OperationOptions,
) => Promise<BoardsGetBoardResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `cell_wip_limits`, `external_id`, `default_card_type_id`, `description`, `email_key`, `move_parents_to_done`, `default_tags`, `first_image_is_cover`, `reset_lane_spent_time`, `backward_moves_enabled`, `hide_done_policies`, `hide_done_policies_in_done_column`, `automove_cards`, `auto_assign_enabled`, `card_properties`, `columns`, `lanes`, `cards`.

## cardAllowedUsers

### retrieveUsersList

**`client.cardAllowedUsers.retrieveUsersList`** · `GET /api/latest/cards/{card_id}/allowed-users`

Retrieve users list. [Kaiten documentation](https://developers.kaiten.ru/card-allowed-users/retrieve-users-list).

`...args: CardAllowedUsersRetrieveUsersListParams`

```ts
declare const retrieveUsersList: (
  cardId: number,
  query?: CardAllowedUsersRetrieveUsersListQuery,
  options?: OperationOptions,
) => Promise<CardAllowedUsersRetrieveUsersListResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `type`    | enum    | Optional |
| `search`  | string  | Optional |
| `orderBy` | string  | Optional |
| `role`    | integer | Optional |
| `limit`   | integer | Optional |
| `offset`  | integer | Optional |

**Response:** Array. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`.

## cardBlockerCategories

### addBlockerCategory

**`client.cardBlockerCategories.addBlockerCategory`** · `POST /api/latest/blockers/{blocker_id}/categories`

Add blocker category. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-categories/add-blocker-category).

`...args: CardBlockerCategoriesAddBlockerCategoryParams`

```ts
declare const addBlockerCategory: (
  blockerId: number,
  name: string,
  options?: OperationOptions,
) => Promise<CardBlockerCategoriesAddBlockerCategoryResponse>;
```

**Path parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `blocker_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type   | Presence |
| ------ | ------ | -------- |
| `name` | string | Required |

**Response:** Object. Fields: `uid`, `name`, `color`.

### removeCategory

**`client.cardBlockerCategories.removeCategory`** · `DELETE /api/latest/blockers/{blocker_id}/categories/{category_uuid}`

Remove category. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-categories/remove-category).

`...args: CardBlockerCategoriesRemoveCategoryParams`

```ts
declare const removeCategory: (
  blockerId: number,
  categoryUuid: string,
  options?: OperationOptions,
) => Promise<CardBlockerCategoriesRemoveCategoryResponse>;
```

**Path parameters**

| Field           | Type    | Presence |
| --------------- | ------- | -------- |
| `blocker_id`    | integer | Required |
| `category_uuid` | string  | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`.

### retrieveListOfCategories

**`client.cardBlockerCategories.retrieveListOfCategories`** · `GET /api/latest/categories`

Retrieve list of categories. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-categories/retrieve-list-of-categories).

`...args: CardBlockerCategoriesRetrieveListOfCategoriesParams`

```ts
declare const retrieveListOfCategories: (
  options?: OperationOptions,
) => Promise<CardBlockerCategoriesRetrieveListOfCategoriesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Response:** Array. Fields: `uid`, `name`, `color`.

## cardBlockerUsers

### addUserToTheCardBlocker

**`client.cardBlockerUsers.addUserToTheCardBlocker`** · `POST /api/latest/blockers/{blocker_id}/users`

Add user to the card blocker. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-users/add-user-to-the-card-blocker).

`...args: CardBlockerUsersAddUserToTheCardBlockerParams`

```ts
declare const addUserToTheCardBlocker: (
  blockerId: number,
  userId: number,
  options?: OperationOptions,
) => Promise<CardBlockerUsersAddUserToTheCardBlockerResponse>;
```

**Path parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `blocker_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `user_id` | integer | Required |

**Response:** Object. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`.

### removeUser

**`client.cardBlockerUsers.removeUser`** · `DELETE /api/latest/blockers/{blocker_id}/users/{user_id}`

Remove user. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-users/remove-user).

`...args: CardBlockerUsersRemoveUserParams`

```ts
declare const removeUser: (
  blockerId: number,
  userId: number,
  options?: OperationOptions,
) => Promise<CardBlockerUsersRemoveUserResponse>;
```

**Path parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `blocker_id` | integer | Required |
| `user_id`    | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveBlockersCardsListOnCurrentUser

**`client.cardBlockerUsers.retrieveBlockersCardsListOnCurrentUser`** · `GET /api/latest/users/current/blockers`

Retrieve blockers cards list on current user. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-users/retrieve-blockers-cards-list-on-current-user).

`...args: CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserParams`

```ts
declare const retrieveBlockersCardsListOnCurrentUser: (
  options?: OperationOptions,
) => Promise<CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Response:** Object. Fields: `blocked_cards`, `summary`.

### retrieveListOfUsers

**`client.cardBlockerUsers.retrieveListOfUsers`** · `GET /api/latest/blockers/{blocker_id}/users`

Retrieve list of users. [Kaiten documentation](https://developers.kaiten.ru/card-blocker-users/retrieve-list-of-users).

`...args: CardBlockerUsersRetrieveListOfUsersParams`

```ts
declare const retrieveListOfUsers: (
  blockerId: number,
  options?: OperationOptions,
) => Promise<CardBlockerUsersRetrieveListOfUsersResponse>;
```

**Path parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `blocker_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `full_name`, `email`, `username`, `activated`, `show_tour`, `avatar_initials_url`, `initials`, `avatar_type`, `avatar_uploaded_url`, `lng`, `timezone`, `chat_enabled`, `theme`, `sd_telegram_id`, `news_subscription`, `ui_version`, `uid`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`, `delete_confirmation_sent_at`, `eula_accepted_at`, `terms_of_service_accepted_at`, `privacy_policy_accepted_at`, `block_uid`, `user_uid`.

## cardBlockers

### blockCard

**`client.cardBlockers.blockCard`** · `POST /api/latest/cards/{card_id}/blockers`

Block card. [Kaiten documentation](https://developers.kaiten.ru/card-blockers/block-card).

`...args: CardBlockersBlockCardParams`

```ts
declare const blockCard: (
  cardId: number,
  body: CardBlockersBlockCardBody,
  options?: OperationOptions,
) => Promise<CardBlockersBlockCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field             | Type    | Presence |
| ----------------- | ------- | -------- |
| `reason`          | string  | Optional |
| `blocker_card_id` | integer | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `reason`, `card_id`, `blocker_id`, `blocker_card_id`, `blocker_card_title`, `released`, `released_by_id`, `due_date`, `due_date_time_present`, `blocked_card`, `blocker`, `card`.

### deleteCardBlockers

**`client.cardBlockers.deleteCardBlockers`** · `DELETE /api/latest/cards/{card_id}/blockers/{id}`

Delete card blockers. [Kaiten documentation](https://developers.kaiten.ru/card-blockers/delete-card-blockers).

`...args: CardBlockersDeleteCardBlockersParams`

```ts
declare const deleteCardBlockers: (
  cardId: number,
  blockerId: number,
  options?: OperationOptions,
) => Promise<CardBlockersDeleteCardBlockersResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `reason`, `card_id`, `blocker_id`, `blocker_card_id`, `blocker_card_title`, `released`, `released_by_id`, `due_date`, `due_date_time_present`, `blocked_card`, `card`.

### retrieveCardBlockersList

**`client.cardBlockers.retrieveCardBlockersList`** · `GET /api/latest/cards/{card_id}/blockers`

Retrieve card blockers list. [Kaiten documentation](https://developers.kaiten.ru/card-blockers/retrieve-card-blockers-list).

`...args: CardBlockersRetrieveCardBlockersListParams`

```ts
declare const retrieveCardBlockersList: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardBlockersRetrieveCardBlockersListResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `reason`, `card_id`, `blocker_id`, `blocker_card_id`, `blocker_card_title`, `released`, `released_by_id`, `due_date`, `due_date_time_present`, `blocked_card`, `blocker`, `card`.

### updateCardBlockers

**`client.cardBlockers.updateCardBlockers`** · `PATCH /api/latest/cards/{card_id}/blockers/{id}`

Update card blockers. [Kaiten documentation](https://developers.kaiten.ru/card-blockers/update-card-blockers).

`...args: CardBlockersUpdateCardBlockersParams`

```ts
declare const updateCardBlockers: (
  cardId: number,
  blockerId: number,
  body: CardBlockersUpdateCardBlockersBody,
  options?: OperationOptions,
) => Promise<CardBlockersUpdateCardBlockersResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                   | Type            | Presence |
| ----------------------- | --------------- | -------- |
| `reason`                | string          | Optional |
| `blocker_card_id`       | integer         | Optional |
| `due_date`              | string \| null  | Optional |
| `due_date_time_present` | boolean \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `reason`, `card_id`, `blocker_id`, `blocker_card_id`, `blocker_card_title`, `released`, `released_by_id`, `due_date`, `due_date_time_present`.

## cardChecklistItems

### addItemToChecklist

**`client.cardChecklistItems.addItemToChecklist`** · `POST /api/latest/cards/{card_id}/checklists/{checklist_id}/items`

Add item to checklist. [Kaiten documentation](https://developers.kaiten.ru/card-checklist-items/add-item-to-checklist).

`...args: CardChecklistItemsAddItemToChecklistParams`

```ts
declare const addItemToChecklist: (
  cardId: number,
  checklistId: number,
  body: CardChecklistItemsAddItemToChecklistBody,
  options?: OperationOptions,
) => Promise<CardChecklistItemsAddItemToChecklistResponse>;
```

**Path parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `card_id`      | integer | Required |
| `checklist_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field            | Type           | Presence |
| ---------------- | -------------- | -------- |
| `text`           | string         | Required |
| `sort_order`     | number         | Optional |
| `checked`        | boolean        | Optional |
| `due_date`       | string \| null | Optional |
| `responsible_id` | integer        | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `text`, `sort_order`, `checked`, `checklist_id`, `checker_id`, `user_id`, `checked_at`, `responsible_id`, `deleted`, `due_date`.

### removeChecklistItem

**`client.cardChecklistItems.removeChecklistItem`** · `DELETE /api/latest/cards/{card_id}/checklists/{checklist_id}/items/{id}`

Remove checklist item. [Kaiten documentation](https://developers.kaiten.ru/card-checklist-items/remove-checklist-item).

`...args: CardChecklistItemsRemoveChecklistItemParams`

```ts
declare const removeChecklistItem: (
  cardId: number,
  checklistId: number,
  itemId: number,
  options?: OperationOptions,
) => Promise<CardChecklistItemsRemoveChecklistItemResponse>;
```

**Path parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `card_id`      | integer | Required |
| `checklist_id` | integer | Required |
| `id`           | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### updateChecklistItem

**`client.cardChecklistItems.updateChecklistItem`** · `PATCH /api/latest/cards/{card_id}/checklists/{checklist_id}/items/{id}`

Update checklist item. [Kaiten documentation](https://developers.kaiten.ru/card-checklist-items/update-checklist-item).

`...args: CardChecklistItemsUpdateChecklistItemParams`

```ts
declare const updateChecklistItem: (
  cardId: number,
  checklistId: number,
  itemId: number,
  body: CardChecklistItemsUpdateChecklistItemBody,
  options?: OperationOptions,
) => Promise<CardChecklistItemsUpdateChecklistItemResponse>;
```

**Path parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `card_id`      | integer | Required |
| `checklist_id` | integer | Required |
| `id`           | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field            | Type           | Presence |
| ---------------- | -------------- | -------- |
| `text`           | string \| null | Optional |
| `sort_order`     | number         | Optional |
| `checklist_id`   | integer        | Optional |
| `checked`        | boolean        | Optional |
| `due_date`       | string \| null | Optional |
| `responsible_id` | number \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `text`, `sort_order`, `checked`, `checklist_id`, `checker_id`, `user_id`, `checked_at`, `responsible_id`, `deleted`, `due_date`.

## cardChecklists

### addChecklistToCard

**`client.cardChecklists.addChecklistToCard`** · `POST /api/latest/cards/{card_id}/checklists`

Add checklist to card. [Kaiten documentation](https://developers.kaiten.ru/card-checklists/add-checklist-to-card).

`...args: CardChecklistsAddChecklistToCardParams`

```ts
declare const addChecklistToCard: (
  cardId: number,
  body: CardChecklistsAddChecklistToCardBody,
  options?: OperationOptions,
) => Promise<CardChecklistsAddChecklistToCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                       | Type             | Presence |
| --------------------------- | ---------------- | -------- |
| `name`                      | string           | Optional |
| `sort_order`                | number           | Optional |
| `items_source_checklist_id` | integer          | Optional |
| `exclude_item_ids`          | array of integer | Optional |
| `source_share_id`           | integer          | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `name`, `policy_id`, `card_id`, `checklist_id`, `sort_order`, `deleted`, `items`.

### removeChecklistFromCard

**`client.cardChecklists.removeChecklistFromCard`** · `DELETE /api/latest/cards/{card_id}/checklists/{id}`

Remove checklist from card. [Kaiten documentation](https://developers.kaiten.ru/card-checklists/remove-checklist-from-card).

`...args: CardChecklistsRemoveChecklistFromCardParams`

```ts
declare const removeChecklistFromCard: (
  cardId: number,
  checklistId: number,
  options?: OperationOptions,
) => Promise<CardChecklistsRemoveChecklistFromCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveCardChecklist

**`client.cardChecklists.retrieveCardChecklist`** · `GET /api/latest/cards/{card_id}/checklists/{id}`

Retrieve card checklist. [Kaiten documentation](https://developers.kaiten.ru/card-checklists/retrieve-card-checklist).

`...args: CardChecklistsRetrieveCardChecklistParams`

```ts
declare const retrieveCardChecklist: (
  cardId: number,
  checklistId: number,
  options?: OperationOptions,
) => Promise<CardChecklistsRetrieveCardChecklistResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `uid`, `fts_version`, `name`, `policy_id`, `items`.

### updateChecklist

**`client.cardChecklists.updateChecklist`** · `PATCH /api/latest/cards/{card_id}/checklists/{id}`

Update checklist. [Kaiten documentation](https://developers.kaiten.ru/card-checklists/update-checklist).

`...args: CardChecklistsUpdateChecklistParams`

```ts
declare const updateChecklist: (
  cardId: number,
  checklistId: number,
  body: CardChecklistsUpdateChecklistBody,
  options?: OperationOptions,
) => Promise<CardChecklistsUpdateChecklistResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `name`       | string  | Optional |
| `sort_order` | number  | Optional |
| `card_id`    | integer | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `name`, `policy_id`.

## cardChildren

### addChildren

**`client.cardChildren.addChildren`** · `POST /api/latest/cards/{card_id}/children`

Add children. [Kaiten documentation](https://developers.kaiten.ru/card-children/add-children).

`...args: CardChildrenAddChildrenParams`

```ts
declare const addChildren: (
  parentCardId: number,
  childCardId: number,
  options?: OperationOptions,
) => Promise<CardChildrenAddChildrenResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Response:** Object. Fields: `id`, `created`, `updated`, `archived`, `title`, `asap`, `due_date`, `sort_order`, `fifo_order`, `state`, `condition`, `expires_later`, `parents_count`, `children_count`, `children_done`, `has_blocked_children`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `calculated_planned_start`, `calculated_planned_end`, `parent_checklist_ids`, `children_ids`, `parents_ids`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `due_date_time_present`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `sprint_id`, `external_id`, `comments_total`, `comment_last_added_at`, `properties`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `service_id`, `sd_new_comment`, `public`, `share_settings`, `share_id`, `external_user_emails`, `description_filled`, `estimate_workload`, `has_access_to_space`, `path_data`, `space_id`, `type`, `owner`.

### removeChildren

**`client.cardChildren.removeChildren`** · `DELETE /api/latest/cards/{card_id}/children/{id}`

Remove children. [Kaiten documentation](https://developers.kaiten.ru/card-children/remove-children).

`...args: CardChildrenRemoveChildrenParams`

```ts
declare const removeChildren: (
  cardId: number,
  id: number,
  options?: OperationOptions,
) => Promise<CardChildrenRemoveChildrenResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveCardChildrenList

**`client.cardChildren.retrieveCardChildrenList`** · `GET /api/latest/cards/{card_id}/children`

Retrieve card children list. [Kaiten documentation](https://developers.kaiten.ru/card-children/retrieve-card-children-list).

`...args: CardChildrenRetrieveCardChildrenListParams`

```ts
declare const retrieveCardChildrenList: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardChildrenRetrieveCardChildrenListResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `created`, `updated`, `archived`, `title`, `asap`, `due_date`, `sort_order`, `fifo_order`, `state`, `condition`, `expires_later`, `parents_count`, `children_count`, `children_done`, `has_blocked_children`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `calculated_planned_start`, `calculated_planned_end`, `parent_checklist_ids`, `children_ids`, `parents_ids`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `due_date_time_present`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `sprint_id`, `external_id`, `comments_total`, `comment_last_added_at`, `properties`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `service_id`, `sd_new_comment`, `public`, `share_settings`, `share_id`, `external_user_emails`, `description_filled`, `estimate_workload`, `type`, `owner`, `board`, `lane`, `column`, `card_id`, `depends_on_card_id`.

## cardComments

### addComment

**`client.cardComments.addComment`** · `POST /api/latest/cards/{card_id}/comments`

Add comment. [Kaiten documentation](https://developers.kaiten.ru/card-comments/add-comment).

`...args: CardCommentsAddCommentParams`

```ts
declare const addComment: (
  cardId: number,
  body: CardCommentsAddCommentBody | FormData,
  options?: OperationOptions,
) => Promise<CardCommentsAddCommentResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                | Type                  | Presence |
| -------------------- | --------------------- | -------- |
| `text`               | string                | Required |
| `files[] Deprecated` | array of binary files | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `uid`, `text`, `type`, `edited`, `card_id`, `author_id`, `email_addresses_to`, `deleted`, `internal`, `sd_external_recipients_cc`, `sd_description`, `notification_sent`, `attacments`.

### removeComment

**`client.cardComments.removeComment`** · `DELETE /api/latest/cards/{card_id}/comments/{comment_id}`

Remove comment. [Kaiten documentation](https://developers.kaiten.ru/card-comments/remove-comment).

`...args: CardCommentsRemoveCommentParams`

```ts
declare const removeComment: (
  cardId: number,
  commentId: number,
  options?: OperationOptions,
) => Promise<CardCommentsRemoveCommentResponse>;
```

**Path parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `card_id`    | integer | Required |
| `comment_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveCardComments

**`client.cardComments.retrieveCardComments`** · `GET /api/latest/cards/{card_id}/comments`

Retrieve card comments. [Kaiten documentation](https://developers.kaiten.ru/card-comments/retrieve-card-comments).

`...args: CardCommentsRetrieveCardCommentsParams`

```ts
declare const retrieveCardComments: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardCommentsRetrieveCardCommentsResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `update`, `id`, `uid`, `text`, `edited`, `card_id`, `author_id`, `email_addresses_to`, `type`, `deleted`, `internal`, `sd_external_recipients_cc`, `notification_sent`, `sent_slack_messages_data`, `sd_description`, `author`.

### updateComment

**`client.cardComments.updateComment`** · `PATCH /api/latest/cards/{card_id}/comments/{comment_id}`

Update comment. [Kaiten documentation](https://developers.kaiten.ru/card-comments/update-comment).

`...args: CardCommentsUpdateCommentParams`

```ts
declare const updateComment: (
  cardId: number,
  commentId: number,
  body: CardCommentsUpdateCommentBody | FormData,
  options?: OperationOptions,
) => Promise<CardCommentsUpdateCommentResponse>;
```

**Path parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `card_id`    | integer | Required |
| `comment_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                | Type                  | Presence |
| -------------------- | --------------------- | -------- |
| `text`               | string                | Optional |
| `files[] Deprecated` | array of binary files | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `uid`, `text`, `type`, `edited`, `card_id`, `author_id`, `email_addresses_to`, `deleted`, `internal`, `sd_external_recipients_cc`, `sd_description`, `notification_sent`, `attacments`.

## cardExternalLinks

### addExternalLink

**`client.cardExternalLinks.addExternalLink`** · `POST /api/latest/cards/{card_id}/external-links`

Add external link. [Kaiten documentation](https://developers.kaiten.ru/card-external-links/add-external-link).

`...args: CardExternalLinksAddExternalLinkParams`

```ts
declare const addExternalLink: (
  cardId: number,
  url: string,
  description?: string | null,
  options?: OperationOptions,
) => Promise<CardExternalLinksAddExternalLinkResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field         | Type           | Presence |
| ------------- | -------------- | -------- |
| `url`         | string         | Required |
| `description` | string \| null | Optional |

**Response:** Object. Fields: `url`, `updated`, `created`, `id`, `description`.

### removeExternalLink

**`client.cardExternalLinks.removeExternalLink`** · `DELETE /api/latest/cards/{card_id}/external-links/{id}`

Remove external link. [Kaiten documentation](https://developers.kaiten.ru/card-external-links/remove-external-link).

`...args: CardExternalLinksRemoveExternalLinkParams`

```ts
declare const removeExternalLink: (
  cardId: number,
  id: number,
  options?: OperationOptions,
) => Promise<CardExternalLinksRemoveExternalLinkResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveCardExternalLinks

**`client.cardExternalLinks.retrieveCardExternalLinks`** · `GET /api/latest/cards/{card_id}/external-links`

Retrieve card external links. [Kaiten documentation](https://developers.kaiten.ru/card-external-links/retrieve-card-external-links).

`...args: CardExternalLinksRetrieveCardExternalLinksParams`

```ts
declare const retrieveCardExternalLinks: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardExternalLinksRetrieveCardExternalLinksResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `url`, `updated`, `created`, `id`, `description`, `card_id`, `external_link_id`.

### updateExternalLink

**`client.cardExternalLinks.updateExternalLink`** · `PATCH /api/latest/cards/{card_id}/external-links/{id}`

Update external link. [Kaiten documentation](https://developers.kaiten.ru/card-external-links/update-external-link).

`...args: CardExternalLinksUpdateExternalLinkParams`

```ts
declare const updateExternalLink: (
  cardId: number,
  id: number,
  body: CardExternalLinksUpdateExternalLinkBody,
  options?: OperationOptions,
) => Promise<CardExternalLinksUpdateExternalLinkResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field         | Type           | Presence |
| ------------- | -------------- | -------- |
| `url`         | string         | Optional |
| `description` | string \| null | Optional |

**Response:** Object. Fields: `url`, `updated`, `created`, `id`, `description`.

## cardFiles

### attachFileToCard

**`client.cardFiles.attachFileToCard`** · `PUT /api/latest/cards/{card_id}/files`

Attach file to card Deprecated. [Kaiten documentation](https://developers.kaiten.ru/card-files/attach-file-to-card). **Deprecated operation.**

`...args: CardFilesAttachFileToCardParams`

```ts
declare const attachFileToCard: (
  cardId: number,
  file: Blob,
  options?: FileUploadOptions,
) => Promise<CardFilesAttachFileToCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type   | Presence |
| ------ | ------ | -------- |
| `file` | binary | Required |

**Response:** Object. Fields: `author_id`, `card_cover`, `card_id`, `comment_id`, `created`, `deleted`, `external`, `id`, `mh_markup_id`, `mh_secret`, `name`, `size`, `sort_order`, `type`, `updated`, `url`.

### detachFileFromCard

**`client.cardFiles.detachFileFromCard`** · `DELETE /api/latest/cards/{card_id}/files/{id}`

Detach file from card. [Kaiten documentation](https://developers.kaiten.ru/card-files/detach-file-from-card).

`...args: CardFilesDetachFileFromCardParams`

```ts
declare const detachFileFromCard: (
  cardId: number,
  fileId: number,
  options?: OperationOptions,
) => Promise<CardFilesDetachFileFromCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### updateFile

**`client.cardFiles.updateFile`** · `PATCH /api/latest/cards/{card_id}/files/{id}`

Update file. [Kaiten documentation](https://developers.kaiten.ru/card-files/update-file).

`...args: CardFilesUpdateFileParams`

```ts
declare const updateFile: (
  cardId: number,
  fileId: number,
  cardCover?: boolean,
  options?: OperationOptions,
) => Promise<CardFilesUpdateFileResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `card_cover` | boolean | Optional |

**Response:** Object

## cardMembers

### addMemberToCard

**`client.cardMembers.addMemberToCard`** · `POST /api/latest/cards/{card_id}/members`

Add member to card. [Kaiten documentation](https://developers.kaiten.ru/card-members/add-member-to-card).

`...args: CardMembersAddMemberToCardParams`

```ts
declare const addMemberToCard: (
  cardId: number,
  userId: number,
  options?: OperationOptions,
) => Promise<CardMembersAddMemberToCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `user_id` | integer | Required |

**Response:** Object. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `updated`, `type`.

### removeMemberFromCard

**`client.cardMembers.removeMemberFromCard`** · `DELETE /api/latest/cards/{card_id}/members/{id}`

Remove member from card. [Kaiten documentation](https://developers.kaiten.ru/card-members/remove-member-from-card).

`...args: CardMembersRemoveMemberFromCardParams`

```ts
declare const removeMemberFromCard: (
  cardId: number,
  memberId: number,
  options?: OperationOptions,
) => Promise<CardMembersRemoveMemberFromCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveListOfCardMembers

**`client.cardMembers.retrieveListOfCardMembers`** · `GET /api/latest/cards/{card_id}/members`

Retrieve list of card members. [Kaiten documentation](https://developers.kaiten.ru/card-members/retrieve-list-of-card-members).

`...args: CardMembersRetrieveListOfCardMembersParams`

```ts
declare const retrieveListOfCardMembers: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardMembersRetrieveListOfCardMembersResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `card_id`, `user_id`, `type`.

### updateMemberRole

**`client.cardMembers.updateMemberRole`** · `PATCH /api/latest/cards/{card_id}/members/{id}`

Update member role. [Kaiten documentation](https://developers.kaiten.ru/card-members/update-member-role).

`...args: CardMembersUpdateMemberRoleParams`

```ts
declare const updateMemberRole: (
  cardId: number,
  memberId: number,
  type: number,
  options?: OperationOptions,
) => Promise<CardMembersUpdateMemberRoleResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type    | Presence |
| ------ | ------- | -------- |
| `type` | integer | Required |

**Response:** Object. Fields: `created`, `updated`, `card_id`, `user_id`, `type`.

## cardServiceDeskExternalRecipients

### addNewRecipient

**`client.cardServiceDeskExternalRecipients.addNewRecipient`** · `POST /api/latest/cards/{card_id}/sd-external-recipients`

Add new recipient. [Kaiten documentation](https://developers.kaiten.ru/card-service-desk-external-recipients/add-new-recipient).

`...args: CardServiceDeskExternalRecipientsAddNewRecipientParams`

```ts
declare const addNewRecipient: (
  cardId: number,
  email: string,
  options?: OperationOptions,
) => Promise<CardServiceDeskExternalRecipientsAddNewRecipientResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type   | Presence |
| ------- | ------ | -------- |
| `email` | string | Required |

**Response:** Object. Fields: `created`, `updated`, `card_id`, `user_id`, `email`, `unsubscribed`, `updater_id`.

### removeRecipient

**`client.cardServiceDeskExternalRecipients.removeRecipient`** · `DELETE /api/latest/cards/{card_id}/sd-external-recipients/{email}`

Remove recipient. [Kaiten documentation](https://developers.kaiten.ru/card-service-desk-external-recipients/remove-recipient).

`...args: CardServiceDeskExternalRecipientsRemoveRecipientParams`

```ts
declare const removeRecipient: (
  cardId: number,
  email: string,
  options?: OperationOptions,
) => Promise<CardServiceDeskExternalRecipientsRemoveRecipientResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `email`   | string  | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `card_id`, `user_id`, `email`, `unsubscribed`, `updater_id`, `company_id`.

## cardSla

### retrieveCardSlaMeasurements

**`client.cardSla.retrieveCardSlaMeasurements`** · `GET /api/latest/cards/{card_id}/sla-rules-measurements`

Retrieve card SLA measurements. [Kaiten documentation](https://developers.kaiten.ru/card-sla/retrieve-card-sla-measurements).

`...args: CardSlaRetrieveCardSlaMeasurementsParams`

```ts
declare const retrieveCardSlaMeasurements: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardSlaRetrieveCardSlaMeasurementsResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `calendars`, `rulesTimeData`.

## cardTags

### addTag

**`client.cardTags.addTag`** · `POST /api/latest/cards/{card_id}/tags`

Add tag. [Kaiten documentation](https://developers.kaiten.ru/card-tags/add-tag).

`...args: CardTagsAddTagParams`

```ts
declare const addTag: (
  cardId: number,
  name: string,
  options?: OperationOptions,
) => Promise<CardTagsAddTagResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type   | Presence |
| ------ | ------ | -------- |
| `name` | string | Required |

**Response:** Object. Fields: `created`, `updated`, `archived`, `id`, `name`, `company_id`, `color`.

### removeTagFromCard

**`client.cardTags.removeTagFromCard`** · `DELETE /api/latest/cards/{card_id}/tags/{tag_id}`

Remove tag from card. [Kaiten documentation](https://developers.kaiten.ru/card-tags/remove-tag-from-card).

`...args: CardTagsRemoveTagFromCardParams`

```ts
declare const removeTagFromCard: (
  cardId: number,
  tagId: number,
  options?: OperationOptions,
) => Promise<CardTagsRemoveTagFromCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `tag_id`  | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### rertrieveListOfTags

**`client.cardTags.rertrieveListOfTags`** · `GET /api/latest/cards/{card_id}/tags`

Rertrieve list of tags. [Kaiten documentation](https://developers.kaiten.ru/card-tags/rertrieve-list-of-tags).

`...args: CardTagsRertrieveListOfTagsParams`

```ts
declare const rertrieveListOfTags: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardTagsRertrieveListOfTagsResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `name`, `color`, `card_id`, `tag_id`.

## cardTimeLogs

### addTimeLog

**`client.cardTimeLogs.addTimeLog`** · `POST /api/latest/cards/{card_id}/time-logs`

Add time log. [Kaiten documentation](https://developers.kaiten.ru/card-time-logs/add-time-log).

`...args: CardTimeLogsAddTimeLogParams`

```ts
declare const addTimeLog: (
  cardId: number,
  body: CardTimeLogsAddTimeLogBody,
  options?: OperationOptions,
) => Promise<CardTimeLogsAddTimeLogResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `role_id`    | integer | Required |
| `time_spent` | integer | Required |
| `for_date`   | string  | Required |
| `comment`    | string  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `card_id`, `user_id`, `role_id`, `author_id`, `updater_id`, `time_spent`, `for_date`, `comment`.

### getTimeLogs

**`client.cardTimeLogs.getTimeLogs`** · `GET /api/latest/cards/{card_id}/time-logs`

Get time logs. [Kaiten documentation](https://developers.kaiten.ru/card-time-logs/get-time-logs).

`...args: CardTimeLogsGetTimeLogsParams`

```ts
declare const getTimeLogs: (
  cardId: number,
  forDate?: string,
  personal?: boolean,
  options?: OperationOptions,
) => Promise<CardTimeLogsGetTimeLogsResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `for_date` | string  | Optional |
| `personal` | boolean | Optional |

**Response:** Array. Fields: `created`, `updated`, `id`, `card_id`, `user_id`, `role_id`, `author_id`, `updater_id`, `time_spent`, `for_date`, `comment`, `role`, `user`, `author`.

### removeTimeLog

**`client.cardTimeLogs.removeTimeLog`** · `DELETE /api/latest/cards/{card_id}/time-logs/{id}`

Remove time log. [Kaiten documentation](https://developers.kaiten.ru/card-time-logs/remove-time-log).

`...args: CardTimeLogsRemoveTimeLogParams`

```ts
declare const removeTimeLog: (
  cardId: number,
  timeLogId: number,
  options?: OperationOptions,
) => Promise<CardTimeLogsRemoveTimeLogResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### updateLogRecord

**`client.cardTimeLogs.updateLogRecord`** · `PATCH /api/latest/cards/{card_id}/time-logs/{id}`

Update log record. [Kaiten documentation](https://developers.kaiten.ru/card-time-logs/update-log-record).

`...args: CardTimeLogsUpdateLogRecordParams`

```ts
declare const updateLogRecord: (
  cardId: number,
  timeLogId: number,
  body: CardTimeLogsUpdateLogRecordBody,
  options?: OperationOptions,
) => Promise<CardTimeLogsUpdateLogRecordResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |
| `id`      | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `role_id`    | integer | Optional |
| `time_spent` | integer | Optional |
| `for_date`   | string  | Optional |
| `comment`    | string  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `card_id`, `user_id`, `role_id`, `author_id`, `updater_id`, `time_spent`, `for_date`, `comment`.

## cardTypeTreeEntities

### addTreeEntityToCardType

**`client.cardTypeTreeEntities.addTreeEntityToCardType`** · `POST /api/latest/card-types/{type_id}/tree-entities`

Add tree entity to card type. [Kaiten documentation](https://developers.kaiten.ru/card-type-tree-entities/add-tree-entity-to-card-type).

`...args: CardTypeTreeEntitiesAddTreeEntityToCardTypeParams`

```ts
declare const addTreeEntityToCardType: (
  typeId: number,
  treeEntityUid: string,
  options?: OperationOptions,
) => Promise<CardTypeTreeEntitiesAddTreeEntityToCardTypeResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `type_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field             | Type   | Presence |
| ----------------- | ------ | -------- |
| `tree_entity_uid` | string | Required |

**Response:** Object. Fields: `id`.

### deleteTreeEntityFromCardType

**`client.cardTypeTreeEntities.deleteTreeEntityFromCardType`** · `DELETE /api/latest/card-types/{type_id}/tree-entities/{uid}`

Delete tree entity from card type. [Kaiten documentation](https://developers.kaiten.ru/card-type-tree-entities/delete-tree-entity-from-card-type).

`...args: CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeParams`

```ts
declare const deleteTreeEntityFromCardType: (
  typeId: number,
  uid: string,
  options?: OperationOptions,
) => Promise<void>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `type_id` | integer | Required |
| `uid`     | string  | Required |

**Query parameters**

**none.**

**Response:** No body

### getListOfTypeTreeEntities

**`client.cardTypeTreeEntities.getListOfTypeTreeEntities`** · `GET /api/latest/card-types/{type_id}/tree-entities`

Get list of type tree entities. [Kaiten documentation](https://developers.kaiten.ru/card-type-tree-entities/get-list-of-type-tree-entities).

`...args: CardTypeTreeEntitiesGetListOfTypeTreeEntitiesParams`

```ts
declare const getListOfTypeTreeEntities: (
  typeId: number,
  options?: OperationOptions,
) => Promise<CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `type_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `uid`, `title`, `company_id`, `sort_order`, `path`, `parent_entity_uid`, `entity_type`, `access`, `archived`, `for_everyone_access_role_id`, `protected`.

## cardTypes

### createNewCardType

**`client.cardTypes.createNewCardType`** · `POST /api/latest/card-types`

Create new card type. [Kaiten documentation](https://developers.kaiten.ru/card-types/create-new-card-type).

`...args: CardTypesCreateNewCardTypeParams`

```ts
declare const createNewCardType: (
  body: CardTypesCreateNewCardTypeBody,
  options?: OperationOptions,
) => Promise<CardTypesCreateNewCardTypeResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field             | Type                        | Presence |
| ----------------- | --------------------------- | -------- |
| `letter`          | string                      | Required |
| `name`            | string                      | Required |
| `color`           | integer                     | Required |
| `properties`      | object                      | Optional |
| `card_properties` | array of unknown \| unknown | Optional |
| `suggest_fields`  | boolean                     | Optional |

**Response:** Object. Fields: `company_id`, `letter`, `name`, `color`, `updated`, `created`, `id`, `description_template`, `archived`, `properties`, `card_properties`, `suggest_fields`.

### getCardType

**`client.cardTypes.getCardType`** · `GET /api/latest/card-types/{id}`

Get card type. [Kaiten documentation](https://developers.kaiten.ru/card-types/get-card-type).

`...args: CardTypesGetCardTypeParams`

```ts
declare const getCardType: (
  id: number,
  options?: OperationOptions,
) => Promise<CardTypesGetCardTypeResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `company_id`, `letter`, `name`, `color`, `updated`, `created`, `id`, `description_template`, `archived`, `properties`, `card_properties`, `suggest_fields`.

### getListOfCardTypes

**`client.cardTypes.getListOfCardTypes`** · `GET /api/latest/card-types`

Get list of card types. [Kaiten documentation](https://developers.kaiten.ru/card-types/get-list-of-card-types).

`...args: CardTypesGetListOfCardTypesParams`

```ts
declare const getListOfCardTypes: (
  limit?: number,
  offset?: number,
  options?: OperationOptions,
) => Promise<CardTypesGetListOfCardTypesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field    | Type    | Presence |
| -------- | ------- | -------- |
| `limit`  | integer | Optional |
| `offset` | integer | Optional |

**Response:** Array. Fields: `company_id`, `letter`, `name`, `color`, `updated`, `created`, `id`, `description_template`, `archived`, `properties`, `card_properties`, `suggest_fields`.

### removeCardType

**`client.cardTypes.removeCardType`** · `DELETE /api/latest/card-types/{id}`

Remove card type. [Kaiten documentation](https://developers.kaiten.ru/card-types/remove-card-type).

`...args: CardTypesRemoveCardTypeParams`

```ts
declare const removeCardType: (
  id: number,
  replaceTypeId: number,
  options?: OperationOptions,
) => Promise<CardTypesRemoveCardTypeResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field             | Type   | Presence |
| ----------------- | ------ | -------- |
| `replace_type_id` | number | Required |

**Response:** Object. Fields: `company_id`, `letter`, `name`, `color`, `updated`, `created`, `id`, `description_template`, `archived`, `properties`, `card_properties`, `suggest_fields`.

### updateCardType

**`client.cardTypes.updateCardType`** · `PATCH /api/latest/card-types/{id}`

Update card type. [Kaiten documentation](https://developers.kaiten.ru/card-types/update-card-type).

`...args: CardTypesUpdateCardTypeParams`

```ts
declare const updateCardType: (
  id: number,
  body: CardTypesUpdateCardTypeBody,
  options?: OperationOptions,
) => Promise<CardTypesUpdateCardTypeResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field             | Type                        | Presence |
| ----------------- | --------------------------- | -------- |
| `letter`          | string                      | Optional |
| `name`            | string                      | Optional |
| `color`           | integer                     | Optional |
| `properties`      | object                      | Optional |
| `card_properties` | array of unknown \| unknown | Optional |
| `suggest_fields`  | boolean                     | Optional |

**Response:** Object. Fields: `company_id`, `letter`, `name`, `color`, `updated`, `created`, `id`, `description_template`, `archived`, `properties`, `card_properties`, `suggest_fields`.

## cards

### batchUpdateForCards

**`client.cards.batchUpdateForCards`** · `PATCH /api/latest/cards`

Batch update for cards. [Kaiten documentation](https://developers.kaiten.ru/cards/batch-update-for-cards).

`...args: CardsBatchUpdateForCardsParams`

```ts
declare const batchUpdateForCards: (
  body: CardsBatchUpdateForCardsBody,
  options?: OperationOptions,
) => Promise<CardsBatchUpdateForCardsResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field        | Type                                                           | Presence |
| ------------ | -------------------------------------------------------------- | -------- |
| `board_id`   | integer                                                        | Optional |
| `column_id`  | integer                                                        | Optional |
| `lane_id`    | integer                                                        | Optional |
| `owner_id`   | integer                                                        | Optional |
| `type_id`    | integer                                                        | Optional |
| `condition`  | 1 \| 2                                                         | Optional |
| `attributes` | unknown \| unknown \| unknown \| unknown \| unknown \| unknown | Optional |
| `order_by`   | unknown                                                        | Optional |

**Response:** Object. Fields: `id`.

### createNewCard

**`client.cards.createNewCard`** · `POST /api/latest/cards`

Create new card. [Kaiten documentation](https://developers.kaiten.ru/cards/create-new-card).

`...args: CardsCreateNewCardParams`

```ts
declare const createNewCard: (
  body: CardsCreateNewCardBody,
  options?: OperationOptions,
) => Promise<CardsCreateNewCardResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                   | Type                     | Presence |
| ----------------------- | ------------------------ | -------- |
| `title`                 | number \| string         | Required |
| `board_id`              | integer                  | Required |
| `asap`                  | boolean                  | Optional |
| `due_date`              | string \| null           | Optional |
| `due_date_time_present` | boolean                  | Optional |
| `sort_order`            | number                   | Optional |
| `description`           | number \| string \| null | Optional |
| `expires_later`         | boolean                  | Optional |
| `size_text`             | number \| string \| null | Optional |
| `column_id`             | integer                  | Optional |
| `lane_id`               | integer                  | Optional |
| `owner_id`              | integer                  | Optional |
| `responsible_id`        | integer                  | Optional |
| `owner_email`           | string                   | Optional |
| `position`              | 1 \| 2                   | Optional |
| `type_id`               | integer                  | Optional |
| `service_id`            | integer \| null          | Optional |
| `external_id`           | number \| string \| null | Optional |
| `text_format_type_id`   | 1 \| 2 \| 3              | Optional |
| `properties`            | object                   | Optional |

**Response:** Object. Fields: `created`, `updated`, `archived`, `id`, `title`, `description`, `asap`, `due_date`, `sort_order`, `fifo_order`, `state`, `condition`, `expires_later`, `parents_count`, `children_count`, `children_done`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `parent_checklist_ids`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `due_date_time_present`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `sprint_id`, `external_id`, `service_id`, `comments_total`, `comment_last_added_at`, `properties`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `counters_recalculated_at`, `sd_new_comment`, `public`, `share_settings`, `share_id`, `external_user_emails`, `description_filled`, `estimate_workload`, `owner`, `type`, `external_links`, `files`, `checklists`.

### deleteCard

**`client.cards.deleteCard`** · `DELETE /api/latest/cards/{card_id}`

Delete card. [Kaiten documentation](https://developers.kaiten.ru/cards/delete-card).

`...args: CardsDeleteCardParams`

```ts
declare const deleteCard: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardsDeleteCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `archived`, `id`, `title`, `asap`, `due_date`, `due_date_time_present`, `expires_later`, `sort_order`, `description`, `state`, `condition`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `sprint_id`, `external_id`, `service_id`, `properties`, `public`, `share_id`, `share_settings`, `external_user_emails`, `tag_ids`, `estimate_workload`, `comments_total`, `comment_last_added_at`, `parents_count`, `children_count`, `children_done`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `calculated_planned_start`, `calculated_planned_end`, `description_filled`, `has_blocked_children`, `parent_checklist_ids`, `children_ids`, `parents_ids`, `fifo_order`, `counters_recalculated_at`, `sd_new_comment`, `import_id`, `owner`, `members`.

### retrieveCard

**`client.cards.retrieveCard`** · `GET /api/latest/cards/{card_id}`

Retrieve card. [Kaiten documentation](https://developers.kaiten.ru/cards/retrieve-card).

`...args: CardsRetrieveCardParams`

```ts
declare const retrieveCard: (
  cardId: number,
  brokenApi?: boolean,
  options?: OperationOptions,
) => Promise<CardsRetrieveCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `broken_api` | boolean | Optional |

**Response:** Object. Fields: `created`, `updated`, `archived`, `id`, `uid`, `title`, `asap`, `due_date`, `due_date_time_present`, `expires_later`, `sort_order`, `description`, `state`, `condition`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `sprint_id`, `external_id`, `service_id`, `properties`, `public`, `share_id`, `share_settings`, `external_user_emails`, `tag_ids`, `estimate_workload`, `comments_total`, `comment_last_added_at`, `parents_count`, `children_count`, `children_done`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `calculated_planned_start`, `calculated_planned_end`, `description_filled`, `has_blocked_children`, `parent_checklist_ids`, `children_ids`, `parents_ids`, `fifo_order`, `counters_recalculated_at`, `sd_new_comment`, `import_id`, `board`, `lane`, `column`, `type`, `checklists`, `members`, `blockers`, `owner`, `slas`, `blocked_at`, `blocker_id`, `blocker`, `block_reason`, `children`, `parents`, `files`, `tags`, `external_links`, `cardRole`, `email`.

### retrieveCardBaselines

**`client.cards.retrieveCardBaselines`** · `GET /api/latest/cards/{card_id}/baselines`

Retrieve card baselines. [Kaiten documentation](https://developers.kaiten.ru/cards/retrieve-card-baselines).

`...args: CardsRetrieveCardBaselinesParams`

```ts
declare const retrieveCardBaselines: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardsRetrieveCardBaselinesResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `uid`, `baseline_id`, `planned_start`, `planned_end`.

### retrieveCardList

**`client.cards.retrieveCardList`** · `GET /api/latest/cards`

Comma-separated query fields accept `QueryList<T>`: a string or a readonly array of the field's value type. See [typed card filters](/en/guide/rest#typed-card-filters) for examples.

Retrieve card list. [Kaiten documentation](https://developers.kaiten.ru/cards/retrieve-card-list).

`...args: CardsRetrieveCardListParams`

```ts
declare const retrieveCardList: {
  (
    query: CardsRetrieveCardListQuery & { version: 2 },
    options?: OperationOptions,
  ): Promise<SearchResponseV2<CardsRetrieveCardListResponse>>;
  (
    query?: Omit<CardsRetrieveCardListQuery, "version"> & { version?: 1 },
    options?: OperationOptions,
  ): Promise<CardsRetrieveCardListResponse>;
  (
    query: CardsRetrieveCardListQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | CardsRetrieveCardListResponse
    | SearchResponseV2<CardsRetrieveCardListResponse>
  >;
};
```

With `query.version: 2`, the result is `SearchResponseV2<...>` containing `result` and `position`; otherwise the result is an array.

**Path parameters**

**none.**

**Query parameters**

| Field                            | Type                | Presence |
| -------------------------------- | ------------------- | -------- |
| `created_before`                 | string              | Optional |
| `created_after`                  | string              | Optional |
| `updated_before`                 | string              | Optional |
| `updated_after`                  | string              | Optional |
| `first_moved_in_progress_after`  | string              | Optional |
| `first_moved_in_progress_before` | string              | Optional |
| `last_moved_to_done_at_after`    | string              | Optional |
| `last_moved_to_done_at_before`   | string              | Optional |
| `due_date_after`                 | string              | Optional |
| `due_date_before`                | string              | Optional |
| `query`                          | string              | Optional |
| `version`                        | integer             | Optional |
| `tag`                            | string              | Optional |
| `tag_ids`                        | string              | Optional |
| `type_ids`                       | string              | Optional |
| `exclude_board_ids`              | string              | Optional |
| `exclude_lane_ids`               | string              | Optional |
| `exclude_column_ids`             | string              | Optional |
| `column_ids`                     | string              | Optional |
| `member_ids`                     | string              | Optional |
| `owner_ids`                      | string              | Optional |
| `responsible_ids`                | string              | Optional |
| `states`                         | string              | Optional |
| `external_id`                    | string              | Optional |
| `additional_card_fields`         | string              | Optional |
| `search_fields`                  | string              | Optional |
| `space_id`                       | integer             | Optional |
| `limit`                          | integer             | Optional |
| `offset`                         | integer             | Optional |
| `start_position`                 | string              | Optional |
| `include_search_preview`         | boolean             | Optional |
| `order_space_id`                 | integer             | Optional |
| `board_id`                       | integer             | Optional |
| `column_id`                      | integer             | Optional |
| `lane_id`                        | integer             | Optional |
| `condition`                      | integer             | Optional |
| `type_id`                        | integer             | Optional |
| `responsible_id`                 | integer             | Optional |
| `owner_id`                       | integer             | Optional |
| `archived`                       | boolean             | Optional |
| `asap`                           | boolean             | Optional |
| `overdue`                        | boolean             | Optional |
| `done_on_time`                   | boolean             | Optional |
| `with_due_date`                  | boolean             | Optional |
| `filter`                         | string / CardFilter | Optional |
| `order_by`                       | string              | Optional |
| `order_direction`                | string              | Optional |
| `is_request`                     | boolean             | Optional |
| `exclude_owner_ids`              | string              | Optional |
| `exclude_card_ids`               | string              | Optional |
| `organizations_ids`              | string              | Optional |
| `broken_api`                     | boolean             | Optional |

**Response:** Array. Fields: `id`, `uid`, `created`, `updated`, `archived`, `title`, `asap`, `due_date`, `sort_order`, `fifo_order`, `state`, `condition`, `expires_later`, `parents_count`, `children_count`, `children_done`, `has_blocked_children`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `calculated_planned_start`, `calculated_planned_end`, `parent_checklist_ids`, `children_ids`, `parents_ids`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `due_date_time_present`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `sprint_id`, `external_id`, `comments_total`, `comment_last_added_at`, `properties`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `service_id`, `sd_new_comment`, `public`, `share_settings`, `share_id`, `external_user_emails`, `description_filled`, `estimate_workload`, `owner`, `board`, `members`, `column`, `lane`, `type`, `path_data`.

### retrieveCardLocationHistory

**`client.cards.retrieveCardLocationHistory`** · `GET /api/latest/cards/{card_id}/location-history`

Retrieve card location history. [Kaiten documentation](https://developers.kaiten.ru/cards/retrieve-card-location-history).

`...args: CardsRetrieveCardLocationHistoryParams`

```ts
declare const retrieveCardLocationHistory: (
  cardId: number,
  options?: OperationOptions,
) => Promise<CardsRetrieveCardLocationHistoryResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `card_id`, `board_id`, `column_id`, `subcolumn_id`, `lane_id`, `sprint_id`, `author_id`, `author`, `condition`, `changed`.

### updateCard

**`client.cards.updateCard`** · `PATCH /api/latest/cards/{card_id}`

Update card. [Kaiten documentation](https://developers.kaiten.ru/cards/update-card).

`...args: CardsUpdateCardParams`

```ts
declare const updateCard: (
  cardId: number,
  body: CardsUpdateCardBody,
  options?: OperationOptions,
) => Promise<CardsUpdateCardResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `card_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                                | Type                     | Presence |
| ------------------------------------ | ------------------------ | -------- |
| `title`                              | number \| string         | Optional |
| `asap`                               | boolean                  | Optional |
| `due_date`                           | string \| null           | Optional |
| `due_date_time_present`              | boolean                  | Optional |
| `sort_order`                         | number                   | Optional |
| `description`                        | number \| string \| null | Optional |
| `expires_later`                      | boolean                  | Optional |
| `size_text`                          | number \| string \| null | Optional |
| `board_id`                           | integer                  | Optional |
| `column_id`                          | integer                  | Optional |
| `lane_id`                            | integer                  | Optional |
| `owner_id`                           | integer                  | Optional |
| `type_id`                            | integer                  | Optional |
| `service_id`                         | integer \| null          | Optional |
| `blocked`                            | boolean                  | Optional |
| `condition`                          | 1 \| 2                   | Optional |
| `external_id`                        | number \| string \| null | Optional |
| `text_format_type_id`                | 1 \| 2 \| 3              | Optional |
| `sd_new_comment`                     | boolean                  | Optional |
| `owner_email`                        | string                   | Optional |
| `prev_card_id`                       | integer                  | Optional |
| `estimate_workload`                  | number                   | Optional |
| `ignore_planned_dates_recalculation` | boolean                  | Optional |
| `properties`                         | object                   | Optional |

**Response:** Object. Fields: `created`, `updated`, `archived`, `id`, `title`, `asap`, `due_date`, `due_date_time_present`, `expires_later`, `sort_order`, `description`, `state`, `condition`, `blocking_card`, `blocked`, `size`, `size_unit`, `size_text`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `last_moved_at`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `sprint_id`, `external_id`, `service_id`, `properties`, `public`, `share_id`, `share_settings`, `external_user_emails`, `tag_ids`, `estimate_workload`, `comments_total`, `comment_last_added_at`, `parents_count`, `children_count`, `children_done`, `goals_total`, `goals_done`, `time_spent_sum`, `time_blocked_sum`, `children_number_properties_sum`, `calculated_planned_start`, `calculated_planned_end`, `description_filled`, `has_blocked_children`, `parent_checklist_ids`, `children_ids`, `parents_ids`, `fifo_order`, `counters_recalculated_at`, `sd_new_comment`, `import_id`, `owner`, `members`.

## checklistItems

### addItemToChecklist

**`client.checklistItems.addItemToChecklist`** · `POST /api/latest/checklists/{checklist_id}/items`

Add item to checklist. [Kaiten documentation](https://developers.kaiten.ru/checklist-items/add-item-to-checklist).

`...args: ChecklistItemsAddItemToChecklistParams`

```ts
declare const addItemToChecklist: (
  checklistId: number,
  body: ChecklistItemsAddItemToChecklistBody,
  options?: OperationOptions,
) => Promise<ChecklistItemsAddItemToChecklistResponse>;
```

**Path parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `checklist_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field            | Type           | Presence |
| ---------------- | -------------- | -------- |
| `text`           | string         | Required |
| `sort_order`     | number         | Optional |
| `checked`        | boolean        | Optional |
| `due_date`       | string \| null | Optional |
| `responsible_id` | integer        | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `text`, `sort_order`, `checked`, `checklist_id`, `checker_id`, `user_id`, `checked_at`, `responsible_id`, `deleted`, `due_date`.

### removeChecklistItem

**`client.checklistItems.removeChecklistItem`** · `DELETE /api/latest/checklists/{checklist_id}/items/{id}`

Remove checklist item. [Kaiten documentation](https://developers.kaiten.ru/checklist-items/remove-checklist-item).

`...args: ChecklistItemsRemoveChecklistItemParams`

```ts
declare const removeChecklistItem: (
  checklistId: number,
  itemId: number,
  options?: OperationOptions,
) => Promise<ChecklistItemsRemoveChecklistItemResponse>;
```

**Path parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `checklist_id` | integer | Required |
| `id`           | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### updateChecklistItem

**`client.checklistItems.updateChecklistItem`** · `PATCH /api/latest/checklists/{checklist_id}/items/{id}`

Update checklist item. [Kaiten documentation](https://developers.kaiten.ru/checklist-items/update-checklist-item).

`...args: ChecklistItemsUpdateChecklistItemParams`

```ts
declare const updateChecklistItem: (
  checklistId: number,
  itemId: number,
  body: ChecklistItemsUpdateChecklistItemBody,
  options?: OperationOptions,
) => Promise<ChecklistItemsUpdateChecklistItemResponse>;
```

**Path parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `checklist_id` | integer | Required |
| `id`           | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field            | Type           | Presence |
| ---------------- | -------------- | -------- |
| `text`           | string \| null | Optional |
| `sort_order`     | number         | Optional |
| `checklist_id`   | integer        | Optional |
| `checked`        | boolean        | Optional |
| `due_date`       | string \| null | Optional |
| `responsible_id` | number \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `text`, `sort_order`, `checked`, `checklist_id`, `checker_id`, `user_id`, `checked_at`, `responsible_id`, `deleted`, `due_date`.

## checklists

### retrieveCardsWithChecklist

**`client.checklists.retrieveCardsWithChecklist`** · `GET /api/latest/checklists/{id}`

Retrieve cards with checklist. [Kaiten documentation](https://developers.kaiten.ru/checklists/retrieve-cards-with-checklist).

`...args: ChecklistsRetrieveCardsWithChecklistParams`

```ts
declare const retrieveCardsWithChecklist: (
  id: number,
  onlySharedCards: boolean,
  options?: OperationOptions,
) => Promise<ChecklistsRetrieveCardsWithChecklistResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

| Field               | Type    | Presence |
| ------------------- | ------- | -------- |
| `only_shared_cards` | boolean | Required |

**Response:** Array. Fields: `created`, `updated`, `archived`, `id`, `title`, `asap`, `due_date`, `sort_order`, `description`, `state`, `expires_later`, `parents_count`, `children_count`, `children_done`, `goals_total`, `goals_done`, `parent_checklist_ids`, `parent_link_ids`, `blocked`, `size`, `size_unit`, `size_text`, `due_date_time_present`, `board_id`, `column_id`, `lane_id`, `owner_id`, `type_id`, `version`, `updater_id`, `completed_on_time`, `completed_at`, `project_id`, `milestone_id`, `fifo_order`, `blocking_card`, `sprint_id`, `condition`, `last_moved_at`, `external_id`, `lane_changed_at`, `column_changed_at`, `first_moved_to_in_progress_at`, `last_moved_to_done_at`, `service_id`, `has_blocked_children`, `comments_total`, `comment_last_added_at`, `children_ids`, `parents_ids`, `properties`, `planned_start`, `planned_end`, `ignore_planned_dates_recalculation`, `counters_recalculated_at`, `sd_new_comment`, `public`, `share_id`, `share_settings`, `sd_external_recipients`, `external_user_emails`, `time_spent_sum`, `calculated_planned_start`, `calculated_planned_end`, `time_blocked_sum`, `children_number_properties_sum`, `description_filled`, `import_id`, `tag_ids`, `has_access_to_space`, `path_data`, `space_id`.

## columns

### createNewColumn

**`client.columns.createNewColumn`** · `POST /api/latest/boards/{board_id}/columns`

Create new column. [Kaiten documentation](https://developers.kaiten.ru/columns/create-new-column).

`...args: ColumnsCreateNewColumnParams`

```ts
declare const createNewColumn: (
  boardId: number,
  body: ColumnsCreateNewColumnBody,
  options?: OperationOptions,
) => Promise<ColumnsCreateNewColumnResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                              | Type                     | Presence |
| ---------------------------------- | ------------------------ | -------- |
| `external_id`                      | number \| string \| null | Optional |
| `title`                            | string                   | Required |
| `sort_order`                       | number                   | Optional |
| `type`                             | 1 \| 2 \| 3              | Optional |
| `last_moved_warning_after_days`    | integer                  | Optional |
| `last_moved_warning_after_hours`   | integer                  | Optional |
| `last_moved_warning_after_minutes` | integer                  | Optional |
| `wip_limit`                        | integer                  | Optional |
| `wip_limit_type`                   | 1 \| 2                   | Optional |
| `col_count`                        | integer                  | Optional |
| `archive_after_days`               | integer                  | Optional |
| `months_to_hide_cards`             | integer \| null          | Optional |
| `card_hide_after_days`             | integer \| null          | Optional |
| `rules`                            | integer                  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `col_count`, `wip_limit`, `type`, `rules`, `board_id`, `column_id`, `archive_after_days`, `wip_limit_type`, `external_id`, `default_tags`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `months_to_hide_cards`, `card_hide_after_days`.

### getListOfColumns

**`client.columns.getListOfColumns`** · `GET /api/latest/boards/{board_id}/columns`

Get list of columns. [Kaiten documentation](https://developers.kaiten.ru/columns/get-list-of-columns).

`...args: ColumnsGetListOfColumnsParams`

```ts
declare const getListOfColumns: (
  boardId: number,
  options?: OperationOptions,
) => Promise<ColumnsGetListOfColumnsResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `col_count`, `wip_limit`, `wip_limit_type`, `type`, `rules`, `board_id`, `column_id`, `archive_after_days`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `external_id`, `default_tags`, `months_to_hide_cards`, `card_hide_after_days`, `pause_sla`, `subcolumns`.

### removeColumn

**`client.columns.removeColumn`** · `DELETE /api/latest/boards/{board_id}/columns/{id}`

Remove column. [Kaiten documentation](https://developers.kaiten.ru/columns/remove-column).

`...args: ColumnsRemoveColumnParams`

```ts
declare const removeColumn: (
  boardId: number,
  columnId: number,
  force?: boolean,
  options?: OperationOptions,
) => Promise<ColumnsRemoveColumnResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type    | Presence |
| ------- | ------- | -------- |
| `force` | boolean | Optional |

**Response:** Object. Fields: `id`.

### updateColumn

**`client.columns.updateColumn`** · `PATCH /api/latest/boards/{board_id}/columns/{id}`

Update column. [Kaiten documentation](https://developers.kaiten.ru/columns/update-column).

`...args: ColumnsUpdateColumnParams`

```ts
declare const updateColumn: (
  boardId: number,
  columnId: number,
  body: ColumnsUpdateColumnBody,
  options?: OperationOptions,
) => Promise<ColumnsUpdateColumnResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                              | Type                     | Presence |
| ---------------------------------- | ------------------------ | -------- |
| `external_id`                      | number \| string \| null | Optional |
| `title`                            | string                   | Optional |
| `sort_order`                       | number                   | Optional |
| `type`                             | 1 \| 2 \| 3              | Optional |
| `wip_limit`                        | integer \| null          | Optional |
| `wip_limit_type`                   | 1 \| 2                   | Optional |
| `last_moved_warning_after_days`    | integer                  | Optional |
| `last_moved_warning_after_hours`   | integer                  | Optional |
| `last_moved_warning_after_minutes` | integer                  | Optional |
| `col_count`                        | integer                  | Optional |
| `archive_after_days`               | integer                  | Optional |
| `months_to_hide_cards`             | integer \| null          | Optional |
| `card_hide_after_days`             | integer \| null          | Optional |
| `rules`                            | integer                  | Optional |
| `default_tags`                     | string \| null           | Optional |
| `prev_column_id`                   | integer \| null          | Optional |
| `next_column_id`                   | integer \| null          | Optional |
| `pause_sla`                        | boolean                  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `col_count`, `wip_limit`, `type`, `rules`, `board_id`, `column_id`, `archive_after_days`, `wip_limit_type`, `external_id`, `default_tags`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `months_to_hide_cards`, `card_hide_after_days`.

## companyUsers

### getListOfUsers

**`client.companyUsers.getListOfUsers`** · `GET /api/latest/company/users`

Get list of users. [Kaiten documentation](https://developers.kaiten.ru/company-users/get-list-of-users).

`...args: CompanyUsersGetListOfUsersParams`

```ts
declare const getListOfUsers: (
  query?: CompanyUsersGetListOfUsersQuery,
  options?: OperationOptions,
) => Promise<CompanyUsersGetListOfUsersResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field                         | Type    | Presence |
| ----------------------------- | ------- | -------- |
| `invitesOnly`                 | boolean | Optional |
| `withTransferAccessStatus`    | boolean | Optional |
| `for_members_section`         | boolean | Optional |
| `owner_only`                  | boolean | Optional |
| `only_paid`                   | boolean | Optional |
| `only_records_count`          | boolean | Optional |
| `only_virtual`                | boolean | Optional |
| `offset`                      | integer | Optional |
| `limit`                       | integer | Optional |
| `query`                       | string  | Optional |
| `access_type_permissions`     | string  | Optional |
| `sd_access_type`              | string  | Optional |
| `take_licence`                | string  | Optional |
| `temporarily_inactive_status` | string  | Optional |
| `group_ids`                   | array   | Optional |
| `permissions`                 | array   | Optional |

**Response:** Array. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`, `permissions`, `own_permissions`, `spaces`, `groups`, `company_id`, `user_id`, `default_space_id`, `role`, `email_frequency`, `email_settings`, `slack_id`, `slack_settings`, `notification_settings`, `notification_enabled_channels`, `slack_private_channel_id`, `telegram_sd_bot_enabled`, `invite_last_sent_at`, `apps_permissions`, `external`, `last_request_date`, `last_request_method`, `work_time_settings`, `personal_settings`, `locked`, `take_licence`.

### removeVirtualUser

**`client.companyUsers.removeVirtualUser`** · `DELETE /api/latest/company/users/{id}`

Remove virtual user. [Kaiten documentation](https://developers.kaiten.ru/company-users/remove-virtual-user).

`...args: CompanyUsersRemoveVirtualUserParams`

```ts
declare const removeVirtualUser: (
  userId: number,
  options?: OperationOptions,
) => Promise<CompanyUsersRemoveVirtualUserResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### updateUser

**`client.companyUsers.updateUser`** · `PATCH /api/latest/company/users/{id}`

Update user. [Kaiten documentation](https://developers.kaiten.ru/company-users/update-user).

`...args: CompanyUsersUpdateUserParams`

```ts
declare const updateUser: (
  userId: number,
  appsPermissions?: number,
  temporarilyInactive?: boolean,
  options?: OperationOptions,
) => Promise<CompanyUsersUpdateUserResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                  | Type    | Presence |
| ---------------------- | ------- | -------- |
| `apps_permissions`     | integer | Optional |
| `temporarily_inactive` | boolean | Optional |

**Response:** Object. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`, `user_id`, `company_id`, `default_space_id`, `role`, `permissions`, `apps_permissions`, `email_frequency`, `email_settings`, `slack_id`, `slack_private_channel_id`, `slack_settings`, `telegram_sd_bot_enabled`, `external`, `notification_settings`, `work_time_settings`, `invite_last_sent_at`, `last_request_date`, `last_request_method`, `notification_enabled_channels`, `personal_settings`, `locked`, `temporarily_inactive`.

## customDirectories

### createCustomDirectory

**`client.customDirectories.createCustomDirectory`** · `POST /api/latest/company/custom-directories`

Create custom directory. [Kaiten documentation](https://developers.kaiten.ru/custom-directories/create-custom-directory). **Beta.**

`...args: CustomDirectoriesCreateCustomDirectoryParams`

```ts
declare const createCustomDirectory: (
  body: CustomDirectoriesCreateCustomDirectoryBody,
  options?: OperationOptions,
) => Promise<CustomDirectoriesCreateCustomDirectoryResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                 | Type            | Presence |
| --------------------- | --------------- | -------- |
| `name`                | string          | Required |
| `description`         | null \| string  | Optional |
| `multi_select`        | boolean         | Optional |
| `allow_editing`       | boolean         | Optional |
| `display_field_index` | integer         | Optional |
| `fields`              | array of object | Optional |

**Response:** Object. Fields: `id`, `name`, `description`, `condition`, `settings`, `author_uid`, `company_uid`, `created`, `updated`, `fields`.

### deleteCustomDirectory

**`client.customDirectories.deleteCustomDirectory`** · `DELETE /api/latest/company/custom-directories/{directory_id}`

Delete custom directory. [Kaiten documentation](https://developers.kaiten.ru/custom-directories/delete-custom-directory). **Beta.**

`...args: CustomDirectoriesDeleteCustomDirectoryParams`

```ts
declare const deleteCustomDirectory: (
  directoryId: string,
  options?: OperationOptions,
) => Promise<CustomDirectoriesDeleteCustomDirectoryResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `name`, `condition`, `updated`.

### getCustomDirectory

**`client.customDirectories.getCustomDirectory`** · `GET /api/latest/company/custom-directories/{directory_id}`

Get custom directory. [Kaiten documentation](https://developers.kaiten.ru/custom-directories/get-custom-directory). **Beta.**

`...args: CustomDirectoriesGetCustomDirectoryParams`

```ts
declare const getCustomDirectory: (
  directoryId: string,
  options?: OperationOptions,
) => Promise<CustomDirectoriesGetCustomDirectoryResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `name`, `description`, `condition`, `settings`, `author_uid`, `company_uid`, `created`, `updated`, `author`, `fields`.

### getListOfCustomDirectories

**`client.customDirectories.getListOfCustomDirectories`** · `GET /api/latest/company/custom-directories`

Get list of custom directories. [Kaiten documentation](https://developers.kaiten.ru/custom-directories/get-list-of-custom-directories). **Beta.**

`...args: CustomDirectoriesGetListOfCustomDirectoriesParams`

```ts
declare const getListOfCustomDirectories: (
  query?: CustomDirectoriesGetListOfCustomDirectoriesQuery,
  options?: OperationOptions,
) => Promise<CustomDirectoriesGetListOfCustomDirectoriesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field                   | Type             | Presence |
| ----------------------- | ---------------- | -------- |
| `include_fields`        | boolean          | Optional |
| `include_author`        | boolean          | Optional |
| `include_records_count` | boolean          | Optional |
| `limit`                 | number           | Optional |
| `offset`                | number           | Optional |
| `query`                 | string           | Optional |
| `conditions`            | array of strings | Optional |

**Response:** Array. Fields: `id`, `name`, `description`, `condition`, `settings`, `records_count`, `created`, `updated`.

### updateCustomDirectory

**`client.customDirectories.updateCustomDirectory`** · `PATCH /api/latest/company/custom-directories/{directory_id}`

Update custom directory. [Kaiten documentation](https://developers.kaiten.ru/custom-directories/update-custom-directory). **Beta.**

`...args: CustomDirectoriesUpdateCustomDirectoryParams`

```ts
declare const updateCustomDirectory: (
  directoryId: string,
  body: CustomDirectoriesUpdateCustomDirectoryBody,
  options?: OperationOptions,
) => Promise<CustomDirectoriesUpdateCustomDirectoryResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field           | Type                          | Presence |
| --------------- | ----------------------------- | -------- |
| `name`          | string                        | Optional |
| `description`   | null \| string                | Optional |
| `condition`     | active \| inactive \| removed | Optional |
| `multi_select`  | boolean                       | Optional |
| `allow_editing` | boolean                       | Optional |
| `fields`        | array of object               | Optional |

**Response:** Object. Fields: `id`, `name`, `description`, `condition`, `settings`, `author_uid`, `company_uid`, `created`, `updated`, `author`, `fields`.

## customDirectoryFields

### createField

**`client.customDirectoryFields.createField`** · `POST /api/latest/company/custom-directories/{directory_id}/fields`

Create field. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-fields/create-field). **Beta.**

`...args: CustomDirectoryFieldsCreateFieldParams`

```ts
declare const createField: (
  directoryId: string,
  body: CustomDirectoryFieldsCreateFieldBody,
  options?: OperationOptions,
) => Promise<CustomDirectoryFieldsCreateFieldResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type                                                                                                                 | Presence |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | -------- |
| `name`       | string                                                                                                               | Required |
| `type`       | string \| number \| date \| email \| url \| phone \| checkbox \| select \| user \| catalog \| directory_link \| file | Required |
| `sort_order` | integer                                                                                                              | Optional |
| `required`   | boolean                                                                                                              | Optional |
| `is_display` | boolean                                                                                                              | Optional |

**Response:** Object. Fields: `id`, `custom_directory_id`, `name`, `type`, `custom_property_uid`, `linked_directory_id`, `reverse_field_id`, `condition`, `required`, `is_display`, `sort_order`, `settings`, `author_uid`, `company_uid`, `created`, `updated`.

### deleteField

**`client.customDirectoryFields.deleteField`** · `DELETE /api/latest/company/custom-directories/{directory_id}/fields/{field_id}`

Delete field. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-fields/delete-field). **Beta.**

`...args: CustomDirectoryFieldsDeleteFieldParams`

```ts
declare const deleteField: (
  directoryId: string,
  fieldId: string,
  options?: OperationOptions,
) => Promise<CustomDirectoryFieldsDeleteFieldResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `field_id`     | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `custom_directory_id`, `name`, `type`, `condition`, `updated`.

### getField

**`client.customDirectoryFields.getField`** · `GET /api/latest/company/custom-directories/{directory_id}/fields/{field_id}`

Get field. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-fields/get-field). **Beta.**

`...args: CustomDirectoryFieldsGetFieldParams`

```ts
declare const getField: (
  directoryId: string,
  fieldId: string,
  options?: OperationOptions,
) => Promise<CustomDirectoryFieldsGetFieldResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `field_id`     | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `custom_directory_id`, `name`, `type`, `custom_property_uid`, `linked_directory_id`, `reverse_field_id`, `condition`, `required`, `is_display`, `sort_order`, `settings`, `author_uid`, `company_uid`, `created`, `updated`, `author`, `linkedDirectory`, `customProperty`.

### getListOfFields

**`client.customDirectoryFields.getListOfFields`** · `GET /api/latest/company/custom-directories/{directory_id}/fields`

Get list of fields. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-fields/get-list-of-fields). **Beta.**

`...args: CustomDirectoryFieldsGetListOfFieldsParams`

```ts
declare const getListOfFields: (
  directoryId: string,
  includeAuthor?: boolean,
  conditions?: ("active" | "inactive" | "removed")[],
  options?: OperationOptions,
) => Promise<CustomDirectoryFieldsGetListOfFieldsResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

| Field            | Type             | Presence |
| ---------------- | ---------------- | -------- |
| `include_author` | boolean          | Optional |
| `conditions`     | array of strings | Optional |

**Response:** Array. Fields: `id`, `custom_directory_id`, `name`, `type`, `required`, `is_display`, `sort_order`, `condition`.

### updateField

**`client.customDirectoryFields.updateField`** · `PATCH /api/latest/company/custom-directories/{directory_id}/fields/{field_id}`

Update field. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-fields/update-field). **Beta.**

`...args: CustomDirectoryFieldsUpdateFieldParams`

```ts
declare const updateField: (
  directoryId: string,
  fieldId: string,
  body: CustomDirectoryFieldsUpdateFieldBody,
  options?: OperationOptions,
) => Promise<CustomDirectoryFieldsUpdateFieldResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `field_id`     | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type                          | Presence |
| ------------ | ----------------------------- | -------- |
| `name`       | string                        | Optional |
| `condition`  | active \| inactive \| removed | Optional |
| `sort_order` | integer                       | Optional |
| `required`   | boolean                       | Optional |
| `is_display` | boolean                       | Optional |

**Response:** Object. Fields: `id`, `custom_directory_id`, `name`, `type`, `custom_property_uid`, `linked_directory_id`, `reverse_field_id`, `condition`, `required`, `is_display`, `sort_order`, `settings`, `author_uid`, `company_uid`, `created`, `updated`.

## customDirectoryRecords

### createRecord

**`client.customDirectoryRecords.createRecord`** · `POST /api/latest/company/custom-directories/{directory_id}/records`

Create record. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-records/create-record). **Beta.**

`...args: CustomDirectoryRecordsCreateRecordParams`

```ts
declare const createRecord: (
  directoryId: string,
  body: CustomDirectoryRecordsCreateRecordBody,
  responseProfile?: string,
  options?: OperationOptions,
) => Promise<CustomDirectoryRecordsCreateRecordResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

| Field              | Type   | Presence |
| ------------------ | ------ | -------- |
| `response_profile` | string | Optional |

**Request body**

| Field    | Type   | Presence |
| -------- | ------ | -------- |
| `values` | object | Required |

**Response:** Object. Fields: `id`, `custom_directory_id`, `display_value`, `condition`, `author_uid`, `updater_uid`, `company_uid`, `created`, `updated`, `author`, `updater`, `values`.

### deleteRecord

**`client.customDirectoryRecords.deleteRecord`** · `DELETE /api/latest/company/custom-directories/{directory_id}/records/{record_id}`

Delete record. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-records/delete-record). **Beta.**

`...args: CustomDirectoryRecordsDeleteRecordParams`

```ts
declare const deleteRecord: (
  directoryId: string,
  recordId: string,
  options?: OperationOptions,
) => Promise<CustomDirectoryRecordsDeleteRecordResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `record_id`    | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `custom_directory_id`, `condition`, `updated`.

### getCardsLinkedToRecord

**`client.customDirectoryRecords.getCardsLinkedToRecord`** · `GET /api/latest/company/custom-directories/{directory_id}/records/{record_id}/cards`

Get cards linked to record. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-records/get-cards-linked-to-record). **Beta.**

`...args: CustomDirectoryRecordsGetCardsLinkedToRecordParams`

```ts
declare const getCardsLinkedToRecord: (
  directoryId: string,
  recordId: string,
  query?: CustomDirectoryRecordsGetCardsLinkedToRecordQuery,
  options?: OperationOptions,
) => Promise<CustomDirectoryRecordsGetCardsLinkedToRecordResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `record_id`    | string | Required |

**Query parameters**

| Field    | Type   | Presence |
| -------- | ------ | -------- |
| `limit`  | number | Optional |
| `offset` | number | Optional |
| `filter` | string | Optional |

**Response:** Array. Fields: `id`, `uid`, `title`.

### getListOfRecords

**`client.customDirectoryRecords.getListOfRecords`** · `GET /api/latest/company/custom-directories/{directory_id}/records`

Get list of records. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-records/get-list-of-records). **Beta.**

`...args: CustomDirectoryRecordsGetListOfRecordsParams`

```ts
declare const getListOfRecords: (
  directoryId: string,
  query?: CustomDirectoryRecordsGetListOfRecordsQuery,
  options?: OperationOptions,
) => Promise<CustomDirectoryRecordsGetListOfRecordsResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |

**Query parameters**

| Field             | Type             | Presence |
| ----------------- | ---------------- | -------- |
| `limit`           | number           | Optional |
| `offset`          | number           | Optional |
| `query`           | string           | Optional |
| `profile`         | string           | Optional |
| `include_values`  | boolean          | Optional |
| `include_author`  | boolean          | Optional |
| `conditions`      | array of strings | Optional |
| `filters`         | object           | Optional |
| `filter_operator` | string           | Optional |

**Response:** Array. Fields: `id`, `custom_directory_id`, `display_value`, `condition`, `created`, `updated`, `values`.

### getRecord

**`client.customDirectoryRecords.getRecord`** · `GET /api/latest/company/custom-directories/{directory_id}/records/{record_id}`

Get record. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-records/get-record). **Beta.**

`...args: CustomDirectoryRecordsGetRecordParams`

```ts
declare const getRecord: (
  directoryId: string,
  recordId: string,
  profile?: string,
  options?: OperationOptions,
) => Promise<CustomDirectoryRecordsGetRecordResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `record_id`    | string | Required |

**Query parameters**

| Field     | Type   | Presence |
| --------- | ------ | -------- |
| `profile` | string | Optional |

**Response:** Object. Fields: `id`, `custom_directory_id`, `display_value`, `condition`, `author_uid`, `updater_uid`, `company_uid`, `created`, `updated`, `author`, `updater`, `values`.

### updateRecord

**`client.customDirectoryRecords.updateRecord`** · `PATCH /api/latest/company/custom-directories/{directory_id}/records/{record_id}`

Update record. [Kaiten documentation](https://developers.kaiten.ru/custom-directory-records/update-record). **Beta.**

`...args: CustomDirectoryRecordsUpdateRecordParams`

```ts
declare const updateRecord: (
  directoryId: string,
  recordId: string,
  body: CustomDirectoryRecordsUpdateRecordBody,
  responseProfile?: string,
  options?: OperationOptions,
) => Promise<CustomDirectoryRecordsUpdateRecordResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `directory_id` | string | Required |
| `record_id`    | string | Required |

**Query parameters**

| Field              | Type   | Presence |
| ------------------ | ------ | -------- |
| `response_profile` | string | Optional |

**Request body**

| Field       | Type                          | Presence |
| ----------- | ----------------------------- | -------- |
| `condition` | active \| inactive \| removed | Optional |
| `values`    | object                        | Optional |

**Response:** Object. Fields: `id`, `custom_directory_id`, `display_value`, `condition`, `author_uid`, `updater_uid`, `company_uid`, `created`, `updated`, `author`, `updater`, `values`.

## customProperties

### createNewProperty

**`client.customProperties.createNewProperty`** · `POST /api/latest/company/custom-properties`

Create new property. [Kaiten documentation](https://developers.kaiten.ru/custom-properties/create-new-property).

`...args: CustomPropertiesCreateNewPropertyParams`

```ts
declare const createNewProperty: (
  body: CustomPropertiesCreateNewPropertyBody,
  options?: OperationOptions,
) => Promise<CustomPropertiesCreateNewPropertyResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                       | Type                                                                                                                                                               | Presence |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `name`                      | string                                                                                                                                                             | Optional |
| `show_on_facade`            | boolean                                                                                                                                                            | Optional |
| `multiline`                 | boolean                                                                                                                                                            | Optional |
| `vote_variant`              | null \| rating \| scale \| emoji_set                                                                                                                               | Optional |
| `type`                      | string \| number \| date \| email \| phone \| checkbox \| select \| formula \| url \| collective_score \| vote \| collective_vote \| catalog \| user \| attachment | Optional |
| `values_type`               | null \| number \| text                                                                                                                                             | Optional |
| `colorful`                  | boolean \| null                                                                                                                                                    | Optional |
| `multi_select`              | boolean \| null                                                                                                                                                    | Optional |
| `values_creatable_by_users` | boolean \| null                                                                                                                                                    | Optional |
| `data`                      | unknown \| unknown \| unknown \| unknown \| unknown                                                                                                                | Optional |
| `formula`                   | string                                                                                                                                                             | Optional |
| `formula_source_card`       | object                                                                                                                                                             | Optional |
| `color`                     | integer \| null                                                                                                                                                    | Optional |
| `fields_settings`           | object                                                                                                                                                             | Optional |

**Response:** Object. Fields: `name`, `type`, `show_on_facade`, `multiline`, `fields_settings`, `author_id`, `company_id`, `updated`, `created`, `id`, `condition`, `colorful`, `multi_select`, `values_creatable_by_users`, `data`, `values_type`, `vote_variant`, `protected`, `color`, `external_id`.

### getListOfProperties

**`client.customProperties.getListOfProperties`** · `GET /api/latest/company/custom-properties`

Get list of properties. [Kaiten documentation](https://developers.kaiten.ru/custom-properties/get-list-of-properties).

`...args: CustomPropertiesGetListOfPropertiesParams`

```ts
declare const getListOfProperties: (
  query?: CustomPropertiesGetListOfPropertiesQuery,
  options?: OperationOptions,
) => Promise<CustomPropertiesGetListOfPropertiesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field             | Type    | Presence |
| ----------------- | ------- | -------- |
| `include_values`  | boolean | Optional |
| `include_author`  | boolean | Optional |
| `compact`         | boolean | Optional |
| `load_by_ids`     | boolean | Optional |
| `ids`             | array   | Optional |
| `offset`          | integer | Optional |
| `limit`           | integer | Optional |
| `order_by`        | string  | Optional |
| `order_direction` | string  | Optional |
| `query`           | string  | Optional |

**Response:** Array. Fields: `created`, `updated`, `id`, `uid`, `type`, `name`, `condition`, `show_on_facade`, `multiline`, `author_id`, `company_id`, `colorful`, `multi_select`, `values_creatable_by_users`, `values_type`, `vote_variant`, `data`, `protected`, `fields_settings`, `color`, `external_id`.

### getProperty

**`client.customProperties.getProperty`** · `GET /api/latest/company/custom-properties/{id}`

Get property. [Kaiten documentation](https://developers.kaiten.ru/custom-properties/get-property).

`...args: CustomPropertiesGetPropertyParams`

```ts
declare const getProperty: (
  propertyId: number,
  options?: OperationOptions,
) => Promise<CustomPropertiesGetPropertyResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `uid`, `type`, `name`, `condition`, `show_on_facade`, `multiline`, `author_id`, `company_id`, `colorful`, `multi_select`, `values_creatable_by_users`, `values_type`, `vote_variant`, `data`, `protected`, `fields_settings`, `color`, `external_id`.

### removeProperty

**`client.customProperties.removeProperty`** · `DELETE /api/latest/company/custom-properties/{id}`

Remove property. [Kaiten documentation](https://developers.kaiten.ru/custom-properties/remove-property).

`...args: CustomPropertiesRemovePropertyParams`

```ts
declare const removeProperty: (
  propertyId: number,
  options?: OperationOptions,
) => Promise<CustomPropertiesRemovePropertyResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `type`, `name`, `show_on_facade`, `author_id`, `company_id`, `condition`, `colorful`, `multi_select`, `values_creatable_by_users`, `data`, `multiline`, `values_type`, `vote_variant`, `protected`, `fields_settings`, `color`.

### updateProperty

**`client.customProperties.updateProperty`** · `PATCH /api/latest/company/custom-properties/{id}`

Update property. [Kaiten documentation](https://developers.kaiten.ru/custom-properties/update-property).

`...args: CustomPropertiesUpdatePropertyParams`

```ts
declare const updateProperty: (
  propertyId: number,
  body: CustomPropertiesUpdatePropertyBody,
  options?: OperationOptions,
) => Promise<CustomPropertiesUpdatePropertyResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                       | Type                                                | Presence |
| --------------------------- | --------------------------------------------------- | -------- |
| `name`                      | string                                              | Optional |
| `show_on_facade`            | boolean                                             | Optional |
| `multiline`                 | boolean                                             | Optional |
| `condition`                 | active \| inactive                                  | Optional |
| `colorful`                  | boolean \| null                                     | Optional |
| `multi_select`              | boolean \| null                                     | Optional |
| `values_creatable_by_users` | boolean \| null                                     | Optional |
| `data`                      | unknown \| unknown \| unknown \| unknown \| unknown | Optional |
| `color`                     | integer \| null                                     | Optional |
| `fields_settings`           | object \| null                                      | Optional |
| `is_used_as_progress`       | boolean                                             | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `uid`, `type`, `name`, `condition`, `show_on_facade`, `multiline`, `author_id`, `company_id`, `colorful`, `multi_select`, `values_creatable_by_users`, `values_type`, `vote_variant`, `data`, `protected`, `fields_settings`, `color`, `external_id`.

## customPropertyCatalogValues

### createNewCatalogValue

**`client.customPropertyCatalogValues.createNewCatalogValue`** · `POST /api/latest/company/custom-properties/{property_id}/catalog-values`

Create new catalog value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-catalog-values/create-new-catalog-value).

`...args: CustomPropertyCatalogValuesCreateNewCatalogValueParams`

```ts
declare const createNewCatalogValue: (
  propertyId: number,
  body: CustomPropertyCatalogValuesCreateNewCatalogValueBody,
  options?: OperationOptions,
) => Promise<CustomPropertyCatalogValuesCreateNewCatalogValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type   | Presence |
| ------- | ------ | -------- |
| `value` | object | Required |

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `name`, `author_id`, `updater_id`, `condition`.

### getCatalogValue

**`client.customPropertyCatalogValues.getCatalogValue`** · `GET /api/latest/company/custom-properties/{property_id}/catalog-values/{id}`

Get catalog value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-catalog-values/get-catalog-value).

`...args: CustomPropertyCatalogValuesGetCatalogValueParams`

```ts
declare const getCatalogValue: (
  propertyId: number,
  valueId: number,
  options?: OperationOptions,
) => Promise<CustomPropertyCatalogValuesGetCatalogValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `name`, `author_id`, `updater_id`, `condition`.

### getListOfCatalogValues

**`client.customPropertyCatalogValues.getListOfCatalogValues`** · `GET /api/latest/company/custom-properties/{property_id}/catalog-values`

Get list of catalog values. [Kaiten documentation](https://developers.kaiten.ru/custom-property-catalog-values/get-list-of-catalog-values).

`...args: CustomPropertyCatalogValuesGetListOfCatalogValuesParams`

```ts
declare const getListOfCatalogValues: (
  propertyId: number,
  query?: CustomPropertyCatalogValuesGetListOfCatalogValuesQuery,
  options?: OperationOptions,
) => Promise<CustomPropertyCatalogValuesGetListOfCatalogValuesResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |

**Query parameters**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `query`      | string  | Optional |
| `conditions` | enum    | Optional |
| `limit`      | integer | Optional |
| `offset`     | integer | Optional |

**Response:** Array. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `name`, `author_id`, `updater_id`, `condition`.

### removeProperty

**`client.customPropertyCatalogValues.removeProperty`** · `DELETE /api/latest/company/custom-properties/{property_id}/catalog-values/{id}`

Remove property. [Kaiten documentation](https://developers.kaiten.ru/custom-property-catalog-values/remove-property).

`...args: CustomPropertyCatalogValuesRemovePropertyParams`

```ts
declare const removeProperty: (
  propertyId: number,
  valueId: number,
  options?: OperationOptions,
) => Promise<CustomPropertyCatalogValuesRemovePropertyResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `name`, `author_id`, `updater_id`, `condition`.

### updateCatalogValue

**`client.customPropertyCatalogValues.updateCatalogValue`** · `PATCH /api/latest/company/custom-properties/{property_id}/catalog-values/{id}`

Update catalog value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-catalog-values/update-catalog-value).

`...args: CustomPropertyCatalogValuesUpdateCatalogValueParams`

```ts
declare const updateCatalogValue: (
  propertyId: number,
  valueId: number,
  body: CustomPropertyCatalogValuesUpdateCatalogValueBody,
  options?: OperationOptions,
) => Promise<CustomPropertyCatalogValuesUpdateCatalogValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field       | Type               | Presence |
| ----------- | ------------------ | -------- |
| `condition` | active \| inactive | Optional |
| `value`     | object             | Optional |
| `deleted`   | boolean            | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `name`, `author_id`, `updater_id`, `condition`.

## customPropertyCollectiveScoreValues

### createNewScoreValue

**`client.customPropertyCollectiveScoreValues.createNewScoreValue`** · `POST /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-score-values`

Create new score value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-score-values/create-new-score-value).

`...args: CustomPropertyCollectiveScoreValuesCreateNewScoreValueParams`

```ts
declare const createNewScoreValue: (
  cardId: number,
  propertyId: number,
  value: string,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveScoreValuesCreateNewScoreValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type   | Presence |
| ------- | ------ | -------- |
| `value` | string | Required |

**Response:** Object. Fields: `created`, `updated`, `id`, `value`, `custom_property_id`, `author_id`, `updater_id`, `company_id`, `card_id`.

### getListOfScoreValues

**`client.customPropertyCollectiveScoreValues.getListOfScoreValues`** · `GET /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-score-values`

Get list of score values. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-score-values/get-list-of-score-values).

`...args: CustomPropertyCollectiveScoreValuesGetListOfScoreValuesParams`

```ts
declare const getListOfScoreValues: (
  cardId: number,
  propertyId: number,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `custom_property_id`, `value`, `card_id`, `author_id`, `author`.

### updateScoreValue

**`client.customPropertyCollectiveScoreValues.updateScoreValue`** · `PATCH /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-score-values/{id}`

Update score value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-score-values/update-score-value).

`...args: CustomPropertyCollectiveScoreValuesUpdateScoreValueParams`

```ts
declare const updateScoreValue: (
  cardId: number,
  propertyId: number,
  valueId: number,
  value: string | null,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveScoreValuesUpdateScoreValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type           | Presence |
| ------- | -------------- | -------- |
| `value` | string \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `value`, `custom_property_id`, `author_id`, `updater_id`, `company_id`, `card_id`.

## customPropertyCollectiveVoteValues

### createNewVoteValue

**`client.customPropertyCollectiveVoteValues.createNewVoteValue`** · `POST /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-vote-values`

Create new vote value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-vote-values/create-new-vote-value).

`...args: CustomPropertyCollectiveVoteValuesCreateNewVoteValueParams`

```ts
declare const createNewVoteValue: (
  cardId: number,
  propertyId: number,
  body: CustomPropertyCollectiveVoteValuesCreateNewVoteValueBody,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveVoteValuesCreateNewVoteValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `emoji_vote`  | string  | Optional |
| `number_vote` | integer | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `number_vote`, `emoji_vote`, `custom_property_id`, `author_id`, `company_id`, `card_id`.

### getListOfVoteValues

**`client.customPropertyCollectiveVoteValues.getListOfVoteValues`** · `GET /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-vote-values`

Get list of vote values. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-vote-values/get-list-of-vote-values).

`...args: CustomPropertyCollectiveVoteValuesGetListOfVoteValuesParams`

```ts
declare const getListOfVoteValues: (
  cardId: number,
  propertyId: number,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `custom_property_id`, `number_vote`, `emoji_vote`, `card_id`, `author_id`, `author`.

### removeVoteValue

**`client.customPropertyCollectiveVoteValues.removeVoteValue`** · `DELETE /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-vote-values/{id}`

Remove vote value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-vote-values/remove-vote-value).

`...args: CustomPropertyCollectiveVoteValuesRemoveVoteValueParams`

```ts
declare const removeVoteValue: (
  cardId: number,
  propertyId: number,
  id: number,
  emojiVote: string,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `emoji_vote` | string | Optional |

**Response:** Object. Fields: `id`, `custom_property_id`, `number_vote`, `emoji_vote`, `card_id`, `author_id`.

### updateVoteValue

**`client.customPropertyCollectiveVoteValues.updateVoteValue`** · `PATCH /api/latest/cards/{card_id}/custom-properties/{property_id}/collective-vote-values/{id}`

Update vote value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-collective-vote-values/update-vote-value).

`...args: CustomPropertyCollectiveVoteValuesUpdateVoteValueParams`

```ts
declare const updateVoteValue: (
  cardId: number,
  propertyId: number,
  id: number,
  numberVote?: number | null,
  options?: OperationOptions,
) => Promise<CustomPropertyCollectiveVoteValuesUpdateVoteValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `card_id`     | integer | Required |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field         | Type           | Presence |
| ------------- | -------------- | -------- |
| `number_vote` | number \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `number_vote`, `emoji_vote`, `custom_property_id`, `author_id`, `company_id`, `card_id`.

## customPropertySelectValues

### createNewSelectValue

**`client.customPropertySelectValues.createNewSelectValue`** · `POST /api/latest/company/custom-properties/{property_id}/select-values`

Create new select value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-select-values/create-new-select-value).

`...args: CustomPropertySelectValuesCreateNewSelectValueParams`

```ts
declare const createNewSelectValue: (
  propertyId: number,
  value: string,
  color?: number | null,
  options?: OperationOptions,
) => Promise<CustomPropertySelectValuesCreateNewSelectValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type            | Presence |
| ------- | --------------- | -------- |
| `value` | string          | Required |
| `color` | integer \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `color`, `author_id`, `company_id`, `sort_order`, `external_id`, `condition`.

### getListOfSelectValues

**`client.customPropertySelectValues.getListOfSelectValues`** · `GET /api/latest/company/custom-properties/{property_id}/select-values`

Get list of select values. [Kaiten documentation](https://developers.kaiten.ru/custom-property-select-values/get-list-of-select-values).

`...args: CustomPropertySelectValuesGetListOfSelectValuesParams`

```ts
declare const getListOfSelectValues: (
  propertyId: number,
  query?: CustomPropertySelectValuesGetListOfSelectValuesQuery,
  options?: OperationOptions,
) => Promise<CustomPropertySelectValuesGetListOfSelectValuesResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |

**Query parameters**

| Field              | Type    | Presence |
| ------------------ | ------- | -------- |
| `v2_select_search` | boolean | Optional |
| `query`            | string  | Optional |
| `order_by`         | string  | Optional |
| `ids`              | array   | Optional |
| `conditions`       | array   | Optional |
| `offset`           | integer | Optional |
| `limit`            | integer | Optional |

**Response:** Array. Fields: `id`, `custom_property_id`, `value`, `color`, `sort_order`, `external_id`, `updated`, `condition`.

### getSelectValue

**`client.customPropertySelectValues.getSelectValue`** · `GET /api/latest/company/custom-properties/{property_id}/select-values/{id}`

Get select value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-select-values/get-select-value).

`...args: CustomPropertySelectValuesGetSelectValueParams`

```ts
declare const getSelectValue: (
  propertyId: number,
  valueId: number,
  options?: OperationOptions,
) => Promise<CustomPropertySelectValuesGetSelectValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `color`, `author_id`, `company_id`, `sort_order`, `external_id`, `condition`.

### removeProperty

**`client.customPropertySelectValues.removeProperty`** · `DELETE /api/latest/company/custom-properties/{property_id}/select-values/{id}`

Remove property. [Kaiten documentation](https://developers.kaiten.ru/custom-property-select-values/remove-property).

`...args: CustomPropertySelectValuesRemovePropertyParams`

```ts
declare const removeProperty: (
  propertyId: number,
  valueId: number,
  options?: OperationOptions,
) => Promise<CustomPropertySelectValuesRemovePropertyResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `color`, `author_id`, `company_id`, `sort_order`, `external_id`, `condition`.

### updateSelectValue

**`client.customPropertySelectValues.updateSelectValue`** · `PATCH /api/latest/company/custom-properties/{property_id}/select-values/{id}`

Update select value. [Kaiten documentation](https://developers.kaiten.ru/custom-property-select-values/update-select-value).

`...args: CustomPropertySelectValuesUpdateSelectValueParams`

```ts
declare const updateSelectValue: (
  propertyId: number,
  valueId: number,
  body: CustomPropertySelectValuesUpdateSelectValueBody,
  options?: OperationOptions,
) => Promise<CustomPropertySelectValuesUpdateSelectValueResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `id`          | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type               | Presence |
| ------------ | ------------------ | -------- |
| `value`      | string             | Optional |
| `color`      | integer \| null    | Optional |
| `condition`  | active \| inactive | Optional |
| `sort_order` | number             | Optional |
| `deleted`    | boolean            | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `custom_property_id`, `value`, `color`, `author_id`, `company_id`, `sort_order`, `external_id`, `condition`.

## customPropertyTreeEntities

### addTreeEntityToCustomProperty

**`client.customPropertyTreeEntities.addTreeEntityToCustomProperty`** · `POST /api/latest/company/custom-properties/{property_id}/tree-entities`

Add tree entity to custom property. [Kaiten documentation](https://developers.kaiten.ru/custom-property-tree-entities/add-tree-entity-to-custom-property).

`...args: CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyParams`

```ts
declare const addTreeEntityToCustomProperty: (
  propertyId: number,
  treeEntityUid: string,
  options?: OperationOptions,
) => Promise<CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field             | Type   | Presence |
| ----------------- | ------ | -------- |
| `tree_entity_uid` | string | Required |

**Response:** Object. Fields: `id`.

### deleteTreeEntityFromCustomProperty

**`client.customPropertyTreeEntities.deleteTreeEntityFromCustomProperty`** · `DELETE /api/latest/company/custom-properties/{property_id}/tree-entities/{uid}`

Delete tree entity from custom property. [Kaiten documentation](https://developers.kaiten.ru/custom-property-tree-entities/delete-tree-entity-from-custom-property).

`...args: CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyParams`

```ts
declare const deleteTreeEntityFromCustomProperty: (
  propertyId: number,
  uid: string,
  options?: OperationOptions,
) => Promise<void>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |
| `uid`         | string  | Required |

**Query parameters**

**none.**

**Response:** No body

### getListOfCustomPropertyTreeEntities

**`client.customPropertyTreeEntities.getListOfCustomPropertyTreeEntities`** · `GET /api/latest/company/custom-properties/{property_id}/tree-entities`

Get list of custom property tree entities. [Kaiten documentation](https://developers.kaiten.ru/custom-property-tree-entities/get-list-of-custom-property-tree-entities).

`...args: CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesParams`

```ts
declare const getListOfCustomPropertyTreeEntities: (
  propertyId: number,
  options?: OperationOptions,
) => Promise<CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse>;
```

**Path parameters**

| Field         | Type    | Presence |
| ------------- | ------- | -------- |
| `property_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `uid`, `title`, `company_id`, `sort_order`, `path`, `parent_entity_uid`, `entity_type`, `access`, `archived`, `for_everyone_access_role_id`, `protected`.

## documentGroups

### createNewDocumentGroup

**`client.documentGroups.createNewDocumentGroup`** · `POST /api/latest/document-groups`

Create new document group. [Kaiten documentation](https://developers.kaiten.ru/document-groups/create-new-document-group).

`...args: DocumentGroupsCreateNewDocumentGroupParams`

```ts
declare const createNewDocumentGroup: (
  body: DocumentGroupsCreateNewDocumentGroupBody,
  options?: OperationOptions,
) => Promise<DocumentGroupsCreateNewDocumentGroupResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                         | Type           | Presence |
| ----------------------------- | -------------- | -------- |
| `title`                       | string         | Required |
| `parent_entity_uid`           | string \| null | Optional |
| `for_everyone_access_role_id` | string \| null | Optional |
| `sort_order`                  | number         | Optional |
| `key`                         | string \| null | Optional |

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `parent_group_id`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `hostname`, `redirect_url`, `key`, `icon_type`, `icon_value`, `icon_color`, `public`, `news_feed`, `hidden_on_public_site`, `path`, `index_document_uid`, `access_record`.

### removeDocumentGroup

**`client.documentGroups.removeDocumentGroup`** · `DELETE /api/latest/document-groups/{document_group_uid}`

Remove document group. [Kaiten documentation](https://developers.kaiten.ru/document-groups/remove-document-group).

`...args: DocumentGroupsRemoveDocumentGroupParams`

```ts
declare const removeDocumentGroup: (
  documentGroupUid: string,
  options?: OperationOptions,
) => Promise<DocumentGroupsRemoveDocumentGroupResponse>;
```

**Path parameters**

| Field                | Type   | Presence |
| -------------------- | ------ | -------- |
| `document_group_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `parent_group_id`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `hostname`, `redirect_url`, `key`, `icon_type`, `icon_value`, `icon_color`, `public`, `news_feed`, `hidden_on_public_site`, `path`, `index_document_uid`.

### retrieveDocumentGroup

**`client.documentGroups.retrieveDocumentGroup`** · `GET /api/latest/document-groups/{document_group_uid}`

Retrieve document group. [Kaiten documentation](https://developers.kaiten.ru/document-groups/retrieve-document-group).

`...args: DocumentGroupsRetrieveDocumentGroupParams`

```ts
declare const retrieveDocumentGroup: (
  documentGroupUid: string,
  options?: OperationOptions,
) => Promise<DocumentGroupsRetrieveDocumentGroupResponse>;
```

**Path parameters**

| Field                | Type   | Presence |
| -------------------- | ------ | -------- |
| `document_group_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `parent_group_id`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `hostname`, `redirect_url`, `key`, `icon_type`, `icon_value`, `icon_color`, `public`, `news_feed`, `hidden_on_public_site`, `path`, `index_document_uid`, `access_record`.

### retrieveListOfDocumentGroups

**`client.documentGroups.retrieveListOfDocumentGroups`** · `GET /api/latest/document-groups`

Retrieve list of document groups. [Kaiten documentation](https://developers.kaiten.ru/document-groups/retrieve-list-of-document-groups).

`...args: DocumentGroupsRetrieveListOfDocumentGroupsParams`

```ts
declare const retrieveListOfDocumentGroups: {
  (
    query: DocumentGroupsRetrieveListOfDocumentGroupsQuery & { version: 2 },
    options?: OperationOptions,
  ): Promise<
    SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
  >;
  (
    query?: Omit<DocumentGroupsRetrieveListOfDocumentGroupsQuery, "version"> & {
      version?: 1;
    },
    options?: OperationOptions,
  ): Promise<DocumentGroupsRetrieveListOfDocumentGroupsResponse>;
  (
    query: DocumentGroupsRetrieveListOfDocumentGroupsQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | DocumentGroupsRetrieveListOfDocumentGroupsResponse
    | SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
  >;
};
```

With `query.version: 2`, the result is `SearchResponseV2<...>` containing `result` and `position`; otherwise the result is an array.

**Path parameters**

**none.**

**Query parameters**

| Field            | Type    | Presence |
| ---------------- | ------- | -------- |
| `query`          | string  | Optional |
| `offset`         | integer | Optional |
| `limit`          | integer | Optional |
| `version`        | integer | Optional |
| `condition`      | integer | Optional |
| `start_position` | string  | Optional |
| `role`           | integer | Optional |

**Response:** Array. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `parent_group_id`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `hostname`, `redirect_url`, `key`, `icon_type`, `icon_value`, `icon_color`, `public`, `news_feed`, `hidden_on_public_site`, `path`, `index_document_uid`.

### updateDocumentGroup

**`client.documentGroups.updateDocumentGroup`** · `PATCH /api/latest/document-groups/{document_group_uid}`

Update document group. [Kaiten documentation](https://developers.kaiten.ru/document-groups/update-document-group).

`...args: DocumentGroupsUpdateDocumentGroupParams`

```ts
declare const updateDocumentGroup: (
  documentGroupUid: string,
  body: DocumentGroupsUpdateDocumentGroupBody,
  options?: OperationOptions,
) => Promise<DocumentGroupsUpdateDocumentGroupResponse>;
```

**Path parameters**

| Field                | Type   | Presence |
| -------------------- | ------ | -------- |
| `document_group_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field                         | Type                      | Presence |
| ----------------------------- | ------------------------- | -------- |
| `title`                       | string                    | Optional |
| `parent_entity_uid`           | string \| null            | Optional |
| `sort_order`                  | number                    | Optional |
| `access`                      | for_everyone \| by_invite | Optional |
| `for_everyone_access_role_id` | string \| null            | Optional |
| `hostname`                    | string \| null            | Optional |
| `redirect_url`                | string \| null            | Optional |
| `key`                         | string \| null            | Optional |
| `icon_type`                   | material_icon \| null     | Optional |
| `icon_value`                  | string \| null            | Optional |
| `icon_color`                  | integer \| null           | Optional |
| `hidden_on_public_site`       | boolean                   | Optional |
| `news_feed`                   | boolean                   | Optional |
| `index_document_uid`          | string \| null            | Optional |

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `parent_group_id`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `hostname`, `redirect_url`, `key`, `icon_type`, `icon_value`, `icon_color`, `public`, `news_feed`, `hidden_on_public_site`, `path`, `index_document_uid`, `access_record`.

## documentSchemas

### getDocumentDataSchema

**`client.documentSchemas.getDocumentDataSchema`** · `GET /api/latest/document-schemas/{id}`

Get document data schema. [Kaiten documentation](https://developers.kaiten.ru/document-schemas/get-document-data-schema).

`...args: DocumentSchemasGetDocumentDataSchemaParams`

```ts
declare const getDocumentDataSchema: {
  (
    schemaVersion: string,
    format: "prosemirror",
    options?: OperationOptions,
  ): Promise<DocumentProseMirrorSchema>;
  (
    schemaVersion: string,
    format?: "draft-06",
    options?: OperationOptions,
  ): Promise<DocumentJsonSchema>;
  (
    schemaVersion: string,
    format: "draft-06" | "prosemirror" | undefined,
    options?: OperationOptions,
  ): Promise<DocumentSchemasGetDocumentDataSchemaResponse>;
};
```

**Path parameters**

| Field | Type   | Presence |
| ----- | ------ | -------- |
| `id`  | string | Required |

**Query parameters**

| Field    | Type                    | Presence |
| -------- | ----------------------- | -------- |
| `format` | draft-06 \| prosemirror | Optional |

**Response:** Object. Fields: `$schema`, `$id`, `title`, `description`, `allOf`, `version`, `definitions`.

## documents

### createNewDocument

**`client.documents.createNewDocument`** · `POST /api/latest/documents`

Create new document. [Kaiten documentation](https://developers.kaiten.ru/documents/create-new-document).

`...args: DocumentsCreateNewDocumentParams`

```ts
declare const createNewDocument: (
  body: DocumentsCreateNewDocumentBody,
  options?: OperationOptions,
) => Promise<DocumentsCreateNewDocumentResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                         | Type           | Presence |
| ----------------------------- | -------------- | -------- |
| `title`                       | string         | Optional |
| `sort_order`                  | number         | Required |
| `parent_entity_uid`           | string \| null | Optional |
| `for_everyone_access_role_id` | string         | Optional |
| `clone_uid`                   | string         | Optional |
| `clone_version`               | number         | Optional |
| `key`                         | string \| null | Optional |

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `data`, `version`, `published_version`, `publish_date`, `public`, `hidden_on_public_site`, `settings`, `key`, `redirect_url`, `icon_type`, `icon_value`, `icon_color`, `path`, `schema_version`, `notification_period_start`, `notification_period_end`, `group_id`, `access_record`.

### removeDocument

**`client.documents.removeDocument`** · `DELETE /api/latest/documents/{document_uid}`

Remove document. [Kaiten documentation](https://developers.kaiten.ru/documents/remove-document).

`...args: DocumentsRemoveDocumentParams`

```ts
declare const removeDocument: (
  documentUid: string,
  options?: OperationOptions,
) => Promise<DocumentsRemoveDocumentResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `document_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `version`, `published_version`, `publish_date`, `public`, `hidden_on_public_site`, `settings`, `key`, `redirect_url`, `icon_type`, `icon_value`, `icon_color`, `path`, `schema_version`, `notification_period_start`, `notification_period_end`, `group_id`.

### retrieveDocument

**`client.documents.retrieveDocument`** · `GET /api/latest/documents/{document_uid}`

Retrieve document. [Kaiten documentation](https://developers.kaiten.ru/documents/retrieve-document).

`...args: DocumentsRetrieveDocumentParams`

```ts
declare const retrieveDocument: (
  documentUid: string,
  options?: OperationOptions,
) => Promise<DocumentsRetrieveDocumentResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `document_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `data`, `version`, `published_version`, `publish_date`, `public`, `hidden_on_public_site`, `settings`, `key`, `redirect_url`, `icon_type`, `icon_value`, `icon_color`, `path`, `schema_version`, `notification_period_start`, `notification_period_end`, `group_id`, `access_record`.

### retrieveListOfDocuments

**`client.documents.retrieveListOfDocuments`** · `GET /api/latest/documents`

Retrieve list of documents. [Kaiten documentation](https://developers.kaiten.ru/documents/retrieve-list-of-documents).

`...args: DocumentsRetrieveListOfDocumentsParams`

```ts
declare const retrieveListOfDocuments: {
  (
    query: DocumentsRetrieveListOfDocumentsQuery & { version: 2 },
    options?: OperationOptions,
  ): Promise<SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>>;
  (
    query?: Omit<DocumentsRetrieveListOfDocumentsQuery, "version"> & {
      version?: 1;
    },
    options?: OperationOptions,
  ): Promise<DocumentsRetrieveListOfDocumentsResponse>;
  (
    query: DocumentsRetrieveListOfDocumentsQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | DocumentsRetrieveListOfDocumentsResponse
    | SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>
  >;
};
```

With `query.version: 2`, the result is `SearchResponseV2<...>` containing `result` and `position`; otherwise the result is an array.

**Path parameters**

**none.**

**Query parameters**

| Field                    | Type    | Presence |
| ------------------------ | ------- | -------- |
| `query`                  | string  | Optional |
| `offset`                 | integer | Optional |
| `limit`                  | integer | Optional |
| `version`                | integer | Optional |
| `condition`              | integer | Optional |
| `fields`                 | string  | Optional |
| `start_position`         | string  | Optional |
| `include_search_preview` | boolean | Optional |

**Response:** Array. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `version`, `published_version`, `publish_date`, `public`, `hidden_on_public_site`, `settings`, `key`, `redirect_url`, `icon_type`, `icon_value`, `icon_color`, `path`, `schema_version`, `notification_period_start`, `notification_period_end`, `group_id`.

### updateDocument

**`client.documents.updateDocument`** · `PATCH /api/latest/documents/{document_uid}`

Update document. [Kaiten documentation](https://developers.kaiten.ru/documents/update-document).

`...args: DocumentsUpdateDocumentParams`

```ts
declare const updateDocument: (
  documentUid: string,
  body: DocumentsUpdateDocumentBody,
  options?: OperationOptions,
) => Promise<DocumentsUpdateDocumentResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `document_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field                         | Type                           | Presence |
| ----------------------------- | ------------------------------ | -------- |
| `title`                       | string                         | Optional |
| `sort_order`                  | number                         | Optional |
| `publish_date`                | string \| null                 | Optional |
| `data`                        | object                         | Optional |
| `access`                      | for_everyone \| by_invite      | Optional |
| `parent_entity_uid`           | string \| null                 | Optional |
| `for_everyone_access_role_id` | string                         | Optional |
| `public`                      | boolean                        | Optional |
| `redirect_url`                | string \| null                 | Optional |
| `hidden_on_public_site`       | boolean                        | Optional |
| `settings`                    | object                         | Optional |
| `backup_version`              | number                         | Optional |
| `published_version`           | number \| null \| current      | Optional |
| `key`                         | string \| null                 | Optional |
| `icon_type`                   | emoji \| material_icon \| null | Optional |
| `icon_value`                  | string \| null                 | Optional |
| `icon_color`                  | integer \| null                | Optional |
| `notification_period_start`   | string \| null                 | Optional |
| `notification_period_end`     | string \| null                 | Optional |
| `slug`                        | string \| null                 | Optional |

**Response:** Object. Fields: `uid`, `id`, `title`, `created`, `updated`, `archived`, `company_id`, `author_id`, `parent_entity_uid`, `entity_type`, `sort_order`, `access`, `for_everyone_access_role_id`, `data`, `version`, `published_version`, `publish_date`, `public`, `hidden_on_public_site`, `settings`, `key`, `redirect_url`, `icon_type`, `icon_value`, `icon_color`, `path`, `schema_version`, `notification_period_start`, `notification_period_end`, `group_id`, `access_record`.

## groupAdmins

### addAdminToGroup

**`client.groupAdmins.addAdminToGroup`** · `POST /api/latest/groups/{group_uid}/admins`

Add admin to group. [Kaiten documentation](https://developers.kaiten.ru/group-admins/add-admin-to-group). **Beta.**

`...args: GroupAdminsAddAdminToGroupParams`

```ts
declare const addAdminToGroup: (
  groupUid: string,
  userId: number,
  options?: OperationOptions,
) => Promise<GroupAdminsAddAdminToGroupResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `user_id` | integer | Required |

**Response:** Object. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`.

### getListOfGroupAdmins

**`client.groupAdmins.getListOfGroupAdmins`** · `GET /api/latest/groups/{group_uid}/admins`

Get list of group admins. [Kaiten documentation](https://developers.kaiten.ru/group-admins/get-list-of-group-admins). **Beta.**

`...args: GroupAdminsGetListOfGroupAdminsParams`

```ts
declare const getListOfGroupAdmins: (
  groupUid: string,
  options?: OperationOptions,
) => Promise<GroupAdminsGetListOfGroupAdminsResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `uid`, `full_name`, `username`, `email`, `activated`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `sd_telegram_id`, `timezone`, `news_subscription`, `theme`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`, `delete_confirmation_sent_at`.

### removeAdminFromGroup

**`client.groupAdmins.removeAdminFromGroup`** · `DELETE /api/latest/groups/{group_uid}/admins/{user_id}`

Remove admin from group. [Kaiten documentation](https://developers.kaiten.ru/group-admins/remove-admin-from-group). **Beta.**

`...args: GroupAdminsRemoveAdminFromGroupParams`

```ts
declare const removeAdminFromGroup: (
  groupUid: string,
  userId: number,
  options?: OperationOptions,
) => Promise<GroupAdminsRemoveAdminFromGroupResponse>;
```

**Path parameters**

| Field       | Type    | Presence |
| ----------- | ------- | -------- |
| `group_uid` | string  | Required |
| `user_id`   | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`.

## groupEntities

### addEntity

**`client.groupEntities.addEntity`** · `POST /api/latest/company/groups/{group_uid}/entities`

Add entity. [Kaiten documentation](https://developers.kaiten.ru/group-entities/add-entity). **Beta.**

`...args: GroupEntitiesAddEntityParams`

```ts
declare const addEntity: (
  groupUid: string,
  entityUid: string,
  roleIds: string[],
  options?: OperationOptions,
) => Promise<GroupEntitiesAddEntityResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type            | Presence |
| ------------ | --------------- | -------- |
| `entity_uid` | string          | Required |
| `role_ids`   | array of string | Required |

**Response:** Object. Fields: `group_id`, `entity_uid`, `role_permissions`, `access_mod`, `own_role_ids`, `own_access_mod`, `role_ids`.

### getListOfGroupEntities

**`client.groupEntities.getListOfGroupEntities`** · `GET /api/latest/company/groups/{group_uid}/entities`

Get list of group entities. [Kaiten documentation](https://developers.kaiten.ru/group-entities/get-list-of-group-entities). **Beta.**

`...args: GroupEntitiesGetListOfGroupEntitiesParams`

```ts
declare const getListOfGroupEntities: (
  groupUid: string,
  options?: OperationOptions,
) => Promise<GroupEntitiesGetListOfGroupEntitiesResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `uid`, `path`, `title`, `entity_type`, `own_role_ids`.

### removeEntity

**`client.groupEntities.removeEntity`** · `DELETE /api/latest/company/groups/{group_uid}/entities/{uid}`

Remove entity. [Kaiten documentation](https://developers.kaiten.ru/group-entities/remove-entity). **Beta.**

`...args: GroupEntitiesRemoveEntityParams`

```ts
declare const removeEntity: (
  groupUid: string,
  uid: string,
  options?: OperationOptions,
) => Promise<GroupEntitiesRemoveEntityResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |
| `uid`       | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `group_id`, `entity_uid`, `role_permissions`, `access_mod`, `role`, `own_role_ids`, `own_access_mod`, `role_ids`, `own_role`.

### updateGroupEntity

**`client.groupEntities.updateGroupEntity`** · `PATCH /api/latest/company/groups/{group_uid}/entities/{uid}`

Update group entity. [Kaiten documentation](https://developers.kaiten.ru/group-entities/update-group-entity). **Beta.**

`...args: GroupEntitiesUpdateGroupEntityParams`

```ts
declare const updateGroupEntity: (
  groupUid: string,
  uid: string,
  roleIds: string[],
  options?: OperationOptions,
) => Promise<GroupEntitiesUpdateGroupEntityResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |
| `uid`       | string | Required |

**Query parameters**

**none.**

**Request body**

| Field      | Type            | Presence |
| ---------- | --------------- | -------- |
| `role_ids` | array of string | Optional |

**Response:** Object. Fields: `group_id`, `entity_uid`, `role_permissions`, `access_mod`, `own_role_ids`, `own_access_mod`, `role_ids`.

## groupUsers

### addUserToGroup

**`client.groupUsers.addUserToGroup`** · `POST /api/latest/groups/{group_uid}/users`

Add user to group. [Kaiten documentation](https://developers.kaiten.ru/group-users/add-user-to-group). **Beta.**

`...args: GroupUsersAddUserToGroupParams`

```ts
declare const addUserToGroup: (
  groupUid: string,
  userId: number,
  requestId?: string,
  operatorComment?: string | null,
  options?: OperationOptions,
) => Promise<GroupUsersAddUserToGroupResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field              | Type           | Presence |
| ------------------ | -------------- | -------- |
| `user_id`          | integer        | Required |
| `request_id`       | string         | Optional |
| `operator_comment` | string \| null | Optional |

**Response:** Object. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`.

### getListOfGroupUsers

**`client.groupUsers.getListOfGroupUsers`** · `GET /api/latest/groups/{group_uid}/users`

Get list of group users. [Kaiten documentation](https://developers.kaiten.ru/group-users/get-list-of-group-users). **Beta.**

`...args: GroupUsersGetListOfGroupUsersParams`

```ts
declare const getListOfGroupUsers: (
  groupUid: string,
  options?: OperationOptions,
) => Promise<GroupUsersGetListOfGroupUsersResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `group_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `uid`, `full_name`, `username`, `email`, `activated`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `sd_telegram_id`, `timezone`, `news_subscription`, `theme`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`, `delete_confirmation_sent_at`.

### removeUserFromGroup

**`client.groupUsers.removeUserFromGroup`** · `DELETE /api/latest/groups/{group_uid}/users/{user_id}`

Remove user from group. [Kaiten documentation](https://developers.kaiten.ru/group-users/remove-user-from-group). **Beta.**

`...args: GroupUsersRemoveUserFromGroupParams`

```ts
declare const removeUserFromGroup: (
  groupUid: string,
  userId: number,
  options?: OperationOptions,
) => Promise<GroupUsersRemoveUserFromGroupResponse>;
```

**Path parameters**

| Field       | Type    | Presence |
| ----------- | ------- | -------- |
| `group_uid` | string  | Required |
| `user_id`   | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `uid`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `email_blocked`, `email_blocked_reason`, `delete_requested_at`.

## groups

### createGroup

**`client.groups.createGroup`** · `POST /api/latest/company/groups`

Create group. [Kaiten documentation](https://developers.kaiten.ru/groups/create-group). **Beta.**

`...args: GroupsCreateGroupParams`

```ts
declare const createGroup: (
  name: string,
  permissions?: number,
  addToCardsAndSpacesEnabled?: boolean,
  options?: OperationOptions,
) => Promise<GroupsCreateGroupResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                             | Type    | Presence |
| --------------------------------- | ------- | -------- |
| `name`                            | string  | Required |
| `permissions`                     | integer | Optional |
| `add_to_cards_and_spaces_enabled` | boolean | Optional |

**Response:** Object. Fields: `name`, `permissions`, `add_to_cards_and_spaces_enabled`, `updated`, `created`, `id`, `uid`.

### getGroup

**`client.groups.getGroup`** · `GET /api/latest/company/groups/{uid}`

Get group. [Kaiten documentation](https://developers.kaiten.ru/groups/get-group). **Beta.**

`...args: GroupsGetGroupParams`

```ts
declare const getGroup: (
  uid: string,
  options?: OperationOptions,
) => Promise<GroupsGetGroupResponse>;
```

**Path parameters**

| Field | Type   | Presence |
| ----- | ------ | -------- |
| `uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `name`, `permissions`, `add_to_cards_and_spaces_enabled`, `updated`, `created`, `id`, `uid`.

### getListOfGroups

**`client.groups.getListOfGroups`** · `GET /api/latest/company/groups`

Get list of groups. [Kaiten documentation](https://developers.kaiten.ru/groups/get-list-of-groups). **Beta.**

`...args: GroupsGetListOfGroupsParams`

```ts
declare const getListOfGroups: (
  query?: GroupsGetListOfGroupsQuery,
  options?: OperationOptions,
) => Promise<GroupsGetListOfGroupsResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field                       | Type    | Presence |
| --------------------------- | ------- | -------- |
| `with_tree_entities`        | boolean | Optional |
| `with_users_count`          | boolean | Optional |
| `with_sync_group_attribute` | boolean | Optional |
| `condition`                 | enum    | Optional |
| `query`                     | string  | Optional |
| `limit`                     | integer | Optional |
| `offset`                    | integer | Optional |

**Response:** Array. Fields: `name`, `permissions`, `add_to_cards_and_spaces_enabled`, `updated`, `created`, `id`, `uid`.

### removeGroup

**`client.groups.removeGroup`** · `DELETE /api/latest/company/groups/{uid}`

Remove Group. [Kaiten documentation](https://developers.kaiten.ru/groups/remove-group). **Beta.**

`...args: GroupsRemoveGroupParams`

```ts
declare const removeGroup: (
  uid: string,
  options?: OperationOptions,
) => Promise<GroupsRemoveGroupResponse>;
```

**Path parameters**

| Field | Type   | Presence |
| ----- | ------ | -------- |
| `uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `name`, `permissions`, `add_to_cards_and_spaces_enabled`, `updated`, `created`, `id`, `uid`.

### updateGroup

**`client.groups.updateGroup`** · `PATCH /api/latest/company/groups/{uid}`

Update group. [Kaiten documentation](https://developers.kaiten.ru/groups/update-group). **Beta.**

`...args: GroupsUpdateGroupParams`

```ts
declare const updateGroup: (
  uid: string,
  name?: string,
  permissions?: number,
  addToCardsAndSpacesEnabled?: boolean,
  options?: OperationOptions,
) => Promise<GroupsUpdateGroupResponse>;
```

**Path parameters**

| Field | Type   | Presence |
| ----- | ------ | -------- |
| `uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field                             | Type    | Presence |
| --------------------------------- | ------- | -------- |
| `name`                            | string  | Optional |
| `permissions`                     | integer | Optional |
| `add_to_cards_and_spaces_enabled` | boolean | Optional |

**Response:** Object. Fields: `name`, `permissions`, `add_to_cards_and_spaces_enabled`, `updated`, `created`, `id`, `uid`.

## iterations

### addCardToIteration

**`client.iterations.addCardToIteration`** · `POST /api/latest/spaces/{space_uid}/iterations/{iteration_id}/cards`

Add card to iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/add-card-to-iteration). **Beta.**

`...args: IterationsAddCardToIterationParams`

```ts
declare const addCardToIteration: (
  spaceUid: string,
  iterationId: string,
  cardUid: string,
  options?: OperationOptions,
) => Promise<IterationsAddCardToIterationResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `space_uid`    | string | Required |
| `iteration_id` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field      | Type   | Presence |
| ---------- | ------ | -------- |
| `card_uid` | string | Required |

**Response:** Object. Fields: `iteration_id`, `card_uid`, `added_by_uid`, `removed_at`, `removed_by_uid`, `sort_order`, `created`, `updated`.

### createIteration

**`client.iterations.createIteration`** · `POST /api/latest/spaces/{space_uid}/iterations`

Create iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/create-iteration). **Beta.**

`...args: IterationsCreateIterationParams`

```ts
declare const createIteration: (
  spaceUid: string,
  body: IterationsCreateIterationBody,
  options?: OperationOptions,
) => Promise<IterationsCreateIterationResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field         | Type           | Presence |
| ------------- | -------------- | -------- |
| `title`       | string         | Required |
| `goal`        | string \| null | Optional |
| `start_date`  | string \| null | Optional |
| `finish_date` | string \| null | Optional |

**Response:** Object. Fields: `id`, `space_uid`, `title`, `goal`, `status`, `creator_uid`, `updater_uid`, `start_date`, `finish_date`, `actual_finish_date`, `sort_order`, `data`, `created`, `updated`.

### deleteIteration

**`client.iterations.deleteIteration`** · `DELETE /api/latest/spaces/{space_uid}/iterations/{id}`

Delete iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/delete-iteration). **Beta.**

`...args: IterationsDeleteIterationParams`

```ts
declare const deleteIteration: (
  spaceUid: string,
  id: string,
  newIterationId?: string | null,
  options?: OperationOptions,
) => Promise<IterationsDeleteIterationResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |
| `id`        | string | Required |

**Query parameters**

**none.**

**Request body**

| Field              | Type           | Presence |
| ------------------ | -------------- | -------- |
| `new_iteration_id` | string \| null | Optional |

**Response:** Object. Fields: `id`, `space_uid`, `title`, `goal`, `status`, `creator_uid`, `updater_uid`, `start_date`, `finish_date`, `actual_finish_date`, `sort_order`, `data`, `moved_cards`, `created`, `updated`.

### getCardIterationsHistory

**`client.iterations.getCardIterationsHistory`** · `GET /api/latest/cards/{card_uid}/iterations-history`

Get card iterations history. [Kaiten documentation](https://developers.kaiten.ru/iterations/get-card-iterations-history). **Beta.**

`...args: IterationsGetCardIterationsHistoryParams`

```ts
declare const getCardIterationsHistory: (
  cardUid: string,
  withDetails?: boolean,
  options?: OperationOptions,
) => Promise<IterationsGetCardIterationsHistoryResponse>;
```

**Path parameters**

| Field      | Type   | Presence |
| ---------- | ------ | -------- |
| `card_uid` | string | Required |

**Query parameters**

| Field          | Type    | Presence |
| -------------- | ------- | -------- |
| `with_details` | boolean | Optional |

**Response:** Array. Fields: `iteration_id`, `card_uid`, `added_by_uid`, `removed_at`, `removed_by_uid`, `sort_order`, `created`, `updated`.

### getIteration

**`client.iterations.getIteration`** · `GET /api/latest/spaces/{space_uid}/iterations/{id}`

Get iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/get-iteration). **Beta.**

`...args: IterationsGetIterationParams`

```ts
declare const getIteration: (
  spaceUid: string,
  id: string,
  options?: OperationOptions,
) => Promise<IterationsGetIterationResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |
| `id`        | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `space_uid`, `title`, `goal`, `status`, `creator_uid`, `updater_uid`, `start_date`, `finish_date`, `actual_finish_date`, `sort_order`, `data`, `created`, `updated`.

### removeCardFromIteration

**`client.iterations.removeCardFromIteration`** · `DELETE /api/latest/spaces/{space_uid}/iterations/{iteration_id}/cards/{uid}`

Remove card from iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/remove-card-from-iteration). **Beta.**

`...args: IterationsRemoveCardFromIterationParams`

```ts
declare const removeCardFromIteration: (
  spaceUid: string,
  iterationId: string,
  uid: string,
  options?: OperationOptions,
) => Promise<IterationsRemoveCardFromIterationResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `space_uid`    | string | Required |
| `iteration_id` | string | Required |
| `uid`          | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `iteration_id`, `card_uid`, `added_by_uid`, `removed_at`, `removed_by_uid`, `sort_order`, `created`, `updated`.

### retrieveCardsInIteration

**`client.iterations.retrieveCardsInIteration`** · `GET /api/latest/spaces/{space_uid}/iterations/{iteration_id}/cards`

Retrieve cards in iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/retrieve-cards-in-iteration). **Beta.**

`...args: IterationsRetrieveCardsInIterationParams`

```ts
declare const retrieveCardsInIteration: (
  spaceUid: string,
  iterationId: string,
  status?: string,
  options?: OperationOptions,
) => Promise<IterationsRetrieveCardsInIterationResponse>;
```

**Path parameters**

| Field          | Type   | Presence |
| -------------- | ------ | -------- |
| `space_uid`    | string | Required |
| `iteration_id` | string | Required |

**Query parameters**

| Field    | Type   | Presence |
| -------- | ------ | -------- |
| `status` | string | Optional |

**Response:** Array. Fields: `iteration_id`, `card_uid`, `card_id`, `added_by_uid`, `removed_at`, `removed_by_uid`, `sort_order`, `created`, `updated`.

### retrieveListOfIterations

**`client.iterations.retrieveListOfIterations`** · `GET /api/latest/spaces/{space_uid}/iterations`

Retrieve list of iterations. [Kaiten documentation](https://developers.kaiten.ru/iterations/retrieve-list-of-iterations). **Beta.**

`...args: IterationsRetrieveListOfIterationsParams`

```ts
declare const retrieveListOfIterations: (
  spaceUid: string,
  query?: IterationsRetrieveListOfIterationsQuery,
  options?: OperationOptions,
) => Promise<IterationsRetrieveListOfIterationsResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |

**Query parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `status`    | string | Optional |
| `with_data` | string | Optional |
| `limit`     | number | Optional |
| `offset`    | number | Optional |
| `order`     | string | Optional |

**Response:** Array. Fields: `id`, `space_uid`, `title`, `goal`, `status`, `creator_uid`, `updater_uid`, `start_date`, `finish_date`, `actual_finish_date`, `sort_order`, `data`, `created`, `updated`.

### updateIteration

**`client.iterations.updateIteration`** · `PATCH /api/latest/spaces/{space_uid}/iterations/{id}`

Update iteration. [Kaiten documentation](https://developers.kaiten.ru/iterations/update-iteration). **Beta.**

`...args: IterationsUpdateIterationParams`

```ts
declare const updateIteration: (
  spaceUid: string,
  id: string,
  body: IterationsUpdateIterationBody,
  options?: OperationOptions,
) => Promise<IterationsUpdateIterationResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |
| `id`        | string | Required |

**Query parameters**

**none.**

**Request body**

| Field                | Type                        | Presence |
| -------------------- | --------------------------- | -------- |
| `title`              | string                      | Optional |
| `goal`               | string \| null              | Optional |
| `status`             | planned \| active \| closed | Optional |
| `start_date`         | string \| null              | Optional |
| `finish_date`        | string \| null              | Optional |
| `actual_finish_date` | string \| null              | Optional |
| `new_iteration_id`   | string \| null              | Optional |

**Response:** Object. Fields: `id`, `space_uid`, `title`, `goal`, `status`, `creator_uid`, `updater_uid`, `start_date`, `finish_date`, `actual_finish_date`, `sort_order`, `data`, `created`, `updated`.

## lanes

### createNewLane

**`client.lanes.createNewLane`** · `POST /api/latest/boards/{board_id}/lanes`

Create new lane. [Kaiten documentation](https://developers.kaiten.ru/lanes/create-new-lane).

`...args: LanesCreateNewLaneParams`

```ts
declare const createNewLane: (
  boardId: number,
  body: LanesCreateNewLaneBody,
  options?: OperationOptions,
) => Promise<LanesCreateNewLaneResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                              | Type    | Presence |
| ---------------------------------- | ------- | -------- |
| `title`                            | string  | Required |
| `sort_order`                       | number  | Optional |
| `wip_limit`                        | integer | Optional |
| `wip_limit_type`                   | 1 \| 2  | Optional |
| `last_moved_warning_after_days`    | integer | Optional |
| `last_moved_warning_after_hours`   | integer | Optional |
| `last_moved_warning_after_minutes` | integer | Optional |
| `row_count`                        | integer | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `row_count`, `wip_limit`, `wip_limit_type`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `board_id`, `default_card_type_id`, `default_tags`, `external_id`, `condition`.

### getListOfLanes

**`client.lanes.getListOfLanes`** · `GET /api/latest/boards/{board_id}/lanes`

Get list of lanes. [Kaiten documentation](https://developers.kaiten.ru/lanes/get-list-of-lanes).

`...args: LanesGetListOfLanesParams`

```ts
declare const getListOfLanes: (
  boardId: number,
  condition?: string,
  options?: OperationOptions,
) => Promise<LanesGetListOfLanesResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |

**Query parameters**

| Field       | Type | Presence |
| ----------- | ---- | -------- |
| `condition` | enum | Optional |

**Response:** Array. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `row_count`, `board_id`, `wip_limit`, `wip_limit_type`, `default_tags`, `last_moved_warning_after_days`, `external_id`, `default_card_type_id`, `last_moved_warning_after_hours`, `condition`, `last_moved_warning_after_minutes`.

### removeLane

**`client.lanes.removeLane`** · `DELETE /api/latest/boards/{board_id}/lanes/{id}`

Remove lane. [Kaiten documentation](https://developers.kaiten.ru/lanes/remove-lane).

`...args: LanesRemoveLaneParams`

```ts
declare const removeLane: (
  boardId: number,
  laneId: number,
  force?: boolean,
  options?: OperationOptions,
) => Promise<LanesRemoveLaneResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type    | Presence |
| ------- | ------- | -------- |
| `force` | boolean | Optional |

**Response:** Object. Fields: `id`.

### updateLane

**`client.lanes.updateLane`** · `PATCH /api/latest/boards/{board_id}/lanes/{id}`

Update lane. [Kaiten documentation](https://developers.kaiten.ru/lanes/update-lane).

`...args: LanesUpdateLaneParams`

```ts
declare const updateLane: (
  boardId: number,
  laneId: number,
  body: LanesUpdateLaneBody,
  options?: OperationOptions,
) => Promise<LanesUpdateLaneResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `board_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                              | Type            | Presence |
| ---------------------------------- | --------------- | -------- |
| `title`                            | string          | Optional |
| `sort_order`                       | number          | Optional |
| `wip_limit`                        | integer \| null | Optional |
| `wip_limit_type`                   | 1 \| 2          | Optional |
| `last_moved_warning_after_days`    | integer         | Optional |
| `last_moved_warning_after_hours`   | integer         | Optional |
| `last_moved_warning_after_minutes` | integer         | Optional |
| `row_count`                        | integer         | Optional |
| `default_tags`                     | string \| null  | Optional |
| `default_card_type_id`             | integer \| null | Optional |
| `condition`                        | 1 \| 2          | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `row_count`, `wip_limit`, `wip_limit_type`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `board_id`, `default_card_type_id`, `default_tags`, `external_id`, `condition`.

## restrictedAccessCardFiles

### attachFileToCard

**`client.restrictedAccessCardFiles.attachFileToCard`** · `POST /api/latest/cards/{card_uid}/files`

Attach file to card. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-card-files/attach-file-to-card).

`...args: RestrictedAccessCardFilesAttachFileToCardParams`

```ts
declare const attachFileToCard: (
  cardUid: string,
  file: Blob,
  options?: FileUploadOptions,
) => Promise<RestrictedAccessCardFilesAttachFileToCardResponse>;
```

**Path parameters**

| Field      | Type          | Presence |
| ---------- | ------------- | -------- |
| `card_uid` | string (uuid) | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type | Presence |
| ------ | ---- | -------- |
| `file` | Blob | Required |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `author_uid`, `card_uid`, `company_uid`, `entity_type`, `created`, `updated`, `card_cover`.

### deleteCardFile

**`client.restrictedAccessCardFiles.deleteCardFile`** · `DELETE /api/latest/cards/{card_uid}/files/{id}`

Delete card file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-card-files/delete-card-file).

`...args: RestrictedAccessCardFilesDeleteCardFileParams`

```ts
declare const deleteCardFile: (
  cardUid: string,
  fileUid: string,
  options?: OperationOptions,
) => Promise<RestrictedAccessCardFilesDeleteCardFileResponse>;
```

**Path parameters**

| Field      | Type          | Presence |
| ---------- | ------------- | -------- |
| `card_uid` | string (uuid) | Required |
| `id`       | string (uuid) | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### getCardFile

**`client.restrictedAccessCardFiles.getCardFile`** · `GET /api/latest/cards/{card_uid}/files/{id}`

Get card file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-card-files/get-card-file).

`...args: RestrictedAccessCardFilesGetCardFileParams`

```ts
declare const getCardFile: {
  (
    cardUid: string,
    fileUid: string,
    redirect: true,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<FileRedirectResponse>;
  (
    cardUid: string,
    fileUid: string,
    redirect?: false,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<RestrictedAccessCardFilesGetCardFileResponse>;
  (
    cardUid: string,
    fileUid: string,
    redirect: boolean | undefined,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<
    RestrictedAccessCardFilesGetCardFileResponse | FileRedirectResponse
  >;
};
```

**Path parameters**

| Field      | Type          | Presence |
| ---------- | ------------- | -------- |
| `card_uid` | string (uuid) | Required |
| `id`       | string (uuid) | Required |

**Query parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `redirect` | boolean | Optional |
| `download` | boolean | Optional |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `entity_type`, `created`, `updated`, `card_uid`, `author_uid`, `card_cover`, `url`.

### updateCardFile

**`client.restrictedAccessCardFiles.updateCardFile`** · `PATCH /api/latest/cards/{card_uid}/files/{id}`

Update card file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-card-files/update-card-file).

`...args: RestrictedAccessCardFilesUpdateCardFileParams`

```ts
declare const updateCardFile: (
  cardUid: string,
  fileUid: string,
  name?: string,
  cardCover?: boolean,
  options?: OperationOptions,
) => Promise<RestrictedAccessCardFilesUpdateCardFileResponse>;
```

**Path parameters**

| Field      | Type          | Presence |
| ---------- | ------------- | -------- |
| `card_uid` | string (uuid) | Required |
| `id`       | string (uuid) | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `name`       | string  | Optional |
| `card_cover` | boolean | Optional |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `author_uid`, `card_uid`, `company_uid`, `entity_type`, `created`, `updated`, `card_cover`.

## restrictedAccessCommentFiles

### attachFileToComment

**`client.restrictedAccessCommentFiles.attachFileToComment`** · `POST /api/latest/cards/{card_uid}/comments/{comment_uid}/files`

Attach file to comment. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-comment-files/attach-file-to-comment).

`...args: RestrictedAccessCommentFilesAttachFileToCommentParams`

```ts
declare const attachFileToComment: (
  cardUid: string,
  commentUid: string,
  file: Blob,
  options?: FileUploadOptions,
) => Promise<RestrictedAccessCommentFilesAttachFileToCommentResponse>;
```

**Path parameters**

| Field         | Type                 | Presence |
| ------------- | -------------------- | -------- |
| `card_uid`    | string (uuid)        | Required |
| `comment_uid` | string (uuid \| new) | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type | Presence |
| ------ | ---- | -------- |
| `file` | Blob | Required |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `author_uid`, `card_uid`, `comment_uid`, `company_uid`, `entity_type`, `created`, `updated`, `card_cover`.

### deleteCommentFile

**`client.restrictedAccessCommentFiles.deleteCommentFile`** · `DELETE /api/latest/cards/{card_uid}/comments/{comment_uid}/files/{id}`

Delete comment file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-comment-files/delete-comment-file).

`...args: RestrictedAccessCommentFilesDeleteCommentFileParams`

```ts
declare const deleteCommentFile: (
  cardUid: string,
  commentUid: string,
  fileUid: string,
  options?: OperationOptions,
) => Promise<RestrictedAccessCommentFilesDeleteCommentFileResponse>;
```

**Path parameters**

| Field         | Type                 | Presence |
| ------------- | -------------------- | -------- |
| `card_uid`    | string (uuid)        | Required |
| `comment_uid` | string (uuid \| new) | Required |
| `id`          | string (uuid)        | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### getCommentFile

**`client.restrictedAccessCommentFiles.getCommentFile`** · `GET /api/latest/cards/{card_uid}/comments/{comment_uid}/files/{id}`

Get comment file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-comment-files/get-comment-file).

`...args: RestrictedAccessCommentFilesGetCommentFileParams`

```ts
declare const getCommentFile: {
  (
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query: RestrictedAccessCommentFilesGetCommentFileQuery & { redirect: true },
    options?: OperationOptions,
  ): Promise<FileRedirectResponse>;
  (
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query?: Omit<
      RestrictedAccessCommentFilesGetCommentFileQuery,
      "redirect"
    > & { redirect?: false },
    options?: OperationOptions,
  ): Promise<RestrictedAccessCommentFilesGetCommentFileResponse>;
  (
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query: RestrictedAccessCommentFilesGetCommentFileQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    RestrictedAccessCommentFilesGetCommentFileResponse | FileRedirectResponse
  >;
};
```

**Path parameters**

| Field         | Type                 | Presence |
| ------------- | -------------------- | -------- |
| `card_uid`    | string (uuid)        | Required |
| `comment_uid` | string (uuid \| new) | Required |
| `id`          | string (uuid)        | Required |

**Query parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `redirect` | boolean | Optional |
| `download` | boolean | Optional |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `entity_type`, `created`, `updated`, `card_uid`, `comment_uid`, `author_uid`, `card_cover`, `url`.

### updateCommentFile

**`client.restrictedAccessCommentFiles.updateCommentFile`** · `PATCH /api/latest/cards/{card_uid}/comments/{comment_uid}/files/{id}`

Update comment file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-comment-files/update-comment-file).

`...args: RestrictedAccessCommentFilesUpdateCommentFileParams`

```ts
declare const updateCommentFile: (
  cardUid: string,
  commentUid: string,
  fileUid: string,
  body: RestrictedAccessCommentFilesUpdateCommentFileBody,
  options?: OperationOptions,
) => Promise<RestrictedAccessCommentFilesUpdateCommentFileResponse>;
```

**Path parameters**

| Field         | Type                 | Presence |
| ------------- | -------------------- | -------- |
| `card_uid`    | string (uuid)        | Required |
| `comment_uid` | string (uuid \| new) | Required |
| `id`          | string (uuid)        | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `name`       | string  | Optional |
| `card_cover` | boolean | Optional |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `author_uid`, `card_uid`, `comment_uid`, `company_uid`, `entity_type`, `created`, `updated`, `card_cover`.

## restrictedAccessCustomPropertyFiles

### attachFileToCustomProperty

**`client.restrictedAccessCustomPropertyFiles.attachFileToCustomProperty`** · `POST /api/latest/cards/{card_uid}/custom-properties/{property_uid}/files`

Attach file to custom property. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-custom-property-files/attach-file-to-custom-property).

`...args: RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyParams`

```ts
declare const attachFileToCustomProperty: (
  cardUid: string,
  propertyUid: string,
  file: Blob,
  options?: FileUploadOptions,
) => Promise<RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyResponse>;
```

**Path parameters**

| Field          | Type          | Presence |
| -------------- | ------------- | -------- |
| `card_uid`     | string (uuid) | Required |
| `property_uid` | string (uuid) | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type | Presence |
| ------ | ---- | -------- |
| `file` | Blob | Required |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `author_uid`, `card_uid`, `custom_property_uid`, `company_uid`, `entity_type`, `created`, `updated`, `card_cover`.

### deleteCustomPropertyFile

**`client.restrictedAccessCustomPropertyFiles.deleteCustomPropertyFile`** · `DELETE /api/latest/cards/{card_uid}/custom-properties/{property_uid}/files/{id}`

Delete custom property file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-custom-property-files/delete-custom-property-file).

`...args: RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileParams`

```ts
declare const deleteCustomPropertyFile: (
  cardUid: string,
  propertyUid: string,
  fileUid: string,
  options?: OperationOptions,
) => Promise<RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse>;
```

**Path parameters**

| Field          | Type          | Presence |
| -------------- | ------------- | -------- |
| `card_uid`     | string (uuid) | Required |
| `property_uid` | string (uuid) | Required |
| `id`           | string (uuid) | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### getCustomPropertyFile

**`client.restrictedAccessCustomPropertyFiles.getCustomPropertyFile`** · `GET /api/latest/cards/{card_uid}/custom-properties/{property_uid}/files/{id}`

Get custom property file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-custom-property-files/get-custom-property-file).

`...args: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileParams`

```ts
declare const getCustomPropertyFile: {
  (
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery & {
      redirect: true;
    },
    options?: OperationOptions,
  ): Promise<FileRedirectResponse>;
  (
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query?: Omit<
      RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery,
      "redirect"
    > & { redirect?: false },
    options?: OperationOptions,
  ): Promise<RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse>;
  (
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query:
      RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse
    | FileRedirectResponse
  >;
};
```

**Path parameters**

| Field          | Type          | Presence |
| -------------- | ------------- | -------- |
| `card_uid`     | string (uuid) | Required |
| `property_uid` | string (uuid) | Required |
| `id`           | string (uuid) | Required |

**Query parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `redirect` | boolean | Optional |
| `download` | boolean | Optional |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `entity_type`, `created`, `updated`, `card_uid`, `custom_property_uid`, `author_uid`, `card_cover`, `url`.

### updateCustomPropertyFile

**`client.restrictedAccessCustomPropertyFiles.updateCustomPropertyFile`** · `PATCH /api/latest/cards/{card_uid}/custom-properties/{property_uid}/files/{id}`

Update custom property file. [Kaiten documentation](https://developers.kaiten.ru/restricted-access-custom-property-files/update-custom-property-file).

`...args: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileParams`

```ts
declare const updateCustomPropertyFile: (
  cardUid: string,
  propertyUid: string,
  fileUid: string,
  body: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileBody,
  options?: OperationOptions,
) => Promise<RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileResponse>;
```

**Path parameters**

| Field          | Type          | Presence |
| -------------- | ------------- | -------- |
| `card_uid`     | string (uuid) | Required |
| `property_uid` | string (uuid) | Required |
| `id`           | string (uuid) | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type    | Presence |
| ------------ | ------- | -------- |
| `name`       | string  | Optional |
| `card_cover` | boolean | Optional |

**Response:** Object. Fields: `id`, `name`, `size`, `mime_type`, `author_uid`, `card_uid`, `custom_property_uid`, `company_uid`, `entity_type`, `created`, `updated`, `card_cover`.

## serviceDeskServices

### retrieveServicesList

**`client.serviceDeskServices.retrieveServicesList`** · `GET /api/latest/service-desk/services`

Retrieve services list. [Kaiten documentation](https://developers.kaiten.ru/service-desk-services/retrieve-services-list).

`...args: ServiceDeskServicesRetrieveServicesListParams`

```ts
declare const retrieveServicesList: (
  options?: OperationOptions,
) => Promise<ServiceDeskServicesRetrieveServicesListResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `name`, `fields_settings`, `archived`, `lng`, `email_settings`, `type_id`, `email_key`, `board_id`, `column_id`, `lane_id`, `display_status`, `template_description`, `settings`, `allow_to_add_external_recipients`, `column`, `board`, `lane`, `voteCustomProperty`.

## spaceBoards

### createNewBoard

**`client.spaceBoards.createNewBoard`** · `POST /api/latest/spaces/{space_id}/boards`

Create new board. [Kaiten documentation](https://developers.kaiten.ru/space-boards/create-new-board).

`...args: SpaceBoardsCreateNewBoardParams`

```ts
declare const createNewBoard: (
  spaceId: number,
  body: SpaceBoardsCreateNewBoardBody,
  options?: OperationOptions,
) => Promise<SpaceBoardsCreateNewBoardResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                    | Type                     | Presence |
| ------------------------ | ------------------------ | -------- |
| `title`                  | string \| number         | Required |
| `columns`                | array of object          | Optional |
| `lanes`                  | array of object          | Optional |
| `description`            | string \| null           | Optional |
| `top`                    | integer                  | Optional |
| `left`                   | integer                  | Optional |
| `default_card_type_id`   | integer                  | Optional |
| `first_image_is_cover`   | boolean                  | Optional |
| `reset_lane_spent_time`  | boolean                  | Optional |
| `automove_cards`         | boolean                  | Optional |
| `backward_moves_enabled` | boolean                  | Optional |
| `auto_assign_enabled`    | boolean                  | Optional |
| `sort_order`             | number                   | Optional |
| `external_id`            | number \| string \| null | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `cell_wip_limits`, `external_id`, `default_card_type_id`, `description`, `email_key`, `move_parents_to_done`, `default_tags`, `first_image_is_cover`, `reset_lane_spent_time`, `backward_moves_enabled`, `hide_done_policies`, `hide_done_policies_in_done_column`, `automove_cards`, `auto_assign_enabled`, `card_properties`, `columns`, `lanes`, `top`, `left`, `sort_order`.

### getBoard

**`client.spaceBoards.getBoard`** · `GET /api/latest/spaces/{space_id}/boards/{id}`

Get board. [Kaiten documentation](https://developers.kaiten.ru/space-boards/get-board).

`...args: SpaceBoardsGetBoardParams`

```ts
declare const getBoard: (
  spaceId: number,
  id: number,
  options?: OperationOptions,
) => Promise<SpaceBoardsGetBoardResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `cell_wip_limits`, `default_card_type_id`, `description`, `external_id`, `email_key`, `move_parents_to_done`, `backward_moves_enabled`, `default_tags`, `first_image_is_cover`, `reset_lane_spent_time`, `automove_cards`, `hide_done_policies`, `hide_done_policies_in_done_column`, `auto_assign_enabled`, `card_properties`, `columns`, `lanes`, `cards`, `space_id`, `board_id`, `top`, `left`, `sort_order`.

### getListOfBoards

**`client.spaceBoards.getListOfBoards`** · `GET /api/latest/spaces/{space_id}/boards`

Get list of boards. [Kaiten documentation](https://developers.kaiten.ru/space-boards/get-list-of-boards).

`...args: SpaceBoardsGetListOfBoardsParams`

```ts
declare const getListOfBoards: (
  spaceId: number,
  options?: OperationOptions,
) => Promise<SpaceBoardsGetListOfBoardsResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `title`, `cell_wip_limits`, `external_id`, `default_card_type_id`, `description`, `email_key`, `move_parents_to_done`, `default_tags`, `first_image_is_cover`, `reset_lane_spent_time`, `backward_moves_enabled`, `hide_done_policies`, `hide_done_policies_in_done_column`, `automove_cards`, `auto_assign_enabled`, `card_properties`, `columns`, `lanes`, `space_id`, `board_id`, `top`, `left`, `sort_order`, `type`.

### removeBoard

**`client.spaceBoards.removeBoard`** · `DELETE /api/latest/spaces/{space_id}/boards/{id}`

Remove board. [Kaiten documentation](https://developers.kaiten.ru/space-boards/remove-board).

`...args: SpaceBoardsRemoveBoardParams`

```ts
declare const removeBoard: (
  spaceId: number,
  id: number,
  force?: boolean,
  options?: OperationOptions,
) => Promise<SpaceBoardsRemoveBoardResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type    | Presence |
| ------- | ------- | -------- |
| `force` | boolean | Optional |

**Response:** Object. Fields: `id`.

### updateBoard

**`client.spaceBoards.updateBoard`** · `PATCH /api/latest/spaces/{space_id}/boards/{id}`

Update board. [Kaiten documentation](https://developers.kaiten.ru/space-boards/update-board).

`...args: SpaceBoardsUpdateBoardParams`

```ts
declare const updateBoard: (
  spaceId: number,
  id: number,
  body: SpaceBoardsUpdateBoardBody,
  options?: OperationOptions,
) => Promise<SpaceBoardsUpdateBoardResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                               | Type                     | Presence |
| ----------------------------------- | ------------------------ | -------- |
| `title`                             | string \| number         | Optional |
| `description`                       | string \| null           | Optional |
| `top`                               | integer                  | Optional |
| `left`                              | integer                  | Optional |
| `type`                              | 1 \| 5                   | Optional |
| `cell_wip_limits`                   | array of unknown         | Optional |
| `default_card_type_id`              | integer                  | Optional |
| `default_tags`                      | string \| null           | Optional |
| `first_image_is_cover`              | boolean                  | Optional |
| `reset_lane_spent_time`             | boolean                  | Optional |
| `automove_cards`                    | boolean                  | Optional |
| `backward_moves_enabled`            | boolean                  | Optional |
| `move_parents_to_done`              | boolean                  | Optional |
| `hide_done_policies`                | boolean                  | Optional |
| `hide_done_policies_in_done_column` | boolean                  | Optional |
| `sort_order`                        | number                   | Optional |
| `external_id`                       | number \| string \| null | Optional |
| `move_from_space_id`                | integer                  | Optional |
| `auto_assign_enabled`               | boolean                  | Optional |
| `card_properties`                   | array of object \| null  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `cell_wip_limits`, `external_id`, `default_card_type_id`, `description`, `email_key`, `move_parents_to_done`, `default_tags`, `first_image_is_cover`, `reset_lane_spent_time`, `backward_moves_enabled`, `hide_done_policies`, `hide_done_policies_in_done_column`, `automove_cards`, `auto_assign_enabled`, `card_properties`, `columns`, `lanes`, `top`, `left`, `sort_order`.

## spaceTemplateChecklistItems

### createNewSpaceTemplateChecklistItem

**`client.spaceTemplateChecklistItems.createNewSpaceTemplateChecklistItem`** · `POST /api/latest/spaces/{space_uid}/template-checklists/{template_checklist_uid}/items`

Create new space template checklist item. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist-items/create-new-space-template-checklist-item).

`...args: SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemParams`

```ts
declare const createNewSpaceTemplateChecklistItem: (
  spaceUid: string,
  templateChecklistUid: string,
  text: string,
  sortOrder?: number,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemResponse>;
```

**Path parameters**

| Field                    | Type   | Presence |
| ------------------------ | ------ | -------- |
| `space_uid`              | string | Required |
| `template_checklist_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `text`       | string | Required |
| `sort_order` | number | Optional |

**Response:** Object. Fields: `uid`, `text`, `sort_order`, `user_id`, `created`, `updated`.

### removeSpaceTemplateChecklistItem

**`client.spaceTemplateChecklistItems.removeSpaceTemplateChecklistItem`** · `DELETE /api/latest/spaces/{space_uid}/template-checklists/{template_checklist_uid}/items/{item_uid}`

Remove space template checklist item. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist-items/remove-space-template-checklist-item).

`...args: SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemParams`

```ts
declare const removeSpaceTemplateChecklistItem: (
  spaceUid: string,
  templateChecklistUid: string,
  itemUid: string,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse>;
```

**Path parameters**

| Field                    | Type   | Presence |
| ------------------------ | ------ | -------- |
| `space_uid`              | string | Required |
| `template_checklist_uid` | string | Required |
| `item_uid`               | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`.

### updateSpaceTemplateChecklistItem

**`client.spaceTemplateChecklistItems.updateSpaceTemplateChecklistItem`** · `PATCH /api/latest/spaces/{space_uid}/template-checklists/{template_checklist_uid}/items/{item_uid}`

Update space template checklist item. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist-items/update-space-template-checklist-item).

`...args: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemParams`

```ts
declare const updateSpaceTemplateChecklistItem: (
  spaceUid: string,
  templateChecklistUid: string,
  itemUid: string,
  body: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse>;
```

**Path parameters**

| Field                    | Type   | Presence |
| ------------------------ | ------ | -------- |
| `space_uid`              | string | Required |
| `template_checklist_uid` | string | Required |
| `item_uid`               | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `text`       | string | Optional |
| `sort_order` | number | Optional |

**Response:** Object. Fields: `uid`, `text`, `sort_order`, `user_id`, `created`, `updated`.

## spaceTemplateChecklist

### createNewSpaceTemplateChecklist

**`client.spaceTemplateChecklist.createNewSpaceTemplateChecklist`** · `POST /api/latest/spaces/{space_uid}/template-checklists`

Create new space template checklist. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist/create-new-space-template-checklist).

`...args: SpaceTemplateChecklistCreateNewSpaceTemplateChecklistParams`

```ts
declare const createNewSpaceTemplateChecklist: (
  spaceUid: string,
  name: string,
  sortOrder?: number,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `name`       | string | Optional |
| `sort_order` | number | Optional |

**Response:** Object. Fields: `uid`, `name`, `sort_order`, `space_uid`, `created`, `updated`.

### getListOfSpaceTemplateChecklists

**`client.spaceTemplateChecklist.getListOfSpaceTemplateChecklists`** · `GET /api/latest/spaces/{space_uid}/template-checklists`

Get list of space template checklists. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist/get-list-of-space-template-checklists).

`...args: SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsParams`

```ts
declare const getListOfSpaceTemplateChecklists: (
  spaceUid: string,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsResponse>;
```

**Path parameters**

| Field       | Type   | Presence |
| ----------- | ------ | -------- |
| `space_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `uid`, `name`, `sort_order`, `space_uid`, `created`, `updated`, `items`.

### removeSpaceTemplateChecklist

**`client.spaceTemplateChecklist.removeSpaceTemplateChecklist`** · `DELETE /api/latest/spaces/{space_uid}/template-checklists/{template_checklist_uid}`

Remove space template checklist. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist/remove-space-template-checklist).

`...args: SpaceTemplateChecklistRemoveSpaceTemplateChecklistParams`

```ts
declare const removeSpaceTemplateChecklist: (
  spaceUid: string,
  templateChecklistUid: string,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse>;
```

**Path parameters**

| Field                    | Type   | Presence |
| ------------------------ | ------ | -------- |
| `space_uid`              | string | Required |
| `template_checklist_uid` | string | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `uid`.

### updateSpaceTemplateChecklist

**`client.spaceTemplateChecklist.updateSpaceTemplateChecklist`** · `PATCH /api/latest/spaces/{space_uid}/template-checklists/{template_checklist_uid}`

Update space template checklist. [Kaiten documentation](https://developers.kaiten.ru/space-template-checklist/update-space-template-checklist).

`...args: SpaceTemplateChecklistUpdateSpaceTemplateChecklistParams`

```ts
declare const updateSpaceTemplateChecklist: (
  spaceUid: string,
  templateChecklistUid: string,
  body: SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody,
  options?: OperationOptions,
) => Promise<SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse>;
```

**Path parameters**

| Field                    | Type   | Presence |
| ------------------------ | ------ | -------- |
| `space_uid`              | string | Required |
| `template_checklist_uid` | string | Required |

**Query parameters**

**none.**

**Request body**

| Field        | Type   | Presence |
| ------------ | ------ | -------- |
| `name`       | string | Optional |
| `sort_order` | number | Optional |
| `space_uid`  | string | Optional |

**Response:** Object. Fields: `uid`, `name`, `sort_order`, `space_uid`, `created`, `updated`.

## spaceUsers

### changeUserRoleAndNotificationSettings

**`client.spaceUsers.changeUserRoleAndNotificationSettings`** · `PATCH /api/latest/spaces/{space_id}/users/{id}`

Change user role and notification settings. [Kaiten documentation](https://developers.kaiten.ru/space-users/change-user-role-and-notification-settings).

`...args: SpaceUsersChangeUserRoleAndNotificationSettingsParams`

```ts
declare const changeUserRoleAndNotificationSettings: (
  spaceId: number,
  id: number,
  body: SpaceUsersChangeUserRoleAndNotificationSettingsBody,
  options?: OperationOptions,
) => Promise<SpaceUsersChangeUserRoleAndNotificationSettingsResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                   | Type           | Presence |
| ----------------------- | -------------- | -------- |
| `role_id`               | string         | Optional |
| `notifications_enabled` | boolean        | Optional |
| `space_group_id`        | number \| null | Optional |
| `settings`              | object         | Optional |

**Response:** Object. Fields: `entity_uid`, `access_mod`, `own_role_ids`, `own_access_mod`, `own_role`, `user_id`, `id`.

### getListOfUsers

**`client.spaceUsers.getListOfUsers`** · `GET /api/latest/spaces/{space_id}/users`

Get list of users. [Kaiten documentation](https://developers.kaiten.ru/space-users/get-list-of-users).

`...args: SpaceUsersGetListOfUsersParams`

```ts
declare const getListOfUsers: (
  spaceId: number,
  query?: SpaceUsersGetListOfUsersQuery,
  options?: OperationOptions,
) => Promise<SpaceUsersGetListOfUsersResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

| Field                      | Type    | Presence |
| -------------------------- | ------- | -------- |
| `include_inherited_access` | boolean | Optional |
| `inactive`                 | boolean | Optional |
| `limit`                    | integer | Optional |
| `last_user_id`             | integer | Optional |

**Response:** Array. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `apps_permissions`, `temporarily_inactive`, `access_mod`, `own_role_ids`, `own_access_mod`, `own_role`, `current`.

### getUser

**`client.spaceUsers.getUser`** · `GET /api/latest/spaces/{space_id}/users/{id}`

Get user. [Kaiten documentation](https://developers.kaiten.ru/space-users/get-user).

`...args: SpaceUsersGetUserParams`

```ts
declare const getUser: (
  spaceId: number,
  id: number,
  options?: OperationOptions,
) => Promise<SpaceUsersGetUserResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `virtual`, `entity_uid`, `user_id`, `access_mod`.

### inviteUserToSpace

**`client.spaceUsers.inviteUserToSpace`** · `POST /api/latest/spaces/{space_id}/users`

Invite user to space. [Kaiten documentation](https://developers.kaiten.ru/space-users/invite-user-to-space).

`...args: SpaceUsersInviteUserToSpaceParams`

```ts
declare const inviteUserToSpace: (
  spaceId: number,
  body: SpaceUsersInviteUserToSpaceBody,
  options?: OperationOptions,
) => Promise<SpaceUsersInviteUserToSpaceResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field              | Type    | Presence |
| ------------------ | ------- | -------- |
| `email`            | string  | Required |
| `role_id`          | string  | Optional |
| `guest`            | boolean | Optional |
| `operator_comment` | string  | Optional |
| `send_email`       | boolean | Optional |

**Response:** Object. Fields: `user`, `access_record`, `message`.

### removeUserFromSpace

**`client.spaceUsers.removeUserFromSpace`** · `DELETE /api/latest/spaces/{space_id}/users/{id}`

Remove user from space. [Kaiten documentation](https://developers.kaiten.ru/space-users/remove-user-from-space).

`...args: SpaceUsersRemoveUserFromSpaceParams`

```ts
declare const removeUserFromSpace: (
  spaceId: number,
  id: number,
  options?: OperationOptions,
) => Promise<SpaceUsersRemoveUserFromSpaceResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |
| `id`       | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `entity_uid`, `access_mod`, `own_role_ids`, `own_access_mod`, `own_role`, `user_id`.

## spaces

### createNewSpace

**`client.spaces.createNewSpace`** · `POST /api/latest/spaces`

Create new space. [Kaiten documentation](https://developers.kaiten.ru/spaces/create-new-space).

`...args: SpacesCreateNewSpaceParams`

```ts
declare const createNewSpace: (
  body: SpacesCreateNewSpaceBody,
  options?: OperationOptions,
) => Promise<SpacesCreateNewSpaceResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field                         | Type                     | Presence |
| ----------------------------- | ------------------------ | -------- |
| `title`                       | string \| number         | Required |
| `external_id`                 | number \| string \| null | Optional |
| `parent_entity_uid`           | string                   | Optional |
| `for_everyone_access_role_id` | string                   | Optional |
| `sort_order`                  | number                   | Optional |
| `work_calendar_id`            | string                   | Optional |

**Response:** Object. Fields: `created`, `updated`, `archived`, `uid`, `access`, `for_everyone_access_role_id`, `entity_type`, `path`, `sort_order`, `parent_entity_uid`, `company_id`, `id`, `title`, `allowed_card_type_ids`, `hidden_card_type_uids`, `external_id`, `settings`, `users`.

### removeSpace

**`client.spaces.removeSpace`** · `DELETE /api/latest/spaces/{space_id}`

Remove space. [Kaiten documentation](https://developers.kaiten.ru/spaces/remove-space).

`...args: SpacesRemoveSpaceParams`

```ts
declare const removeSpace: (
  spaceId: number,
  options?: OperationOptions,
) => Promise<SpacesRemoveSpaceResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `id`.

### retrieveListOfSpaces

**`client.spaces.retrieveListOfSpaces`** · `GET /api/latest/spaces`

Retrieve list of spaces. [Kaiten documentation](https://developers.kaiten.ru/spaces/retrieve-list-of-spaces).

`...args: SpacesRetrieveListOfSpacesParams`

```ts
declare const retrieveListOfSpaces: (
  limit?: number,
  offset?: number,
  options?: OperationOptions,
) => Promise<SpacesRetrieveListOfSpacesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field    | Type    | Presence |
| -------- | ------- | -------- |
| `limit`  | integer | Optional |
| `offset` | integer | Optional |

**Response:** Array. Fields: `created`, `updated`, `archived`, `uid`, `access`, `for_everyone_access_role_id`, `entity_type`, `path`, `sort_order`, `parent_entity_uid`, `company_id`, `id`, `title`, `allowed_card_type_ids`, `hidden_card_type_uids`, `external_id`, `settings`, `boards`, `user_id`, `entity_uid`, `access_mod`.

### retrieveSpace

**`client.spaces.retrieveSpace`** · `GET /api/latest/spaces/{space_id}`

Retrieve space. [Kaiten documentation](https://developers.kaiten.ru/spaces/retrieve-space).

`...args: SpacesRetrieveSpaceParams`

```ts
declare const retrieveSpace: (
  spaceId: number,
  options?: OperationOptions,
) => Promise<SpacesRetrieveSpaceResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `created`, `updated`, `archived`, `uid`, `for_everyone_access_role_id`, `access`, `entity_type`, `path`, `sort_order`, `parent_entity_uid`, `company_id`, `id`, `title`, `allowed_card_type_ids`, `hidden_card_type_uids`, `external_id`, `settings`.

### updateSpace

**`client.spaces.updateSpace`** · `PATCH /api/latest/spaces/{space_id}`

Update space. [Kaiten documentation](https://developers.kaiten.ru/spaces/update-space).

`...args: SpacesUpdateSpaceParams`

```ts
declare const updateSpace: (
  spaceId: number,
  body: SpacesUpdateSpaceBody,
  options?: OperationOptions,
) => Promise<SpacesUpdateSpaceResponse>;
```

**Path parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `space_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                   | Type                      | Presence |
| ----------------------- | ------------------------- | -------- |
| `title`                 | string \| number          | Optional |
| `external_id`           | number \| string \| null  | Optional |
| `hidden_card_type_uids` | array of string           | Optional |
| `settings`              | object                    | Optional |
| `access`                | for_everyone \| by_invite | Optional |
| `parent_entity_uid`     | string \| null            | Optional |
| `sort_order`            | number                    | Optional |

**Response:** Object. Fields: `created`, `updated`, `archived`, `uid`, `for_everyone_access_role_id`, `access`, `entity_type`, `path`, `sort_order`, `parent_entity_uid`, `company_id`, `id`, `title`, `allowed_card_type_ids`, `hidden_card_type_uids`, `external_id`, `settings`.

## sprints

### getSprintSummary

**`client.sprints.getSprintSummary`** · `GET /api/latest/sprints/{id}`

Get sprint summary. [Kaiten documentation](https://developers.kaiten.ru/sprints/get-sprint-summary).

`...args: SprintsGetSprintSummaryParams`

```ts
declare const getSprintSummary: (
  id: number,
  excludeDeletedCards?: boolean,
  options?: OperationOptions,
) => Promise<SprintsGetSprintSummaryResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

| Field                   | Type    | Presence |
| ----------------------- | ------- | -------- |
| `exclude_deleted_cards` | boolean | Optional |

**Response:** Object. Fields: `created`, `updated`, `archived`, `id`, `uid`, `board_id`, `title`, `goal`, `active`, `committed`, `children_committed`, `velocity`, `velocity_details`, `children_velocity`, `children_velocity_details`, `creator_id`, `updater_id`, `start_date`, `finish_date`, `actual_finish_date`, `cards`, `cardUpdates`, `customProperties`.

### getSprintsList

**`client.sprints.getSprintsList`** · `GET /api/latest/sprints`

Get sprints list. [Kaiten documentation](https://developers.kaiten.ru/sprints/get-sprints-list).

`...args: SprintsGetSprintsListParams`

```ts
declare const getSprintsList: (
  active?: boolean,
  limit?: number,
  offset?: number,
  options?: OperationOptions,
) => Promise<SprintsGetSprintsListResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field    | Type    | Presence |
| -------- | ------- | -------- |
| `active` | boolean | Optional |
| `limit`  | integer | Optional |
| `offset` | integer | Optional |

**Response:** Array. Fields: `id`, `uid`, `board_id`, `title`, `goal`, `active`, `committed`, `children_committed`, `velocity`, `velocity_details`, `children_velocity`, `children_velocity_details`, `creator_id`, `updater_id`, `start_date`, `finish_date`, `actual_finish_date`, `created`, `updated`, `archived`.

## subcolumn

### createNewSubcolumn

**`client.subcolumn.createNewSubcolumn`** · `POST /api/latest/columns/{column_id}/subcolumns`

Create new subcolumn. [Kaiten documentation](https://developers.kaiten.ru/subcolumn/create-new-subcolumn).

`...args: SubcolumnCreateNewSubcolumnParams`

```ts
declare const createNewSubcolumn: (
  columnId: number,
  body: SubcolumnCreateNewSubcolumnBody,
  options?: OperationOptions,
) => Promise<SubcolumnCreateNewSubcolumnResponse>;
```

**Path parameters**

| Field       | Type    | Presence |
| ----------- | ------- | -------- |
| `column_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                              | Type                     | Presence |
| ---------------------------------- | ------------------------ | -------- |
| `external_id`                      | number \| string \| null | Optional |
| `title`                            | string                   | Required |
| `sort_order`                       | number                   | Optional |
| `type`                             | 1 \| 2 \| 3              | Optional |
| `archive_after_days`               | integer                  | Optional |
| `months_to_hide_cards`             | integer \| null          | Optional |
| `card_hide_after_days`             | integer \| null          | Optional |
| `col_count`                        | integer                  | Optional |
| `rules`                            | integer                  | Optional |
| `last_moved_warning_after_minutes` | integer                  | Optional |
| `last_moved_warning_after_hours`   | integer                  | Optional |
| `last_moved_warning_after_days`    | integer                  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `col_count`, `wip_limit`, `wip_limit_type`, `type`, `rules`, `board_id`, `column_id`, `archive_after_days`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `external_id`, `default_tags`, `months_to_hide_cards`, `card_hide_after_days`.

### getListOfSubcolumns

**`client.subcolumn.getListOfSubcolumns`** · `GET /api/latest/columns/{column_id}/subcolumns`

Get list of subcolumns. [Kaiten documentation](https://developers.kaiten.ru/subcolumn/get-list-of-subcolumns).

`...args: SubcolumnGetListOfSubcolumnsParams`

```ts
declare const getListOfSubcolumns: (
  columnId: number,
  options?: OperationOptions,
) => Promise<SubcolumnGetListOfSubcolumnsResponse>;
```

**Path parameters**

| Field       | Type    | Presence |
| ----------- | ------- | -------- |
| `column_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `col_count`, `wip_limit`, `type`, `rules`, `board_id`, `column_id`, `archive_after_days`, `wip_limit_type`, `external_id`, `default_tags`, `last_moved_warning_after_days`, `months_to_hide_cards`, `card_hide_after_days`, `last_moved_warning_after_hours`, `last_moved_warning_after_minutes`.

### removeSubcolumn

**`client.subcolumn.removeSubcolumn`** · `DELETE /api/latest/columns/{column_id}/subcolumns/{id}`

Remove subcolumn. [Kaiten documentation](https://developers.kaiten.ru/subcolumn/remove-subcolumn).

`...args: SubcolumnRemoveSubcolumnParams`

```ts
declare const removeSubcolumn: (
  columnId: number,
  subcolumnId: number,
  force?: boolean,
  options?: OperationOptions,
) => Promise<SubcolumnRemoveSubcolumnResponse>;
```

**Path parameters**

| Field       | Type    | Presence |
| ----------- | ------- | -------- |
| `column_id` | integer | Required |
| `id`        | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field   | Type    | Presence |
| ------- | ------- | -------- |
| `force` | boolean | Optional |

**Response:** Object. Fields: `id`.

### updateSubcolumn

**`client.subcolumn.updateSubcolumn`** · `PATCH /api/latest/columns/{column_id}/subcolumns/{id}`

Update subcolumn. [Kaiten documentation](https://developers.kaiten.ru/subcolumn/update-subcolumn).

`...args: SubcolumnUpdateSubcolumnParams`

```ts
declare const updateSubcolumn: (
  columnId: number,
  subcolumnId: number,
  body: SubcolumnUpdateSubcolumnBody,
  options?: OperationOptions,
) => Promise<SubcolumnUpdateSubcolumnResponse>;
```

**Path parameters**

| Field       | Type    | Presence |
| ----------- | ------- | -------- |
| `column_id` | integer | Required |
| `id`        | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                              | Type                     | Presence |
| ---------------------------------- | ------------------------ | -------- |
| `external_id`                      | number \| string \| null | Optional |
| `title`                            | string                   | Optional |
| `sort_order`                       | number                   | Optional |
| `type`                             | 1 \| 2 \| 3              | Optional |
| `archive_after_days`               | integer                  | Optional |
| `months_to_hide_cards`             | integer \| null          | Optional |
| `card_hide_after_days`             | integer \| null          | Optional |
| `col_count`                        | integer                  | Optional |
| `rules`                            | integer                  | Optional |
| `default_tags`                     | string \| null           | Optional |
| `last_moved_warning_after_minutes` | integer                  | Optional |
| `last_moved_warning_after_hours`   | integer                  | Optional |
| `last_moved_warning_after_days`    | integer                  | Optional |
| `prev_column_id`                   | integer \| null          | Optional |
| `next_column_id`                   | integer \| null          | Optional |
| `pause_sla`                        | boolean                  | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `title`, `sort_order`, `col_count`, `wip_limit`, `wip_limit_type`, `type`, `rules`, `board_id`, `column_id`, `archive_after_days`, `last_moved_warning_after_minutes`, `last_moved_warning_after_days`, `last_moved_warning_after_hours`, `external_id`, `default_tags`, `months_to_hide_cards`, `card_hide_after_days`.

## tags

### addTag

**`client.tags.addTag`** · `POST /api/latest/tags`

Add tag. [Kaiten documentation](https://developers.kaiten.ru/tags/add-tag).

`...args: TagsAddTagParams`

```ts
declare const addTag: (
  name: string,
  query?: TagsAddTagQuery,
  options?: OperationOptions,
) => Promise<TagsAddTagResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `ids`      | string  | Optional |
| `query`    | string  | Optional |
| `space_id` | integer | Optional |
| `limit`    | integer | Optional |
| `offset`   | integer | Optional |

**Request body**

| Field  | Type   | Presence |
| ------ | ------ | -------- |
| `name` | string | Required |

**Response:** Object. Fields: `created`, `updated`, `id`, `name`, `company_id`, `color`, `archived`.

### retrieveListOfTags

**`client.tags.retrieveListOfTags`** · `GET /api/latest/tags`

The client accepts `ids` as a string or a readonly numeric array (`QueryList<number>`).

Retrieve list of tags. [Kaiten documentation](https://developers.kaiten.ru/tags/retrieve-list-of-tags).

`...args: TagsRetrieveListOfTagsParams`

```ts
declare const retrieveListOfTags: (
  query?: TagsRetrieveListOfTagsQuery,
  options?: OperationOptions,
) => Promise<TagsRetrieveListOfTagsResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field      | Type    | Presence |
| ---------- | ------- | -------- |
| `limit`    | integer | Optional |
| `offset`   | integer | Optional |
| `space_id` | integer | Optional |
| `ids`      | string  | Optional |
| `query`    | string  | Optional |

**Response:** Array. Fields: `created`, `updated`, `id`, `name`, `company_id`, `color`, `archived`.

## timesheet

### getList

**`client.timesheet.getList`** · `GET /api/latest/time-logs`

The client accepts the eight comma-separated ID filters as strings or readonly numeric arrays (`QueryList<number>`).

Get list. [Kaiten documentation](https://developers.kaiten.ru/timesheet/get-list).

`...args: TimesheetGetListParams`

```ts
declare const getList: (
  query: TimesheetGetListQuery,
  options?: OperationOptions,
) => Promise<TimesheetGetListResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field                     | Type    | Presence |
| ------------------------- | ------- | -------- |
| `from`                    | string  | Required |
| `to`                      | string  | Required |
| `tag_ids`                 | string  | Optional |
| `user_ids`                | string  | Optional |
| `group_ids`               | string  | Optional |
| `space_ids`               | string  | Optional |
| `board_ids`               | string  | Optional |
| `column_ids`              | string  | Optional |
| `card_ids`                | string  | Optional |
| `visible_column_ids`      | string  | Optional |
| `limit`                   | integer | Optional |
| `offset`                  | integer | Optional |
| `condition`               | integer | Optional |
| `group_by`                | integer | Optional |
| `time_precision`          | integer | Optional |
| `time_unit`               | integer | Optional |
| `with_daily_distribution` | integer | Optional |
| `only_general_sum`        | integer | Optional |

**Response:** Array. Fields: `created`, `updated`, `id`, `card_id`, `user_id`, `role_id`, `author_id`, `updater_id`, `time_spent`, `for_date`, `comment`, `card`, `user`, `role`.

## treeEntities

### getListOfEntities

**`client.treeEntities.getListOfEntities`** · `GET /api/latest/tree-entities`

Get list of entities. [Kaiten documentation](https://developers.kaiten.ru/tree-entities/get-list-of-entities). **Beta.**

`...args: TreeEntitiesGetListOfEntitiesParams`

```ts
declare const getListOfEntities: (
  query?: TreeEntitiesGetListOfEntitiesQuery,
  options?: OperationOptions,
) => Promise<TreeEntitiesGetListOfEntitiesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field               | Type   | Presence |
| ------------------- | ------ | -------- |
| `limit`             | number | Optional |
| `offset`            | number | Optional |
| `parent_entity_uid` | string | Optional |
| `levels_count`      | number | Optional |

**Response:** Array. Fields: `id`, `uid`, `title`, `external_id`, `company_id`, `sort_order`, `path`, `parent_entity_uid`, `entity_type`, `access`, `archived`, `for_everyone_access_role_id`.

## treeEntityRoles

### getListOfTreeEntityRoles

**`client.treeEntityRoles.getListOfTreeEntityRoles`** · `GET /api/latest/tree-entity-roles`

Get list of tree entity roles. [Kaiten documentation](https://developers.kaiten.ru/tree-entity-roles/get-list-of-tree-entity-roles). **Beta.**

`...args: TreeEntityRolesGetListOfTreeEntityRolesParams`

```ts
declare const getListOfTreeEntityRoles: (
  options?: OperationOptions,
) => Promise<TreeEntityRolesGetListOfTreeEntityRolesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Response:** Array. Fields: `id`, `name`, `permissions`, `sort_order`, `new_permissions_default_value`, `updated`, `created`.

## userRoles

### createUserRole

**`client.userRoles.createUserRole`** · `POST /api/latest/user-roles`

Create user role. [Kaiten documentation](https://developers.kaiten.ru/user-roles/create-user-role).

`...args: UserRolesCreateUserRoleParams`

```ts
declare const createUserRole: (
  name: string,
  options?: OperationOptions,
) => Promise<UserRolesCreateUserRoleResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Request body**

| Field  | Type   | Presence |
| ------ | ------ | -------- |
| `name` | string | Required |

**Response:** Object. Fields: `name`, `company_id`, `updated`, `created`, `id`, `uid`.

### getListOfUserRoles

**`client.userRoles.getListOfUserRoles`** · `GET /api/latest/user-roles`

Get list of user roles. [Kaiten documentation](https://developers.kaiten.ru/user-roles/get-list-of-user-roles).

`...args: UserRolesGetListOfUserRolesParams`

```ts
declare const getListOfUserRoles: (
  options?: OperationOptions,
) => Promise<UserRolesGetListOfUserRolesResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Response:** Array. Fields: `created`, `updated`, `id`, `uid`, `name`, `company_id`.

### getUserRole

**`client.userRoles.getUserRole`** · `GET /api/latest/user-roles/{role_id}`

Get user role. [Kaiten documentation](https://developers.kaiten.ru/user-roles/get-user-role).

`...args: UserRolesGetUserRoleParams`

```ts
declare const getUserRole: (
  roleId: number,
  options?: OperationOptions,
) => Promise<UserRolesGetUserRoleResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `role_id` | integer | Required |

**Query parameters**

**none.**

**Response:** Object. Fields: `name`, `company_id`, `updated`, `created`, `id`, `uid`.

### removeUserRole

**`client.userRoles.removeUserRole`** · `DELETE /api/latest/user-roles/{role_id}`

Remove user role. [Kaiten documentation](https://developers.kaiten.ru/user-roles/remove-user-role).

`...args: UserRolesRemoveUserRoleParams`

```ts
declare const removeUserRole: (
  roleId: number,
  replaceRoleId: number,
  options?: OperationOptions,
) => Promise<UserRolesRemoveUserRoleResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `role_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field             | Type    | Presence |
| ----------------- | ------- | -------- |
| `replace_role_id` | integer | Required |

**Response:** Object. Fields: `name`, `company_id`, `updated`, `created`, `id`, `uid`.

### updateUserRole

**`client.userRoles.updateUserRole`** · `PATCH /api/latest/user-roles/{role_id}`

Update user role. [Kaiten documentation](https://developers.kaiten.ru/user-roles/update-user-role).

`...args: UserRolesUpdateUserRoleParams`

```ts
declare const updateUserRole: (
  roleId: number,
  name: string,
  options?: OperationOptions,
) => Promise<UserRolesUpdateUserRoleResponse>;
```

**Path parameters**

| Field     | Type    | Presence |
| --------- | ------- | -------- |
| `role_id` | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field  | Type   | Presence |
| ------ | ------ | -------- |
| `name` | string | Required |

**Response:** Object. Fields: `name`, `company_id`, `updated`, `created`, `id`, `uid`.

## users

### retrieveCurrentUser

**`client.users.retrieveCurrentUser`** · `GET /api/latest/users/current`

Retrieve current user. [Kaiten documentation](https://developers.kaiten.ru/users/retrieve-current-user).

`...args: UsersRetrieveCurrentUserParams`

```ts
declare const retrieveCurrentUser: (
  options?: OperationOptions,
) => Promise<UsersRetrieveCurrentUserResponse>;
```

**Path parameters**

**none.**

**Query parameters**

**none.**

**Response:** Object. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `company_id`, `telegram_id`, `telegram_settings`, `user_id`, `default_space_id`, `permissions`, `role`, `email_frequency`, `email_settings`, `slack_id`, `slack_settings`, `notification_settings`, `notification_enabled_channels`, `slack_private_channel_id`, `telegram_sd_bot_enabled`, `invite_last_sent_at`, `apps_permissions`, `external`, `last_request_date`, `last_request_method`, `has_password`.

### retrieveListOfUsers

**`client.users.retrieveListOfUsers`** · `GET /api/latest/users`

The client accepts `ids` as a string or a readonly numeric array (`QueryList<number>`).

Retrieve list of users. [Kaiten documentation](https://developers.kaiten.ru/users/retrieve-list-of-users).

`...args: UsersRetrieveListOfUsersParams`

```ts
declare const retrieveListOfUsers: (
  query?: UsersRetrieveListOfUsersQuery,
  options?: OperationOptions,
) => Promise<UsersRetrieveListOfUsersResponse>;
```

**Path parameters**

**none.**

**Query parameters**

| Field                                          | Type    | Presence |
| ---------------------------------------------- | ------- | -------- |
| `type`                                         | string  | Optional |
| `query`                                        | string  | Optional |
| `access_type_permissions`                      | string  | Optional |
| `ids`                                          | string  | Optional |
| `limit`                                        | integer | Optional |
| `offset`                                       | integer | Optional |
| `include_inactive`                             | boolean | Optional |
| `exclude_directly_added_members_by_entity_uid` | string  | Optional |
| `exclude_members_by_entity_uid`                | string  | Optional |

**Response:** Array. Fields: `id`, `full_name`, `email`, `username`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `timezone`, `theme`, `created`, `updated`, `activated`, `ui_version`, `company_id`, `user_id`, `default_space_id`, `permissions`, `role`, `email_frequency`, `email_settings`, `slack_id`, `slack_settings`, `notification_settings`, `notification_enabled_channels`, `slack_private_channel_id`, `telegram_sd_bot_enabled`, `invite_last_sent_at`, `apps_permissions`, `external`, `last_request_date`, `last_request_method`.

### updateUser

**`client.users.updateUser`** · `PATCH /api/latest/users/{id}`

Update user. [Kaiten documentation](https://developers.kaiten.ru/users/update-user).

`...args: UsersUpdateUserParams`

```ts
declare const updateUser: (
  userId: number,
  body: UsersUpdateUserBody,
  options?: OperationOptions,
) => Promise<UsersUpdateUserResponse>;
```

**Path parameters**

| Field | Type    | Presence |
| ----- | ------- | -------- |
| `id`  | integer | Required |

**Query parameters**

**none.**

**Request body**

| Field                           | Type                                                       | Presence |
| ------------------------------- | ---------------------------------------------------------- | -------- |
| `username`                      | string                                                     | Optional |
| `full_name`                     | string                                                     | Optional |
| `initials`                      | string                                                     | Optional |
| `avatar_type`                   | 1 \| 2 \| 3                                                | Optional |
| `password`                      | string                                                     | Optional |
| `old_password`                  | string \| null                                             | Optional |
| `lng`                           | string                                                     | Optional |
| `default_space_id`              | integer \| null                                            | Optional |
| `theme`                         | light \| dark \| auto                                      | Optional |
| `email_frequency`               | 1 \| 2                                                     | Optional |
| `timezone`                      | string                                                     | Optional |
| `subject_by`                    | 1 \| 2                                                     | Optional |
| `email_settings`                | object                                                     | Optional |
| `telegram_settings`             | object                                                     | Optional |
| `slack_settings`                | object                                                     | Optional |
| `notification_enabled_channels` | array of inner \| mobile_app \| email \| slack \| telegram | Optional |
| `notification_settings`         | object                                                     | Optional |
| `ui_version`                    | 1 \| 2                                                     | Optional |

**Response:** Object. Fields: `created`, `updated`, `id`, `full_name`, `username`, `email`, `activated`, `show_tour`, `avatar_initials_url`, `avatar_uploaded_url`, `initials`, `avatar_type`, `lng`, `sd_telegram_id`, `timezone`, `news_subscription`, `theme`, `ui_version`, `default_space_id`, `email_frequency`, `email_settings`, `work_time_settings`, `telegram_id`, `telegram_settings`, `has_password`.
