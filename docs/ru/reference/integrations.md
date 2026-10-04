# Контракты интеграций

Здесь перечислены экспорты за пределами REST и SCIM. Полные структуры доступны в TypeScript-объявлениях пакета.

## Исходящие вебхуки

`@2chevskii/kaiten-client/webhooks` · `KaitenWebhookEvent`

| Событие                | Тип                            | Документация                                                                             |
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

## Файлы импорта

`@2chevskii/kaiten-client/imports` · `ImportEntityName` · `ImportColor`

| Файл                 | Тип записи                      | Документация                                                               |
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

## Метаданные пользователя

`@2chevskii/kaiten-client/metadata` экспортирует `UserMetadataRequest`, `UserMetadataResponse`, `UserMetadataPropertyValue` и `UserMetadataHandler`. См. [руководство](/ru/guide/metadata).

## Аддоны

`@2chevskii/kaiten-client/addons` экспортирует объявления браузерного SDK: `KaitenAddonSdk`, `AddonCapabilities`, `AddonContext`, `AddonPlatformApiClient`, `AddonPopupOptions`, `AddonDialogOptions` и связанные типы. `@2chevskii/kaiten-client/addon-oauth` экспортирует `AddonOAuthClient`, `AddonOAuthOptions`, `AddonTokenKey` и `AddonTokenResponse`; методы `getToken` и `refreshToken` описаны в [руководстве](/ru/guide/addons).
