/** Accent colors for brand initial squares on the homepage */
export const BRAND_COLORS: Record<string, string> = {
  lg: "#7c3aed",
  whirlpool: "#0284c7",
  samsung: "#1d4ed8",
  bosch: "#dc2626",
  maytag: "#059669",
  frigidaire: "#0891b2",
  kenmore: "#4f46e5",
  ge: "#0369a1",
};

export function getBrandColor(slug: string): string {
  return BRAND_COLORS[slug] ?? "#2563eb";
}
