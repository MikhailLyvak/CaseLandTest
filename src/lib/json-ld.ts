import type { FaqItem } from "@/config/content";
import { product, siteName, siteUrl } from "@/lib/site";

export function buildJsonLd(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "uk-UA",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/#product`,
        name: product.name,
        description: product.description,
        image: `${siteUrl}${product.image}`,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        offers: {
          "@type": "Offer",
          url: `${siteUrl}/#order`,
          priceCurrency: product.currency,
          price: product.price,
          availability: product.availability,
          seller: {
            "@type": "Organization",
            name: siteName,
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
