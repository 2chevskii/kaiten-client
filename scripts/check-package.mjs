import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
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
        /^dist\/.*\.(?:js|d\.ts)(?:\.map)?$/.test(file.path) ||
        /^src\/.*\.ts$/.test(file.path),
    ),
    "Only package artifacts may enter the tarball",
  );
  for (const entry of Object.values(manifest.exports)) {
    for (const target of Object.values(entry)) {
      assert.ok(
        packed.files.some((file) => file.path === target.replace(/^\.\//, "")),
        `Missing export ${target}`,
      );
      assert.ok(
        packed.files.some(
          (file) => file.path === `${target.replace(/^\.\//, "")}.map`,
        ),
        `Missing source map for ${target}`,
      );
    }
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
    `
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
for (const name of ${JSON.stringify(exports)}) {
  const imported = await import(name);
  const required = require(name);
  assert.deepEqual(Object.keys(required).sort(), Object.keys(imported).sort());
  for (const key of Object.keys(imported)) {
    assert.equal(required[key], imported[key]);
  }
}
`,
  );
  run(["--no-strip-types", join(consumer, "imports.mjs")], consumer);

  const packageDirectory = join(consumer, "node_modules", manifest.name);
  for (const file of packed.files.filter((file) =>
    file.path.endsWith(".map"),
  )) {
    const mapPath = join(packageDirectory, file.path);
    const map = JSON.parse(await readFile(mapPath, "utf8"));
    assert.ok(map.sources.length > 0, `Empty source map ${file.path}`);
    for (const source of map.sources) {
      const sourcePath = relative(
        packageDirectory,
        resolve(dirname(mapPath), map.sourceRoot ?? "", source),
      )
        .split(sep)
        .join("/");
      assert.ok(
        packed.files.some((file) => file.path === sourcePath),
        `Missing source ${sourcePath} referenced by ${file.path}`,
      );
      await readFile(join(packageDirectory, sourcePath), "utf8");
    }
  }

  const typeContracts = `
import { KaitenClient } from "${manifest.name}";
import { KaitenScimClient } from "${manifest.name}/scim";
import { AddonOAuthClient } from "${manifest.name}/addon-oauth";
import { sendCardWebhook } from "${manifest.name}/webhooks";
import type { UserMetadataHandler } from "${manifest.name}/metadata";
import type { ImportCardsRecord } from "${manifest.name}/imports";
import type { AddonCapabilities } from "${manifest.name}/addons";
declare const client: KaitenClient;
declare const scim: KaitenScimClient;
declare const oauth: AddonOAuthClient;

async function verifyContracts() {
  await client.cards.create({ title: "Release", board_id: 1 });
  (await client.cards.retrieveCard(1)).board.title;
  (await client.restrictedAccessCardFiles.getCardFile("card", "file")).url;
  await scim.users.updateUser(1, [{ op: "replace", path: "active", value: false }]);
  await oauth.getToken("addon", 1, 1);
  await sendCardWebhook("https://example.kaiten.ru/hook", { title: "Release" });
  const metadata: UserMetadataHandler = ({ email }) => ({ description: email });
  const cards: ImportCardsRecord[] = [
    { id: "card", column_id: "column", title: "Card" },
  ];
  const capabilities: AddonCapabilities = { card_facade_badges: () => null };
  window.Addon.initialize(capabilities);
  void metadata;
  void cards;
}
void verifyContracts;
`;
  for (const extension of ["mts", "cts"]) {
    const typesFile = join(consumer, `types.${extension}`);
    await writeFile(typesFile, typeContracts);
    const program = ts.createProgram([typesFile], {
      target: ts.ScriptTarget.ES2024,
      module: ts.ModuleKind.Node20,
      strict: true,
      exactOptionalPropertyTypes: true,
      skipLibCheck: false,
      noEmitOnError: true,
    });
    assert.deepEqual(
      ts
        .getPreEmitDiagnostics(program)
        .map((diagnostic) =>
          ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
        ),
      [],
      `Public declarations must compile for a .${extension} consumer`,
    );
    const emitted = program.emit();
    assert.equal(emitted.emitSkipped, false);
    const outputExtension = extension === "mts" ? "mjs" : "cjs";
    run(
      ["--no-strip-types", join(consumer, `types.${outputExtension}`)],
      consumer,
    );
  }
  console.log(
    `Verified ${packed.filename}: ${packed.entryCount} files, ${exports.length} exports, import/require, ESM/CommonJS declarations, and packaged source maps`,
  );
} finally {
  await rm(target, { recursive: true, force: true });
}
