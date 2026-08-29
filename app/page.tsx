import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./components/icons";
import { CurrencyMark } from "./components/currency-mark";
import { PageShell } from "./components/site-shell";
import { site } from "./config/site";
import styles from "./home-redesign.module.css";

export const metadata: Metadata = {
  title: "SpringWell Acupuncture | Holistic Care & Acupuncture in Herndon, VA",
  description: site.description,
};

const specialties = [
  { title: "Women’s Health", text: "Individualized support for menstrual health, cycle-related symptoms, PCOS concerns, and perimenopause.", href: "/care/womens-health", image: "/images/home-womens-health-hero-hd.webp", alt: "A calm conversation about women’s health care" },
  { title: "Fertility & IVF", text: "Support coordinated around fertility planning, IUI, IVF preparation, retrieval, and embryo transfer.", href: "/care/fertility-ivf-support", image: "/images/home-fertility-family.jpg", alt: "A mother sharing a joyful moment with her baby" },
  { title: "Pain & Movement", text: "Care for neck and back pain, headaches, TMJ-related discomfort, muscle tension, and mobility concerns.", href: "/care/pain-management", image: "/images/home-pain-management-upload.webp", alt: "A person experiencing neck and back discomfort" },
  { title: "Stress, Sleep & Digestion", text: "Individualized acupuncture for stress regulation, sleep concerns, digestive comfort, and overall recovery.", href: "/care/stress-sleep", image: "/images/home-stress-sleep-upload.webp", alt: "A patient resting during a calm acupuncture treatment" },
];

const approach = [
  ["01", "Assessment", "We begin with your health history, symptoms, goals, medications, and ongoing medical care."],
  ["02", "Individualized treatment", "Fine, sterile needles are placed based on your presentation. Electroacupuncture or cupping may be incorporated when appropriate."],
  ["03", "Rest & response", "Most patients rest for approximately 20–30 minutes while treatment is monitored and adjusted for comfort."],
  ["04", "Ongoing plan", "Treatment frequency and approach evolve according to your response, priorities, and goals."],
] as const;

function ProcessIllustration({ type }: { type: string }) {
  return (
    <svg className={styles.processIllustration} viewBox="0 0 220 150" role="img" aria-label="Simple line drawing illustrating this treatment step">
      <path className={styles.processLine} d="M28 116c29-12 36-33 62-34 24-1 28 18 51 18 23 0 27-23 51-29" />
      {type === "assessment" && <>
        <path className={styles.processLine} d="M77 81c-8-20 3-40 23-43 18-3 32 11 29 28-2 14-13 22-28 24M101 53c8-7 19-6 24 2M84 112c7-18 19-24 34-22" />
        <circle className={styles.processDot} cx="137" cy="48" r="4" />
        <path className={styles.processAccent} d="M148 40l15-9m-11 20 18-1" />
      </>}
      {type === "treatment" && <>
        <path className={styles.processLine} d="M100 35c-13 8-15 26-7 35l-10 25m17-45 18 9 22-4m-30 17 22 20 10 25m-21-31-25 20" />
        <circle className={styles.processDot} cx="101" cy="28" r="8" />
        <path className={styles.processAccent} d="M150 42c13 6 22 16 26 29m-7-31 8 2-2 8" />
      </>}
      {type === "response" && <>
        <path className={styles.processLine} d="M73 106c8-35 25-53 51-54 23-1 37 16 31 36-5 17-20 24-37 19M96 72l10 25m17-41-4 29m23-16-16 23" />
        <path className={styles.processAccent} d="M167 35v30m-7-23 7-7 7 7" />
        <circle className={styles.processDot} cx="106" cy="97" r="4" /><circle className={styles.processDot} cx="119" cy="85" r="4" />
      </>}
      {type === "plan" && <>
        <path className={styles.processLine} d="M53 104c17-33 39-40 58-26 13 9 21 25 38 21 17-3 24-22 25-45" />
        <path className={styles.processAccent} d="M164 54l10-10 10 10" />
        <circle className={styles.processDot} cx="72" cy="87" r="5" /><circle className={styles.processDot} cx="111" cy="88" r="5" />
        <path className={styles.processLine} d="M42 115h130" />
      </>}
    </svg>
  );
}

const benefits = [
  ["pain", "Helps Manage Pain", "May support symptom relief as part of a broader pain-management plan."],
  ["muscle-tension", "Eases Muscle Tension", "Targets areas of tightness that may affect comfort and daily movement."],
  ["mobility-function", "Supports Mobility & Function", "Care is shaped around the activities and movement that matter to you."],
  ["stress-regulation", "Supports Stress Regulation", "Creates space for rest while addressing stress-related physical patterns."],
  ["menstrual-reproductive", "Supports Reproductive Wellness", "Thoughtful care for menstrual health, fertility, IUI, and IVF journeys."],
  ["digestive-comfort", "Supports Digestive Comfort", "Considers digestive symptoms alongside stress, routines, and the wider health picture."],
] as const;

