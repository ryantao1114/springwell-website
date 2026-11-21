"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./measurement-consent.module.css";

declare global {
  interface Window {
    springwellMeasurement?: {
      choose: (allow: boolean) => void;
      choice: () => string | null;
      route: () => void;
    };
  }
}

export function MeasurementConsent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!window.springwellMeasurement?.choice());
  }, []);
  useEffect(() => {
    window.dispatchEvent(new Event("springwell:route"));
  }, [pathname]);

  function choose(allow: boolean) {
    window.springwellMeasurement?.choose(allow);
    setOpen(false);
    // Stop already loaded third-party code after withdrawal, before further navigation.
    if (!allow) window.location.reload();
  }

  return <>
    <button className={styles.settings} onClick={() => setOpen(true)}>Privacy choices</button>
    {open && <section className={styles.panel} aria-label="Website measurement preferences">
      <h2>Optional website measurement</h2>
      <p>With your permission, Google receives limited website and ad measurement events. Events may identify a page conversion, but exclude full URLs, page titles, form entries, and contact details. Ad personalization and enhanced conversions stay off. Your choice does not affect care or booking.</p>
      <div className={styles.actions}>
        <button onClick={() => choose(false)}>Decline measurement</button>
        <button onClick={() => choose(true)}>Allow measurement</button>
      </div>
    </section>}
  </>;
}
