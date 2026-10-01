# Source layout

The package keeps its public entry points at `src/index.ts`, `src/scim.ts`,
`src/webhooks.ts`, `src/metadata.ts`, `src/imports.ts`, `src/addons.ts`, and
`src/addon-oauth.ts`. Consumers can continue using those exports without
depending on internal paths.

`src/http.ts` owns authenticated request transport, URL construction, response
handling, and path validation. `src/http-response.ts` parses JSON responses and
`src/errors.ts` defines HTTP and response errors. `src/client.ts` composes REST resources. The REST
resource index in `src/rest/index.ts` assembles the domain modules under
`src/rest/`:

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
the methods that use them. `src/rest/metadata.ts` holds the REST operation
registry, and `src/rest/search.ts` holds the shared search response type. SCIM
request and response types and methods live in `src/scim/operations.ts`.
Outgoing webhook event contracts live in `src/webhooks/events.ts`, while the
incoming card webhook sender lives in `src/webhooks/incoming.ts`. The public
`src/scim.ts` and `src/webhooks.ts` entry points re-export these modules.

The documentation audit in `docs/api-coverage.json` is the contract inventory.
Contracts are maintained in source code alongside their operations. No code generation step is required for a build.

`src/entities.ts` defines shared response projections. `src/types.ts` contains JSON values, dynamic custom-property maps, and the utility for schema `anyOf` requirements. `src/document-data.ts` describes ProseMirror document data and version-independent schema responses. Operation `Params` exports are tuples derived from their method signatures.

The reference generator reads actual public signatures through TypeScript and metadata constants through its AST. `contracts:check` verifies inventory coverage and request forwarding. `verify` covers HTTP and typing regressions, and `package:check` verifies the installed npm artifact.
