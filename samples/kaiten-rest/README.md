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

The sample builds the local package and compiles its own TypeScript file before
running it. The compiled sample is written to `samples/kaiten-rest/dist/`.
Keep the API token out of source control.
