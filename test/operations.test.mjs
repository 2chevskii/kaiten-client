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
    const byPath = new Map(
      documented.map((entry) => [new URL(entry.documentation).pathname, entry]),
    );
    assert.equal(metadata.length, documented.length);
    assert.deepEqual(
      metadata.map((entry) => entry.documentation).sort(),
      documented.map((entry) => new URL(entry.documentation).pathname).sort(),
    );

    const calls = [];
    let responseKind;
    const client = createClient(async (input, init) => {
      calls.push({ url: new URL(input), init });
      if (responseKind === "array") {
        return Response.json([]);
      }
      if (responseKind === "void") {
        return new Response(null, { status: 204 });
      }
      if (responseKind === "text") {
        return new Response("sample", {
          headers: { "Content-Type": "text/plain" },
        });
      }
      return Response.json({});
    });

    for (const operation of metadata) {
      const documentation = byPath.get(operation.documentation);
      assert.equal(documentation.status, "implemented");
      responseKind = documentation.response?.kind ?? "void";
      const parameters = {};
      for (const name of operation.pathParameters) {
        parameters[name] =
          name.includes("uid") || name === "id" ? "example-uid" : 42;
      }
      if (operation.hasBody) {
        parameters.body = {};
        parameters.file = new Blob(["test"]);
      }
      const query = {};
      for (const parameter of documentation.query_parameters ?? []) {
        query[parameter.name] =
          parameter.name === "version"
            ? 1
            : parameter.name === "redirect"
              ? false
              : parameter.type.includes("boolean")
                ? true
                : /integer|number/.test(parameter.type)
                  ? 7
                  : "sample";
      }
      if (Object.keys(query).length > 0) {
        parameters.query = query;
      }
      const method = client[operation.resource][operation.operation];
      assert.equal(typeof method, "function", operation.documentation);
      const result = await method(parameters);

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
      for (const [name, value] of Object.entries(query)) {
        assert.equal(
          call.url.searchParams.get(name),
          String(value),
          operation.documentation,
        );
      }
      assert.equal(
        call.init.body !== null,
        operation.hasBody,
        operation.documentation,
      );
      if (responseKind === "array") {
        assert.ok(Array.isArray(result), operation.documentation);
      } else if (responseKind === "void") {
        assert.equal(result, undefined, operation.documentation);
      } else {
        assert.equal(typeof result, responseKind, operation.documentation);
      }
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
