import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const contents = readFileSync(process.env.PACKAGE);
const digest = createHash("sha512").update(contents).digest("base64");
console.log(`sha512-${digest}`);
