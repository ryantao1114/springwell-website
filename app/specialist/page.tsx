import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";
import homeStyles from "../home-redesign.module.css";

export const metadata: Metadata = {
  title: "What We Treat | Acupuncture Care Areas",
  description:
    "Explore SpringWell Acupuncture’s focus areas: women’s health, fertility and IVF support, pain management, TMJ, stress, sleep, and digestive support in Northern Virginia.",
  alternates: { canonical: "/specialist" },
};

const focusAreas = [
  {
    id: "womens-health",
    eyebrow: "01 · Women’s health",
    title: "Women’s Health",
    text: "Period pain, PMS, irregular cycles, PCOS-related symptoms, cycle-related headaches, and perimenopause concerns.",
    image: "/images/home-womens-health-hero-hd.webp",
    alt: "A supportive conversation during a women’s health visit",
    link: "/care/womens-health",
  },
  {
    id: "fertility-ivf",
    eyebrow: "02 · Fertility care",
    title: "Fertility & IVF Support",
    text: "Individualized support for fertility planning, IUI, IVF preparation and stimulation, retrieval, transfer, stress, and sleep.",
    image: "/images/home-hero-care.jpg",
    alt: "Gentle pulse assessment during fertility-focused acupuncture care",
    link: "/care/fertility-ivf-support",
  },
  {
    id: "pain-management",
    eyebrow: "03 · Pain care",
    title: "Pain Management",
    text: "Low-back pain, neck and shoulder tension, TMJ and jaw pain, myofascial pain, tension-type headache, migraine support, and movement restriction.",
    image: "/images/acupuncture-treatment-hero.png",
    alt: "Fine acupuncture needles being placed during pain-focused care",
    link: "/care/pain-management",
  },
  {
    id: "stress-sleep",
    eyebrow: "04 · Rest & recovery",
    title: "Stress & Sleep",
    text: "Insomnia, stress and overwhelm, anxiety-related tension, fatigue, restless energy, and difficulty winding down.",
    image: "/images/home-stress-sleep-upload.webp",
    alt: "A patient resting during calming acupuncture care for stress and sleep",
    link: "/care/stress-sleep",
  },
  {
    id: "digestive-support",
    eyebrow: "05 · Digestive health",
    title: "Digestive Health",
    text: "Bloating, abdominal discomfort, nausea, appetite changes, constipation, irregularity, and stress-sensitive digestive symptoms.",
    image: "/images/home-digestive-support-upload.webp",
    alt: "Traditional herbs arranged for an individualized digestive health consultation",
    link: "/care/digestive-support",
  },
];

const benefits = [
  ["pain", "Pain Relief", "Helps calm pain signalling and ease discomfort that affects daily activity.", "/care/pain-management"],
  ["muscle-tension", "Muscle Tension", "Targets tight muscles and trigger points to encourage release and easier movement.", "/care/pain-management"],
  ["mobility-function", "Mobility & Movement", "Reduces muscle guarding and stiffness that can limit comfortable movement.", "/care/pain-management"],
  ["stress-regulation", "Stress & Sleep", "Helps the nervous system slow down so the body can release tension and settle into more restorative rest.", "/care/stress-sleep"],
  ["menstrual-reproductive", "Menstrual & Fertility Health", "Care changes with cycle timing, menstrual symptoms, fertility planning, IUI, and IVF stages.", "/care/fertility-ivf-support"],
  ["digestive-comfort", "Digestive Comfort", "Addresses bloating, nausea, abdominal tension, and stress-related changes in digestion.", "/care/digestive-support"],
] as const;

export default function SpecialistPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="What we treat"
        title="Care shaped around the concerns that brought you here."
        text="Explore the conditions and symptoms SpringWell commonly supports, from women’s health, fertility and IVF support to pain, stress, sleep, and digestive concerns."
        image="/images/acupuncture-treatment-hero.png"
      />

      <section className="section-pad specialist-provider-intro">
        <div className="container specialist-provider-grid">
          <div className="specialist-provider-image">
            <Image src="/images/provider-renjinming-2026.webp" alt="Renjinming Dai, licensed acupuncturist at SpringWell" fill unoptimized sizes="(max-width: 860px) 100vw, 45vw" />
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

      <section className={homeStyles.section}>
        <div className="container">
          <div className={homeStyles.narrowHeading}>
            <p className="eyebrow">Why SpringWell</p>
            <h2>Clinical depth, delivered with warmth</h2>
          </div>
          <div className={homeStyles.whyGrid}>
            <InfoCard number="01" title="Specialized Training in Women’s Health" text="Graduate training in Traditional Chinese Medicine gynecology informs care for menstrual health, fertility concerns, reproductive treatment, and changing needs across different stages of life." />
            <InfoCard number="02" title="Traditional Medicine with a Modern Perspective" text="Traditional Chinese medicine training is considered alongside biomedical knowledge, pain science, safety, current treatment, and the evolving research around acupuncture." />
            <InfoCard number="03" title="Thoughtful Fertility, IUI & IVF Support" text="Care is tailored to your symptoms, cycle, treatment stage, emotional needs, and the changing demands of your fertility journey." />
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
              Each area includes common conditions, research in context, and a clear picture of what treatment may involve at SpringWell.
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

      <section className={homeStyles.section}>
        <div className={`container ${homeStyles.benefitsHeading}`}>
          <div className={homeStyles.sectionHeading}>
            <div><p className="eyebrow">Potential benefits</p><h2>How acupuncture may support your care</h2></div>
            <p>Acupuncture works with the nervous system, muscles, circulation, and the body’s natural regulatory processes to support pain relief, easier movement, restful sleep, menstrual and fertility health, and digestive comfort.</p>
          </div>
          <div className={homeStyles.benefitGrid}>
            {benefits.map(([icon, title, text, href]) => (
              <Link className={homeStyles.iconCard} href={href} key={title} aria-label={`Explore acupuncture for ${title}`}>
                <Image src={`/images/benefits/${icon}.webp`} alt="" width={86} height={86} />
                <div><h3>{title}</h3><p>{text}</p><span className={homeStyles.cardLink}>Explore care <ArrowIcon /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}

function InfoCard({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className={homeStyles.infoCard}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>;
}
