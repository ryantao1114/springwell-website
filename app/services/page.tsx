import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/content/metadata";
import { services } from "@/content/services";

export const metadata: Metadata = pageMetadata(
  "Services",
  "Explore acupuncture, electroacupuncture, cupping, gua sha, fertility acupuncture, pain relief acupuncture, stress and sleep support, and women's health acupuncture.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ivory px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Services"
            title="Acupuncture services with a calm, professional approach"
            description="Each service includes space for individualized assessment and supportive care. Pricing and duration placeholders can be edited in the content file."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard service={service} key={service.name} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
