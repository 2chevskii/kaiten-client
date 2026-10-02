import { readFileSync } from "node:fs";

const release = JSON.parse(readFileSync("release.json", "utf8"));
if (release.isDraft || release.isPrerelease) {
  throw new Error("A published stable release is required");
}
