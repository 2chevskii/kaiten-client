import { appendFileSync, readFileSync } from "node:fs";

function validateRelease(tag, manifest, lockfile) {
  if (!/^v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)$/.test(tag)) {
    throw new Error("Release tag must use the stable vX.Y.Z format.");
  }

  const version = tag.slice(1);
  if (manifest.name !== "@2chevskii/kaiten-client") {
    throw new Error("Unexpected package name.");
  }
  if (manifest.version !== version) {
    throw new Error(`Package version ${manifest.version} must match ${tag}.`);
  }
  if (
    lockfile &&
    (lockfile.name !== manifest.name ||
      lockfile.version !== version ||
      lockfile.packages?.[""]?.name !== manifest.name ||
      lockfile.packages?.[""]?.version !== version)
  ) {
    throw new Error(
      "package-lock.json must match the package name and version.",
    );
  }

  return {
    version,
    package: `2chevskii-kaiten-client-${version}.tgz`,
  };
}

const fromStdin = process.argv.includes("--stdin");
const manifest = JSON.parse(
  readFileSync(fromStdin ? 0 : "package.json", "utf8"),
);
const lockfile = fromStdin
  ? undefined
  : JSON.parse(readFileSync("package-lock.json", "utf8"));
const release = validateRelease(process.argv[2], manifest, lockfile);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `version=${release.version}\npackage=${release.package}\n`,
  );
}
console.log(`Validated ${process.argv[2]}: ${release.package}`);
