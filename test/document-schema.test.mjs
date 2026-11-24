import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {KaitenClient} from '../lib/index.js';

test('document updates forward an explicit schema with full content and preserve ordinary and backup updates', async context => {
  const requests = [];
  const server = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    requests.push({method: request.method, url: request.url, body});
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({uid: 'doc/uid', ...body}));
  });
  server.listen(0, '127.0.0.1');
  context.after(() => new Promise(resolve => server.close(resolve)));
  await once(server, 'listening');
  const client = new KaitenClient({
    origin: `http://127.0.0.1:${server.address().port}`,
    token: 'fixture',
    apiVersion: 'latest',
  });
  const data = {type: 'doc', content: [{type: 'paragraph'}]};
  for (const body of [
    {schema_version: 'v28', data, title: 'New content'},
    {title: 'Rename'},
    {data},
    {backup_version: 9},
  ]) {
    assert.deepEqual(await client.documents.updateDocument('doc/uid', body), {
      uid: 'doc/uid',
      ...body,
    });
    assert.deepEqual(requests.at(-1), {
      method: 'PATCH',
      url: '/api/latest/documents/doc%2Fuid',
      body,
    });
  }
  assert.equal(requests.length, 4);
});
