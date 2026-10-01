import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { KaitenClient, REST_OPERATION_METADATA } from "../dist/index.js";
import { KaitenScimClient, SCIM_OPERATION_METADATA } from "../dist/scim.js";
import {
  querySample,
  readPublicApi,
  root,
  schemaSample,
} from "./api-source.mjs";

const registry = JSON.parse(
  readFileSync(resolve(root, "docs/api-coverage.json"), "utf8"),
);
const api = readPublicApi();
let captured;
const fetcher = async (url, init) => {
  captured = { url: new URL(url), init };
  if (captured.url.searchParams.get("redirect") === "true") {
    return new Response(null, {
      status: 302,
      headers: { Location: "https://downloads.test/signed" },
    });
  }
  return new Response("{}", {
    headers: { "Content-Type": "application/json" },
  });
};
const options = {
  origin: "https://verification.kaiten.test",
  token: "verification",
  fetch: fetcher,
};
const controller = new AbortController();
let count = 0;

for (const [className, client, metadata, prefix, section] of [
  [
    "KaitenClient",
    new KaitenClient(options),
    REST_OPERATION_METADATA,
    "/api/v1",
    "rest",
  ],
  [
    "KaitenScimClient",
    new KaitenScimClient(options),
    SCIM_OPERATION_METADATA,
    "/scim/v2",
    "scim",
  ],
]) {
  const entries = registry.entries.filter((entry) => entry.section === section);
  assert.equal(metadata.length, entries.length);
  assert.equal(
    new Set(metadata.map((item) => `${item.resource}.${item.operation}`)).size,
    metadata.length,
  );

  for (const operation of metadata) {
    const key = `${className}.${operation.resource}.${operation.operation}`;
    const entry = entries.find((item) => item.implementation === key);
    assert.ok(entry, `${key} must be present in the contract inventory`);
    const method = api.operations.get(key);
    assert.ok(method, `${key} must be callable through the public client`);
    assert.equal(operation.method, entry.method, key);
    assert.equal(
      operation.path,
      entry.endpoint.replace(/^\/api\/(?:v1|latest)|^\/scim\/v2/, ""),
      key,
    );
    assert.equal(
      operation.hasBody,
      Boolean(entry.request_body),
      `${key} request body`,
    );
    assert.notEqual(
      operation.method === "GET" && operation.hasBody,
      true,
      `${key} GET body`,
    );
    const bodySample = entry.request_body?.schema
      ? schemaSample(entry.request_body.schema)
      : Object.fromEntries(
          (entry.request_body?.fields ?? [])
            .filter((field) => !field.deprecated)
            .map((field) => [
              field.name,
              /array/.test(field.type)
                ? []
                : /boolean/.test(field.type)
                  ? true
                  : /number|integer/.test(field.type)
                    ? 17
                    : "sample",
            ]),
        );
    const pathValues = operation.pathParameters.map((_, index) =>
      method.parameters[index].typeText.includes("number")
        ? index + 101
        : `segment-${index}/a?b#c`,
    );
    const query = querySample(entry.query_parameters);
    const args = method.parameters.map((parameter, index) => {
      if (index < pathValues.length) return pathValues[index];
      if (parameter.name === "options")
        return { signal: controller.signal, filename: "verification.txt" };
      if (parameter.name === "query") return query;
      if (parameter.name === "body") return bodySample;
      if (parameter.name === "file") return new Blob(["verification"]);
      const field = Object.keys(bodySample).find(
        (name) =>
          name
            .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
            .toLowerCase() === parameter.name.toLowerCase(),
      );
      if (field) return bodySample[field];
      if (parameter.name === "childCardId") return bodySample.card_id;
      const queryField = Object.keys(query).find(
        (name) =>
          name.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()) ===
          parameter.name,
      );
      if (queryField) return query[queryField];
      if (parameter.typeText.includes("number")) return 17;
      if (parameter.typeText.includes("boolean")) return true;
      if (parameter.typeText.includes("[]")) return [];
      return "sample";
    });
    await client[operation.resource][operation.operation](...args);
    assert.equal(captured.init.method, operation.method, key);
    const expectedPath =
      prefix +
      operation.path.replace(/\{([^}]+)\}/g, (_, name) =>
        encodeURIComponent(
          String(pathValues[operation.pathParameters.indexOf(name)]),
        ),
      );
    assert.equal(captured.url.pathname, expectedPath, key);
    assert.equal(
      captured.init.signal,
      controller.signal,
      `${key} cancellation`,
    );
    for (const [name, value] of Object.entries(query))
      assert.equal(
        captured.url.searchParams.get(name),
        name === "filters" && typeof value === "object"
          ? JSON.stringify(value)
          : String(value),
        `${key} query.${name}`,
      );
    if (operation.hasBody)
      assert.notEqual(captured.init.body, null, `${key} body forwarding`);
    if (operation.method === "GET")
      assert.equal(captured.init.body, null, `${key} GET body`);
    if (
      captured.init.body &&
      !(captured.init.body instanceof FormData) &&
      Object.keys(bodySample).length
    ) {
      assert.deepEqual(
        JSON.parse(captured.init.body),
        bodySample,
        `${key} request fields`,
      );
    }
    count++;
  }
}
assert.equal(
  api.operations.size,
  count + 1,
  "Only the documented card creation alias may extend the inventory",
);
console.log(
  `Verified ${count} REST/SCIM operations, routes, request fields, queries, and cancellation`,
);
