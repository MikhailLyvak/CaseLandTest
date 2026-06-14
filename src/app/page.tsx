import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { StickyCta } from "@/components/sections/StickyCta";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />

      <main>
        <HeroSection />
        <BeforeAfterSection />
        <DetailsSection />
        <GallerySection />
        <FaqSection />
        <OfferSection />
        <StickyCta />
      </main>

      <SiteFooter />
    </>
  );
}
