export function errorCodeSlug(code: string): string {
  return `${code.toLowerCase()}-error-code`;
}

export function parseErrorCodeSlug(slug: string): string | null {
  const match = slug.match(/^(.+)-error-code$/);
  return match ? match[1] : null;
}

export function brandUrl(brand: string): string {
  return `/${brand}`;
}

export function applianceUrl(brand: string, appliance: string): string {
  return `/${brand}/${appliance}`;
}

export function errorCodeUrl(
  brand: string,
  appliance: string,
  code: string
): string {
  return `/${brand}/${appliance}/${errorCodeSlug(code)}`;
}

export function absoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fixmyerrorcode.com";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
