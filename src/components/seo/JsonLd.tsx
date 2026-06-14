import { faqItems } from "@/config/content";
import { buildJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  const jsonLd = buildJsonLd(faqItems);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
