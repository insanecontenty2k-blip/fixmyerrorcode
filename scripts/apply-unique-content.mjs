#!/usr/bin/env node
/** Patch + append unique-content modules into error-codes.json */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "scripts/unique-content");
const out = join(root, "data/error-codes.json");

const modules = readdirSync(contentDir).filter((f) => f.endsWith(".mjs")).sort();
const patches = [];
for (const f of modules) {
  const mod = await import(pathToFileURL(join(contentDir, f)).href);
  const entries = mod.default ?? mod.entries ?? [];
  console.log(`  ${f}: ${entries.length} entries`);
  patches.push(...entries);
}

const key = (e) => `${e.brand}:${e.appliance}:${e.error_code.toLowerCase()}`;
const patchMap = new Map();
for (const p of patches) {
  patchMap.set(key(p), p);
}

const existing = JSON.parse(readFileSync(out, "utf8"));
let replaced = 0;
let appended = 0;

const merged = existing.map((entry) => {
  const p = patchMap.get(key(entry));
    if (p) {
    replaced++;
    return {
      ...entry,
      ...p,
      error_code: entry.error_code,
      deep_dive: p.deep_dive ?? entry.deep_dive,
      prevention_tips: p.prevention_tips ?? entry.prevention_tips,
      part_cost_estimate: p.part_cost_estimate ?? entry.part_cost_estimate,
      priority_rewrite: p.priority_rewrite ?? entry.priority_rewrite,
    };
  }
  return entry;
});

const seen = new Set(merged.map(key));
for (const p of patches) {
  const k = key(p);
  if (!seen.has(k)) {
    merged.push({ ...p });
    seen.add(k);
    appended++;
  }
}

// Drop duplicate keys (keep first — already patched)
const deduped = [];
const finalSeen = new Set();
for (const entry of merged) {
  const k = key(entry);
  if (finalSeen.has(k)) continue;
  finalSeen.add(k);
  deduped.push(entry);
}

writeFileSync(out, JSON.stringify(deduped, null, 2) + "\n");
console.log(`\nPatched ${replaced}, appended ${appended}, total ${deduped.length} entries`);
execSync("node scripts/build-search-index.mjs", { cwd: root, stdio: "inherit" });
