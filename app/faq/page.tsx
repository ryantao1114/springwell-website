import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Acupuncture FAQ",
  description:
    "Answers about acupuncture visits, IVF support, TMJ and pain care, digestive concerns, herbal medicine, safety, pricing, and what to expect at Springwell.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  ["What happens at the first visit?", "Your first visit includes a detailed conversation about your concerns and goals, a focused assessment, and an initial acupuncture treatment when appropriate. We will explain what we are working on, answer questions, and discuss a reasonable starting plan."],
  ["Does acupuncture hurt?", "Most people describe acupuncture as gentle. You may notice a brief pinch, heaviness, warmth, tingling, or a dull sensation. Comfort matters, and the treatment can be adjusted or stopped at any time."],
  ["How many treatments will I need?", "It depends on the nature and duration of your concern, your goals, and how your body responds. Longer-standing or complex concerns often benefit from a series of visits. We will discuss a realistic starting plan after your assessment rather than promise a fixed number."],
  ["Can acupuncture support IVF or IUI?", "Acupuncture may be used as supportive care during fertility treatment for wellbeing, stress, sleep, and treatment-related symptoms. Timing is individualized around your fertility team’s plan. It does not replace care from your reproductive endocrinologist or guarantee a pregnancy outcome."],
  ["Can acupuncture improve IVF success?", "Current evidence does not consistently show that acupuncture around embryo transfer improves live-birth rates. Many patients still seek supportive care for stress, sleep, comfort, and the experience of treatment. We describe the evidence honestly and coordinate timing with your fertility team."],
  ["What conditions do you treat for jaw and facial pain?", "We commonly support TMJ/TMD-related pain, jaw muscle tension, clenching patterns, neck tension associated with facial symptoms, headache patterns, and persistent orofacial pain. New, severe, or unexplained symptoms may require medical or dental evaluation first."],
  ["Can acupuncture support digestive issues?", "Some people seek care for bloating, constipation, irregular digestion, or stress-sensitive digestive symptoms. We will ask about duration, red flags, medications, and prior evaluation. Acupuncture and herbs should not delay medical assessment for bleeding, unexplained weight loss, severe pain, fever, persistent vomiting, or a sudden change in bowel habits."],
  ["What should I know about Chinese herbal medicine?", "Herbs can have side effects, vary in quality, and interact with medications. Tell us about pregnancy, fertility treatment, planned procedures, allergies, and every medication or supplement before using an herbal product. Do not stop prescribed medicine without speaking with the prescribing clinician."],
  ["How should I prepare?", "Eat a light meal within a few hours of your appointment, stay hydrated, and wear comfortable clothing that allows access to the arms and lower legs. Bring a medication and supplement list and any relevant fertility, medical, or dental information."],
  ["Do you accept insurance?", "Springwell currently presents self-pay pricing. Upon request, we can provide a detailed superbill for possible out-of-network reimbursement. Coverage varies by plan, so contact your insurer before the visit to confirm acupuncture benefits and claim requirements."],
  ["Is acupuncture safe?", "Acupuncture is generally considered safe when performed by a qualified licensed practitioner using sterile, single-use needles. Please tell us about pregnancy, medications, bleeding disorders, implanted devices, infection, recent surgery, or other relevant health concerns so care can be planned appropriately."],
  ["When should I seek urgent medical care?", "Acupuncture is not emergency care. Call 911 or seek immediate medical attention for chest pain, trouble breathing, sudden weakness or confusion, severe allergic reaction, uncontrolled bleeding, a sudden severe headache, or any symptom that feels life-threatening."],
];

export default function FAQPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Common questions"
        title="Know what to expect before you arrive."
        text="A first acupuncture visit should feel approachable. Here are clear answers to the questions we hear most often."
        image="/images/acupuncture-treatment-hero.png"
      />
      <section className="section-pad faq-section">
        <div className="container faq-grid">
          <aside>
            <div className="faq-aside-image">
              <Image src="/images/acupuncture-treatment-hero.png" alt="Fine acupuncture needles prepared for a treatment" fill sizes="(max-width: 860px) 100vw, 30vw" />
            </div>
            <p className="eyebrow">Still wondering?</p>
            <h2>We’re happy to help.</h2>
            <p>Send your question with an appointment request and we’ll respond before you schedule.</p>
            <Link className="button button-secondary" href="/contact">Ask a question <ArrowIcon /></Link>
          </aside>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{question}</span><i aria-hidden="true">+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
