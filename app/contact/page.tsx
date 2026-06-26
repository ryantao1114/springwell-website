import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/content/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contact Springwell Integrative Acupuncture. Address, phone, hours, parking, map, and Square Appointments booking link placeholders.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <article className="rounded-md border border-forestDeep/10 p-6">
            <h2 className="text-2xl font-semibold text-forestDeep">Parking</h2>
            <p className="mt-3 leading-7 text-charcoal/70">Parking information placeholder.</p>
          </article>
          <article className="rounded-md border border-forestDeep/10 p-6">
            <h2 className="text-2xl font-semibold text-forestDeep">Contact form</h2>
            <p className="mt-3 leading-7 text-charcoal/70">
              Visual placeholder only. Do not collect detailed health information here in version one.
            </p>
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
}
