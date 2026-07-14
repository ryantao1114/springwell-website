import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "./components/icons";
import { HomeHero } from "./components/home-hero";
import { PageShell } from "./components/site-shell";
import { site } from "./config/site";

const focusAreas = [
  {
    number: "01",
    eyebrow: "Women’s health",
    title: "Women’s Health & Fertility",
    text: "Support for menstrual health, hormonal transitions, fertility planning, IVF, and the physical and emotional changes that can shape each stage of life.",
    image: "/images/home-hero-care.jpg",
    alt: "Gentle wrist assessment during a women’s health consultation",
    specialistHref: "/specialist#womens-health",
    blogHref: "/blog#fertility-ivf",
    linkLabel: "Read the women’s health guide",
  },
  {
    number: "02",
    eyebrow: "Pain care",
    title: "Pain Management",
    text: "A broader view of neck, back, shoulder, and muscle pain, TMJ and orofacial pain, headaches, and tension that affects movement and daily comfort.",
    image: "/images/acupuncture-treatment-hero.png",
    alt: "Fine acupuncture needles being placed during treatment",
    specialistHref: "/specialist#pain-management",
    blogHref: "/blog#neck-back-muscle-pain",
    linkLabel: "Read the pain management guide",
  },
  {
    number: "03",
    eyebrow: "Rest & recovery",
    title: "Stress & Sleep Support",
    text: "Care for stress-related tension, difficulty winding down, restless sleep, fatigue, and the recovery rhythm that helps the body function well.",
    image: "/images/service-cupping.jpg",
    alt: "Warm cupping treatment for muscle tension and relaxation",
    specialistHref: "/specialist#stress-sleep-digestion",
    blogHref: "/blog#stress-sleep-digestion",
    linkLabel: "Read the stress & sleep guide",
  },
  {
    number: "04",
    eyebrow: "Digestive health",
    title: "Digestive Support",
    text: "Individualized support for bloating, constipation, irregular digestion, and stress-sensitive digestive patterns—with medical evaluation when needed.",
    image: "/images/service-herbal-medicine.jpg",
    alt: "Traditional herbs arranged for an individualized consultation",
    specialistHref: "/specialist#stress-sleep-digestion",
    blogHref: "/blog#digestive-support",
    linkLabel: "Read the digestive health guide",
  },
];

const visitSteps = [
  {
    number: "01",
    title: "Start with what you want to change.",
    text: "We begin with your goals, the symptoms that matter most, when they started, and how they affect sleep, movement, work, relationships, or daily routines.",
  },
  {
    number: "02",
    title: "Put the symptom in context.",
    text: "We review relevant medications, supplements, procedures, cycle timing, medical or dental care, and the patterns that may be influencing how you feel.",
  },
  {
    number: "03",
    title: "Choose a focused treatment plan.",
    text: "After the assessment, we explain what we recommend and why. Acupuncture may be used alone or alongside cupping, herbal medicine, or coordinated care when appropriate.",
  },
  {
    number: "04",
    title: "Leave with a clear next step.",
    text: "You will know what to notice, when to follow up, and what would prompt a referral or additional medical evaluation. The plan can be refined as your response becomes clearer.",
  },
];

export default function Home() {
  return (
    <PageShell variant="home">
      <HomeHero />

      <section className="statement-band">
        <div className="container statement-grid">
          <p className="eyebrow light">Our approach</p>
          <blockquote>
            “Good care begins with a clear question: what would you like to feel, do, or understand differently?”
          </blockquote>
          <p>
            Listen closely. Explain clearly. Refine the plan as you go.
          </p>
        </div>
      </section>

      <section className="section-pad services-intro">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>Start with the concern you want to address.</h2>
            </div>
            <p>
              Explore a care area, then read the patient-friendly guidance in our
              journal before you decide what the right next step may be.
            </p>
          </div>

          <div className="home-focus-list">
            {focusAreas.map((area) => (
              <article className="home-focus-item" key={area.number}>
                <Link className="home-focus-image" href={area.specialistHref}>
                  <Image src={area.image} alt={area.alt} fill sizes="(max-width: 860px) 100vw, 42vw" />
                  <span>{area.number}</span>
                </Link>
                <div className="home-focus-copy">
                  <p className="eyebrow">{area.eyebrow}</p>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <Link className="text-link" href={area.blogHref}>{area.linkLabel} <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad home-education-section">
        <div className="container home-education-grid">
          <div className="home-education-image">
            <Image src="/images/chinese-medicine-consultation.jpg" alt="Traditional Chinese medicine consultation with pulse assessment" fill sizes="(max-width: 860px) 100vw, 48vw" />
          </div>
          <div className="home-education-copy">
            <p className="eyebrow">A plan that evolves with you</p>
            <h2>Care designed around your real life.</h2>
            <p>
              Not every concern needs the same treatment—or the same pace. We
              start with the change you want to make, then identify the patterns
              that may be keeping it present.
            </p>
            <p>
              Each visit has a purpose: establish a baseline, choose the right
              tools, track your response, and adjust when your goals or medical
              context change. Sometimes that means acupuncture alone; sometimes
              cupping, herbal medicine, or coordination with another clinician.
            </p>
            <Link className="button button-secondary" href="/about#provider">Meet your provider <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container process-layout">
          <div className="process-intro">
            <p className="eyebrow">What to expect</p>
            <h2>A first visit with enough time to understand the full picture.</h2>
            <p>
              Appointments are unhurried enough for questions and focused enough
              to leave you with a clear next step. Please bring a medication and
              supplement list, and mention pregnancy, fertility treatment,
              bleeding risk, recent procedures, or urgent symptoms.
            </p>
            <Link className="button button-secondary" href="/blog#first-acupuncture-visit">
              Read the first-visit guide <ArrowIcon />
            </Link>
          </div>
          <div className="process-steps">
            {visitSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad cta-section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow light">Begin with a conversation</p>
            <h2>Let’s find the right next step.</h2>
          </div>
          <div>
            <p>
              Tell us what you are looking for. We’ll help you decide whether
              Springwell is a good fit for your care.
            </p>
            <Link className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book Online <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
