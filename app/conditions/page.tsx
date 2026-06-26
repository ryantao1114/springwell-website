import type { Metadata } from "next";
import { ConditionCard } from "@/components/ConditionCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { conditions } from "@/content/conditions";
import { pageMetadata } from "@/content/metadata";

export const metadata: Metadata = pageMetadata(
  "Conditions",
  "Springwell offers personalized acupuncture care that may support pain, stress, insomnia, fertility journeys, TMJ-related discomfort, women's health, fatigue, and general wellness.",
  "/conditions"
);

export default function ConditionsPage() {
  return (
    <>
      <section className="bg-ivory px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Conditions"
            title="Supportive acupuncture care for common concerns"
            description="Language on this page is intentionally cautious. Acupuncture may support patients experiencing these concerns, while outcomes vary from person to person."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((condition) => (
              <ConditionCard condition={condition} key={condition.name} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
