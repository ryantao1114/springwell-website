import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ImageFallbacks } from "./components/image-fallbacks";
import { HomeLocationMap } from "./components/home-location-map";
import { LocalBusinessJsonLd } from "./components/local-business-json-ld";
import { site } from "./config/site";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Springwell Acupuncture | Northern Virginia Acupuncture Clinic",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.seoKeywords],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: ["/images/provider-renjinming.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/provider-renjinming.jpg"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${newsreader.variable}`}>
      <body className="antialiased">
        <LocalBusinessJsonLd />
        {children}
        <HomeLocationMap />
        <ImageFallbacks />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
