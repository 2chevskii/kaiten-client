# Integration contracts

These exports cover integrations beyond REST and SCIM. Full structures are available in the package's TypeScript declarations.

## Outgoing webhooks

`@2chevskii/kaiten-client/webhooks` · `KaitenWebhookEvent`

| Event                  | Type                           | Documentation                                                                            |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------- |
| `block:add`            | `BlockAddWebhookEvent`         | [Kaiten](https://developers.kaiten.ru/external-webhooks/block/block:add)                 |
| `block:update`         | `BlockUpdateWebhookEvent`      | [Kaiten](https://developers.kaiten.ru/external-webhooks/block/block:update)              |
| `board:add`            | `BoardAddWebhookEvent`         | [Kaiten](https://developers.kaiten.ru/external-webhooks/board/board:add)                 |
| `board:update`         | `BoardUpdateWebhookEvent`      | [Kaiten](https://developers.kaiten.ru/external-webhooks/board/board:update)              |
| `card_member:add`      | `CardMemberAddWebhookEvent`    | [Kaiten](https://developers.kaiten.ru/external-webhooks/card-members/card_member:add)    |
| `card_member:remove`   | `CardMemberRemoveWebhookEvent` | [Kaiten](https://developers.kaiten.ru/external-webhooks/card-members/card_member:remove) |
| `card_member:update`   | `CardMemberUpdateWebhookEvent` | [Kaiten](https://developers.kaiten.ru/external-webhooks/card-members/card_member:update) |
| `card:add`             | `CardAddWebhookEvent`          | [Kaiten](https://developers.kaiten.ru/external-webhooks/card/card:add)                   |
| `card:update`          | `CardUpdateWebhookEvent`       | [Kaiten](https://developers.kaiten.ru/external-webhooks/card/card:update)                |
| `comment:add`          | `CommentAddWebhookEvent`       | [Kaiten](https://developers.kaiten.ru/external-webhooks/comment/comment:add)             |
| `comment:remove`       | `CommentRemoveWebhookEvent`    | [Kaiten](https://developers.kaiten.ru/external-webhooks/comment/comment:remove)          |
| `comment:update`       | `CommentUpdateWebhookEvent`    | [Kaiten](https://developers.kaiten.ru/external-webhooks/comment/comment:update)          |
| `file:add`             | `FileAddWebhookEvent`          | [Kaiten](https://developers.kaiten.ru/external-webhooks/file/file:add)                   |
| `file:remove`          | `FileRemoveWebhookEvent`       | [Kaiten](https://developers.kaiten.ru/external-webhooks/file/file:remove)                |
| `file:update`          | `FileUpdateWebhookEvent`       | [Kaiten](https://developers.kaiten.ru/external-webhooks/file/file:update)                |
| `space:update`         | `SpaceUpdateWebhookEvent`      | [Kaiten](https://developers.kaiten.ru/external-webhooks/space/space:update)              |
| `tag:add`              | `TagAddWebhookEvent`           | [Kaiten](https://developers.kaiten.ru/external-webhooks/tag/tag:add)                     |
| `tag:remove`           | `TagRemoveWebhookEvent`        | [Kaiten](https://developers.kaiten.ru/external-webhooks/tag/tag:remove)                  |
| `tag:update`           | `TagUpdateWebhookEvent`        | [Kaiten](https://developers.kaiten.ru/external-webhooks/tag/tag:update)                  |
| `card_time_log:add`    | `TimelogAddWebhookEvent`       | [Kaiten](https://developers.kaiten.ru/external-webhooks/timelog/timelog:add)             |
| `card_time_log:remove` | `TimelogRemoveWebhookEvent`    | [Kaiten](https://developers.kaiten.ru/external-webhooks/timelog/timelog:remove)          |
| `card_time_log:update` | `TimelogUpdateWebhookEvent`    | [Kaiten](https://developers.kaiten.ru/external-webhooks/timelog/timelog:update)          |

## Import files

`@2chevskii/kaiten-client/imports` · `ImportEntityName` · `ImportColor`

| File                 | Record type                     | Documentation                                                              |
| -------------------- | ------------------------------- | -------------------------------------------------------------------------- |
| `boards`             | `ImportBoardsRecord`            | [Kaiten](https://developers.kaiten.ru/imports/entities/boards)             |
| `card-timers`        | `ImportCardTimersRecord`        | [Kaiten](https://developers.kaiten.ru/imports/entities/card-timers)        |
| `cards`              | `ImportCardsRecord`             | [Kaiten](https://developers.kaiten.ru/imports/entities/cards)              |
| `columns`            | `ImportColumnsRecord`           | [Kaiten](https://developers.kaiten.ru/imports/entities/columns)            |
| `columns-mapping`    | `ImportColumnsMappingRecord`    | [Kaiten](https://developers.kaiten.ru/imports/entities/columns-mapping)    |
| `comments`           | `ImportCommentsRecord`          | [Kaiten](https://developers.kaiten.ru/imports/entities/comments)           |
| `custom-fields`      | `ImportCustomFieldsRecord`      | [Kaiten](https://developers.kaiten.ru/imports/entities/custom-fields)      |
| `document-files`     | `ImportDocumentFilesRecord`     | [Kaiten](https://developers.kaiten.ru/imports/entities/document-files)     |
| `documents`          | `ImportDocumentsRecord`         | [Kaiten](https://developers.kaiten.ru/imports/entities/documents)          |
| `files`              | `ImportFilesRecord`             | [Kaiten](https://developers.kaiten.ru/imports/entities/files)              |
| `folders`            | `ImportFoldersRecord`           | [Kaiten](https://developers.kaiten.ru/imports/entities/folders)            |
| `meta-data`          | `ImportMetaDataRecord`          | [Kaiten](https://developers.kaiten.ru/imports/entities/meta-data)          |
| `properties-mapping` | `ImportPropertiesMappingRecord` | [Kaiten](https://developers.kaiten.ru/imports/entities/properties-mapping) |
| `spaces`             | `ImportSpacesRecord`            | [Kaiten](https://developers.kaiten.ru/imports/entities/spaces)             |
| `users`              | `ImportUsersRecord`             | [Kaiten](https://developers.kaiten.ru/imports/entities/users)              |

## User metadata

`@2chevskii/kaiten-client/metadata` exports `UserMetadataRequest`, `UserMetadataResponse`, `UserMetadataPropertyValue`, and `UserMetadataHandler`. See the [guide](/guide/metadata).

## Addons

`@2chevskii/kaiten-client/addons` exports browser SDK declarations: `KaitenAddonSdk`, `AddonCapabilities`, `AddonContext`, `AddonPlatformApiClient`, `AddonPopupOptions`, `AddonDialogOptions`, and related types. `@2chevskii/kaiten-client/addon-oauth` exports `AddonOAuthClient`, `AddonOAuthOptions`, `AddonTokenKey`, and `AddonTokenResponse`; the `getToken` and `refreshToken` methods are covered in the [guide](/guide/addons).
