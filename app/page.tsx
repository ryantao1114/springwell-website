import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./components/icons";
import { LocalBusinessJsonLd } from "./components/local-business-json-ld";
import { PageShell } from "./components/site-shell";
import { site } from "./config/site";
import styles from "./home-redesign.module.css";

export const metadata: Metadata = {
  title: "Acupuncture in Herndon, VA | SpringWell Acupuncture",
  description: site.description,
  alternates: { canonical: "/" },
};

const specialties = [
  { title: "Women’s Health & Gyn", text: "Support hormonal balance, comfortable cycles, and steadier wellbeing through individualized care.", href: "/care/womens-health", image: "/images/home-womens-health-hero-hd.webp", alt: "A calm conversation about women’s health care" },
  { title: "Fertility & IVF Support", text: "Thoughtful support coordinated around fertility care, IUI, and every IVF stage.", href: "/care/fertility-ivf-support", image: "/images/home-fertility-family.jpg", alt: "A mother sharing a joyful moment with her baby" },
  { title: "Pregnancy & Postpartum", text: "Gentle support for nausea, pregnancy discomfort, postpartum recovery, and lactation concerns.", href: "/care/womens-health", image: "/images/womens-health-pregnancy.webp", alt: "Supportive acupuncture care during pregnancy and postpartum recovery" },
  { title: "Stress, Anxiety & Sleep", text: "Calm an overworked nervous system and make space for deeper, restorative sleep.", href: "/care/stress-sleep", image: "/images/home-stress-sleep-upload.webp", alt: "A patient resting during a calm acupuncture treatment" },
  { title: "Headaches & Migraine", text: "Target headache triggers, jaw tension, and migraine patterns with personalized, drug-free support.", href: "/care/pain-management", image: "/images/home-headaches-migraine-user.jpg", alt: "A woman holding her head during a severe headache or migraine" },
  { title: "Back, Neck & Sciatica", text: "Ease back, neck, and sciatic pain while supporting comfortable, confident movement.", href: "/care/pain-management", image: "/images/home-back-neck-sciatica-user.jpg", imagePosition: "center 46%", alt: "A person experiencing neck and lower-back pain" },
  { title: "Facial & Rejuvenation", text: "Encourage microcirculation and support a naturally refreshed, radiant appearance.", href: "/services/acupuncture", image: "/images/about-facial-acupuncture.webp", alt: "A calm facial acupuncture and rejuvenation treatment" },
  { title: "Custom Herbal", text: "Personalized Chinese herbal care tailored to your symptoms, constitution, and goals.", href: "/services/herbal-medicine", image: "/images/home-herbal-cupping-user.jpg", imagePosition: "center 48%", alt: "A selection of traditional herbal tea blends arranged in small bowls" },
];

