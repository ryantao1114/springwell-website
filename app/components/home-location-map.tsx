"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "./icons";
import { site } from "../config/site";

export function HomeLocationMap() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const footer = document.querySelector(".site-footer");

    if (pathname !== "/" || !footer?.parentNode) {
      setMount(null);
      return;
    }

    const host = document.createElement("div");
    host.setAttribute("data-home-location-map", "true");
    footer.parentNode.insertBefore(host, footer);
    setMount(host);

    return () => {
      setMount(null);
      host.remove();
    };
  }, [pathname]);

  if (pathname !== "/" || !mount) return null;

  return createPortal(
    <section className="section-pad about-location-section home-location-section" aria-labelledby="home-location-title">
      <div className="container about-location-grid">
        <div>
          <p className="eyebrow">Visit Springwell</p>
          <h2 id="home-location-title">Acupuncture care in Herndon, Virginia.</h2>
          <p>
            <strong>{site.streetAddress}<br />{site.addressLocality}, {site.addressRegion} {site.postalCode}</strong>
          </p>
          <p>By appointment. Serving Herndon, Reston, Northern Virginia, and the greater DMV region.</p>
          <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
            Book Your Visit <ArrowIcon />
          </a>
        </div>
        <div className="about-map-wrap">
          <iframe
            title={`Map showing ${site.name} at ${site.address}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>,
    mount,
  );
}
