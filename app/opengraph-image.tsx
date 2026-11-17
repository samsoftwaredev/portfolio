import { ImageResponse } from "next/og";
import { SITE, OWNER } from "@/data/site";

export const alt = `${SITE.name} — ${OWNER.job}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "radial-gradient(circle at 80% 10%, #4c1d95 0%, #0b0a12 55%)",
          color: "#ecebf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#a78bfa", marginBottom: 24 }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          {OWNER.job}
        </div>
        <div style={{ fontSize: 34, color: "#a9a6c0", marginTop: 28 }}>
          Fast, accessible, SEO-ready web apps.
        </div>
      </div>
    ),
    size,
  );
}
