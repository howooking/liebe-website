import { baseUrl } from "@/constants/base-url";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "*",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
