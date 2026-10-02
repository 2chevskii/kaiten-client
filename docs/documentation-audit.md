# Kaiten documentation audit

The API surface was reviewed against https://developers.kaiten.ru/ before writing the client. Source types and methods describe the documented routes, parameters, request bodies, and responses. The Markdown reference pages link operations to their original documentation.

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

The source contains 214 REST operations and 8 SCIM operations. Other sections describe 22 outgoing webhook events, 17 import pages, 46 addon pages, and three integration guides. Request types were based on published JSON Schemas where available. Response fields are based on the rendered examples; the docs do not define requiredness for every response field.

The addon API access guide also documents two server-side OAuth routes represented by the addon OAuth client. The audit was performed without a Kaiten tenant, so runtime validation against a live API remains unverified.
