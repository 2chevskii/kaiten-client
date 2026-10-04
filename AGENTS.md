# Repository Guidelines

## Project Structure

`src/` contains the TypeScript ESM client. Shared transport and public contracts live at the top level; REST resources are grouped in `src/rest/`, SCIM code in `src/scim/`, and webhook code in `src/webhooks/`. `docs/` is a private npm workspace containing VitePress, Russian and English guides, and API references. `tools/` holds release helpers. `lib/`, `artifacts/`, `node_modules/`, and `docs/.vitepress/dist/` are generated or installed content; do not edit generated output by hand.

## Build and Development

Use Node.js 24 or newer and install dependencies with `npm ci`.

- `npm run build` compiles declarations and ESM output into `lib/`.
- `npm run build:watch` rebuilds as source files change.
- `npm run check` runs the build, ESLint, Prettier check, and documentation build.
- `npm run docs:dev` serves the documentation locally; `npm run docs:build` builds it. These delegate to the `docs/` workspace; `npm run build --workspace docs` also builds the documentation.

## Coding Style

Write strict TypeScript using the existing ESM import conventions and explicit public types. Keep REST, SCIM, and webhook behavior in their corresponding modules. Follow the repository's ESLint rules and Prettier configuration; use two spaces, double quotes, and semicolons as shown in existing files. Use descriptive kebab-case filenames and preserve established API naming. Run `npm run check` before submitting.

## Commits and Pull Requests

Always do repository work on a dedicated branch. Commit each completed logical block with a small, controllable change; for larger tasks, commit incrementally instead of waiting until all work is finished. Always use the Conventional Commits specification, for example `feat:`, `fix:`, or `docs:`, with a concise imperative subject and an optional scope. Automatically open a pull request for each task unless the work is purely experimental or research. Pull requests should explain the user-visible or API impact, link related issues when available, and report relevant validation. Include documentation updates for public API changes and call out breaking changes clearly.
