import type { Metadata } from "next";
import { APPLIANCES, SITE_NAME, SITE_URL } from "./constants";
import {
  getApplianceCounts,
  getApplianceName,
  getBrandCodeCount,
  getBrandName,
  getCodesForAppliance,
} from "./data";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/og-image.svg`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export function buildBrandMetadata(brand: string): Metadata {
  const brandName = getBrandName(brand);
  const totalCodes = getBrandCodeCount(brand);
  const counts = getApplianceCounts(brand);
  const applianceNames = APPLIANCES.filter((a) => (counts[a.slug] ?? 0) > 0)
    .map((a) => a.name.toLowerCase())
    .slice(0, 4);
  const applianceList =
    applianceNames.length > 1
      ? `${applianceNames.slice(0, -1).join(", ")} and ${applianceNames.at(-1)}`
      : (applianceNames[0] ?? "appliances");

  return buildPageMetadata({
    title: `${brandName} Error Codes — Causes & Step-by-Step Fixes`,
    description: `Browse ${totalCodes} ${brandName} error codes for ${applianceList}. Each code includes real causes, DIY repair steps, difficulty rating, and when to call a technician.`,
    path: `/${brand}`,
  });
}

export function buildApplianceMetadata(
  brand: string,
  appliance: string
): Metadata {
  const brandName = getBrandName(brand);
  const applianceName = getApplianceName(appliance);
  const codes = getCodesForAppliance(brand, appliance);
  const examples = codes
    .slice(0, 4)
    .map((e) => e.error_code.toUpperCase())
    .join(", ");

  return buildPageMetadata({
    title: `${brandName} ${applianceName} Error Codes — Full List & Fixes`,
    description: `${codes.length} ${brandName} ${applianceName.toLowerCase()} error codes with causes and fixes. Look up ${examples} and more—step-by-step checks before you call for service.`,
    path: `/${brand}/${appliance}`,
  });
}
