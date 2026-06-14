import type { Metadata, Viewport } from "next";
import { product, seo, siteName, siteUrl } from "@/lib/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${siteName}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: product.image,
        width: 1200,
        height: 630,
        alt: product.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [product.image],
  },
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};
