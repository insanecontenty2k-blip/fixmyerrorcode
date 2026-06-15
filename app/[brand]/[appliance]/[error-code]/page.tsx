import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { DifficultyBadge, TimeBadge } from "@/components/DifficultyBadge";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getAllStaticParams,
  getApplianceName,
  getBrandName,
  getErrorCodeEntry,
  getRelatedEntries,
} from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl, errorCodeUrl, parseErrorCodeSlug } from "@/lib/urls";

interface ErrorCodePageProps {
  params: { brand: string; appliance: string; "error-code": string };
}

export function generateStaticParams() {
  return getAllStaticParams().codes;
}

export function generateMetadata({ params }: ErrorCodePageProps): Metadata {
  const code = parseErrorCodeSlug(params["error-code"]);
  if (!code) return { title: "Error Code Not Found" };

  const entry = getErrorCodeEntry(params.brand, params.appliance, code);
  if (!entry) return { title: "Error Code Not Found" };

  return buildPageMetadata({
    title: entry.title,
    description: entry.meta_description,
    path: `/${params.brand}/${params.appliance}/${params["error-code"]}`,
  });
}

function buildHowToSchema(
  entry: NonNullable<ReturnType<typeof getErrorCodeEntry>>,
  pageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Fix ${entry.title}`,
    description: entry.meaning,
    url: pageUrl,
    step: entry.fixes.map((fix, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: fix,
    })),
  };
}

function buildFaqSchema(
  entry: NonNullable<ReturnType<typeof getErrorCodeEntry>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What does ${entry.error_code.toUpperCase()} mean on a ${getBrandName(entry.brand)} ${getApplianceName(entry.appliance).toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.meaning,
        },
      },
      {
        "@type": "Question",
        name: `When should I call a technician for ${entry.error_code.toUpperCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.when_to_call_technician,
        },
      },
    ],
  };
}

export default function ErrorCodePage({ params }: ErrorCodePageProps) {
  const code = parseErrorCodeSlug(params["error-code"]);
  if (!code) notFound();

  const entry = getErrorCodeEntry(params.brand, params.appliance, code);
  if (!entry) notFound();

  const brandName = getBrandName(entry.brand);
  const applianceName = getApplianceName(entry.appliance);
  const related = getRelatedEntries(entry);
  const pageUrl = absoluteUrl(
    `/${params.brand}/${params.appliance}/${params["error-code"]}`
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: `${brandName} Error Codes`, href: `/${entry.brand}` },
          {
            label: applianceName,
            href: `/${entry.brand}/${entry.appliance}`,
          },
          { label: entry.error_code.toUpperCase() },
        ]}
      />

      <article className="space-y-8">
        <header>
          <p className="mb-2 text-sm font-medium text-accent">
            {brandName} · {applianceName}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {entry.title}
          </h1>
          <p className="mt-2 text-gray-600">{entry.summary}</p>
        </header>

        <ContentCard className="p-6">
          <SectionHeading id="meaning-heading">What this error means</SectionHeading>
          <p className="leading-relaxed text-gray-700">{entry.meaning}</p>
        </ContentCard>

        {entry.deep_dive && entry.deep_dive.length > 0 && (
          <ContentCard className="p-6">
            <SectionHeading id="deep-dive-heading">
              How {entry.error_code.toUpperCase()} is detected
            </SectionHeading>
            <div className="space-y-4 leading-relaxed text-gray-700">
              {entry.deep_dive.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </ContentCard>
        )}

        <ContentCard className="p-6">
          <SectionHeading id="causes-heading">Common causes</SectionHeading>
          <ul className="space-y-2 text-gray-700">
            {entry.causes.map((cause) => (
              <li key={cause} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{cause}</span>
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard className="p-6">
          <SectionHeading id="fixes-heading">Step-by-step fixes</SectionHeading>
          <ol className="space-y-4">
            {entry.fixes.map((fix, index) => (
              <li key={fix} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-gray-700">{fix}</span>
              </li>
            ))}
          </ol>
        </ContentCard>

        <ContentCard className="border-l-4 border-l-accent p-6">
          <SectionHeading id="technician-heading">
            When to call a technician
          </SectionHeading>
          <p className="leading-relaxed text-gray-700">
            {entry.when_to_call_technician}
          </p>
        </ContentCard>

        {entry.affected_models.length > 0 && (
          <ContentCard className="p-6">
            <SectionHeading id="models-heading">Affected models</SectionHeading>
            <ul className="space-y-1.5 text-gray-700">
              {entry.affected_models.map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
          </ContentCard>
        )}

        {entry.prevention_tips && entry.prevention_tips.length > 0 && (
          <ContentCard className="p-6">
            <SectionHeading id="prevention-heading">
              Prevention &amp; maintenance
            </SectionHeading>
            <ul className="space-y-2 text-gray-700">
              {entry.prevention_tips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </ContentCard>
        )}

        <ContentCard className="flex flex-wrap items-center gap-4 p-4">
          <DifficultyBadge difficulty={entry.difficulty} />
          <TimeBadge time={entry.estimated_time} />
          {entry.part_cost_estimate && (
            <span className="text-sm text-gray-600">
              Typical parts:{" "}
              <span className="font-medium text-gray-900">
                {entry.part_cost_estimate}
              </span>
            </span>
          )}
        </ContentCard>

        {related.length > 0 && (
          <section aria-labelledby="related-heading">
            <SectionHeading id="related-heading">Related error codes</SectionHeading>
            <ContentCard>
              <ul className="divide-y divide-gray-100">
                {related.map((rel) => (
                  <li key={rel.error_code}>
                    <Link
                      href={errorCodeUrl(
                        rel.brand,
                        rel.appliance,
                        rel.error_code
                      )}
                      className="block px-5 py-3 text-accent no-underline hover:bg-gray-50 hover:underline"
                    >
                      {rel.error_code.toUpperCase()} — {rel.summary}
                    </Link>
                  </li>
                ))}
              </ul>
            </ContentCard>
          </section>
        )}
      </article>

      <nav className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
        <Link
          href={`/${entry.brand}/${entry.appliance}`}
          className="text-accent hover:underline"
        >
          ← All {brandName} {applianceName.toLowerCase()} codes
        </Link>
        <Link href={`/${entry.brand}`} className="text-accent hover:underline">
          {brandName} index
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildHowToSchema(entry, pageUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(entry)),
        }}
      />
    </>
  );
}
