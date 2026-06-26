import type { Metadata } from "next";
import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/content/metadata";
import { featuredServices } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata(
  "Personalized Acupuncture Care",
  "SPRINGWELL offers personalized acupuncture care for pain, stress, sleep, fertility journeys, TMJ-related discomfort, and women's health in Northern Virginia."
);

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Acupuncture in Northern Virginia"
        title="SPRINGWELL"
        description={site.description}
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <section className="bg-ivory px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <SectionHeading
            eyebrow="Modern integrative care"
            title={site.tagline}
            description="A calm, professional clinic experience with careful intake, personalized treatment planning, and supportive language that respects the complexity of each patient's health."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredServices.map((service) => (
              <Link
                className="rounded-md border border-forestDeep/10 bg-white p-5 text-lg font-semibold text-forestDeep shadow-[0_12px_35px_rgba(23,59,51,0.05)] transition hover:-translate-y-0.5 hover:shadow-soft"
                href="/services"
                key={service}
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne">Provider</p>
            <h2 className="mt-3 text-3xl font-semibold text-forestDeep md:text-5xl">
              Care by {site.provider.name}
            </h2>
            <p className="mt-5 leading-8 text-charcoal/70">{site.provider.background}</p>
            <p className="mt-4 leading-8 text-charcoal/70">{site.provider.philosophy}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingButton />
              <Link className="inline-flex min-h-11 items-center rounded-md border border-forestDeep/15 px-5 text-sm font-semibold text-forestDeep" href="/about">
                About the Provider
              </Link>
            </div>
          </div>
          <div className="min-h-80 rounded-md border border-dashed border-forestDeep/20 bg-sage/20 p-6 text-sm text-charcoal/60">
            Professional headshot placeholder.
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Location"
            title="Serving Northern Virginia and the DMV area"
            description={site.serviceArea}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {["Calm medical-wellness setting", "Cautious, supportive language", "Square Appointments booking"].map((item) => (
              <div className="rounded-md bg-white p-6 text-lg font-semibold text-forestDeep" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
