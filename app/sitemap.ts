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
  { path: "/pricing", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
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
