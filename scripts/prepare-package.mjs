import { cp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const packageDirectory = join(root, "artifacts");
const sourceDirectory = join(root, "src");
const packageSourceDirectory = join(packageDirectory, "src");
const libraryDirectory = join(packageDirectory, "lib");
const manifest = JSON.parse(await readFile(join(root, "package.json"), "utf8"));

await rm(packageSourceDirectory, { recursive: true, force: true });
await cp(sourceDirectory, packageSourceDirectory, { recursive: true });
for (const filename of ["README.md", "LICENSE"]) {
  await cp(join(root, filename), join(packageDirectory, filename));
}

for (const filename of await readdir(libraryDirectory, { recursive: true })) {
  if (!filename.endsWith(".map")) continue;
  const mapPath = join(libraryDirectory, filename);
  const map = JSON.parse(await readFile(mapPath, "utf8"));
  map.sources = map.sources.map((source) => {
    const sourcePath = resolve(dirname(mapPath), map.sourceRoot ?? "", source);
    const sourceRelativePath = relative(sourceDirectory, sourcePath);
    if (
      sourceRelativePath.startsWith(`..${sep}`) ||
      sourceRelativePath === ".."
    ) {
      throw new Error(`Source map points outside src: ${mapPath}`);
    }
    return relative(
      dirname(mapPath),
      join(packageSourceDirectory, sourceRelativePath),
    )
      .split(sep)
      .join("/");
  });
  map.sourceRoot = "";
  await writeFile(mapPath, JSON.stringify(map));
}

delete manifest.scripts;
delete manifest.devDependencies;
delete manifest.overrides;
manifest.files = ["lib", "src", "README.md", "LICENSE"];
manifest.types = manifest.types.replace("./artifacts/lib/", "./lib/");
for (const entry of Object.values(manifest.exports)) {
  for (const condition of Object.keys(entry)) {
    entry[condition] = entry[condition].replace("./artifacts/lib/", "./lib/");
  }
}
await writeFile(
  join(packageDirectory, "package.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