export default function Home() {
  return <PageShell>
    <section className={styles.hero}><div className={`container ${styles.heroGrid}`}>
      <div className={styles.heroCopy}><p className="eyebrow">Women's health · fertility · pain care in Herndon, VA</p><h1>Acupuncture care, thoughtfully tailored to you.</h1><p className={styles.heroLead}>Supporting women’s health, pain, stress, sleep, and whole-person wellness in Herndon and Northern Virginia.</p><div className={styles.actions}><Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link><Link className="button button-secondary" href="#specialties">Explore our care <ArrowIcon /></Link></div><p className={styles.heroNote}>Virginia-licensed acupuncturist · Individualized, evidence-informed care</p></div>
      <div className={styles.heroImage}><Image src="/images/home-hero-treatment.jpg" alt="A licensed acupuncturist providing a gentle treatment" fill priority unoptimized sizes="(max-width: 860px) 100vw, 48vw" /><div className={styles.heroImageCaption}><span>{site.name}</span><strong>Herndon, Virginia</strong></div></div>
    </div></section>

    <section className={styles.section} id="specialties"><div className="container"><SectionHeading eyebrow="WHAT WE TREAT" title="Focused care for the concerns that matter most" /><div className={styles.specialtyGrid}>{specialties.map((item) => <article className={styles.editorialCard} key={item.title}><Link className={styles.cardImage} href={item.href}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></Link><div className={styles.cardBody}><h3>{item.title}</h3><p>{item.text}</p><TextLink href={item.href}>Explore care</TextLink></div></article>)}</div></div></section>

    <section className={`${styles.section} ${styles.providerSection}`}><div className={`container ${styles.providerGrid}`}><div className={styles.providerImage}><Image src="/images/provider-renjinming-2026.webp" alt="Renjinming Dai, licensed acupuncturist at Springwell" fill unoptimized sizes="(max-width: 860px) 100vw, 43vw" /></div><div className={styles.providerCopy}><p className="eyebrow">Meet your acupuncturist</p><h2>Renjinming Dai, L.Ac.</h2><p className={styles.credentials}>Virginia Licensed Acupuncturist · Diplomate of Acupuncture (NCCAOM)</p><div className={styles.providerPoints}><div><h3>Deep roots in Chinese medicine</h3><p>Renjinming’s approach is grounded in years of sustained study and clinical practice in <strong>Traditional Chinese Medicine</strong>, including advanced graduate training in TCM gynecology and extensive hospital-based experience. This long-term immersion has shaped a deep understanding of Chinese medicine theory, pattern differentiation, and how treatment should evolve with each patient’s changing condition. Her clinical training placed particular emphasis on <strong>women’s health, menstrual concerns, fertility, IUI, and IVF</strong>.</p></div><div><h3>Biomedical perspective</h3><p>With a <strong>Master’s degree in Biomedical Engineering from a U.S. university</strong> and research experience in reproductive medicine and neuroscience, Renjinming also brings a modern biomedical perspective to her practice. This background helps her consider both traditional Chinese medicine principles and contemporary scientific understanding when thinking through a patient’s care.</p></div><div><h3>Individualized care</h3><p>Renjinming does not believe in one-size-fits-all treatment. Care is adapted to your symptoms, health history, current medical care, goals, and response to treatment. Whether you are seeking support for fertility, menstrual health, pain, stress, sleep, or digestive concerns, treatment is adjusted as your needs change.</p></div></div><ul className={styles.providerQualifications} aria-label="Professional qualifications"><li><span aria-hidden="true">✓</span><p><strong>M.S.</strong> Traditional Chinese Medicine Gynecology</p></li><li><span aria-hidden="true">✓</span><p><strong>M.S.</strong> Biomedical Engineering</p></li><li><span aria-hidden="true">✓</span><p><strong>Diplomate</strong> of Acupuncture</p></li><li><span aria-hidden="true">✓</span><p><strong>Licensed</strong> in Virginia</p></li></ul><Link className={`button button-secondary ${styles.providerStoryButton}`} href="/about#provider">Read the provider story <ArrowIcon /></Link></div></div></section>

    <section className={`${styles.section} ${styles.approachSection}`}><div className={`container ${styles.processLayout}`}><div className={styles.processIntro}><p className="eyebrow">What to expect</p><h2>A modern approach rooted in traditional medicine</h2><p>Clear communication, careful assessment, and treatment that changes with you.</p><TextLink href="/services/acupuncture">Learn about acupuncture</TextLink></div><div className={styles.processSteps}>{approach.map(([number,title,text], index) => <article className={styles.processStep} key={number}><span className={styles.processNumber}>{number}</span><div><ProcessIllustration type={["assessment", "treatment", "response", "plan"][index]} /><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className={styles.section}><div className="container"><SectionHeading eyebrow="Potential benefits" title="How acupuncture may support your care" text="Acupuncture can support pain relief, muscle relaxation, stress regulation, restorative sleep, mobility, menstrual comfort, and digestive wellbeing through an individualized treatment plan." /><div className={styles.benefitGrid}>{benefits.map(([icon,title,text]) => <article className={styles.iconCard} key={title}><Image src={`/images/benefits/${icon}.webp`} alt="" width={76} height={76} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className={`${styles.section} ${styles.womensFeature}`}><div className={`container ${styles.featureGrid}`}><div className={styles.featureImage}><Image src="/images/home-womens-health-upload.webp" alt="A supportive women’s health consultation" fill sizes="(max-width: 860px) 100vw, 58vw" /></div><div className={styles.featureCopy}><p className="eyebrow">Women’s health focus</p><h2>Care for every chapter of women’s health</h2><p>Individualized acupuncture that respects where you are, what you are navigating, and the medical care already supporting you.</p><ul><li>Fertility, IUI &amp; IVF support</li><li>Menstrual concerns</li><li>Irregular cycles</li><li>PCOS-related symptoms</li><li>Cycle-related headaches</li><li>Perimenopause and hormonal transitions</li></ul><div className={styles.featureActions}><Link className="button button-primary" href="/care/womens-health">Explore women’s health <ArrowIcon /></Link><Link className="button button-secondary" href="/care/fertility-ivf-support">Explore fertility &amp; IVF <ArrowIcon /></Link></div></div></div></section>

    <section className={styles.section}><div className="container"><NarrowHeading eyebrow="Why Springwell" title="Clinical depth, delivered with warmth" /><div className={styles.whyGrid}><InfoCard number="01" title="Specialized Training in Women’s Health" text="Graduate training in Traditional Chinese Medicine gynecology informs care for menstrual health, fertility concerns, reproductive treatment, and changing needs across different stages of life." /><InfoCard number="02" title="Traditional Medicine with a Modern Perspective" text="Traditional Chinese medicine training is considered alongside biomedical knowledge, pain science, safety, current treatment, and the evolving research around acupuncture." /><InfoCard number="03" title="Thoughtful Fertility, IUI & IVF Support" text="Care is tailored to your symptoms, cycle, treatment stage, emotional needs, and the changing demands of your fertility journey." /></div></div></section>

    <section className={`${styles.section} ${styles.visitSection}`}><div className="container"><SectionHeading eyebrow="New patients" title="Your first visit, made clear" text="Know what happens and what it costs before you schedule." /><div className={styles.visitGrid}><div className={styles.visitSteps}><div><span>01</span><h3>Book</h3><p>Choose an available appointment online.</p></div><div><span>02</span><h3>Tell us what brings you in</h3><p>Complete your intake form before your visit.</p></div><div><span>03</span><h3>Your first appointment</h3><p>We review your concerns, medical history, and goals, followed by individualized treatment.</p></div></div><aside className={styles.priceCard}><p className="eyebrow">Straightforward pricing</p><div><span>Initial Visit</span><strong><CurrencyMark />145</strong><small>Consultation + acupuncture treatment</small></div><div><span>Follow-up</span><strong><CurrencyMark />95</strong><small>Progress review + acupuncture treatment</small></div><div><span>Cupping</span><strong><CurrencyMark />50</strong><small>Focused cupping session · 30 minutes</small></div><Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></Link><TextLink href="/new-patients">New patient details</TextLink></aside></div></div></section>

    <section className={styles.insuranceBand}><div className={`container ${styles.insuranceGrid}`}><div><p className="eyebrow">Insurance & payment</p><h2>Clear options, without surprises.</h2></div><p>Springwell currently welcomes self-pay patients and is pursuing participation with selected insurance networks. Superbills are available for patients seeking possible out-of-network reimbursement.</p><Link className="button button-secondary" href="/pricing#insurance">Payment details <ArrowIcon /></Link></div></section>

    <section className={styles.section}><div className={`container ${styles.locationGrid}`}><div><p className="eyebrow">Herndon, Virginia</p><h2>Conveniently located in Northern Virginia</h2><p>{site.address}</p><p><a href={site.phoneHref}>{site.phone}</a></p><p>{site.hours.days}<br />{site.hours.time}</p><p className={styles.cities}>Serving Herndon · Reston · Sterling · Vienna · Tysons · Fairfax</p><a className="button button-secondary" href={site.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a></div><div className={styles.locationImage}><iframe className={styles.locationMap} title={`Google map showing ${site.name} at ${site.address}`} src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>

    <section className={styles.finalCta}><div className="container"><p className="eyebrow light">Ready to begin?</p><h2>Personalized acupuncture care begins with understanding what brings you in.</h2><Link className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link></div></section>
  </PageShell>;
}

function SectionHeading({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){return <div className={text?styles.sectionHeading:`${styles.sectionHeading} ${styles.sectionHeadingSingle}`}><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{text&&<p>{text}</p>}</div>}
function NarrowHeading({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){return <div className={styles.narrowHeading}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
function InfoCard({number,title,text}:{number:string;title:string;text:string}){return <article className={styles.infoCard}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>}
function TextLink({href,children}:{href:string;children:React.ReactNode}){return <Link className={styles.inlineLink} href={href}>{children} <ArrowIcon /></Link>}
