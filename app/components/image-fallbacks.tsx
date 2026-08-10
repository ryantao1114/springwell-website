"use client";

import { useEffect } from "react";

function fallbackDataUri(label: string) {
  const safe = (label || "Springwell Acupuncture").replace(/[<>&]/g, "").slice(0, 56);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7f2e9"/><stop offset="1" stop-color="#dfeaf1"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><circle cx="970" cy="120" r="220" fill="#e8c6bb" opacity=".28"/><circle cx="110" cy="690" r="240" fill="#b7c7ae" opacity=".25"/><rect x="55" y="55" width="1090" height="690" rx="42" fill="#fff" opacity=".32" stroke="#fff"/><g transform="translate(600 355)" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle r="205" fill="#fffaf5" stroke="#8ca9bd" stroke-width="4"/><path d="M0-165v220" stroke="#c8a56b" stroke-width="6"/><circle cy="-181" r="13" stroke="#c8a56b" stroke-width="6"/><path d="M-145 35c62-72 112-69 151 6 40-75 90-78 151-6" stroke="#7c9279" stroke-width="11"/><path d="M-158 102c49-34 97-34 145-4 48 29 96 28 145-4" stroke="#8ca9bd" stroke-width="8" opacity=".85"/><path d="M-128 139c42-22 83-22 124 1 41 22 82 21 124-1" stroke="#c9d8df" stroke-width="8"/></g><text x="600" y="650" text-anchor="middle" font-family="Georgia,serif" font-size="31" fill="#294858">${safe}</text><text x="600" y="696" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" letter-spacing="6" fill="#6b5649">SPRINGWELL ACUPUNCTURE</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function ImageFallbacks() {
  useEffect(() => {
    const replace = (img: HTMLImageElement) => {
      if (img.dataset.springwellFallback === "1") return;
      img.dataset.springwellFallback = "1";
      img.removeAttribute("srcset");
      img.src = fallbackDataUri(img.alt || "Springwell Acupuncture");
    };

    const onError = (event: Event) => {
      if (event.target instanceof HTMLImageElement) replace(event.target);
    };

    document.addEventListener("error", onError, true);
    document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) replace(img);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
        if (img.complete && img.naturalWidth === 0) replace(img);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("error", onError, true);
      observer.disconnect();
    };
  }, []);

  return null;
}
