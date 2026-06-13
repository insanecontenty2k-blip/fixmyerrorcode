import errorCodesData from "@/data/error-codes.json";
import { APPLIANCES, BRANDS, MOST_SEARCHED_SLUGS } from "./constants";
import type { ErrorCodeEntry } from "./types";
import { errorCodeSlug } from "./urls";

const entries = errorCodesData as ErrorCodeEntry[];

export function getAllErrorCodes(): ErrorCodeEntry[] {
  return entries;
}

export function getBrandCodeCount(brand: string): number {
  return entries.filter((e) => e.brand === brand).length;
}

export function getBrandCodeCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const brand of BRANDS) {
    counts[brand.slug] = getBrandCodeCount(brand.slug);
  }
  return counts;
}

export function getMostSearchedGlobal(): ErrorCodeEntry[] {
  return MOST_SEARCHED_SLUGS.map(({ brand, appliance, error_code }) =>
    entries.find(
      (e) =>
        e.brand === brand &&
        e.appliance === appliance &&
        e.error_code.toLowerCase() === error_code.toLowerCase()
    )
  ).filter((e): e is ErrorCodeEntry => e !== undefined);
}

export function buildSearchResults(): SearchResult[] {
  return entries.map((entry) => ({
    brand: entry.brand,
    brandName: getBrandName(entry.brand),
    appliance: entry.appliance,
    applianceName: getApplianceName(entry.appliance),
    error_code: entry.error_code,
    title: entry.title,
    summary: entry.summary,
    meaning: entry.meaning,
    href: `/${entry.brand}/${entry.appliance}/${errorCodeSlug(entry.error_code)}`,
  }));
}

export function getBrandsWithData() {
  return BRANDS.filter((brand) => getBrandCodeCount(brand.slug) > 0);
}

export function getBrandName(slug: string): string {
  return BRANDS.find((b) => b.slug === slug)?.name ?? slug.toUpperCase();
}

export function getApplianceName(slug: string): string {
  return (
    APPLIANCES.find((a) => a.slug === slug)?.name ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export function getErrorCodeEntry(
  brand: string,
  appliance: string,
  codeSlug: string
): ErrorCodeEntry | undefined {
  const code = codeSlug.replace(/-error-code$/, "");
  return entries.find(
    (e) =>
      e.brand === brand &&
      e.appliance === appliance &&
      e.error_code.toLowerCase() === code.toLowerCase()
  );
}

export function getCodesForBrand(brand: string): ErrorCodeEntry[] {
  return entries.filter((e) => e.brand === brand);
}

export function getCodesForAppliance(
  brand: string,
  appliance: string
): ErrorCodeEntry[] {
  return entries.filter(
    (e) => e.brand === brand && e.appliance === appliance
  );
}

export function getRelatedEntries(entry: ErrorCodeEntry): ErrorCodeEntry[] {
  return entry.related_codes
    .map((code) =>
      entries.find(
        (e) =>
          e.brand === entry.brand &&
          e.appliance === entry.appliance &&
          e.error_code.toLowerCase() === code.toLowerCase()
      )
    )
    .filter((e): e is ErrorCodeEntry => e !== undefined);
}

export function getApplianceCounts(brand: string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const entry of getCodesForBrand(brand)) {
    counts[entry.appliance] = (counts[entry.appliance] ?? 0) + 1;
  }
  return counts;
}

export function getMostSearchedCodes(brand: string, limit = 6): ErrorCodeEntry[] {
  return getCodesForBrand(brand).slice(0, limit);
}

export interface SearchResult {
  brand: string;
  brandName: string;
  appliance: string;
  applianceName: string;
  error_code: string;
  title: string;
  summary: string;
  meaning: string;
  href: string;
}

export function searchErrorCodes(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return entries
    .filter((entry) => {
      const code = entry.error_code.toLowerCase();
      const brand = entry.brand.toLowerCase();
      const brandName = getBrandName(entry.brand).toLowerCase();
      const appliance = entry.appliance.replace(/-/g, " ");
      const applianceName = getApplianceName(entry.appliance).toLowerCase();
      return (
        code.includes(q) ||
        brand.includes(q) ||
        brandName.includes(q) ||
        appliance.includes(q) ||
        applianceName.includes(q) ||
        entry.title.toLowerCase().includes(q) ||
        entry.summary.toLowerCase().includes(q) ||
        entry.meaning.toLowerCase().includes(q)
      );
    })
    .map((entry) => ({
      brand: entry.brand,
      brandName: getBrandName(entry.brand),
      appliance: entry.appliance,
      applianceName: getApplianceName(entry.appliance),
      error_code: entry.error_code,
      title: entry.title,
      summary: entry.summary,
      meaning: entry.meaning,
      href: `/${entry.brand}/${entry.appliance}/${errorCodeSlug(entry.error_code)}`,
    }));
}

export function getAllStaticParams() {
  const brands = BRANDS.map((b) => ({ brand: b.slug }));
  const appliances = BRANDS.flatMap((brand) =>
    APPLIANCES.map((appliance) => ({
      brand: brand.slug,
      appliance: appliance.slug,
    }))
  );
  const codes = entries.map((e) => ({
    brand: e.brand,
    appliance: e.appliance,
    "error-code": errorCodeSlug(e.error_code),
  }));
  return { brands, appliances, codes };
}
