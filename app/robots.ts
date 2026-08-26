import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Archived pre-redesign homepage, kept for reference only
      disallow: ["/home-classic"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
