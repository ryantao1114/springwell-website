"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const FERTILITY_PATH = "/care/fertility-ivf-support";
const GA4_MEASUREMENT_ID = "G-ZSK3ESH5HP";

// Keep identifying URLs, query parameters, referrers and form data out of GA4.
// This event is emitted only for the public, unauthenticated care information page.
const REDACTED_PAGE = {
  page_location: "https://springwellacu.com/",
  page_referrer: "",
  page_title: "SpringWell Acupuncture",
};

type Gtag = (
  command: "event",
  eventName: string,
  parameters: Record<string, string | boolean>,
) => void;

export function FertilityPageAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (pathname !== FERTILITY_PATH) return;

    const gtag = (window as Window & { gtag?: Gtag }).gtag;
    if (typeof gtag !== "function") return;

    // Works for direct loads and Next.js client-side navigation. One event
    // per entry to the public care page; no sensitive URL is sent to Google.
    gtag("event", "view_fertility_page", {
      ...REDACTED_PAGE,
      send_to: GA4_MEASUREMENT_ID,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }, [pathname]);

  return null;
}
