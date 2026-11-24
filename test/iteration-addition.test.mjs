import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {KaitenClient, KaitenHttpError} from '../lib/index.js';

test('batch addition sends one native POST and preserves membership results and restrictions', async context => {
  const [movedUid, skippedUid, ineligibleUid, singleUid] = [1, 2, 3, 4].map(
    id => `8e0456aa-856f-4b67-8c21-00000000000${id}`,
  );
  const added = {
    iteration_id: 'iteration#id',
    card_uid: movedUid,
    added_by_uid: 'acting-user',
    removed_at: null,
    removed_by_uid: null,
    sort_order: 1,
    created: '2026-11-24T10:00:00.000Z',
    updated: '2026-11-24T10:00:00.000Z',
  };
  const batchResult = {
    added: [added],
    removed: [
      {
        ...added,
        iteration_id: 'source-iteration',
        added_by_uid: 'original-user',
        removed_at: '2026-11-24T10:00:00.000Z',
        removed_by_uid: 'acting-user',
      },
    ],
    skipped: [{...added, card_uid: skippedUid, sort_order: 2}],
    ineligible: [ineligibleUid],
  };
  const singleResult = {...added, card_uid: singleUid, sort_order: 3};
  const refused = {
    message: 'Cannot remove the card from the active iteration',
    code: 7,
    restriction: {action: {type: 'activeIterationRemoval'}, conditions: []},
    card_id: 123,
    card_uid: movedUid,
    card_uids: [movedUid, skippedUid],
  };
  const results = [batchResult, singleResult, refused];
  const requests = [];
  const http = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const result = results[requests.length];
    requests.push({
      method: request.method,
      url: request.url,
      authorization: request.headers.authorization,
      contentType: request.headers['content-type'],
      body: Buffer.concat(chunks).toString('utf8'),
    });
    response.writeHead(result === refused ? 400 : 200, {
      'Content-Type': 'application/json',
    });
    response.end(JSON.stringify(result));
  });
  http.listen(0, '127.0.0.1');
  context.after(() => new Promise(resolve => http.close(resolve)));
  await once(http, 'listening');
  const client = new KaitenClient({
    origin: `http://127.0.0.1:${http.address().port}`,
    token: 'fixture',
    apiVersion: 'latest',
  });
  const pathArgs = ['space/uid', 'iteration#id'];
  const batch = {card_uids: [movedUid, skippedUid, ineligibleUid]};
  assert.deepEqual(
    await client.iterations.addCardsToIteration(...pathArgs, batch),
    batchResult,
  );
  assert.deepEqual(
    await client.iterations.addCardToIteration(...pathArgs, singleUid),
    singleResult,
  );
  await assert.rejects(
    client.iterations.addCardsToIteration(...pathArgs, batch),
    {name: KaitenHttpError.name, status: 400, body: refused},
  );
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    client.iterations.addCardsToIteration(...pathArgs, batch, {
      signal: controller.signal,
    }),
    {name: 'AbortError'},
  );
  assert.deepEqual(
    requests,
    [batch, {card_uid: singleUid}, batch].map(body => ({
      method: 'POST',
      url: '/api/latest/spaces/space%2Fuid/iterations/iteration%23id/cards',
      authorization: 'Bearer fixture',
      contentType: 'application/json',
      body: JSON.stringify(body),
    })),
  );
});
