import type { MetadataRoute } from "next";
import { BRANDS } from "@/lib/constants";
import { getAllErrorCodes, getAllStaticParams } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";
import { errorCodeSlug } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getAllErrorCodes();
  const { appliances } = getAllStaticParams();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const brandPages: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${SITE_URL}/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const appliancePages: MetadataRoute.Sitemap = appliances.map((a) => ({
    url: `${SITE_URL}/${a.brand}/${a.appliance}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const codePages: MetadataRoute.Sitemap = entries.map((entry) => ({
    url: `${SITE_URL}/${entry.brand}/${entry.appliance}/${errorCodeSlug(entry.error_code)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...home, ...brandPages, ...appliancePages, ...codePages];
}
