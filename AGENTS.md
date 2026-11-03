# Repository Guidelines

## Project Structure

`src/` contains the TypeScript ESM client. Shared transport and public contracts live at the top level; REST resources are grouped in `src/rest/`, SCIM code in `src/scim/`, and webhook code in `src/webhooks/`. `docs/` is a private npm workspace containing VitePress and Russian and English guides. `tools/` holds release helpers. `lib/`, `artifacts/`, `node_modules/`, and `docs/.vitepress/dist/` are generated or installed content; do not edit generated output by hand.

## Build and Development

Use Node.js 24 or newer and install dependencies with `npm ci`.

- `npm run build` compiles declarations and ESM output into `lib/`.
- `npm run lint` runs ESLint.
- `npm run format:check` checks formatting with Prettier; `npm run format` applies it.
- `npm run docs:dev` serves the documentation locally; `npm run docs:build` builds it. These delegate to the `docs/` workspace; `npm run build --workspace docs` also builds the documentation.

VitePress generates the REST and SCIM reference from source JSDoc at startup and build time. Resource pages under `docs/reference/{rest,scim}/` and `docs/ru/reference/{rest,scim}/` are generated and ignored by Git; do not edit them. Use the custom `@warning` tag for method-specific cautions and preserve Kaiten source links when updating descriptions. Restart the dev server after changing client source to refresh the reference. Run `node --test tools/api-reference.test.mjs` to check generation and caching.

## Coding Style

Write strict TypeScript using the existing ESM import conventions and explicit public types. Keep REST, SCIM, and webhook behavior in their corresponding modules. Follow the repository's ESLint rules and Prettier configuration; use two spaces, single quotes, and semicolons as shown in existing files. Use descriptive kebab-case filenames and preserve established API naming. Run `npm run build`, `npm run lint`, `npm run format:check`, and `npm run docs:build` before submitting.

## Releases

PR and `master` builds publish to GitHub Packages with `pr-N` and `edge` tags. A release tag such as `v1.0.1` must match the version in `package.json` after removing the `v` prefix. Update `package-lock.json` when changing the package version.

`start_release.yml` checks the version, lint, formatting, and documentation, then builds the package and attaches the root-level `npm pack` tarball to a draft GitHub release. Publishing that release triggers `finish_release.yml`, which stages the attached tarball in npm and publishes it to GitHub Packages independently with `--tag latest`. npm uses the `npmjs` environment and `npm stage publish` with OIDC; a maintainer then approves the staged version on npm with 2FA to make it publicly available. GitHub Packages uses the `github-packages` environment and `GITHUB_TOKEN`. Each environment links to the package page in its registry.

`finish_release.yml` runs only when a GitHub release is published. If one registry fails, rerun only the failed job.

## Commits and Pull Requests

Always do repository work on a dedicated branch. Commit each completed logical block with a small, controllable change; for larger tasks, commit incrementally instead of waiting until all work is finished. Always use the Conventional Commits specification, for example `feat:`, `fix:`, or `docs:`, with a concise imperative subject and an optional scope. Automatically open a pull request for each task unless the work is purely experimental or research. Pull requests should explain the user-visible or API impact and link related issues when available. Do not include validation details in PR descriptions. Include documentation updates for public API changes and call out breaking changes clearly.
