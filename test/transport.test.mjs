import assert from "node:assert/strict";
import test from "node:test";

import { AddonOAuthClient } from "../dist/addon-oauth.js";
import { KaitenClient, KaitenHttpError } from "../dist/index.js";
import { sendCardWebhook, WEBHOOK_EVENT_METADATA } from "../dist/webhooks.js";

test("serializes query values and resolves an async token", async () => {
  let observed;
  const client = new KaitenClient({
    origin: "https://acme.kaiten.ru",
    token: async () => "dynamic-token",
    apiVersion: "latest",
    fetch: async (input, init) => {
      observed = { url: new URL(input), init };
      return Response.json([]);
    },
  });
  await client.cards.retrieveCardList({
    query: { version: 2, archived: false, tag_ids: "1,2" },
  });
  assert.equal(observed.url.pathname, "/api/latest/cards");
  assert.equal(observed.url.searchParams.get("archived"), "false");
  assert.equal(observed.url.searchParams.get("tag_ids"), "1,2");
  assert.equal(
    observed.init.headers.get("Authorization"),
    "Bearer dynamic-token",
  );
});

test("encodes path parameters and passes through cancellation", async () => {
  let observed;
  const controller = new AbortController();
  const client = new KaitenClient({
    origin: "https://acme.kaiten.ru",
    token: "token",
    fetch: async (input, init) => {
      observed = { url: new URL(input), init };
      return Response.json({ id: 1 });
    },
  });
  await client.cards.retrieveCard({ card_id: 42, signal: controller.signal });
  assert.equal(observed.url.pathname, "/api/v1/cards/42");
  assert.equal(observed.init.signal, controller.signal);
});

test("exposes HTTP errors with response details and does not retry", async () => {
  let count = 0;
  const client = new KaitenClient({
    origin: "https://acme.kaiten.ru",
    token: "token",
    fetch: async () => {
      count += 1;
      return Response.json(
        { code: "RATE_LIMIT" },
        { status: 429, headers: { "X-RateLimit-Remaining": "0" } },
      );
    },
  });
  await assert.rejects(client.cards.retrieveCard({ card_id: 1 }), (error) => {
    assert.ok(error instanceof KaitenHttpError);
    assert.equal(error.status, 429);
    assert.deepEqual(error.body, { code: "RATE_LIMIT" });
    assert.equal(error.headers.get("X-RateLimit-Remaining"), "0");
    return true;
  });
  assert.equal(count, 1);
});

test("keeps signed file redirects separate from bearer-authenticated requests", async () => {
  const calls = [];
  const client = new KaitenClient({
    origin: "https://acme.kaiten.ru",
    token: "token",
    fetch: async (input, init) => {
      calls.push({ input, init });
      return new Response(null, {
        status: 302,
        headers: { Location: "https://files.example/signed" },
      });
    },
  });
  const result = await client.restrictedAccessCardFiles.getCardFile({
    card_uid: "card-uid",
    id: "file-uid",
    query: { redirect: true },
  });
  assert.deepEqual(result, { location: "https://files.example/signed" });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].init.redirect, "manual");
});

test("uploads a restricted file as multipart form data", async () => {
  let observed;
  const client = new KaitenClient({
    origin: "https://acme.kaiten.ru",
    token: "token",
    fetch: async (input, init) => {
      observed = { url: new URL(input), init };
      return Response.json({ id: "file-uid" });
    },
  });
  await client.restrictedAccessCardFiles.attachFileToCard({
    card_uid: "card-uid",
    file: new Blob(["hello"]),
    filename: "hello.txt",
  });
  assert.equal(observed.url.pathname, "/api/v1/cards/card-uid/files");
  assert.ok(observed.init.body instanceof FormData);
  assert.equal(observed.init.body.get("file").name, "hello.txt");
  assert.equal(observed.init.headers.has("Content-Type"), false);
});

test("supports incoming card webhooks and addon OAuth endpoints", async () => {
  const calls = [];
  const fetch = async (input, init) => {
    calls.push({ url: new URL(input), init });
    return Response.json({
      has_token: true,
      access_token: "access",
      expires_at: "2026-01-01T00:00:00Z",
    });
  };
  await sendCardWebhook({
    url: "https://acme.kaiten.ru/hook",
    body: { title: "New card" },
    fetch,
  });
  const oauth = new AddonOAuthClient({
    origin: "https://acme.kaiten.ru",
    addonSecret: "secret",
    fetch,
  });
  await oauth.getToken({ addon_uid: "addon", user_id: 1, company_id: 2 });
  await oauth.refreshToken({ addon_uid: "addon", user_id: 1, company_id: 2 });
  assert.equal(calls[0].init.headers.Authorization, undefined);
  assert.equal(calls[1].url.pathname, "/api/v1/addon-oauth/addon/tokens/1/2");
  assert.equal(calls[1].init.headers.get("Authorization"), "Bearer secret");
  assert.equal(
    calls[2].url.pathname,
    "/api/v1/addon-oauth/addon/tokens/1/2/refresh",
  );
  assert.equal(calls[2].init.method, "POST");
  assert.equal(WEBHOOK_EVENT_METADATA.length, 22);
});
