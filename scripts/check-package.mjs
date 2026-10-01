import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import ts from "typescript";
import { root } from "./api-source.mjs";

const npmCli = process.env.npm_execpath;
if (!npmCli)
  throw new Error("Run package verification with npm run package:check");
const directory = await mkdtemp(join(tmpdir(), "kaiten-package-"));
const target = resolve(directory);
if (
  dirname(target) !== resolve(tmpdir()) ||
  !basename(target).startsWith("kaiten-package-")
) {
  throw new Error("Unexpected package verification directory");
}

function run(args, cwd) {
  const result = spawnSync(process.execPath, args, { cwd, encoding: "utf8" });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(
      result.stderr ||
        result.stdout ||
        `Command failed with exit code ${result.status}`,
    );
  return result.stdout;
}

try {
  const manifest = JSON.parse(
    await readFile(join(root, "package.json"), "utf8"),
  );
  const packResult = JSON.parse(
    run(
      [
        npmCli,
        "pack",
        "--ignore-scripts",
        "--json",
        "--pack-destination",
        directory,
      ],
      root,
    ),
  );
  const packed = Array.isArray(packResult)
    ? packResult[0]
    : packResult[manifest.name];
  assert.ok(packed?.filename, "npm pack must describe the package artifact");
  assert.equal(packed.version, manifest.version);
  assert.ok(
    packed.files.every(
      (file) =>
        ["LICENSE", "README.md", "package.json"].includes(file.path) ||
        /^dist\/.*\.(?:js|d\.ts)$/.test(file.path),
    ),
    "Only package artifacts may enter the tarball",
  );
  for (const entry of Object.values(manifest.exports)) {
    for (const target of Object.values(entry))
      assert.ok(
        packed.files.some((file) => file.path === target.replace(/^\.\//, "")),
        `Missing export ${target}`,
      );
  }
  const consumer = join(directory, "consumer");
  await mkdir(consumer);
  await writeFile(
    join(consumer, "package.json"),
    JSON.stringify({ private: true, type: "module" }),
  );
  run(
    [
      npmCli,
      "install",
      "--ignore-scripts",
      "--omit=dev",
      "--no-audit",
      "--no-fund",
      join(directory, packed.filename),
    ],
    consumer,
  );
  const exports = Object.keys(manifest.exports).map(
    (name) => manifest.name + (name === "." ? "" : name.slice(1)),
  );
  await writeFile(
    join(consumer, "imports.mjs"),
    `for (const name of ${JSON.stringify(exports)}) await import(name);\n`,
  );
  run([join(consumer, "imports.mjs")], consumer);

  const typesFile = join(consumer, "types.mts");
  await writeFile(
    typesFile,
    `
import { KaitenClient } from "${manifest.name}";
import { KaitenScimClient } from "${manifest.name}/scim";
import { AddonOAuthClient } from "${manifest.name}/addon-oauth";
import { sendCardWebhook } from "${manifest.name}/webhooks";
import type { UserMetadataHandler } from "${manifest.name}/metadata";
import type { ImportCardsRecord } from "${manifest.name}/imports";
import type { AddonCapabilities } from "${manifest.name}/addons";
declare const client: KaitenClient;
await client.cards.create({ title: "Release", board_id: 1 });
(await client.cards.retrieveCard(1)).board.title;
(await client.restrictedAccessCardFiles.getCardFile("card", "file")).url;
declare const scim: KaitenScimClient;
await scim.users.updateUser(1, [{ op: "replace", path: "active", value: false }]);
declare const oauth: AddonOAuthClient;
await oauth.getToken("addon", 1, 1);
await sendCardWebhook("https://example.kaiten.ru/hook", { title: "Release" });
const metadata: UserMetadataHandler = ({ email }) => ({ description: email });
const cards: ImportCardsRecord[] = [{ id: "card", column_id: "column", title: "Card" }];
const capabilities: AddonCapabilities = { card_facade_badges: () => null };
window.Addon.initialize(capabilities);
void metadata; void cards;
`,
  );
  const program = ts.createProgram([typesFile], {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    strict: true,
    exactOptionalPropertyTypes: true,
    skipLibCheck: false,
    noEmit: true,
  });
  assert.deepEqual(
    ts
      .getPreEmitDiagnostics(program)
      .map((diagnostic) =>
        ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
      ),
    [],
  );
  console.log(
    `Verified ${packed.filename}: ${packed.entryCount} files, ${exports.length} exports, installation, and public declarations`,
  );
} finally {
  await rm(target, { recursive: true, force: true });
}
