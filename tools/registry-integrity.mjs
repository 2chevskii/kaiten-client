import { readFileSync } from "node:fs";

const value = JSON.parse(readFileSync("integrity.json", "utf8"));
const integrity = Array.isArray(value) ? value[0] : value;
console.log(integrity);
