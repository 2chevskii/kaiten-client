import { readFileSync } from "node:fs";

const lookup = JSON.parse(readFileSync("integrity.json", "utf8"));
if (lookup?.error?.code !== "E404") {
  throw new Error(
    `Registry lookup failed: ${lookup?.error?.code ?? "unknown error"}`,
  );
}
