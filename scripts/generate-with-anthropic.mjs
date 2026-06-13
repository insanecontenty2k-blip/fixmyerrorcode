#!/usr/bin/env node
/**
 * Generate error codes using Anthropic API (optional upgrade over procedural data).
 *
 * Setup:
 *   echo ANTHROPIC_API_KEY=sk-ant-... > .env.local
 *
 * Run one batch (brand + appliance):
 *   node scripts/generate-with-anthropic.mjs --brand lg --appliance washing-machine
 *
 * Run all missing batches:
 *   node scripts/generate-with-anthropic.mjs --all
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const OUT = join(root, "data/error-codes.json");
const ENV_FILE = join(root, ".env.local");

function loadEnv() {
  if (!existsSync(ENV_FILE)) return;
  for (const line of readFileSync(ENV_FILE, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

loadEnv();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BRANDS = ["lg","whirlpool","samsung","bosch","maytag","frigidaire","kenmore","ge"];
const APPLIANCES = ["washing-machine","dryer","dishwasher","refrigerator","oven"];

async function generateBatch(brand, appliance, count = 15) {
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
  const applianceName = appliance.replace(/-/g, " ");

  const prompt = `Generate exactly ${count} unique appliance error code entries as a JSON array for:
Brand: ${brandName} (${brand})
Appliance: ${applianceName} (${appliance})

Each object must have:
brand, appliance, error_code (lowercase), title, summary (short), meta_description,
meaning (2-3 unique sentences), causes (array of 4), fixes (array of 4 numbered steps as strings),
when_to_call_technician, affected_models (array of 3 real-style model numbers),
related_codes (array of 2-3 codes from this batch), difficulty ("easy"|"medium"|"hard"),
estimated_time ("10 min"|"30 min"|"Call technician")

Use REAL ${brandName} error codes for ${applianceName}. Every entry must have completely unique wording.
Return ONLY valid JSON array, no markdown.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Anthropic API ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text ?? "";
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("No JSON array in response");
  return JSON.parse(jsonMatch[0]);
}

async function main() {
  if (!API_KEY) {
    console.error("ANTHROPIC_API_KEY not set. Create .env.local with your key.");
    console.error("Using procedural generator instead: node scripts/generate-all-error-codes.mjs");
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const all = args.includes("--all");
  const brandIdx = args.indexOf("--brand");
  const appIdx = args.indexOf("--appliance");

  let existing = [];
  if (existsSync(OUT)) existing = JSON.parse(readFileSync(OUT, "utf8"));

  const batches = all
    ? BRANDS.flatMap((b) => APPLIANCES.map((a) => [b, a]))
    : brandIdx >= 0 && appIdx >= 0
      ? [[args[brandIdx + 1], args[appIdx + 1]]]
      : [];

  for (const [brand, appliance] of batches) {
    const has = existing.some((e) => e.brand === brand && e.appliance === appliance);
    if (has && all) {
      console.log(`Skip ${brand}/${appliance} — already exists`);
      continue;
    }
    console.log(`Generating ${brand}/${appliance} via Anthropic…`);
    const batch = await generateBatch(brand, appliance);
    existing = existing.filter((e) => !(e.brand === brand && e.appliance === appliance));
    existing.push(...batch);
    writeFileSync(OUT, JSON.stringify(existing, null, 2) + "\n");
    console.log(`  +${batch.length} entries (total ${existing.length})`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
