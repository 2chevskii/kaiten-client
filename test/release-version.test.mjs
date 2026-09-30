import assert from "node:assert/strict";
import { test } from "node:test";
import { validateRelease } from "../scripts/release-version.mjs";

const manifest = { name: "@2chevskii/kaiten-client", version: "1.2.3" };
const lockfile = {
  ...manifest,
  packages: { "": { ...manifest } },
};

test("release metadata identifies the npm tarball", () => {
  assert.deepEqual(validateRelease("v1.2.3", manifest, lockfile), {
    version: "1.2.3",
    package: "2chevskii-kaiten-client-1.2.3.tgz",
  });
  assert.equal(validateRelease("v1.2.3", manifest).version, "1.2.3");
});

test("release validation rejects invalid and prerelease tags", () => {
  for (const tag of [
    undefined,
    "1.2.3",
    "v01.2.3",
    "v1.2",
    "v1.2.3-rc.1",
    "v1.2.3+build",
    "v1.2.3\ninjected=value",
  ]) {
    assert.throws(() => validateRelease(tag, manifest, lockfile), /stable/);
  }
});

test("release validation rejects a tag that differs from the package", () => {
  assert.throws(
    () => validateRelease("v1.2.4", manifest, lockfile),
    /must match/,
  );
  assert.throws(
    () => validateRelease("v1.2.3", { ...manifest, name: "other" }),
    /name/,
  );
});

test("release validation rejects stale lockfile metadata", () => {
  for (const changed of [
    { ...lockfile, version: "1.2.2" },
    { ...lockfile, name: "other" },
    { ...lockfile, packages: {} },
    { ...lockfile, packages: { "": { ...manifest, version: "1.2.2" } } },
    { ...lockfile, packages: { "": { ...manifest, name: "other" } } },
  ]) {
    assert.throws(() => validateRelease("v1.2.3", manifest, changed), /lock/);
  }
});
