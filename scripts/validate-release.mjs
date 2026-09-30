import { appendFileSync, readFileSync } from "node:fs";
import { validateRelease } from "./release-version.mjs";

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
