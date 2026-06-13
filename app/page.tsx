import type { Metadata } from "next";
import Link from "next/link";
import { BrandCard } from "@/components/BrandCard";
import { DifficultyBadge, TimeBadge } from "@/components/DifficultyBadge";
import { SearchBar } from "@/components/SearchBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBlocks } from "@/components/TrustBlocks";
import { getBrandColor } from "@/lib/brand-colors";
import {
  getApplianceName,
  getBrandCodeCounts,
  getBrandName,
  getBrandsWithData,
  getMostSearchedGlobal,
} from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { errorCodeUrl } from "@/lib/urls";

export const metadata: Metadata = buildPageMetadata({
  title: "Find Any Appliance Error Code & Fix It Step-by-Step",
  description:
    "Search washer, dishwasher, fridge and dryer error codes by brand. Get causes, quick checks, and repair steps before calling a technician.",
  path: "/",
});

export default function HomePage() {
  const brandCounts = getBrandCodeCounts();
  const brandsWithData = getBrandsWithData();
  const mostSearched = getMostSearchedGlobal();

  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">
          Find Any Appliance Error Code &amp; Fix It Step-by-Step
        </h1>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-600">
          Search washer, dishwasher, fridge and dryer error codes by brand. Get
          causes, quick checks, and repair steps before calling a technician.
        </p>
        <SearchBar variant="hero" />
        <TrustBlocks />
      </section>

      <section aria-labelledby="brands-heading">
        <SectionHeading id="brands-heading">Browse by brand</SectionHeading>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {brandsWithData.map((brand) => (
            <li key={brand.slug}>
              <BrandCard
                slug={brand.slug}
                name={brand.name}
                codeCount={brandCounts[brand.slug] ?? 0}
              />
            </li>
          ))}
        </ul>
      </section>

      {mostSearched.length > 0 && (
        <section aria-labelledby="popular-heading">
          <SectionHeading id="popular-heading">
            Most searched error codes
          </SectionHeading>
          <ul className="overflow-hidden rounded-lg bg-white shadow-card">
            {mostSearched.map((entry) => {
              const dotColor = getBrandColor(entry.brand);
              return (
                <li
                  key={`${entry.brand}-${entry.appliance}-${entry.error_code}`}
                  className="border-t border-gray-100 first:border-t-0"
                >
                  <Link
                    href={errorCodeUrl(
                      entry.brand,
                      entry.appliance,
                      entry.error_code
                    )}
                    className="group flex flex-col gap-3 px-5 py-4 no-underline transition-colors hover:bg-gray-50/80 sm:flex-row sm:items-center"
                  >
                    <span
                      className="hidden h-2 w-2 shrink-0 rounded-full sm:mt-0 sm:block"
                      style={{ backgroundColor: dotColor }}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium text-gray-900">
                        {getBrandName(entry.brand)}{" "}
                        {entry.error_code.toUpperCase()} — {entry.summary}
                      </span>
                      <span className="mt-1 block text-sm text-gray-500">
                        {getApplianceName(entry.appliance)}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3 sm:gap-4">
                      <DifficultyBadge difficulty={entry.difficulty} />
                      <TimeBadge time={entry.estimated_time} />
                      <span className="hidden text-sm font-medium text-accent group-hover:underline sm:inline">
                        View fix →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
