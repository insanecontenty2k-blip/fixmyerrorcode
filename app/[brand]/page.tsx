import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getBrandColor } from "@/lib/brand-colors";
import { APPLIANCES, BRANDS } from "@/lib/constants";
import {
  getApplianceCounts,
  getApplianceName,
  getBrandCodeCount,
  getMostSearchedCodes,
} from "@/lib/data";
import { buildBrandMetadata } from "@/lib/seo";
import { absoluteUrl, errorCodeUrl } from "@/lib/urls";

interface BrandPageProps {
  params: { brand: string };
}

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }));
}

export function generateMetadata({ params }: BrandPageProps): Metadata {
  return buildBrandMetadata(params.brand);
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = params.brand;
  const brandInfo = BRANDS.find((b) => b.slug === brand);
  if (!brandInfo) notFound();

  const brandName = brandInfo.name;
  const totalCodes = getBrandCodeCount(brand);
  const counts = getApplianceCounts(brand);
  const popular = getMostSearchedCodes(brand);
  const appliancesWithCodes = APPLIANCES.filter(
    (appliance) => (counts[appliance.slug] ?? 0) > 0
  );
  const brandColor = getBrandColor(brand);

  if (totalCodes === 0) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: `${brandName} Error Codes` },
        ]}
      />

      <div className="mb-8 flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl font-semibold text-white"
          style={{ backgroundColor: brandColor }}
          aria-hidden="true"
        >
          {brandName.charAt(0)}
        </span>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            {brandName} Error Codes
          </h1>
          <p className="text-sm text-gray-500">
            {totalCodes} code{totalCodes === 1 ? "" : "s"} across{" "}
            {appliancesWithCodes.length} appliance
            {appliancesWithCodes.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      <section aria-labelledby="appliances-heading" className="mb-12">
        <SectionHeading id="appliances-heading">Appliances</SectionHeading>
        <ContentCard>
          <ul className="divide-y divide-gray-100">
            {appliancesWithCodes.map((appliance) => {
              const count = counts[appliance.slug] ?? 0;
              return (
                <li key={appliance.slug}>
                  <Link
                    href={`/${brand}/${appliance.slug}`}
                    className="flex items-center justify-between px-5 py-4 no-underline transition-colors hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">
                      {appliance.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {count} code{count === 1 ? "" : "s"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ContentCard>
      </section>

      {popular.length > 0 && (
        <section aria-labelledby="popular-heading">
          <SectionHeading id="popular-heading">
            Common {brandName} codes
          </SectionHeading>
          <ContentCard>
            <ul className="divide-y divide-gray-100">
              {popular.map((entry) => (
                <li key={entry.error_code}>
                  <Link
                    href={errorCodeUrl(
                      entry.brand,
                      entry.appliance,
                      entry.error_code
                    )}
                    className="block px-5 py-4 no-underline transition-colors hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">
                      {entry.error_code.toUpperCase()}
                      <span className="font-normal text-gray-600">
                        {" "}
                        — {entry.summary}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      {getApplianceName(entry.appliance)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ContentCard>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${brandName} Error Codes`,
            url: absoluteUrl(`/${brand}`),
          }),
        }}
      />
    </>
  );
}
