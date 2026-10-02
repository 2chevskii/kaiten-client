import { readFileSync } from "node:fs";

const release = JSON.parse(readFileSync("release.json", "utf8"));
if (!release.isDraft) {
  throw new Error("Release is already published");
}
