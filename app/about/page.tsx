import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProviderImage } from "@/components/ProviderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/content/metadata";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata(
  "About",
  "Learn about Renjinming Dai, L.Ac., licensed acupuncturist in Virginia and provider at Springwell Integrative Acupuncture.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <ProviderImage />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne">About the provider</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-forestDeep md:text-6xl">
              {site.provider.name}
            </h1>
            <p className="mt-5 text-lg font-semibold text-forest">{site.provider.credential}</p>
            <p className="mt-5 leading-8 text-charcoal/70">{site.provider.background}</p>
            <p className="mt-4 leading-8 text-charcoal/70">{site.provider.philosophy}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Care philosophy"
            title="Professional, grounded, and individualized"
            description="Springwell avoids exaggerated claims and focuses on careful assessment, clear communication, and treatments that may support each patient's goals over time."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
