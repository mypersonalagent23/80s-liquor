import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlaceholderWarn } from "@/components/PlaceholderWarn";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
  weight: ["400", "500", "700"],
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex",
  weight: "500",
});

const description = `${site.name} is a package store at ${site.addressLine}, next to the Firefly Trail trailhead. Mon–Wed 10am–10:30pm, Thu–Sat 10am–11:30pm, Sun 12:30pm–8pm. ${site.phoneDisplay}.`;

const metadataBase = process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.name} · Athens, GA`,
    template: `%s · ${site.name}`,
  },
  description,
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: "/favicon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: site.name,
    description: site.addressLine,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${hanken.variable} ${plex.variable}`}
    >
      <body>
        <PlaceholderWarn />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
