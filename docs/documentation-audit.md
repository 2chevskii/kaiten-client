# Kaiten documentation audit

The API surface was inventoried from https://developers.kaiten.ru/ before writing the client. Each entry in [api-coverage.json](api-coverage.json) records the documentation URL, documented HTTP method and route, path/query parameters, request-body schema or field table, response shape, and implementation status.

| Section | Pages |
| --- | ---: |
| addons | 46 |
| external webhooks | 22 |
| file migration | 1 |
| imports | 17 |
| incoming webhook | 1 |
| rest | 214 |
| scim | 8 |
| user metadata | 1 |

The source contains 214 REST operations and 8 SCIM operations. Other sections describe 22 outgoing webhook events, 17 import pages, 46 addon pages, and three integration guides. Request JSON Schemas were extracted where published. Response fields are based on the rendered examples; the docs do not define requiredness for every response field. The audit records beta and deprecated markers where the navigation or operation description identifies them.

This registry is used to verify that every documented operation has an exported client method or a corresponding type contract. It is a reference snapshot dated above, not a copy of the full documentation.
