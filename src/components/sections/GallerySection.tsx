import Image from "next/image";
import { galleryImages } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <section className="section vibe">
      <SectionHeading
        compact
        eyebrow="Галерея"
        title="Мінімалізм. Чистота. Преміальний вигляд."
      />
      <div className="gallery">
        {galleryImages.map((image) => (
          <figure className="gallery-card" key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="50vw" />
            <figcaption className="gallery-caption">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
