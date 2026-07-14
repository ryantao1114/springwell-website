import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Specialist Care Areas",
  description:
    "Explore Springwell Acupuncture’s focus areas: women’s health, fertility and IVF support, pain management, TMJ, stress, sleep, and digestive support in Northern Virginia.",
  alternates: { canonical: "/specialist" },
};

const focusAreas = [
  {
    id: "fertility-ivf",
    eyebrow: "Women’s health",
    title: "Fertility & IVF Support",
    text: "Support may include cycle awareness, preparation for fertility treatment, recovery after procedures, stress regulation, and care that fits around your reproductive endocrinologist’s plan. Acupuncture does not replace fertility evaluation or promise a pregnancy outcome.",
    image: "/images/home-hero-care.jpg",
    alt: "Gentle wrist assessment during a women’s health visit",
    link: "/blog#fertility-ivf",
  },
  {
    id: "womens-health",
    eyebrow: "Cycle care",
    title: "Menstrual & Reproductive Wellbeing",
    text: "We make room for the timing, quality, and pattern of menstrual symptoms, including cramps, cycle-related tension, mood changes, and transitions that deserve a thoughtful conversation alongside medical care.",
    image: "/images/chinese-medicine-consultation.jpg",
    alt: "Traditional pulse assessment during a Chinese medicine consultation",
    link: "/blog#menstrual-health",
  },
  {
    id: "pain-management",
    eyebrow: "Neck, back & muscle pain",
    title: "Pain Management",
    text: "Acupuncture may be considered as part of a broader plan for neck, back, shoulder, muscle, or persistent recurring pain. We focus on how pain affects movement, sleep, stress, and daily function, and we recommend medical or dental evaluation when a symptom is new, severe, or unexplained.",
    image: "/images/acupuncture-treatment-hero.png",
    alt: "Fine acupuncture needles being placed during pain-focused care",
    link: "/blog#pain-management",
  },
  {
    id: "orofacial-pain",
    eyebrow: "Jaw & facial pain",
    title: "TMJ, Orofacial Pain & Headaches",
    text: "Jaw muscle tension, clenching, facial pain, headaches, and neck involvement can overlap. We consider the full pattern and encourage coordination with your dentist, physician, or orofacial pain specialist when needed.",
    image: "/images/service-cupping.jpg",
    alt: "Cupping therapy image representing muscle tension care",
    link: "/blog#tmj-orofacial-pain",
  },
  {
    id: "stress-sleep-digestion",
    eyebrow: "Whole-person support",
    title: "Stress, Sleep & Digestive Concerns",
    text: "Stress can change how the body rests, digests, and recovers. Care may address the pattern connecting difficulty winding down, restless sleep, fatigue, bloating, constipation, or digestive discomfort while keeping appropriate medical evaluation in view.",
    image: "/images/service-herbal-medicine.jpg",
    alt: "Traditional herbs arranged for a digestive and wellness consultation",
    link: "/blog#stress-sleep-digestion",
  },
  {
    id: "headache-neck-pain",
    eyebrow: "Musculoskeletal care",
    title: "Headaches, Neck & Shoulder Tension",
    text: "Treatment planning considers the location, frequency, triggers, muscle tension, sleep, and stress that accompany headaches and neck discomfort. Sudden or severe headache, neurologic changes, or injury requires prompt medical attention.",
    image: "/images/service-acupuncture.png",
    alt: "Acupuncture treatment for neck and shoulder tension",
    link: "/blog#neck-back-muscle-pain",
  },
];

export default function SpecialistPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Specialist care areas"
        title="Focused expertise, attentive care."
        text="Springwell is built around a small set of connected care areas: women’s health and fertility, pain management for neck, back, muscle, TMJ, and headache patterns, plus support for stress, sleep, and digestion."
        image="/images/acupuncture-treatment-hero.png"
      />

      <section className="section-pad specialist-provider-intro">
        <div className="container specialist-provider-grid">
          <div className="specialist-provider-image">
            <Image src="/images/home-hero-care.jpg" alt="Hands-on pulse assessment in a calm clinical setting" fill sizes="(max-width: 860px) 100vw, 45vw" />
          </div>
          <div>
            <p className="eyebrow">Licensed acupuncturist</p>
            <h2>Renjinming Dai</h2>
            <p className="credentials">Licensed Acupuncturist in Virginia · Dipl. Ac.</p>
            <p>
              Renjinming combines advanced education in Traditional Chinese
              Medicine Gynecology with U.S. training in biomedical engineering.
              Her care is rooted in listening, pattern-based assessment, and a
              treatment plan that patients can understand.
            </p>
            <div className="credential-grid">
              <div><CheckIcon /><span><strong>M.S.</strong> Traditional Chinese Medicine Gynecology</span></div>
              <div><CheckIcon /><span><strong>M.S.</strong> Biomedical Engineering</span></div>
              <div><CheckIcon /><span><strong>Diplomate</strong> of Acupuncture</span></div>
              <div><CheckIcon /><span><strong>Licensed</strong> in Virginia</span></div>
            </div>
            <div className="button-row specialist-buttons">
              <Link className="button button-secondary" href="/about#provider">Read the provider story <ArrowIcon /></Link>
              <Link className="text-link" href="/contact">Ask a question <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad specialist-focus-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Clinical focus</p>
              <h2>Start with what is affecting your life most.</h2>
            </div>
            <p>
              These areas overlap often. Your first visit is a chance to decide
              what deserves attention first and whether Springwell is a good fit.
            </p>
          </div>
          <div className="specialist-focus-grid">
            {focusAreas.map((area, index) => (
              <article className="specialist-focus-card" id={area.id} key={area.id}>
                <Link className="specialist-focus-image" href={area.link}>
                  <Image src={area.image} alt={area.alt} fill sizes="(max-width: 680px) 100vw, 33vw" />
                  <span>0{index + 1}</span>
                </Link>
                <div className="specialist-focus-copy">
                  <p className="eyebrow">{area.eyebrow}</p>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <Link className="text-link" href={area.link}>Read patient guidance <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
