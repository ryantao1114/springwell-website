import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "What We Treat | Acupuncture Care Areas",
  description:
    "Explore Springwell Acupuncture’s focus areas: women’s health, fertility and IVF support, pain management, TMJ, stress, sleep, and digestive support in Northern Virginia.",
  alternates: { canonical: "/specialist" },
};

const focusAreas = [
  {
    id: "womens-health",
    eyebrow: "01 · Women’s health",
    title: "Women’s Health & Fertility",
    text: "Period pain, PMS, irregular cycles, PCOS-related symptoms, fertility planning, IUI, IVF support, and perimenopause concerns.",
    image: "/images/home-hero-care.jpg",
    alt: "Gentle wrist assessment during a women’s health visit",
    link: "/care/womens-health-fertility",
  },
  {
    id: "pain-management",
    eyebrow: "02 · Pain care",
    title: "Pain Management",
    text: "Low-back pain, neck and shoulder tension, TMJ and jaw pain, myofascial pain, tension-type headache, migraine support, and movement restriction.",
    image: "/images/acupuncture-treatment-hero.png",
    alt: "Fine acupuncture needles being placed during pain-focused care",
    link: "/care/pain-management",
  },
  {
    id: "stress-sleep-digestion",
    eyebrow: "03 · Rest & recovery",
    title: "Stress, Sleep & Digestion",
    text: "Insomnia, stress and overwhelm, anxiety-related tension, fatigue, restless energy, bloating, nausea, constipation, and stress-sensitive digestion.",
    image: "/images/service-herbal-medicine.jpg",
    alt: "Traditional herbs arranged for a digestive and wellness consultation",
    link: "/care/stress-sleep",
  },
];

export default function SpecialistPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="What we treat"
        title="Care shaped around the concerns that brought you here."
        text="Explore the conditions and symptoms Springwell commonly supports, from women’s health and fertility care to pain, stress, sleep, and digestive concerns."
        image="/images/acupuncture-treatment-hero.png"
      />

      <section className="section-pad specialist-provider-intro">
        <div className="container specialist-provider-grid">
          <div className="specialist-provider-image">
            <Image src="/images/provider-renjinming-2026.webp" alt="Renjinming Dai, licensed acupuncturist at Springwell" fill unoptimized sizes="(max-width: 860px) 100vw, 45vw" />
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
              <p className="eyebrow">Areas of care</p>
              <h2>Start with the concern that brought you here.</h2>
            </div>
            <p>
              Each area includes common conditions, research in context, and a clear picture of what treatment may involve at Springwell.
            </p>
          </div>
          <div className="specialist-focus-grid">
            {focusAreas.map((area) => (
              <article className="specialist-focus-card" id={area.id} key={area.id}>
                <Link className="specialist-focus-image" href={area.link}>
                  <Image src={area.image} alt={area.alt} fill sizes="(max-width: 680px) 100vw, 33vw" />
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
