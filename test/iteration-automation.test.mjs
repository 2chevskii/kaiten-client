import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {once} from 'node:events';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import {KaitenClient} from '../lib/index.js';

test('the public declarations accept the automation payloads used by the HTTP fixture', () => {
  execFileSync(
    process.execPath,
    [
      fileURLToPath(import.meta.resolve('typescript/bin/tsc')),
      '--ignoreConfig',
      '--checkJs',
      '--noEmit',
      '--strict',
      '--skipLibCheck',
      '--module',
      'Node20',
      '--types',
      'node',
      fileURLToPath(import.meta.url),
    ],
    {cwd: new URL('../', import.meta.url), stdio: 'inherit'},
  );
});

test('automation create and update send iteration triggers and their data unchanged', async context => {
  const dateData = {
    variant: 'time_left_before_date',
    timezone: 'UTC',
    offset: 2,
    offset_unit: 'day',
  };
  /** @type {{type: 'on_action' | 'on_date'; trigger: import('../lib/index.js').AutomationTrigger}[]} */
  const cases = [
    {type: 'on_action', trigger: {type: 'iteration_card_added'}},
    {type: 'on_action', trigger: {type: 'iteration_card_removed'}},
    {
      type: 'on_date',
      trigger: {type: 'iteration_start_date_on_date', data: dateData},
    },
    {
      type: 'on_date',
      trigger: {type: 'iteration_finish_date_on_date', data: dateData},
    },
    {
      type: 'on_action',
      trigger: {type: 'card_moved_in_path', hasToFireOnCardCreation: true},
    },
  ];
  /** @type {{method: string | undefined; url: string | undefined; body: unknown}[]} */
  const requests = [];
  const http = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    requests.push({
      method: request.method,
      url: request.url,
      body: JSON.parse(Buffer.concat(chunks).toString('utf8')),
    });
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{}');
  });
  http.listen(0, '127.0.0.1');
  context.after(
    () => new Promise(resolve => http.close(() => resolve(undefined))),
  );
  await once(http, 'listening');
  const address = http.address();
  assert.ok(address && typeof address !== 'string');
  const client = new KaitenClient({
    origin: `http://127.0.0.1:${address.port}`,
    token: 'fixture',
    apiVersion: 'latest',
  });
  const expected = [];
  for (const update of cases) {
    /** @satisfies {import('../lib/index.js').AutomationsCreateAutomationBody} */
    const create = {
      ...update,
      actions: [{type: 'change_asap', data: {asap: true}}],
    };
    expected.push(
      {
        method: 'POST',
        url: '/api/latest/spaces/12/automations',
        body: structuredClone(create),
      },
      {
        method: 'PATCH',
        url: '/api/latest/spaces/12/automations/automation%23uid',
        body: structuredClone(update),
      },
    );
    await client.automations.createAutomation(12, create);
    await client.automations.updateAutomation(12, 'automation#uid', update);
  }
  assert.deepEqual(requests, expected);
});
