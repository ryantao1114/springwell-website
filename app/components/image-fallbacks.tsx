"use client";

import { useEffect } from "react";

function fallbackSvg(label: string) {
  const safeLabel = label.replace(/[<>&]/g, "").slice(0, 48) || "Springwell Acupuncture";
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f7f2e9"/>
          <stop offset="1" stop-color="#dfeaf1"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)"/>
      <circle cx="980" cy="120" r="220" fill="#e8c6bb" opacity="0.28"/>
      <circle cx="120" cy="690" r="240" fill="#b7c7ae" opacity="0.24"/>
      <rect x="55" y="55" width="1090" height="690" rx="42" fill="#fff" opacity="0.34" stroke="#fff"/>
      <g transform="translate(600 365)" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <circle r="205" fill="#fffaf5" stroke="#8ca9bd" stroke-width="4"/>
        <path d="M0-165v220" stroke="#c8a56b" stroke-width="6"/>
        <circle cy="-181" r="13" stroke="#c8a56b" stroke-width="6"/>
        <path d="M-145 35c62-72 112-69 151 6 40-75 90-78 151-6" stroke="#7c9279" stroke-width="11"/>
        <path d="M-158 102c49-34 97-34 145-4 48 29 96 28 145-4" stroke="#8ca9bd" stroke-width="8" opacity="0.85"/>
        <path d="M-128 139c42-22 83-22 124 1 41 22 82 21 124-1" stroke="#c9d8df" stroke-width="8"/>
      </g>
      <text x="600" y="655" text-anchor="middle" font-family="Georgia, serif" font-size="32" fill="#294858">${safeLabel}</text>
      <text x="600" y="699" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" letter-spacing="6" fill="#6b5649">SPRINGWELL ACUPUNCTURE</text>
    </svg>`;
}

function dataUri(label: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackSvg(label))}`;
}

function labelFor(element: Element) {
  if (element instanceof HTMLImageElement) {
    return element.alt || element.getAttribute("aria-label") || "Springwell Acupuncture";
  }
  return element.getAttribute("aria-label") || "Springwell Acupuncture";
}

export function ImageFallbacks() {
  useEffect(() => {
    const applyImageFallback = (img: HTMLImageElement) => {
      if (img.dataset.springwellFallback === "1") return;
      img.dataset.springwellFallback = "1";
      img.removeAttribute("srcset");
      img.src = dataUri(labelFor(img));
    };

    const applyVideoFallback = (video: HTMLVideoElement) => {
      if (video.dataset.springwellFallback === "1") return;
      video.dataset.springwellFallback = "1";
      video.pause();
      video.poster = dataUri(labelFor(video));
      video.querySelectorAll("source").forEach((source) => source.removeAttribute("src"));
      video.removeAttribute("src");
      video.load();
    };

    const onError = (event: Event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        applyImageFallback(target);
        return;
      }
      if (target instanceof HTMLVideoElement) {
        applyVideoFallback(target);
        return;
      }
      if (target instanceof HTMLSourceElement && target.parentElement instanceof HTMLVideoElement) {
        applyVideoFallback(target.parentElement);
      }
    };

    document.addEventListener("error", onError, true);

    document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) applyImageFallback(img);
    });

    document.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
      video.addEventListener("error", () => applyVideoFallback(video), { once: true });
    });

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node instanceof HTMLImageElement && node.complete && node.naturalWidth === 0) {
            applyImageFallback(node);
          }
          if (node instanceof HTMLVideoElement) {
            node.addEventListener("error", () => applyVideoFallback(node), { once: true });
          }
          node.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
            if (img.complete && img.naturalWidth === 0) applyImageFallback(img);
          });
          node.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
            video.addEventListener("error", () => applyVideoFallback(video), { once: true });
          });
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("error", onError, true);
      observer.disconnect();
    };
  }, []);

  return null;
}
