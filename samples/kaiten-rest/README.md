# REST client sample

This TypeScript sample lists up to ten cards from a Kaiten account. It uses the
package's public import and makes read-only requests.

From the repository root, install dependencies and set your Kaiten origin and
API token:

```sh
npm ci
export KAITEN_ORIGIN="https://your-company.kaiten.ru"
export KAITEN_TOKEN="your-api-token"
npm run sample:kaiten-rest
```

In PowerShell, set the variables with `$env:KAITEN_ORIGIN = "..."` and
`$env:KAITEN_TOKEN = "..."` before running the same npm command.

The sample uses TypeScript project references to build the local package before
compiling and running its own TypeScript file. To build without running it or
setting credentials, use:

```sh
npx tsc -b samples/kaiten-rest
```

TypeScript builds the library into `lib/` and the sample into
`samples/kaiten-rest/dist/`, skipping projects that are already up to date.
Keep the API token out of source control.
