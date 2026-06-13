import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { APPLIANCES, BRANDS } from "@/lib/constants";
import {
  getAllStaticParams,
  getCodesForAppliance,
} from "@/lib/data";
import { buildApplianceMetadata } from "@/lib/seo";
import { absoluteUrl, errorCodeUrl } from "@/lib/urls";

interface AppliancePageProps {
  params: { brand: string; appliance: string };
}

export function generateStaticParams() {
  return getAllStaticParams().appliances;
}

export function generateMetadata({ params }: AppliancePageProps): Metadata {
  return buildApplianceMetadata(params.brand, params.appliance);
}

export default function AppliancePage({ params }: AppliancePageProps) {
  const { brand, appliance } = params;
  const brandInfo = BRANDS.find((b) => b.slug === brand);
  const applianceInfo = APPLIANCES.find((a) => a.slug === appliance);
  if (!brandInfo || !applianceInfo) notFound();

  const brandName = brandInfo.name;
  const applianceName = applianceInfo.name;
  const codes = getCodesForAppliance(brand, appliance);

  if (codes.length === 0) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: `${brandName} Error Codes`, href: `/${brand}` },
          { label: applianceName },
        ]}
      />

      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {brandName} {applianceName} Error Codes
      </h1>
      <p className="mb-8 text-sm text-gray-500">
        {codes.length} error code{codes.length === 1 ? "" : "s"} with causes
        and fixes
      </p>

      <ContentCard>
        <ul className="divide-y divide-gray-100">
          {codes.map((entry) => (
            <li key={entry.error_code}>
              <Link
                href={errorCodeUrl(
                  entry.brand,
                  entry.appliance,
                  entry.error_code
                )}
                className="block px-5 py-4 no-underline transition-colors hover:bg-gray-50"
              >
                <span className="font-medium text-accent">
                  {entry.error_code.toUpperCase()}
                </span>
                <span className="mt-1 block text-sm font-medium text-gray-900">
                  {entry.summary}
                </span>
                <span className="mt-1 block text-sm text-gray-500 line-clamp-2">
                  {entry.meaning}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </ContentCard>

      <p className="mt-8 text-sm text-gray-500">
        <Link href={`/${brand}`} className="text-accent hover:underline">
          ← All {brandName} error codes
        </Link>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${brandName} ${applianceName} Error Codes`,
            url: absoluteUrl(`/${brand}/${appliance}`),
          }),
        }}
      />
    </>
  );
}
