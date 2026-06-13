#!/usr/bin/env node
/** Merge data/brands/*.json → data/error-codes.json + rebuild search index */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brandsDir = join(root, "data/brands");
const out = join(root, "data/error-codes.json");

if (!existsSync(brandsDir)) {
  console.error("No data/brands/ folder");
  process.exit(1);
}

const files = readdirSync(brandsDir).filter((f) => f.endsWith(".json")).sort();
const all = files.flatMap((f) => {
  const data = JSON.parse(readFileSync(join(brandsDir, f), "utf8"));
  console.log(`  ${f}: ${data.length} entries`);
  return data;
});

writeFileSync(out, JSON.stringify(all, null, 2) + "\n");
console.log(`\nMerged ${all.length} entries → error-codes.json`);
execSync("node scripts/build-search-index.mjs", { cwd: root, stdio: "inherit" });
