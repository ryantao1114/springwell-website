import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/conditions", priority: 0.8 },
  { path: "/new-patients", priority: 0.8 },
  { path: "/contact", priority: 0.7 }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    changeFrequency: "monthly",
    priority: route.priority
  }));
}
