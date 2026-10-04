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
pages are maintained as Markdown under `docs/reference` and `docs/ru/reference`.

`src/card-filter.ts` defines and encodes typed card search filters. Search
iterators for cards, documents, and document groups share the cursor traversal
in `src/rest/search.ts`, which handles cancellation and detects repeated cursors.
User and tag iterators share the offset traversal in `src/rest/pagination.ts`.
SCIM iterators use `src/scim/pagination.ts` to advance one-based request indices
by the actual page length and stop at the advertised total.

`src/entities.ts` defines shared response projections. `src/types.ts` contains JSON values, dynamic custom-property maps, and the utility for schema `anyOf` requirements. `src/document-data.ts` describes ProseMirror document data and version-independent schema responses. Operation `Params` exports are tuples derived from their method signatures.

## Build and package

`npm run build` runs `tsc -b` to build the library incrementally. The compiler uses
the stable `Node20` module mode and targets ES2024 for Node.js 24 and newer.
Relative imports in source use `.ts`; `rewriteRelativeImportExtensions` converts
them to `.js` in the emitted ESM JavaScript.

Each source module produces JavaScript, a declaration file, and maps for both.
The npm package includes `lib` and `src` so declaration maps can navigate to
the implementation and JavaScript maps can resolve stack traces with
`node --enable-source-maps`. Runtime entry points always resolve to compiled
JavaScript.

The library is a composite TypeScript project. Build mode skips projects that are already up to date. The documentation config remains a separate non-composite project.

`npm run build:watch` uses build mode to recompile changes during development. `npm pack` runs
one clean build through its `prepack` hook: it removes `lib` and runs
`tsc -b --force` so stale outputs from deleted or renamed modules cannot enter the package.
The repository root is the package root: npm includes `lib/`, `src/`, README,
license, and the existing package manifest directly. The compiler's source maps
already point from `lib/` to `src/`. No copying or path rewriting is needed.
The `.npmrc` setting writes the tarball to `artifacts/`, which is excluded from
the package along with the compiler's build state.

The library's module graph must remain free of top-level `await` to support
Node.js 24's synchronous `require()` of ESM.

## Documentation workspace

The private `docs/` npm workspace owns VitePress and its `dev`, `build`, and `preview` scripts. Run `npm ci` at the repository root to install all workspaces with the shared lockfile. Use `npm run build --workspace docs` to build the site into `docs/.vitepress/dist/`, or use the root `docs:*` shortcuts.
