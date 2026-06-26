import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${site.fullName}`,
      description,
      url: path,
      type: "website",
      images: ["/images/hero-springwell.png"]
    }
  };
}
