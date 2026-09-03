import { MetadataRoute } from "next";
import { mmgRoutes } from "@/lib/mmg-nav";
import { SITE_URL } from "@/lib/site";

const baseUrl = SITE_URL;

/** Campaign landing pages on the original design system. */
const legacyRoutes: { path: string; priority: number }[] = [
  { path: "/purchase", priority: 0.7 },
  { path: "/refinance", priority: 0.7 },
  { path: "/down-payment-assistance", priority: 0.7 },
  { path: "/investors", priority: 0.6 },
  { path: "/new-construction", priority: 0.6 },
  { path: "/bridge", priority: 0.6 },
  { path: "/retire-in-peace", priority: 0.6 },
  { path: "/investor-webinar", priority: 0.6 },
  { path: "/ai-agent-lab", priority: 0.6 },
  { path: "/rrar-panel", priority: 0.5 },
  { path: "/local-favorites", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...mmgRoutes, ...legacyRoutes].map(({ path, priority }) => ({
    url: path === "/" ? baseUrl : `${baseUrl}${path}`,
    lastModified,
    changeFrequency: priority >= 0.8 ? "weekly" : "monthly",
    priority,
  }));
}
