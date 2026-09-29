# Source layout

The package keeps its public entry points at `src/index.ts`, `src/scim.ts`,
`src/webhooks.ts`, `src/metadata.ts`, `src/imports.ts`, `src/addons.ts`, and
`src/addon-oauth.ts`. Consumers can continue using those exports without
depending on internal paths.

`src/http.ts` owns authenticated request transport, URL construction, response
handling, and HTTP errors. `src/client.ts` composes REST resources. The REST
resource index in `src/generated/rest.ts` assembles the domain modules under
`src/generated/rest/`:

| Module          | Related resources                                      |
| --------------- | ------------------------------------------------------ |
| `audit`         | Audit logs                                             |
| `automations`   | Space automations                                      |
| `workspace`     | Spaces, boards, columns, and lanes                     |
| `cards`         | Cards and their members, comments, blockers, and links |
| `checklists`    | Card, shared, and space template checklists            |
| `files`         | Card files and restricted access file routes           |
| `taxonomy`      | Card types and tree entities                           |
| `custom-fields` | Custom properties and directories                      |
| `documents`     | Documents, schemas, and groups                         |
| `identity`      | Users, groups, and roles                               |
| `time`          | Time logs, timesheets, iterations, and sprints         |
| `service-desk`  | Service desk services, recipients, and SLA             |
| `tags`          | Tags and card tags                                     |

Each domain module contains the documented request and response types beside
the methods that use them. `metadata.ts` holds the REST operation registry, and
`search.ts` holds the shared search response type. SCIM operations and outgoing
webhook event contracts remain in their own generated modules. The incoming
card webhook sender lives in `src/webhooks/incoming.ts` and is re-exported from
the existing `src/webhooks.ts` entry point.

The documentation audit in `docs/api-coverage.json` is the contract inventory.
`test/operations.test.mjs` checks every REST and SCIM method against it.
