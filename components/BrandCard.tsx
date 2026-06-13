import Link from "next/link";
import { getBrandColor } from "@/lib/brand-colors";

interface BrandCardProps {
  slug: string;
  name: string;
  codeCount: number;
}

export function BrandCard({ slug, name, codeCount }: BrandCardProps) {
  const color = getBrandColor(slug);
  const initial = name.charAt(0).toUpperCase();

  return (
    <Link
      href={`/${slug}`}
      className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-card transition-shadow hover:shadow-md"
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-lg font-semibold text-white"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {initial}
      </span>
      <span className="min-w-0">
        <span className="block font-medium text-gray-900">{name}</span>
        <span className="block text-sm text-gray-500">
          {codeCount} {codeCount === 1 ? "code" : "codes"}
        </span>
      </span>
    </Link>
  );
}
