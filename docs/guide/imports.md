# Data imports

The imports entry point supplies TypeScript contracts; it does not start imports. Universal Format 2.0 is in beta and recommended for new integrations. The unversioned `Import*` types describe deprecated Universal Import v1 and remain available for compatibility; Kaiten ends v1 support on December 1, 2026.

Universal Import v2 types require a version newer than npm `1.0.3`; see [installation](/guide/getting-started).

```ts
import type {
  ImportV2Manifest,
  ImportV2UsersRecord,
} from '@2chevskii/kaiten-client/imports';

const manifest: ImportV2Manifest = {
  profile: {name: 'external'},
  package_id: 'b6cde3fd-5d39-4fbf-85b8-c57c09e42ff6',
  source: {
    system: 'custom',
    namespace: 'example:tracker',
    exported_at: '2026-10-07T09:00:00Z',
  },
  timeline_mode: 'current_state_only',
  resource_files: [{resource: 'users', path: 'resources/users.json'}],
  binary_files: {base_path: 'files/'},
};
const users: ImportV2UsersRecord[] = [
  {external_id: 'user:1', email: 'ava@example.com'},
];
```

Write the manifest to `meta-data.json` and the users array to `resources/users.json`. References must resolve within the package. Use Convertinator to validate and import the package. TypeScript does not validate lengths, paths, conditional constraints, or references. See the [bundle format](https://developers.kaiten.ru/imports/bundle-format) for all rules and schemas.
