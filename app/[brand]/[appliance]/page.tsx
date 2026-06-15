import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  buildFallbackHubContent,
  getApplianceHubContent,
} from "@/lib/appliance-hub-content";
import { APPLIANCES, BRANDS } from "@/lib/constants";
import { getAllStaticParams, getCodesForAppliance } from "@/lib/data";
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
  const codes = getCodesForAppliance(brand, appliance).sort((a, b) =>
    a.error_code.localeCompare(b.error_code, undefined, { sensitivity: "base" })
  );

  if (codes.length === 0) notFound();

  const hub =
    getApplianceHubContent(brand, appliance) ??
    buildFallbackHubContent(brandName, applianceName, codes.length);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: `${brandName} Error Codes`, href: `/${brand}` },
          { label: applianceName },
        ]}
      />

      <header className="mb-10">
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          {brandName} {applianceName} Error Codes
        </h1>
        <p className="max-w-3xl leading-relaxed text-gray-600">{hub.intro}</p>
      </header>

      <section aria-labelledby="troubleshooting-heading" className="mb-10">
        <SectionHeading id="troubleshooting-heading">
          General troubleshooting
        </SectionHeading>
        <ContentCard className="p-6">
          <p className="mb-4 text-sm text-gray-600">
            Try these checks before opening a specific error code page—they
            resolve many {brandName} {applianceName.toLowerCase()} faults
            without parts.
          </p>
          <ol className="space-y-3">
            {hub.general_troubleshooting.map((step, index) => (
              <li key={step} className="flex gap-4 text-gray-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </ContentCard>
      </section>

      <section aria-labelledby="symptoms-heading" className="mb-10">
        <SectionHeading id="symptoms-heading">Common symptoms</SectionHeading>
        <ContentCard className="p-6">
          <p className="mb-4 text-sm text-gray-600">
            Owners often search for a code after noticing one of these issues on
            their {brandName} {applianceName.toLowerCase()}:
          </p>
          <ul className="space-y-3 text-gray-700">
            {hub.common_symptoms.map((symptom) => (
              <li key={symptom} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{symptom}</span>
              </li>
            ))}
          </ul>
        </ContentCard>
      </section>

      <section aria-labelledby="codes-table-heading" className="mb-10">
        <SectionHeading id="codes-table-heading">
          All {brandName} {applianceName.toLowerCase()} error codes
        </SectionHeading>
        <ContentCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
                  <th scope="col" className="px-5 py-3">
                    Code
                  </th>
                  <th scope="col" className="px-5 py-3">
                    What it means
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Guide
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {codes.map((entry) => (
                  <tr key={entry.error_code} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-5 py-3 font-semibold text-accent">
                      {entry.error_code.toUpperCase()}
                    </td>
                    <td className="px-5 py-3 text-gray-700">
                      <span className="font-medium text-gray-900">
                        {entry.summary}
                      </span>
                      <span className="mt-0.5 block text-gray-500 line-clamp-2">
                        {entry.meaning}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3">
                      <Link
                        href={errorCodeUrl(
                          entry.brand,
                          entry.appliance,
                          entry.error_code
                        )}
                        className="font-medium text-accent no-underline hover:underline"
                      >
                        View fix →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentCard>
        <p className="mt-3 text-sm text-gray-500">
          {codes.length} codes documented with causes, fixes, and affected
          models.
        </p>
      </section>

      <p className="text-sm text-gray-500">
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
            description: hub.intro,
            url: absoluteUrl(`/${brand}/${appliance}`),
            numberOfItems: codes.length,
          }),
        }}
      />
    </>
  );
}
