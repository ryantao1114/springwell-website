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
  ["How many treatments will I need?", "It depends on the nature and duration of your concern, your goals, and how your body responds. Longer-standing or complex concerns often benefit from a series of visits. We will discuss a realistic starting plan after your assessment and adjust it according to your response."],
  ["Can acupuncture support IVF or IUI?", "Yes. Acupuncture can be thoughtfully timed around fertility planning, IUI, IVF preparation, ovarian stimulation, egg retrieval, embryo transfer, and recovery. Care may focus on comfort, stress regulation, sleep, muscle tension, and the emotional experience of treatment."],
  ["How may acupuncture support an IVF journey?", "Fertility acupuncture may support relaxation, sleep, treatment-related comfort, recovery, and overall wellbeing. Current research is also exploring potential effects on fertilization and embryo-quality outcomes, with treatment individualized around each patient’s timeline."],
  ["What conditions do you treat for jaw and facial pain?", "We commonly support TMJ/TMD-related pain, jaw muscle tension, clenching patterns, neck tension associated with facial symptoms, headache patterns, and persistent orofacial pain. Treatment may help relax overworked muscles and reduce pain sensitivity."],
  ["Can acupuncture support digestive issues?", "Yes. Patients often seek care for bloating, constipation, irregular digestion, nausea, appetite changes, and stress-sensitive digestive symptoms. Treatment is individualized around symptom timing, sleep, stress, food patterns, and overall digestive rhythm."],
  ["What should I know about Chinese herbal medicine?", "Herbs can have side effects, vary in quality, and interact with medications. Tell us about pregnancy, fertility treatment, planned procedures, allergies, and every medication or supplement before using an herbal product. Do not stop prescribed medicine without speaking with the prescribing clinician."],
  ["How should I prepare?", "Eat a light meal within a few hours of your appointment, stay hydrated, and wear comfortable clothing that allows access to the arms and lower legs. Bring a medication and supplement list and any relevant fertility, medical, or dental information."],
  ["Do you accept insurance?", "Springwell currently presents self-pay pricing. Upon request, we can provide a detailed superbill for possible out-of-network reimbursement. Coverage varies by plan, so contact your insurer before the visit to confirm acupuncture benefits and claim requirements."],
  ["Is acupuncture safe?", "Acupuncture is generally considered safe when performed by a qualified licensed practitioner using sterile, single-use needles. Please tell us about pregnancy, medications, bleeding disorders, implanted devices, infection, recent surgery, or other relevant health concerns so care can be planned appropriately."],
  ["What information helps you personalize care?", "Tell us about your current symptoms, health history, medications, supplements, pregnancy or fertility treatment, recent procedures, and the goals that matter most to you. This helps us select points, techniques, and visit timing thoughtfully."],
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
