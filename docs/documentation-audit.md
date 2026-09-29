# Kaiten documentation audit

The API surface was inventoried from https://developers.kaiten.ru/ before writing the client. Each entry in [api-coverage.json](api-coverage.json) records the documentation URL, documented HTTP method and route, path/query parameters, request-body schema or field table, response shape, and implementation status.

| Section           | Pages |
| ----------------- | ----: |
| addons            |    46 |
| external webhooks |    22 |
| file migration    |     1 |
| imports           |    17 |
| incoming webhook  |     1 |
| rest              |   214 |
| scim              |     8 |
| user metadata     |     1 |

The source contains 214 REST operations and 8 SCIM operations. Other sections describe 22 outgoing webhook events, 17 import pages, 46 addon pages, and three integration guides. Request JSON Schemas were extracted where published. Response fields are based on the rendered examples; the docs do not define requiredness for every response field. The audit records beta and deprecated markers where the navigation or operation description identifies them.

`implemented` means the page has a callable client method. `typed` means it describes an incoming payload, file format, or Kaiten-hosted browser SDK contract represented by exported types. `reference` means the page is a guide or example whose behavior is covered by the corresponding methods and README. The addon API access guide also documents two server-side OAuth routes; both are recorded as nested operations in the registry.

The registry is used to verify that every documented REST and SCIM operation has an exported client method. It is a reference snapshot dated above, not a copy of the full documentation. The audit was performed without a Kaiten tenant, so runtime validation against a live API remains unverified.
