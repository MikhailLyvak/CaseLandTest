import type { MetadataRoute } from "next";
import { seo, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#090909",
    lang: "uk",
  };
}