export default function Home() {
  return <PageShell>
    <LocalBusinessJsonLd />
    <section className={styles.hero}><div className={`container ${styles.heroGrid}`}>
      <div className={styles.heroCopy}><p className="eyebrow">Women’s health · fertility · pain care · Sunday appointments</p><h1>Acupuncture in Herndon &amp; Reston for women’s health, fertility &amp; pain.</h1><p className={styles.heroLead}>Modern, evidence-informed care for fertility and IVF/IUI support, women’s health, complex pain, stress, and sleep—with Sunday availability and HSA/FSA cards accepted.</p><div className={styles.actions}><Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your visit <ArrowIcon /></Link><Link className="button button-secondary" href="#specialties">Explore specialized care <ArrowIcon /></Link></div><TextLink href="/book">Appointment options and what to expect</TextLink><p className={styles.heroNote}>Virginia-licensed acupuncturist · Individualized, evidence-informed care</p></div>
      <div className={styles.heroImage}><Image src="/images/home-hero-treatment.jpg" alt="A licensed acupuncturist providing a gentle treatment" fill priority unoptimized sizes="(max-width: 860px) 100vw, 48vw" /><div className={styles.heroImageCaption}><span>{site.name}</span><strong>Herndon, Virginia</strong></div></div>
    </div></section>

    <section className={styles.section} id="specialties"><div className="container"><SectionHeading eyebrow="WHAT WE TREAT" title="Focused care for the concerns that matter most" /><div className={styles.specialtyGrid}>{specialties.map((item) => <article className={styles.editorialCard} key={item.title}><Link className={styles.cardImage} href={item.href}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 25vw" style={{ objectPosition: "imagePosition" in item ? item.imagePosition : undefined }} /></Link><div className={styles.cardBody}><h3>{item.title}</h3><p>{item.text}</p><TextLink href={item.href}>Explore care</TextLink></div></article>)}</div></div></section>

    <section className={`${styles.section} ${styles.providerSection}`}><div className={`container ${styles.providerGrid}`}><div className={styles.providerImage}><Image src="/images/provider-renjinming-2026.webp" alt="Renjinming Dai, licensed acupuncturist at SpringWell" fill unoptimized sizes="(max-width: 860px) 100vw, 43vw" /></div><div className={styles.providerCopy}><p className="eyebrow">Meet your acupuncturist</p><h2>Renjinming Dai, L.Ac.</h2><p className={styles.credentials}>Virginia Licensed Acupuncturist · Diplomate of Acupuncture (NCCAOM)</p><div className={styles.providerPoints}><div><h3>Deep roots in Chinese medicine</h3><p>More than 10 years of study and clinical practice in <strong>Traditional Chinese Medicine and acupuncture</strong>, with advanced training in TCM gynecology and extensive experience in <strong>women’s health and fertility care</strong>.</p></div><div><h3>Biomedical perspective</h3><p>With a <strong>U.S. Master’s degree in Biomedical Engineering and research experience in biomedical science</strong>, Renjinming brings a modern scientific perspective to acupuncture and integrative care.</p></div><div><h3>Individualized care</h3><p>Care is tailored to your <strong>symptoms, health history, goals, and response to treatment</strong> — never a one-size-fits-all approach.</p></div></div><div className={styles.providerActions}><Link className={`button button-secondary ${styles.providerStoryButton}`} href="/about#provider">Read the provider story <ArrowIcon /></Link><Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link></div></div></div></section>

    <section className={`${styles.section} ${styles.womensFeature}`}><div className={`container ${styles.featureGrid}`}><div className={styles.featureImage}><Image src="/images/home-womens-health-hero-hd.webp" alt="A clinician offering calm, reassuring support during a women’s health consultation" fill quality={95} unoptimized sizes="(max-width: 860px) 100vw, 58vw" /></div><div className={styles.featureCopy}><p className="eyebrow">Women’s health focus</p><h2>Care for every chapter of women’s health</h2><p>Individualized acupuncture that respects where you are, what you are navigating, and the medical care already supporting you.</p><ul><li>Fertility, IUI &amp; IVF support</li><li>Menstrual concerns</li><li>Irregular cycles</li><li>PCOS-related symptoms</li><li>Cycle-related headaches</li><li>Perimenopause and hormonal transitions</li></ul><div className={styles.featureActions}><Link className="button button-primary" href="/care/womens-health">Explore women’s health <ArrowIcon /></Link><Link className="button button-primary" href="/care/fertility-ivf-support">Explore fertility &amp; IVF <ArrowIcon /></Link></div></div></div></section>

    <section className={styles.insuranceSection} aria-labelledby="home-insurance-heading">
      <div className="container">
        <div className={styles.insuranceHeading}>
          <div><p className="eyebrow">Insurance at SpringWell</p><h2 id="home-insurance-heading">In-network care, with more access coming soon.</h2></div>
          <p>SpringWell Acupuncture is in network with Anthem. We are actively working to join additional insurance networks.</p>
        </div>
        <div className={styles.insuranceCards}>
          <article className={`${styles.insuranceCard} ${styles.insuranceCardActive}`}>
            <span className={styles.insuranceStatus}>In Network</span>
            <Image className={styles.anthemLogo} src="/images/anthem-bcbs-logo-user.png" alt="Anthem Blue Cross and Blue Shield" width={1448} height={1086} />
            <p>Anthem</p>
          </article>
          <article className={styles.insuranceCard}>
            <span className={styles.insuranceStatusSoon}>Coming Soon</span>
            <Image className={styles.insuranceLogo} src="/images/insurance/carefirst-bcbs.jpg" alt="CareFirst BlueCross BlueShield" width={620} height={375} />
            <p>BlueCross BlueShield</p>
          </article>
          <article className={styles.insuranceCard}>
            <span className={styles.insuranceStatusSoon}>Coming Soon</span>
            <Image className={styles.insuranceLogo} src="/images/insurance/united-healthcare.jpg" alt="UnitedHealthcare" width={800} height={600} />
          </article>
          <article className={styles.insuranceCard}>
            <span className={styles.insuranceStatusSoon}>Coming Soon</span>
            <Image className={styles.insuranceLogo} src="/images/insurance/aetna.jpg" alt="Aetna" width={3150} height={863} />
          </article>
          <article className={styles.insuranceCard}>
            <span className={styles.insuranceStatusSoon}>Coming Soon</span>
            <Image className={styles.insuranceLogo} src="/images/insurance/cigna.jpg" alt="Cigna" width={1200} height={630} />
          </article>
          <article className={`${styles.insuranceCard} ${styles.insuranceCardAccepted}`}>
            <span className={styles.insuranceStatus}>Accepted</span>
            <Image className={styles.insuranceLogo} src="/images/insurance/hsa-fsa.jpg" alt="HSA and FSA cards accepted" width={590} height={203} />
            <p>Cards welcome for eligible services</p>
          </article>
        </div>
        <div className={styles.insuranceVerification}>
          <div><p className="eyebrow">Benefits verification</p><h3>Not sure if your insurance plan covers acupuncture?</h3></div>
          <div><p>We’re happy to help verify your insurance benefits before your first visit.</p><p>Email <a href="mailto:info@springwellacu.com">info@springwellacu.com</a>. We’ll get back to you as soon as possible.</p></div>
        </div>
        <div className={styles.insuranceFooter}><p>Self-pay, HSA/FSA, and superbill options remain available.</p><Link className="button button-secondary" href="/pricing#insurance">Insurance &amp; pricing <ArrowIcon /></Link></div>
      </div>
    </section>

    <section className={styles.section}><div className={`container ${styles.locationGrid}`}><div><p className="eyebrow">Herndon, Virginia</p><h2>Conveniently located in Northern Virginia</h2><p>{site.address}</p><p><a href={site.phoneHref}>{site.phone}</a></p><p>{site.hours.days}<br />{site.hours.time}</p><p className={styles.cities}>Serving Herndon · Reston · Sterling · Vienna · Tysons · Fairfax</p><a className="button button-secondary" href={site.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a></div><div className={styles.locationImage}><iframe className={styles.locationMap} title={`Google map showing ${site.name} at ${site.address}`} src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>

    <section className={styles.finalCta}><div className="container"><p className="eyebrow light">Ready to begin?</p><h2>Personalized acupuncture care begins with understanding what brings you in.</h2><Link className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></Link></div></section>
  </PageShell>;
}

function SectionHeading({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){return <div className={text?styles.sectionHeading:`${styles.sectionHeading} ${styles.sectionHeadingSingle}`}><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{text&&<p>{text}</p>}</div>}
function TextLink({href,children}:{href:string;children:React.ReactNode}){return <Link className={styles.inlineLink} href={href}>{children} <ArrowIcon /></Link>}
