import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "80’s Liquor, 890 E Broad St, Athens, GA 30601";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-512.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          gap: "64px",
        }}
      >
        <img src={src} width={340} height={340} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#212123",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            890 E Broad St
          </div>
          <div style={{ fontSize: 40, marginTop: 18 }}>Athens, GA 30601</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
