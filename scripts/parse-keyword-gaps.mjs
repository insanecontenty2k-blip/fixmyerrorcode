#!/usr/bin/env node
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const kw = readFileSync("c:/Users/xploa/Desktop/erros keywords.txt", "utf8");
const existing = JSON.parse(readFileSync(join(root, "data/error-codes.json"), "utf8"));

const BRANDS = ["lg", "whirlpool", "samsung", "bosch", "maytag", "frigidaire", "kenmore", "ge"];
const APPLIANCE_WORDS = [
  ["washing machine", "washing-machine"],
  ["washer", "washing-machine"],
  ["dryer", "dryer"],
  ["dishwasher", "dishwasher"],
  ["refrigerator", "refrigerator"],
  ["fridge", "refrigerator"],
  ["oven", "oven"],
  ["range", "oven"],
  ["stove", "oven"],
];

const SKIP = /tv|robot vacuum|powerbot|mini split|microwave|update error|isp blocking|verizon|thinQ error codes\.com|pdf|how to clear|how to read|not making ice|not heating no error|won't turn off|reset|blinking|flashing lights|error code list pdf|top load washing machine error codes pdf|front load washing machine error codes pdf|wtw5057lw0|duet steam|duet washer error codes|cabrio washer error codes|bravos washer|duet error codes|cabrio error codes|profile washer error codes|elite washer error codes|elite dishwasher|elite refrigerator|front load washer error codes|affinity dryer error codes|gallery dishwasher|gallery error codes|vrt washer|direct drive|inverter direct drive|inverter fridge|mini split|gas oven f9|gas range f9|gas stove f9|stove f9|oven f9|oven error code f9|error codes list$|error codes$|error code list$|error code$|error codes for|error codes whirlpool|error code whirlpool|error codes for whirlpool|error codes for samsung|error code list|error code lg|error codes lg|lg error codes|whirlpool error codes|samsung error codes|bosch error codes|maytag washer error codes list|ge washer error codes list|ge dishwasher error codes list|ge dryer error codes list|ge refrigerator error codes list|frigidaire dishwasher error codes list|frigidaire oven error codes list|bosch oven error codes list|bosch washing machine error codes list|lg dishwasher error codes list|lg dryer error codes list|lg washing machine error codes list|lg refrigerator error codes list|samsung refrigerator error codes list|samsung dishwasher error codes list|maytag dishwasher error codes list|maytag dryer error codes list|whirlpool dryer error codes list|whirlpool dishwasher error codes list|whirlpool washer error codes list|whirlpool washing machine error code list|samsung washing machine error code list|samsung washer error codes list|samsung washing machine error codes list|lg front load washing machine error code list|lg front load washer error codes|whirlpool front load washer error codes|whirlpool front load washing machine error codes|whirlpool top load washer error codes|whirlpool washing machine error codes top load|samsung front load washer error codes|samsung top load washing machine error code list|samsung top load washer error codes|kenmore front load washer error codes|maytag front load washer error codes|whirlpool front load washer error codes list|whirlpool cabrio dryer error codes|frigidaire affinity dryer error codes|kenmore elite washer error codes|kenmore washer error codes list|kenmore elite refrigerator error codes|kenmore elite dishwasher error codes|ge profile washer error codes|whirlpool range error codes|whirlpool stove error codes|samsung stove error codes|samsung oven error codes|lg oven error codes|whirlpool oven error codes|whirlpool refrigerator error codes|samsung refrigerator error codes|frigidaire refrigerator error codes|frigidaire error codes|whirlpool washing machine error codes|whirlpool dishwasher error codes|samsung dishwasher error codes|samsung dryer error codes|samsung washing machine error codes|samsung washer error codes|lg washing machine error codes|lg dryer error codes|lg dishwasher error code|bosch dishwasher error codes|frigidaire dishwasher error codes|whirlpool duet washer|whirlpool cabrio washer|maytag bravos|whirlpool duet|whirlpool cabrio|whirlpool microwave|lg mini split|samsung mini split|error code 202|error code 407|error code 500|error code 412|error code 405|error code 107|error code 60|error code c03|error code 73|error code 11003|566004/i;

function normCode(raw) {
  return raw
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .toLowerCase();
}

