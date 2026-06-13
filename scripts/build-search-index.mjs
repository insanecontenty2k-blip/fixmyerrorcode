import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const raw = readFileSync(join(root, "data/error-codes.json"), "utf8");
/** @type {import("../lib/types.ts").ErrorCodeEntry[]} */
const entries = JSON.parse(raw);

const BRAND_NAMES = {
  lg: "LG",
  whirlpool: "Whirlpool",
  samsung: "Samsung",
  bosch: "Bosch",
  maytag: "Maytag",
  frigidaire: "Frigidaire",
  kenmore: "Kenmore",
  ge: "GE",
};

const APPLIANCE_NAMES = {
  "washing-machine": "Washing Machine",
  dryer: "Dryer",
  dishwasher: "Dishwasher",
  refrigerator: "Refrigerator",
  oven: "Oven",
};

const index = entries.map((entry) => ({
  brand: entry.brand,
  brandName: BRAND_NAMES[entry.brand] ?? entry.brand,
  appliance: entry.appliance,
  applianceName: APPLIANCE_NAMES[entry.appliance] ?? entry.appliance,
  error_code: entry.error_code,
  summary: entry.summary,
  meaning: entry.meaning,
  href: `/${entry.brand}/${entry.appliance}/${entry.error_code.toLowerCase()}-error-code`,
  difficulty: entry.difficulty ?? "medium",
  estimated_time: entry.estimated_time ?? "30 min",
}));

writeFileSync(
  join(root, "public/search-index.json"),
  JSON.stringify(index),
  "utf8"
);

console.log(`Built search index with ${index.length} entries.`);
