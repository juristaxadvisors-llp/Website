import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1F33",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#F7F5F0",
        }}
      >
        <div style={{ display: "flex", fontSize: 20, color: "rgba(247,245,240,0.7)" }}>
          Juristax Advisors LLP
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              lineHeight: 1.18,
              maxWidth: 880,
              fontFamily: "Times New Roman, serif",
            }}
          >
            Clear advice for decisions that matter.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 22,
              color: "rgba(247,245,240,0.62)",
            }}
          >
            Taxation · Finance · Advisory · Compliance
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 18, color: "rgba(247,245,240,0.5)" }}>
          A new firm. Established experience.
        </div>
      </div>
    ),
    { ...size },
  );
}
