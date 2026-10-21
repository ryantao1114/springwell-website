"use client";

import { useEffect } from "react";

export function PainHashOpener() {
  useEffect(() => {
    const openTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!(target instanceof HTMLDetailsElement)) return;
      target.open = true;
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    };

    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, []);

  return null;
}
