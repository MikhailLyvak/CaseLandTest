import { ImageResponse } from "next/og";
import { product, seo, siteName } from "@/lib/site";

export const alt = product.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(145deg, #0b0b0b 0%, #171717 55%, #e96f20 160%)",
          color: "#f5f1ea",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            color: "#e96f20",
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#aaa39a",
              maxWidth: 820,
            }}
          >
            {seo.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 900,
          }}
        >
          {product.price} грн
        </div>
      </div>
    ),
    { ...size },
  );
}
