import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { careIntro, focusAreas, whySpringwell } from "@/content/home";
import { pageMetadata } from "@/content/metadata";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata(
  "Personalized Acupuncture Care",
  site.description
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

      <section className="bg-ivory px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne">
              {careIntro.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-forestDeep md:text-6xl">
              Personalized acupuncture care, centered on{" "}
              <span className="italic text-champagne">you.</span>
            </h2>
            <div className="mt-7 h-px w-20 bg-champagne" />
            <p className="mt-8 max-w-2xl text-lg leading-9 text-charcoal/76">
              {careIntro.description}
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forestDeep">
                Areas of Focus
              </p>
              <span className="h-px flex-1 bg-champagne/70" />
            </div>
            <div className="divide-y divide-forestDeep/10 border-y border-forestDeep/10">
              {focusAreas.map((service, index) => (
                <Link
                  className="grid min-h-20 grid-cols-[3rem_1fr_auto] items-center gap-3 py-5 text-forestDeep transition hover:bg-white/60 sm:min-h-24 sm:grid-cols-[4.5rem_1px_1fr_auto] sm:gap-5"
                  href="/services"
                  key={service}
                >
                  <span className="text-3xl font-semibold text-champagne md:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden h-12 w-px bg-forestDeep/10 sm:block" />
                  <span className="text-lg font-semibold leading-7 md:text-2xl">{service}</span>
                  <span className="text-sm font-bold text-champagne">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forestDeep">
                {whySpringwell.eyebrow}
              </p>
              <div className="mx-auto mt-4 h-px w-20 bg-moss lg:mx-0" />
            </div>
            <h2 className="mt-7 max-w-3xl text-center text-4xl font-semibold leading-tight text-forestDeep md:text-5xl lg:text-left">
              {whySpringwell.title}
              <span className="block italic text-champagne">{whySpringwell.emphasis}</span>
            </h2>

            <div className="mt-7 grid gap-5 text-base leading-8 text-charcoal/76 md:text-lg">
              {whySpringwell.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-y border-forestDeep/10 py-6 sm:grid-cols-5">
              {focusAreas.map((service) => (
                <div className="text-center text-sm font-semibold leading-6 text-forestDeep" key={service}>
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 max-w-full items-center justify-center rounded-md bg-moss px-5 text-center text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(23,59,51,0.14)] transition hover:-translate-y-0.5 hover:bg-forest sm:px-6 sm:text-sm"
                href="/about"
              >
                Learn More About Our Approach <span className="ml-3">-&gt;</span>
              </Link>
              <BookingButton className="min-h-12 px-6" />
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-md bg-forestDeep shadow-soft">
            <Image
              alt="Calm acupuncture treatment room"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              src="/images/hero-springwell.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forestDeep/35 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-md bg-ivory/90 p-6 text-center shadow-soft backdrop-blur">
              <p className="text-lg font-semibold leading-8 text-forestDeep">
                {whySpringwell.callout}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-forestDeep/10 pt-8">
          <div className="max-w-xl text-sm leading-7 text-charcoal/76 md:text-base">
            <p className="font-semibold text-forestDeep">Located in Northern Virginia</p>
            <p>Springwell Acupuncture serves patients throughout the greater DMV area.</p>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            "Modern, evidence-informed care",
            "Individualized treatment plans",
            "Focused on daily function"
          ].map((item) => (
            <div
              className="rounded-md bg-white p-6 text-lg font-semibold text-forestDeep shadow-[0_12px_35px_rgba(23,59,51,0.05)]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
