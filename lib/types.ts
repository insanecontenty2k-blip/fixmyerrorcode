export interface ErrorCodeEntry {
  brand: string;
  appliance: string;
  error_code: string;
  title: string;
  summary: string;
  meta_description: string;
  meaning: string;
  causes: string[];
  fixes: string[];
  when_to_call_technician: string;
  affected_models: string[];
  related_codes: string[];
  difficulty: "easy" | "medium" | "hard";
  estimated_time: string;
  /** Extra technical paragraphs (300+ word target) */
  deep_dive?: string[];
  /** Owner prevention / maintenance tips */
  prevention_tips?: string[];
  /** Typical OEM part cost range when replacement is needed */
  part_cost_estimate?: string;
  /** Skip generic enrich-depth pass — hand-researched page */
  priority_rewrite?: boolean;
}

export interface BrandInfo {
  slug: string;
  name: string;
}

export interface ApplianceInfo {
  slug: string;
  name: string;
}

export interface SearchIndexEntry {
  brand: string;
  brandName: string;
  appliance: string;
  applianceName: string;
  error_code: string;
  summary: string;
  meaning: string;
  href: string;
  difficulty: "easy" | "medium" | "hard";
  estimated_time: string;
}
