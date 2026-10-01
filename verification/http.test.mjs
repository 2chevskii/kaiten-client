import assert from "node:assert/strict";
import { createServer } from "node:http";
import { after, before, test } from "node:test";
import {
  KaitenClient,
  KaitenHttpError,
  KaitenResponseError,
} from "../dist/index.js";
import { AddonOAuthClient } from "../dist/addon-oauth.js";
import { KaitenScimClient } from "../dist/scim.js";
import { sendCardWebhook } from "../dist/webhooks.js";

const received = [];
let origin;
const server = createServer(async (request, response) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString();
  const url = new URL(request.url, origin);
  received.push({
    url,
    method: request.method,
    headers: request.headers,
    body,
  });

  if (url.pathname.endsWith("/cards/400")) {
    response.writeHead(400, { "Content-Type": "text/plain" });
    response.end("validation failed");
  } else if (url.pathname.endsWith("/cards/500")) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end("{invalid json");
  } else if (url.pathname.endsWith("/cards/501")) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end();
  } else if (url.pathname.endsWith("/tree-entities/empty")) {
    response.writeHead(204);
    response.end();
  } else if (url.searchParams.get("redirect") === "true") {
    response.writeHead(302, { Location: "https://downloads.invalid/signed" });
    response.end();
  } else if (url.pathname.endsWith("/cards") && request.method === "GET") {
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify(
        url.searchParams.get("version") === "2"
          ? { result: [], position: "cursor" }
          : [],
      ),
    );
  } else {
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({
        id: 1,
        title: "Card",
        board: { id: 2, title: "Board" },
        members: [],
        properties: { id_42: "value" },
      }),
    );
  }
});

before(async () => {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test("positional methods send path IDs and scalar body fields separately", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  await client.cardMembers.addMemberToCard(101, 202);
  assert.equal(received.at(-1).url.pathname, "/api/v1/cards/101/members");
  assert.deepEqual(JSON.parse(received.at(-1).body), { user_id: 202 });
  await client.cardChildren.addChildren(101, 303);
  assert.equal(received.at(-1).url.pathname, "/api/v1/cards/101/children");
  assert.deepEqual(JSON.parse(received.at(-1).body), { card_id: 303 });
  assert.equal(received.at(-1).headers.authorization, "Bearer token");
});

test("card creation alias uses the same implementation", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  assert.equal(client.cards.create, client.cards.createNewCard);
  await client.cards.create({ title: "Release", board_id: 2 });
  assert.deepEqual(JSON.parse(received.at(-1).body), {
    title: "Release",
    board_id: 2,
  });
});

test("JSON objects and arrays are returned without changing their shape", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  const card = await client.cards.retrieveCard(1);
  assert.equal(card.board.title, "Board");
  assert.deepEqual(card.members, []);
  assert.equal(card.properties.id_42, "value");
  assert.deepEqual(await client.cards.retrieveCardList(), []);
  assert.deepEqual(await client.cards.retrieveCardList({ version: 2 }), {
    result: [],
    position: "cursor",
  });
});

test("SCIM PATCH forwards arrays of operations", async () => {
  const client = new KaitenScimClient({ origin, token: "token" });
  const operations = [{ op: "replace", path: "active", value: false }];
  await client.users.updateUser(3, operations);
  assert.equal(received.at(-1).url.pathname, "/scim/v2/Users/3");
  assert.deepEqual(JSON.parse(received.at(-1).body), {
    Operations: operations,
  });
});

test("successful malformed and empty JSON responses are rejected", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  await assert.rejects(
    client.cards.retrieveCard(500),
    (error) =>
      error instanceof KaitenResponseError &&
      error.body === "{invalid json" &&
      error.cause instanceof SyntaxError,
  );
  await assert.rejects(client.cards.retrieveCard(501), KaitenResponseError);
  await assert.rejects(
    sendCardWebhook(`${origin}/api/v1/cards/500`, { title: "Card" }),
    KaitenResponseError,
  );
});

test("HTTP errors preserve text, status, and request context", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  await assert.rejects(
    client.cards.retrieveCard(400),
    (error) =>
      error instanceof KaitenHttpError &&
      error.status === 400 &&
      error.body === "validation failed" &&
      error.method === "GET",
  );
});

test("documented empty responses resolve to void", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  assert.equal(
    await client.cardTypeTreeEntities.deleteTreeEntityFromCardType(1, "empty"),
    undefined,
  );
});

test("file redirects do not follow the signed download URL", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  const count = received.length;
  const file = await client.restrictedAccessCardFiles.getCardFile(
    "card",
    "file",
    true,
  );
  assert.deepEqual(file, { location: "https://downloads.invalid/signed" });
  assert.equal(received.length, count + 1);
});

test("multipart uploads preserve filename and let fetch set the boundary", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  await client.restrictedAccessCardFiles.attachFileToCard(
    "card",
    new Blob(["report"]),
    { filename: "report.txt" },
  );
  assert.match(
    received.at(-1).headers["content-type"],
    /^multipart\/form-data; boundary=/,
  );
  assert.match(received.at(-1).body, /filename="report.txt"/);
  assert.match(received.at(-1).body, /report/);
});

test("path normalization is rejected and reserved characters are encoded", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  for (const value of ["", ".", ".."])
    assert.throws(() => client.documents.retrieveDocument(value), TypeError);
  await client.documents.retrieveDocument("a/b?c#d");
  assert.equal(received.at(-1).url.pathname, "/api/v1/documents/a%2Fb%3Fc%23d");
});

test("cancellation before token resolution prevents a network request", async () => {
  let releaseToken;
  const controller = new AbortController();
  const client = new KaitenClient({
    origin,
    token: () =>
      new Promise((resolve) => {
        releaseToken = resolve;
      }),
  });
  const count = received.length;
  const request = client.cards.retrieveCard(1, undefined, {
    signal: controller.signal,
  });
  controller.abort();
  releaseToken("token");
  await assert.rejects(request, (error) => error.name === "AbortError");
  assert.equal(received.length, count);
});

test("document schema GET and addon OAuth use their positional arguments", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  await client.documentSchemas.getDocumentDataSchema("latest", "prosemirror");
  assert.equal(received.at(-1).body, "");
  assert.equal(received.at(-1).url.searchParams.get("format"), "prosemirror");
  const oauth = new AddonOAuthClient({ origin, addonSecret: "secret" });
  await oauth.getToken("addon", 10, 20);
  assert.equal(
    received.at(-1).url.pathname,
    "/api/v1/addon-oauth/addon/tokens/10/20",
  );
  assert.equal(received.at(-1).headers.authorization, "Bearer secret");
});

test("directory filters use JSON while condition lists use comma-separated values", async () => {
  const client = new KaitenClient({ origin, token: "token" });
  const filters = { field: { operator: "eq", value: "Alice" } };
  await client.customDirectoryRecords.getListOfRecords("directory", {
    filters,
    conditions: ["active", "inactive"],
  });
  assert.equal(
    received.at(-1).url.searchParams.get("filters"),
    JSON.stringify(filters),
  );
  assert.equal(
    received.at(-1).url.searchParams.get("conditions"),
    "active,inactive",
  );
});
