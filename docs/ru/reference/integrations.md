# Контракты интеграций

Пакет предоставляет отдельные точки входа для интеграций Kaiten. Экспортируемые типы описывают данные, но не запускают сервер и не проверяют входящие данные.

| Точка входа                            | Экспорт                                                              | Руководство                                   |
| -------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------- |
| `@2chevskii/kaiten-client/webhooks`    | `KaitenWebhookEvent`, `sendCardWebhook`, типы запросов и событий     | [Вебхуки](/ru/guide/webhooks)                 |
| `@2chevskii/kaiten-client/metadata`    | `UserMetadataRequest`, `UserMetadataResponse`, `UserMetadataHandler` | [Метаданные пользователя](/ru/guide/metadata) |
| `@2chevskii/kaiten-client/imports`     | Типы Universal Import v1 и v2, включая `ImportV2Manifest`            | [Импорт данных](/ru/guide/imports)            |
| `@2chevskii/kaiten-client/addons`      | Типы браузерного SDK и глобальное объявление `Addon`                 | [Аддоны](/ru/guide/addons)                    |
| `@2chevskii/kaiten-client/addon-oauth` | `AddonOAuthClient`, `AddonOAuthOptions`, типы токенов                | [Аддоны](/ru/guide/addons)                    |

Полный список типов приведён в [экспортах пакета](https://github.com/2chevskii/kaiten-client/blob/master/package.json) и исходном коде.
