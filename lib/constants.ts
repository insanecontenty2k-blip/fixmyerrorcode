import type { ApplianceInfo, BrandInfo } from "./types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fixmyerrorcode.com";

export const SITE_NAME = "Fix My Error Code";

export const BRANDS: BrandInfo[] = [
  { slug: "lg", name: "LG" },
  { slug: "whirlpool", name: "Whirlpool" },
  { slug: "samsung", name: "Samsung" },
  { slug: "bosch", name: "Bosch" },
  { slug: "maytag", name: "Maytag" },
  { slug: "frigidaire", name: "Frigidaire" },
  { slug: "kenmore", name: "Kenmore" },
  { slug: "ge", name: "GE" },
];

export const APPLIANCES: ApplianceInfo[] = [
  { slug: "washing-machine", name: "Washing Machine" },
  { slug: "dryer", name: "Dryer" },
  { slug: "dishwasher", name: "Dishwasher" },
  { slug: "refrigerator", name: "Refrigerator" },
  { slug: "oven", name: "Oven" },
];

/** Homepage “most searched” list — resolved against error-codes.json at build time */
export const MOST_SEARCHED_SLUGS: {
  brand: string;
  appliance: string;
  error_code: string;
}[] = [
  { brand: "lg", appliance: "washing-machine", error_code: "oe" },
  { brand: "lg", appliance: "washing-machine", error_code: "le" },
  { brand: "whirlpool", appliance: "washing-machine", error_code: "f21" },
  { brand: "whirlpool", appliance: "washing-machine", error_code: "f9e1" },
  { brand: "whirlpool", appliance: "washing-machine", error_code: "sd" },
  { brand: "samsung", appliance: "washing-machine", error_code: "4c" },
  { brand: "samsung", appliance: "washing-machine", error_code: "nd" },
  { brand: "bosch", appliance: "dishwasher", error_code: "e15" },
  { brand: "bosch", appliance: "dishwasher", error_code: "e24" },
  { brand: "lg", appliance: "dryer", error_code: "d80" },
  { brand: "lg", appliance: "dryer", error_code: "te1" },
  { brand: "samsung", appliance: "dishwasher", error_code: "lc" },
  { brand: "whirlpool", appliance: "dishwasher", error_code: "f8e4" },
  { brand: "maytag", appliance: "washing-machine", error_code: "f9e1" },
  { brand: "kenmore", appliance: "washing-machine", error_code: "f21" },
];
