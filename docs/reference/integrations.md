# Integration contracts

The package provides separate entry points for Kaiten integrations. Type-only exports describe data; they do not run a server or validate incoming payloads.

| Entry point                            | Exports                                                              | Guide                                                |
| -------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------- |
| `@2chevskii/kaiten-client/webhooks`    | `KaitenWebhookEvent`, `sendCardWebhook`, request and event types     | [Webhooks](/guide/webhooks)                          |
| `@2chevskii/kaiten-client/metadata`    | `UserMetadataRequest`, `UserMetadataResponse`, `UserMetadataHandler` | [User metadata](/guide/metadata)                     |
| `@2chevskii/kaiten-client/imports`     | Universal Import v1 and v2 types, including `ImportV2Manifest`       | [Data imports](/guide/imports)                       |
| `@2chevskii/kaiten-client/addons`      | Browser SDK types and the global `Addon` declaration                 | [Addons](/guide/addons#browser-sdk)                  |
| `@2chevskii/kaiten-client/addon-oauth` | `AddonOAuthClient`, `AddonOAuthOptions`, token types                 | [Server-side OAuth](/guide/addons#server-side-oauth) |

See the [package exports](https://github.com/2chevskii/kaiten-client/blob/master/package.json) and source files for the full set of types.
