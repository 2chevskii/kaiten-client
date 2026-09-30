import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const repository = process.cwd();
const npmCli = process.env.npm_execpath;
assert.ok(npmCli, "Run the package smoke test with npm run test:package.");

function npm(args, cwd) {
  return execFileSync(process.execPath, [npmCli, ...args], {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
  });
}

const packResult = JSON.parse(
  npm(["pack", "--json", "--ignore-scripts"], repository),
);
const [packed] = Array.isArray(packResult)
  ? packResult
  : Object.values(packResult);
const manifest = JSON.parse(readFileSync("package.json", "utf8"));
const files = new Set(packed.files.map((file) => file.path));
for (const required of ["package.json", "README.md", "LICENSE"]) {
  assert.ok(files.has(required), `Package must include ${required}.`);
}
for (const path of files) {
  assert.ok(
    path.startsWith("dist/") ||
      ["package.json", "README.md", "LICENSE"].includes(path),
    `Unexpected file in package: ${path}`,
  );
}

const imports = [];
for (const [subpath, entry] of Object.entries(manifest.exports)) {
  for (const target of [entry.types, entry.default]) {
    assert.ok(files.has(target.slice(2)), `Missing exported file ${target}.`);
  }
  imports.push(manifest.name + (subpath === "." ? "" : subpath.slice(1)));
}

const consumer = mkdtempSync(join(tmpdir(), "kaiten-package-"));
try {
  writeFileSync(
    join(consumer, "package.json"),
    JSON.stringify({ private: true, type: "module" }),
  );
  npm(
    [
      "install",
      resolve(packed.filename),
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
    ],
    consumer,
  );
  const consumerSource = imports
    .map(
      (specifier, index) =>
        `import * as entry${index} from "${specifier}";\nvoid entry${index};`,
    )
    .join("\n");
  writeFileSync(join(consumer, "consumer.mts"), consumerSource);
  execFileSync(
    process.execPath,
    [
      join(repository, "node_modules/typescript/bin/tsc"),
      "--noEmit",
      "--strict",
      "--module",
      "NodeNext",
      "--target",
      "ES2022",
      "consumer.mts",
    ],
    { cwd: consumer, stdio: "inherit" },
  );
  execFileSync(
    process.execPath,
    [
      "--input-type=module",
      "--eval",
      imports.map((specifier) => `await import("${specifier}");`).join("\n"),
    ],
    { cwd: consumer, stdio: "inherit" },
  );
  console.log(
    `Verified ${packed.filename}: all ${imports.length} entry points.`,
  );
} finally {
  rmSync(consumer, { recursive: true, force: true });
}
