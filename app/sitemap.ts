import type { MetadataRoute } from "next";
import { site } from "./config/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/services/acupuncture", priority: 0.85 },
  { path: "/services/cupping", priority: 0.85 },
  { path: "/services/herbal-medicine", priority: 0.85 },
  { path: "/specialist", priority: 0.9 },
  { path: "/care/womens-health", priority: 0.85 },
  { path: "/care/fertility-ivf-support", priority: 0.85 },
  { path: "/care/pain-management", priority: 0.85 },
  { path: "/care/stress-sleep", priority: 0.85 },
  { path: "/care/digestive-support", priority: 0.85 },
  { path: "/pricing", priority: 0.8 },
  { path: "/new-patients", priority: 0.9 },
  { path: "/learn", priority: 0.85 },
  { path: "/blog/acupuncture-embryo-quality-ivf-meta-analysis-2026", priority: 0.8 },
  { path: "/blog/acupuncture-migraine-meta-analysis-2025", priority: 0.8 },
  { path: "/blog/acupuncture-anxiety-meta-analysis-2026", priority: 0.8 },
  { path: "/faq", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/book", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
