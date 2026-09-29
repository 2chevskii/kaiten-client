import assert from "node:assert/strict";
import { once } from "node:events";
import { createServer } from "node:http";
import test from "node:test";

import { KaitenClient, KaitenHttpError } from "../dist/index.js";
import { KaitenScimClient } from "../dist/scim.js";

test("works against a local HTTP server", async () => {
  const requests = [];
  const server = createServer(async (request, response) => {
    const chunks = [];
    for await (const chunk of request) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString("utf8");
    requests.push({ request, body });

    response.setHeader("Content-Type", "application/json");
    if (request.url === "/api/v1/cards/999") {
      response.writeHead(429, { "X-RateLimit-Remaining": "0" });
      response.end(JSON.stringify({ code: "RATE_LIMIT" }));
    } else if (request.url?.startsWith("/api/v1/cards?")) {
      response.end(JSON.stringify({ result: [], position: "next-cursor" }));
    } else if (request.url === "/scim/v2/Users") {
      response.end(JSON.stringify({ Resources: [], totalResults: 0 }));
    } else if (request.url === "/api/v1/cards/card-uid/files") {
      response.end(JSON.stringify({ id: "file-uid" }));
    } else {
      response.end(JSON.stringify({ id: 42, title: "Created" }));
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");

  try {
    const address = server.address();
    const origin = `http://127.0.0.1:${address.port}`;
    const client = new KaitenClient({ origin, token: "local-token" });
    const scim = new KaitenScimClient({ origin, token: "local-token" });

    const card = await client.cards.create({
      body: { title: "Created", board_id: 1 },
    });
    const search = await client.cards.retrieveCardList({
      query: { version: 2, limit: 5 },
    });
    const users = await scim.users.getUsers();
    const file = await client.restrictedAccessCardFiles.attachFileToCard({
      card_uid: "card-uid",
      file: new Blob(["report"]),
      filename: "report.txt",
    });
    await assert.rejects(
      client.cards.retrieveCard({ card_id: 999 }),
      (error) => {
        assert.ok(error instanceof KaitenHttpError);
        assert.equal(error.status, 429);
        return true;
      },
    );

    const controller = new AbortController();
    controller.abort();
    await assert.rejects(
      client.cards.retrieveCard({ card_id: 42, signal: controller.signal }),
      { name: "AbortError" },
    );

    assert.equal(card.id, 42);
    assert.deepEqual(search, { result: [], position: "next-cursor" });
    assert.deepEqual(users, { Resources: [], totalResults: 0 });
    assert.equal(file.id, "file-uid");
    assert.equal(requests.length, 5);
    assert.equal(
      requests[0].request.headers.authorization,
      "Bearer local-token",
    );
    assert.equal(requests[0].request.method, "POST");
    assert.deepEqual(JSON.parse(requests[0].body), {
      title: "Created",
      board_id: 1,
    });
    assert.match(requests[1].request.url, /version=2&limit=5/);
    assert.match(
      requests[3].request.headers["content-type"],
      /^multipart\/form-data; boundary=/,
    );
    assert.match(requests[3].body, /report.txt/);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
