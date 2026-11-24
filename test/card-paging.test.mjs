import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {KaitenClient} from '../lib/index.js';

async function startFixture(context, handleRequest) {
  const server = createServer(handleRequest);
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  context.after(
    () =>
      new Promise(resolve => {
        server.close(resolve);
        server.closeAllConnections();
      }),
  );
  return new KaitenClient({
    origin: `http://127.0.0.1:${server.address().port}`,
    token: 'fixture',
  });
}

test('list operations preserve original calls and pass requested pages to Kaiten', async context => {
  const requests = [];
  const client = await startFixture(context, (request, response) => {
    const url = new URL(request.url, 'http://localhost');
    requests.push({
      method: request.method,
      path: url.pathname,
      query: Object.fromEntries(url.searchParams),
    });
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('[]');
  });
  const {signal} = new AbortController();
  const cases = [
    {
      path: '/cards/10/comments',
      call: options => client.cardComments.retrieveCardComments(10, options),
    },
    {
      path: '/cards/10/children',
      call: options =>
        client.cardChildren.retrieveCardChildrenList(10, options),
      query: {broken_api: false},
    },
    {
      path: '/cards/10/blockers',
      call: options =>
        client.cardBlockers.retrieveCardBlockersList(10, options),
      query: {broken_api: false},
    },
    {
      path: '/users/current/blockers',
      call: client.cardBlockerUsers.retrieveBlockersCardsListOnCurrentUser,
    },
    {
      path: '/cards/10/time-logs',
      call: options =>
        client.cardTimeLogs.getTimeLogs(10, '2026-11-24', false, options),
      previous: {for_date: '2026-11-24', personal: 'false'},
    },
  ];

  for (const {path, call, query, previous = {}} of cases) {
    const paged = {limit: 37, offset: 0, ...query};
    assert.deepEqual(await call(), []);
    assert.deepEqual(await call({signal}), []);
    assert.deepEqual(await call({signal, query: paged}), []);
    const base = {method: 'GET', path: `/api/v1${path}`};
    assert.deepEqual(requests.splice(0), [
      {...base, query: previous},
      {...base, query: previous},
      {
        ...base,
        query: {
          ...previous,
          ...Object.fromEntries(
            Object.entries(paged).map(([key, value]) => [key, String(value)]),
          ),
        },
      },
    ]);
  }
});

test('paged requests preserve in-flight cancellation', async context => {
  const {promise: started, resolve} = Promise.withResolvers();
  const client = await startFixture(context, request => {
    resolve(new URL(request.url, 'http://localhost').search);
  });
  const controller = new AbortController();
  const result = client.cardComments.retrieveCardComments(10, {
    query: {limit: 50, offset: 100},
    signal: controller.signal,
  });
  assert.equal(await started, '?limit=50&offset=100');
  controller.abort();
  await assert.rejects(result, {name: 'AbortError'});
});

test('card searches forward project UUID filters and retain them across cursor pages', async context => {
  const requests = [];
  const client = await startFixture(context, (request, response) => {
    const url = new URL(request.url, 'http://localhost');
    requests.push({
      method: request.method,
      path: url.pathname,
      query: Object.fromEntries(url.searchParams),
    });
    const page =
      url.searchParams.get('version') !== '2'
        ? []
        : url.searchParams.has('start_position')
          ? {result: [{id: 11}], position: ''}
          : {result: [{id: 10}], position: 'next'};
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(page));
  });
  const projectIds = Object.freeze([
    '11111111-1111-4111-8111-111111111111',
    '22222222-2222-4222-8222-222222222222',
  ]);
  const projectFilter = projectIds.join(',');
  assert.deepEqual(
    await client.cards.retrieveCardList({project_ids: projectFilter}),
    [],
  );
  assert.deepEqual(
    await client.cards.retrieveCardList({
      version: 2,
      project_ids: projectIds,
      owner_ids: [10, 20],
    }),
    {result: [{id: 10}], position: 'next'},
  );

  const ids = [...projectIds];
  const iterator = client.cards.iterate({project_ids: ids, board_id: 2});
  ids.reverse();
  assert.equal(requests.length, 2);
  assert.deepEqual(
    (await Array.fromAsync(iterator)).map(card => card.id),
    [10, 11],
  );

  const base = {method: 'GET', path: '/api/v1/cards'};
  assert.deepEqual(requests, [
    {...base, query: {project_ids: projectFilter}},
    {
      ...base,
      query: {version: '2', project_ids: projectFilter, owner_ids: '10,20'},
    },
    {...base, query: {version: '2', project_ids: projectFilter, board_id: '2'}},
    {
      ...base,
      query: {
        version: '2',
        project_ids: projectFilter,
        board_id: '2',
        start_position: 'next',
      },
    },
  ]);
});
