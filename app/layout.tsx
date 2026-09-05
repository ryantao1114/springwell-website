import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ImageFallbacks } from "./components/image-fallbacks";
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
    default: "Acupuncture in Herndon, VA | SpringWell Acupuncture",
    template: `%s | ${site.name}`,
  },
  applicationName: site.name,
  description: site.description,
  keywords: [...site.seoKeywords],
  openGraph: {
    title: "Acupuncture in Herndon, VA | SpringWell Acupuncture",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      { url: "/images/springwell-official-logo.png", alt: site.name },
      {
        url: "/images/provider-renjinming-2026.webp",
        alt: "SpringWell Acupuncture in Herndon, Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acupuncture in Herndon, VA | SpringWell Acupuncture",
    description: site.description,
    images: ["/images/springwell-official-logo.png"],
  },
  other: {
    "codex-preview": "development",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${newsreader.variable}`}>
      <head>
        <script
          id="google-tag-loader"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18378983115"
        />
        <script
          id="google-tag-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18378983115');
gtag('config', 'G-ZSK3ESH5HP');`,
          }}
        />
        <script
          id="google-ads-click-to-call"
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var sendTo = 'AW-18378983115/SkwXC0CO-egCEMuN5LtE';

  function reportClickToCall(url) {
    var navigated = false;
    var continueToPhone = function () {
      if (navigated) return;
      navigated = true;
      window.location.href = url;
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: sendTo,
        event_callback: continueToPhone,
        event_timeout: 1200
      });
      window.setTimeout(continueToPhone, 1200);
    } else {
      continueToPhone();
    }
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;
    var phoneLink = target.closest('a[href^="tel:"]');
    if (!phoneLink) return;
    event.preventDefault();
    reportClickToCall(phoneLink.href);
  }, true);
})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <LocalBusinessJsonLd />
        {children}
        <ImageFallbacks />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
