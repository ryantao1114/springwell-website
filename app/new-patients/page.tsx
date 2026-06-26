import type { Metadata } from "next";
import { BookingButton } from "@/components/BookingButton";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { SectionHeading } from "@/components/SectionHeading";
import { newPatientFaqs } from "@/content/faqs";
import { pageMetadata } from "@/content/metadata";

export const metadata: Metadata = pageMetadata(
  "New Patients",
  "What to expect during your first acupuncture visit at Springwell Integrative Acupuncture, including process, duration, pricing, insurance, and FAQ placeholders.",
  "/new-patients"
);

export default function NewPatientsPage() {
  const items = [
    ["What to expect", "A calm intake, discussion of your goals, treatment planning, and time for questions."],
    ["First visit duration", "Initial visit duration coming soon."],
    ["Follow-up duration", "Follow-up duration coming soon."],
    ["Pricing", "Pricing coming soon."],
    ["Insurance / superbill", "Insurance and superbill details coming soon."],
    ["Cancellation policy", "Cancellation policy coming soon."],
    ["Late arrival policy", "Late arrival policy coming soon."]
  ];

  return (
    <>
      <section className="bg-ivory px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="New Patients"
            title="Your first visit should feel clear and unhurried"
            description="This page keeps logistics easy to edit as scheduling, pricing, and clinic policies are finalized."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {items.map(([title, text]) => (
              <article className="rounded-md border border-forestDeep/10 bg-white p-6" key={title}>
                <h3 className="text-xl font-semibold text-forestDeep">{title}</h3>
                <p className="mt-3 leading-7 text-charcoal/70">{text}</p>
              </article>
            ))}
          </div>
          <BookingButton className="mt-8" />
        </div>
      </section>
      <FAQSection faqs={newPatientFaqs} />
      <CTASection />
    </>
  );
}