function parseKeyword(line) {
  const s = line.toLowerCase().replace(/​/g, "").trim();
  if (!s || SKIP.test(s)) return null;

  let brand = BRANDS.find((b) => s.includes(b));
  if (!brand) return null;

  let appliance = null;
  for (const [word, slug] of APPLIANCE_WORDS) {
    if (s.includes(word)) {
      appliance = slug;
      break;
    }
  }
  if (!appliance) return null;

  // multi-segment whirlpool/maytag f8 e4 -> f8e4
  let m = s.match(/(?:error code|code)\s+([a-z0-9]+(?:\s*[e\-]\s*[a-z0-9]+)?(?:\s*[e\-]\s*[a-z0-9]+)?)/i);
  if (!m) m = s.match(/\b(f\d+\s*e\d+|f\d+e\d+|e\d+\s*f\d+|e\d+f\d+)\b/i);
  if (!m) m = s.match(/\b([a-z]?\d+[a-z]?|[a-z]{1,3}\d+[a-z]?|i\d+|h\d+|c\d+|ur|ub|lc|oe|le|ue|de|fe|pe|te|ie|he|se|ae|ce|ne|be|ff|pf|nf|hc|fc|ac|sc|sd|5d|nd|oc|pc|sud)\b/i);
  if (!m) return null;

  let code = normCode(m[1]);
  // normalize whirlpool sd/5d
  if (code === "5d") code = "sd";
  // normalize e4f8 -> f8e4 order from keyword
  if (s.includes("e4 f8") || s.includes("e4f8")) code = "f8e4";
  if (s.includes("f8 e4") || s.includes("f8e4")) code = "f8e4";
  if (s.includes("f9 e1") || s.includes("f9e1")) code = "f9e1";
  if (s.includes("f5 e3") || s.includes("f5e3")) code = "f5e3";
  if (s.includes("f5 e2") || s.includes("f5e2")) code = "f5e2";
  if (s.includes("f8 e1") || s.includes("f8e1")) code = "f8e1";
  if (s.includes("f7 e1") || s.includes("f7e1")) code = "f7e1";
  if (s.includes("f6 e4") || s.includes("f6e4")) code = "f6e4";
  if (s.includes("f6 e1") || s.includes("f6e1")) code = "f6e1";
  if (s.includes("f6 e8") || s.includes("f6e8")) code = "f6e8";
  if (s.includes("f4 e4") || s.includes("f4e4")) code = "f4e4";
  if (s.includes("f3 e1") || s.includes("f3e1")) code = "f3e1";
  if (s.includes("e1 f9") || s.includes("e1f9")) code = "e1f9";
  if (s.includes("e1 f3") || s.includes("e1f3")) code = "e1f3";
  if (s.includes("e1 f1") || s.includes("e1f1")) code = "e1f1";
  if (s.includes("f1 e0") || s.includes("f1e0")) code = "f1e0";
  if (s.includes("f9 e0") || s.includes("f9e0")) code = "f9e0";
  if (s.includes("fa e4") || s.includes("fae4")) code = "fae4";
  if (s.includes("f8 e6") || s.includes("f8e6")) code = "f8e6";
  if (s.includes("ff e") || s.includes("ffe")) code = "ffe";
  if (s.includes("1f e") || s.includes("1fe")) code = "1fe";
  if (s.includes("ch e") || s.includes("che")) code = "che";
  if (s.includes("cl e") || s.includes("cle")) code = "cle";
  if (s.includes("te1")) code = "te1";
  if (s.includes("9c8")) code = "9c8";
  if (s.includes("8c")) code = "8c";
  if (s.includes("3c")) code = "3c";
  if (s.includes("5c")) code = "5c";
  if (s.includes("cl9")) code = "cl9";
  if (s.includes("h01")) code = "h01";
  if (s.includes("d90") && appliance === "dryer") code = "d90";
  if (s.includes("d95")) code = "d95";
  if (s.includes("6e") && brand === "lg" && appliance === "dishwasher") code = "6e";
  if (s.includes("u5")) code = "u5";
  if (s.includes(" i20")) code = "i20";
  if (s.includes(" i30")) code = "i30";
  if (s.includes(" h1") && appliance === "refrigerator") code = "h1";
  if (s.includes(" f10") && appliance === "oven") code = "f10";
  if (s.includes(" f5 ") && !code.includes("e")) code = "f5";
  if (s.includes(" lf ")) code = "lf";
  if (s.includes(" e1 ") && appliance === "washing-machine") code = "e1";
  if (s.includes(" e2 ") && brand === "ge") code = "e2";
  if (s.includes(" f21") && brand === "kenmore") code = "f21";
  if (s.includes(" f01") && brand === "kenmore" && appliance === "dryer") code = "f01";
  if (s.includes(" e22")) code = "e22";
  if (s.includes(" e25")) code = "e25";
  if (s.includes(" e15")) code = "e15";
  if (s.includes(" e24")) code = "e24";
  if (s.includes(" e09")) code = "e09";
  if (s.includes(" nd ")) code = "nd";
  if (s.includes(" 5e ")) code = "5e";
  if (s.includes(" sud")) code = "sud";
  if (s.includes(" ur ")) code = "ur";
  if (s.includes(" oc ")) code = "oc";
  if (s.includes(" pc ")) code = "pc";

  if (code.length < 2 || code.length > 8) return null;
  if (["informational", "month", "weeks", "metrics", "refresh", "error", "codes", "code", "list", "n/a"].includes(code)) return null;

  return { brand, appliance, error_code: code, keyword: s };
}

const lines = kw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
const parsed = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (/^(Informational|I|N|T|\d|For metrics|0\.00|weeks|month)/i.test(line)) continue;
  const p = parseKeyword(line);
  if (p) parsed.push(p);
}

const existKeys = new Set(existing.map((e) => `${e.brand}:${e.appliance}:${e.error_code.toLowerCase()}`));
const unique = new Map();
for (const p of parsed) {
  const k = `${p.brand}:${p.appliance}:${p.error_code}`;
  if (!unique.has(k)) unique.set(k, p);
}

const missing = [...unique.values()].filter((p) => !existKeys.has(`${p.brand}:${p.appliance}:${p.error_code}`));
const covered = [...unique.values()].filter((p) => existKeys.has(`${p.brand}:${p.appliance}:${p.error_code}`));

console.log("Parsed keyword codes:", unique.size);
console.log("Already covered:", covered.length);
console.log("Missing pages:", missing.length);
console.log("\nMissing by brand:");
const byBrand = {};
missing.forEach((m) => {
  byBrand[m.brand] = byBrand[m.brand] || [];
  byBrand[m.brand].push(`${m.appliance}:${m.error_code}`);
});
Object.entries(byBrand).forEach(([b, arr]) => console.log(b, arr.sort().join(", ")));

console.log("\n--- JSON ---");
console.log(JSON.stringify(missing, null, 2));
