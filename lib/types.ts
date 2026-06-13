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
