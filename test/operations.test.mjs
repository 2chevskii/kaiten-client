import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { KaitenClient, REST_OPERATION_METADATA } from "../dist/index.js";
import { KaitenScimClient, SCIM_OPERATION_METADATA } from "../dist/scim.js";

const coverage = JSON.parse(
  await readFile(new URL("../docs/api-coverage.json", import.meta.url), "utf8"),
);

function exerciseOperations(section, metadata, createClient, prefix) {
  test(`${section} operation coverage and HTTP contracts`, async () => {
    const documented = coverage.entries.filter(
      (entry) => entry.section === section,
    );
    assert.equal(metadata.length, documented.length);
    assert.deepEqual(
      metadata.map((entry) => entry.documentation).sort(),
      documented.map((entry) => new URL(entry.documentation).pathname).sort(),
    );

    const calls = [];
    const client = createClient(async (input, init) => {
      calls.push({ url: new URL(input), init });
      return Response.json({ ok: true });
    });

    for (const operation of metadata) {
      const parameters = {};
      for (const name of operation.pathParameters) {
        parameters[name] =
          name.includes("uid") || name === "id" ? "example-uid" : 42;
      }
      if (operation.hasBody) {
        parameters.body = {};
        parameters.file = new Blob(["test"]);
      }
      const method = client[operation.resource][operation.operation];
      assert.equal(typeof method, "function", operation.documentation);
      await method(parameters);

      const call = calls.at(-1);
      const expectedPath = operation.path.replace(/\{([^}]+)\}/g, (_, name) =>
        encodeURIComponent(String(parameters[name])),
      );
      assert.equal(
        call.url.pathname,
        `${prefix}${expectedPath}`,
        operation.documentation,
      );
      assert.equal(call.init.method, operation.method, operation.documentation);
      assert.equal(call.init.headers.get("Authorization"), "Bearer test-token");
    }
    assert.equal(calls.length, metadata.length);
  });
}

exerciseOperations(
  "rest",
  REST_OPERATION_METADATA,
  (fetch) =>
    new KaitenClient({
      origin: "https://acme.kaiten.ru",
      token: "test-token",
      fetch,
    }),
  "/api/v1",
);

exerciseOperations(
  "scim",
  SCIM_OPERATION_METADATA,
  (fetch) =>
    new KaitenScimClient({
      origin: "https://acme.kaiten.ru",
      token: "test-token",
      fetch,
    }),
  "/scim/v2",
);
