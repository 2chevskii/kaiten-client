import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';

const require = createRequire(import.meta.url);

test('public card batch types require both sort selectors', () => {
  execFileSync(
    process.execPath,
    [
      require.resolve('typescript/bin/tsc'),
      '--ignoreConfig',
      '--noEmit',
      '--strict',
      '--exactOptionalPropertyTypes',
      '--module',
      'Node20',
      '--target',
      'ES2024',
      '--types',
      'node',
      '--skipLibCheck',
      fileURLToPath(new URL('./fixtures/card-batch-types.ts', import.meta.url)),
    ],
    {stdio: 'inherit'},
  );
});
