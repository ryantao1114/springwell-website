import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { CurrencyMark } from "../components/currency-mark";
import { PageShell } from "../components/site-shell";
import { site } from "../config/site";
import homeStyles from "../home-redesign.module.css";
import styles from "./new-patients.module.css";

export const metadata: Metadata = {
  title: "New Acupuncture Patients in Herndon, VA",
  description: "What to expect, visit pricing, payment information, and how to prepare for your first acupuncture appointment at SpringWell Acupuncture.",
  alternates: { canonical: "/new-patients" },
};

const approach = [
  ["01", "Assessment", "We begin with your health history, symptoms, goals, medications, and ongoing medical care."],
  ["02", "Individualized treatment", "Fine, sterile needles are placed based on your presentation. Electroacupuncture or cupping may be incorporated when appropriate."],
  ["03", "Rest & response", "Most patients rest for approximately 20–30 minutes while treatment is monitored and adjusted for comfort."],
  ["04", "Ongoing plan", "Treatment frequency and approach evolve according to your response, priorities, and goals."],
] as const;

function ProcessIllustration({ type }: { type: string }) {
  return <svg className={styles.processIllustration} viewBox="0 0 220 150" role="img" aria-label="Simple line drawing illustrating this treatment step">
    <path className={styles.processLine} d="M28 116c29-12 36-33 62-34 24-1 28 18 51 18 23 0 27-23 51-29" />
    {type === "assessment" && <><path className={styles.processLine} d="M77 81c-8-20 3-40 23-43 18-3 32 11 29 28-2 14-13 22-28 24M101 53c8-7 19-6 24 2M84 112c7-18 19-24 34-22" /><circle className={styles.processDot} cx="137" cy="48" r="4" /><path className={styles.processAccent} d="M148 40l15-9m-11 20 18-1" /></>}
    {type === "treatment" && <><path className={styles.processLine} d="M100 35c-13 8-15 26-7 35l-10 25m17-45 18 9 22-4m-30 17 22 20 10 25m-21-31-25 20" /><circle className={styles.processDot} cx="101" cy="28" r="8" /><path className={styles.processAccent} d="M150 42c13 6 22 16 26 29m-7-31 8 2-2 8" /></>}
    {type === "response" && <><path className={styles.processLine} d="M73 106c8-35 25-53 51-54 23-1 37 16 31 36-5 17-20 24-37 19M96 72l10 25m17-41-4 29m23-16-16 23" /><path className={styles.processAccent} d="M167 35v30m-7-23 7-7 7 7" /><circle className={styles.processDot} cx="106" cy="97" r="4" /><circle className={styles.processDot} cx="119" cy="85" r="4" /></>}
    {type === "plan" && <><path className={styles.processLine} d="M53 104c17-33 39-40 58-26 13 9 21 25 38 21 17-3 24-22 25-45" /><path className={styles.processAccent} d="M164 54l10-10 10 10" /><circle className={styles.processDot} cx="72" cy="87" r="5" /><circle className={styles.processDot} cx="111" cy="88" r="5" /><path className={styles.processLine} d="M42 115h130" /></>}
  </svg>;
}

export default function NewPatientsPage(){return <PageShell>
  <section className={styles.hero}><div className={`container ${styles.heroGrid}`}><div><p className="eyebrow">New patients</p><h1>Your first visit, without the guesswork.</h1><p>Understand what happens, how to prepare, and what your visit costs before you schedule.</p><Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></Link></div><div className={styles.heroImage}><Image src="/images/first-session-assessment.webp" alt="A thoughtful first-visit health assessment" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div></div></section>
  <section className={`${homeStyles.section} ${homeStyles.visitSection}`}><div className="container"><div className={homeStyles.sectionHeading}><div><p className="eyebrow">New patients</p><h2>Your first visit, made clear</h2></div><p>Know what happens and what it costs before you schedule.</p></div><div className={homeStyles.visitGrid}><div className={homeStyles.visitSteps}><div><span>01</span><h3>Book</h3><p>Choose an available appointment online.</p></div><div><span>02</span><h3>Tell us what brings you in</h3><p>Complete your intake form before your visit.</p></div><div><span>03</span><h3>Your first appointment</h3><p>We review your concerns, medical history, and goals, followed by individualized treatment.</p></div></div><aside className={homeStyles.priceCard}><p className="eyebrow">Self-pay pricing</p><div><span>Initial Visit</span><strong><CurrencyMark />145</strong><small>Consultation + acupuncture treatment</small></div><div><span>Follow-up</span><strong><CurrencyMark />95</strong><small>Progress review + acupuncture treatment</small></div><div><span>Cupping</span><strong><CurrencyMark />50</strong><small>Focused cupping session · 30 minutes</small></div><Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></Link><Link className={homeStyles.inlineLink} href="/pricing">Pricing details <ArrowIcon /></Link></aside></div></div></section>
  <section className={`${styles.section} ${styles.approachSection}`}><div className={`container ${styles.processLayout}`}><div className={styles.processIntro}><p className="eyebrow">What to expect</p><h2>A modern approach rooted in traditional medicine</h2><p>Clear communication, careful assessment, and treatment that changes with you.</p><Link className="text-link" href="/services/acupuncture">Learn about acupuncture <ArrowIcon /></Link></div><div className={styles.processSteps}>{approach.map(([number,title,text], index) => <article className={styles.processStep} key={number}><span className={styles.processNumber}>{number}</span><div><ProcessIllustration type={["assessment", "treatment", "response", "plan"][index]} /><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  <section className={styles.section}><div className={`container ${styles.prepareGrid}`}><div className={styles.prepareImage}><Image src="/images/first-session-rest.webp" alt="A patient resting comfortably during acupuncture" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div><p className="eyebrow">Before your appointment</p><h2>A little preparation helps.</h2><ul><li>Eat a light meal and stay hydrated before your visit.</li><li>Wear loose, comfortable clothing when possible.</li><li>Bring a list of medications and relevant diagnoses or procedures.</li><li>Continue prescribed care unless your medical provider advises otherwise.</li><li>Plan a few extra minutes for arrival and settling in.</li></ul><Link className="text-link" href="/faq">Read frequently asked questions <ArrowIcon /></Link></div></div></section>
  <section className={styles.insurance}><div className="container"><p className="eyebrow">Insurance & payment</p><h2>In network with Anthem</h2><p>SpringWell Acupuncture is in network with Anthem. We are actively working to join additional insurance networks. Self-pay, HSA/FSA, and superbill options remain available.</p><Link className="button button-secondary" href="/pricing#insurance">Review insurance details <ArrowIcon /></Link></div></section>
  <section className={styles.cta}><div className="container"><p className="eyebrow light">Ready when you are</p><h2>Begin with a thoughtful conversation and individualized care.</h2><Link className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link></div></section>
  </PageShell>}
