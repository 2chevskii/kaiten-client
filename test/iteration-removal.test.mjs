import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {KaitenClient} from '../lib/index.js';

test('bulk removal sends one native DELETE request and returns membership records', async context => {
  const removed = {
    iteration_id: 'iteration#id',
    card_uid: 'card-a',
    added_by_uid: 'original-user',
    removed_at: '2026-11-24T10:00:00.000Z',
    removed_by_uid: 'acting-user',
    sort_order: 1,
    created: '2026-11-10T10:00:00.000Z',
    updated: '2026-11-24T10:00:00.000Z',
  };
  const requests = [];
  const http = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    requests.push({
      method: request.method,
      url: request.url,
      authorization: request.headers.authorization,
      contentType: request.headers['content-type'],
      body: Buffer.concat(chunks).toString('utf8'),
    });
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(
      JSON.stringify(requests.length === 1 ? {removed: [removed]} : removed),
    );
  });
  http.listen(0, '127.0.0.1');
  context.after(() => new Promise(resolve => http.close(resolve)));
  await once(http, 'listening');
  const client = new KaitenClient({
    origin: `http://127.0.0.1:${http.address().port}`,
    token: 'fixture',
    apiVersion: 'latest',
  });
  const body = {card_uids: ['card-a', 'outside-iteration']};
  assert.deepEqual(
    await client.iterations.removeCardsFromIteration(
      'space/uid',
      'iteration#id',
      body,
    ),
    {removed: [removed]},
  );
  assert.deepEqual(
    await client.iterations.removeCardFromIteration(
      'space/uid',
      'iteration#id',
      'card-a',
    ),
    removed,
  );
  const path = '/api/latest/spaces/space%2Fuid/iterations/iteration%23id/cards';
  assert.deepEqual(requests, [
    {
      method: 'DELETE',
      url: path,
      authorization: 'Bearer fixture',
      contentType: 'application/json',
      body: JSON.stringify(body),
    },
    {
      method: 'DELETE',
      url: `${path}/card-a`,
      authorization: 'Bearer fixture',
      contentType: undefined,
      body: '',
    },
  ]);
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    client.iterations.removeCardsFromIteration(
      'space/uid',
      'iteration#id',
      body,
      {signal: controller.signal},
    ),
    {name: 'AbortError'},
  );
  assert.equal(requests.length, 2);
});
