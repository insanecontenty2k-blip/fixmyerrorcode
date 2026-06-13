#!/usr/bin/env node
/**
 * Rewrite error code entries with Claude using real technical accuracy.
 * Requires ANTHROPIC_API_KEY in .env.local
 *
 *   node scripts/rewrite-with-anthropic.mjs --brand lg --appliance washing-machine
 *   node scripts/rewrite-with-anthropic.mjs --all
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENV = join(root, ".env.local");
const OUT = join(root, "data/error-codes.json");

if (existsSync(ENV)) {
  for (const line of readFileSync(ENV, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

const KEY = process.env.ANTHROPIC_API_KEY;
const BRANDS = ["lg","whirlpool","samsung","bosch","maytag","frigidaire","kenmore","ge"];
const APPLIANCES = ["washing-machine","dryer","dishwasher","refrigerator","oven"];

async function rewriteBatch(entries) {
  const prompt = `You are an appliance repair technical writer. Rewrite these error code entries with FACTUALLY ACCURATE, UNIQUE content.

RULES:
- Each meaning must be 2-3 sentences with code-specific technical details (timing, sensors, components)
- NO template phrases: never use "control system halts", "signals a fault", "logged after control board confirms", "on this model platform"
- causes: 4 bullets, specific to THIS exact code on THIS brand
- fixes: 4 actionable steps in order a homeowner would actually follow
- when_to_call_technician: one honest sentence
- affected_models: 3 real model numbers for this brand/appliance
- difficulty: easy|medium|hard based on actual repair complexity
- estimated_time: "10 min" | "30 min" | "Call technician"
- summary: short plain English (different wording per code)

Return ONLY a JSON array with the same brand/appliance/error_code fields plus all content fields updated.

Entries to rewrite:
${JSON.stringify(entries.map(e => ({ brand: e.brand, appliance: e.appliance, error_code: e.error_code, title: e.title })), null, 2)}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 16000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.content?.[0]?.text ?? "";
  const match = text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("No JSON in response");
  return JSON.parse(match[0]);
}

async function main() {
  if (!KEY) {
    console.error("Set ANTHROPIC_API_KEY in .env.local");
    process.exit(1);
  }

  let all = JSON.parse(readFileSync(OUT, "utf8"));
  const args = process.argv.slice(2);
  const runAll = args.includes("--all");

  const groups = new Map();
  for (const e of all) {
    const k = `${e.brand}:${e.appliance}`;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(e);
  }

  for (const [key, entries] of groups) {
    const [brand, appliance] = key.split(":");
    if (!runAll && !(args.includes(`--brand`) && args[args.indexOf("--brand")+1] === brand && args.includes(`--appliance`) && args[args.indexOf("--appliance")+1] === appliance)) {
      if (!runAll) continue;
    }
    console.log(`Rewriting ${key} (${entries.length} codes)...`);
    for (let i = 0; i < entries.length; i += 5) {
      const batch = entries.slice(i, i + 5);
      const rewritten = await rewriteBatch(batch);
      for (const r of rewritten) {
        const idx = all.findIndex(
          (e) => e.brand === r.brand && e.appliance === r.appliance && e.error_code === r.error_code
        );
        if (idx >= 0) all[idx] = { ...all[idx], ...r };
      }
      writeFileSync(OUT, JSON.stringify(all, null, 2) + "\n");
      console.log(`  batch ${i / 5 + 1} saved`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  console.log("Done. Run: node scripts/build-search-index.mjs");
}

main().catch(console.error);
