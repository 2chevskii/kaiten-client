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

Contracts are maintained in source code alongside their operations. Reference
pages are maintained as Markdown under `docs/reference` and `docs/en/reference`.

`src/entities.ts` defines shared response projections. `src/types.ts` contains JSON values, dynamic custom-property maps, and the utility for schema `anyOf` requirements. `src/document-data.ts` describes ProseMirror document data and version-independent schema responses. Operation `Params` exports are tuples derived from their method signatures.

## Build and package

`npm run build` removes `artifacts/lib` with Node.js's filesystem API and runs `tsc`. The compiler uses
the stable `Node20` module mode and targets ES2024 for Node.js 24 and newer.
Relative imports in source use `.ts`; `rewriteRelativeImportExtensions` converts
them to `.js` in the emitted ESM JavaScript.

Each source module produces JavaScript, a declaration file, and maps for both.
The npm package includes `lib` and `src` so declaration maps can navigate to
the implementation and JavaScript maps can resolve stack traces with
`node --enable-source-maps`. Runtime entry points always resolve to compiled
JavaScript.

`npm run build:watch` recompiles changes during development. `npm run pack` runs
one clean build through its `prepack` hook and prepares `artifacts/` as the package root. The preparation step
copies sources, README, and license, relocates source-map references, and writes
a publication manifest with `./lib/` exports. The tarball is written to
`artifacts/`; the directory prefix and other build outputs are excluded from it.

The library's module graph must remain free of top-level `await` to support
Node.js 24's synchronous `require()` of ESM.
