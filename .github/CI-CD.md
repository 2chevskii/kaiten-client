# CI/CD

The workflows follow the two-stage release process used in [2chevskii/gly](https://github.com/2chevskii/gly): a version tag creates a checked draft release; publishing that draft distributes its package to registries.

## Continuous integration

`CI` runs on pull requests, merge queues, pushes to `develop`, and manual dispatch. The reusable `Checks` workflow also runs for release tags.

- `Workflow syntax` validates all workflows with actionlint and ShellCheck on the hosted Linux runner.
- The quality job uses `.node-version` and runs `npm run check`: TypeScript, ESLint, Prettier, contract and HTTP tests, sample compilation, generated-reference freshness, and the Russian/English VitePress build.
- Compatibility jobs run type checks, tests, and installed-package checks on Node 20/22/24 on Ubuntu 26.04, and Node 22 on Windows 2025 and macOS 26.
- `npm run test:package` packs the library, checks its file list and exported files, installs the actual tarball into a temporary project with lifecycle scripts disabled, compiles a TypeScript consumer, and imports all seven entry points.
- Successful quality jobs retain the npm tarball and documentation as Actions artifacts for 14 days. Draft releases retain the tarball as a release asset.

Configure branch protection for `develop` to require `Workflow syntax`, `Quality and documentation` and each of the five compatibility checks. Use the exact check names shown in the first Actions run. Keep required checks unconditional; the workflows intentionally have no path filters.

## Documentation deployment

After all CI jobs succeed on a push to `develop` (or a manual CI run on `develop`), the checked documentation artifact deploys to GitHub Pages. Pull requests and release tags only build documentation.

One-time repository setup:

1. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
2. Ensure the `github-pages` environment permits deployments from `develop`. Optional environment reviewers can provide a deployment approval gate.

The project site is `https://2chevskii.github.io/kaiten-client/`. CI builds with `VITEPRESS_BASE=/kaiten-client/`; local builds use `/`. Deployment uses the artifact produced by the successful quality job. See the [VitePress deployment guide](https://vitepress.dev/guide/deploy).

## Release process

1. Update the version in `package.json` and `package-lock.json`, update any version-specific documentation, and merge the change into `develop`. For example, run `npm version patch --no-git-tag-version` and review its diff.
2. Tag that commit and push the tag:

   ```sh
   git tag v1.0.1
   git push origin v1.0.1
   ```

3. `Start release` validates stable `vX.Y.Z` syntax and matching package/lockfile metadata, then runs the same quality and compatibility checks as CI. Only after every job succeeds does it create a draft GitHub release containing the tested `.tgz` and `SHA256SUMS`.
4. Review the draft's generated release notes and publish it through GitHub. Publish manually so the `release: published` event starts `Finish release`; events created with a workflow's `GITHUB_TOKEN` do not generally start another workflow.
5. `Finish release` independently publishes the original asset to npm and GitHub Packages. It validates the published stable release, package metadata and SHA-256 checksum, and compares each registry's SHA-512 integrity with the uploaded tarball. It does not rebuild the package.

Tags and package versions are immutable release identifiers. Re-running `Start release` can update an existing draft; it refuses to overwrite a published release. Re-running `Finish release` skips a registry only when the same version already contains byte-identical contents. A different existing tarball fails the job. For a partially failed publication, re-run failed jobs in the original `Finish release` run so provenance continues to identify the tagged source commit. The tagged commit must contain the release scripts and workflows.

## Registry setup

### npm

Create a repository Actions secret named `NPM_TOKEN` with an npm granular access token authorized to publish `@2chevskii/kaiten-client`. For unattended publishing, configure the token's bypass-2FA permission and an appropriate expiry. The first publication requires package-creation rights in the `@2chevskii` scope. Rotate the secret when the token expires.

The npm job publishes with public access and provenance using `id-token: write`. This requires a public GitHub repository with matching `package.json` repository metadata. See [npm provenance](https://docs.npmjs.com/generating-provenance-statements/). The workflow uses token authentication, including for the first publication. Migrating to [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/) requires configuring the package's trusted publisher and updating the workflow authentication.

Once a release is published:

```sh
npm install @2chevskii/kaiten-client
```

### GitHub Packages

The GitHub registry job uses the built-in `GITHUB_TOKEN` with `packages: write`. No additional publishing secret is required. Check package access settings if an existing package is not associated with this repository. Set the package visibility to public in GitHub if public distribution is desired.

Consumers need GitHub Packages authentication and scope routing, even for public npm packages. Configure these in the consumer's user-level `.npmrc` using a token with `read:packages`:

```ini
@2chevskii:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

Then run `npm install @2chevskii/kaiten-client`. Keep tokens out of committed files.

## Local verification

```sh
npm ci
npm run check
npm run test:package
node scripts/validate-release.mjs v1.0.0
```

Use the current package version in the last command. Validate workflow syntax with `actionlint` when changing YAML. Local checks exercise the package and documentation; hosted runner compatibility, Pages deployment, and registry publication are verified by the corresponding Actions runs after the workflows are pushed and their external settings are configured.
