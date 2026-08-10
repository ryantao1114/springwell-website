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
    text: "Individualized care for menstrual health, hormonal transitions, fertility, and the changing needs of women through every stage of life.",
    concerns: ["Period pain, PMS & irregular cycles", "Hormonal transition support", "Fertility, IUI & IVF support"],
    image: "/images/home-womens-health.webp",
    alt: "Gentle wrist assessment during a women’s health consultation",
    careHref: "/care/womens-health-fertility",
    specialistHref: "/specialist#womens-health",
    blogHref: "/blog#fertility-ivf",
    linkLabel: "Read the women’s health guide",
  },
  {
    number: "02",
    eyebrow: "Pain care",
    title: "Pain Management",
    text: "Focused care for musculoskeletal and orofacial pain, with treatment shaped around movement, daily function, and recovery.",
    concerns: ["Neck, shoulder & back pain", "Muscle tension & strain", "TMJ, facial pain & headaches"],
    image: "/images/home-pain-management.webp",
    alt: "Fine acupuncture needles being placed during treatment",
    careHref: "/care/pain-management",
    specialistHref: "/specialist#pain-management",
    blogHref: "/blog#neck-back-muscle-pain",
    linkLabel: "Read the pain management guide",
  },
  {
    number: "03",
    eyebrow: "Rest & recovery",
    title: "Stress & Sleep Support",
    text: "Support for the stress-related patterns that affect relaxation, sleep quality, energy, and the ability to recover.",
    concerns: ["Stress, tension & overwhelm", "Difficulty falling or staying asleep", "Fatigue & restless mind"],
    image: "/images/home-stress-sleep.webp",
    alt: "Warm cupping treatment for muscle tension and relaxation",
    careHref: "/care/stress-sleep",
    specialistHref: "/specialist#stress-sleep-digestion",
    blogHref: "/blog#stress-sleep-digestion",
    linkLabel: "Read the stress & sleep guide",
  },
  {
    number: "04",
    eyebrow: "Digestive health",
    title: "Digestive Support",
    text: "Careful support for digestive symptoms, with attention to eating patterns, stress, medications, and the wider health picture.",
    concerns: ["Bloating & abdominal discomfort", "Constipation or irregularity", "Nausea & sensitive digestion"],
    image: "/images/home-digestive-support.webp",
    alt: "Traditional herbs arranged for an individualized consultation",
    careHref: "/care/digestive-support",
    specialistHref: "/specialist#stress-sleep-digestion",
    blogHref: "/blog#digestive-support",
    linkLabel: "Read the digestive health guide",
  },
];

const visitSteps = [
  {
    number: "01",
    title: "Start with what you want to change.",
    text: "Share the symptoms, goals, or life changes that matter most to you.",
    illustration: "listen",
  },
  {
    number: "02",
    title: "Put the symptom in context.",
    text: "We consider your health history, routines, medications, and patterns.",
    illustration: "context",
  },
  {
    number: "03",
    title: "Choose a focused treatment plan.",
    text: "We explain the recommended approach and why it fits your goals.",
    illustration: "plan",
  },
  {
    number: "04",
    title: "Leave with a clear next step.",
    text: "Know what to notice, when to follow up, and what comes next.",
    illustration: "next",
  },
];

function ProcessIllustration({ type }: { type: string }) {
  return (
    <svg className="process-illustration" viewBox="0 0 220 150" role="img" aria-label="Simple line drawing illustrating the visit step">
      <path className="process-line" d="M28 116c29-12 36-33 62-34 24-1 28 18 51 18 23 0 27-23 51-29" />
      {type === "listen" && <>
        <path className="process-line" d="M77 81c-8-20 3-40 23-43 18-3 32 11 29 28-2 14-13 22-28 24" />
        <path className="process-line" d="M101 53c8-7 19-6 24 2M84 112c7-18 19-24 34-22" />
        <circle className="process-dot" cx="137" cy="48" r="4" />
        <path className="process-accent" d="M148 40l15-9m-11 20 18-1" />
      </>}
      {type === "context" && <>
        <path className="process-line" d="M100 35c-13 8-15 26-7 35l-10 25m17-45 18 9 22-4m-30 17 22 20 10 25m-21-31-25 20" />
        <circle className="process-dot" cx="101" cy="28" r="8" />
        <path className="process-accent" d="M150 42c13 6 22 16 26 29m-7-31 8 2-2 8" />
      </>}
      {type === "plan" && <>
        <path className="process-line" d="M73 106c8-35 25-53 51-54 23-1 37 16 31 36-5 17-20 24-37 19" />
        <path className="process-line" d="M96 72l10 25m17-41-4 29m23-16-16 23" />
        <path className="process-accent" d="M167 35v30m-7-23 7-7 7 7" />
        <circle className="process-dot" cx="106" cy="97" r="4" /><circle className="process-dot" cx="119" cy="85" r="4" />
      </>}
      {type === "next" && <>
        <path className="process-line" d="M53 104c17-33 39-40 58-26 13 9 21 25 38 21 17-3 24-22 25-45" />
        <path className="process-accent" d="M164 54l10-10 10 10" />
        <circle className="process-dot" cx="72" cy="87" r="5" /><circle className="process-dot" cx="111" cy="88" r="5" />
        <path className="process-line" d="M42 115h130" />
      </>}
    </svg>
  );
}

export default function Home() {
  return (
    <PageShell variant="home">
      <HomeHero />

      <section className="hero-contact-band" aria-label="Contact and booking information">
        <div className="container hero-contact-grid">
          <div className="hero-contact-hours">
            <p className="eyebrow">Visit Springwell</p>
            <h2>Thoughtful care, by appointment.</h2>
            <div className="hero-contact-note">
              <p><strong>{site.address}</strong></p>
              <p><strong>Hours</strong><br />Tuesday, Thursday, Friday &amp; Sunday<br />By appointment</p>
            </div>
            <div className="hero-contact-socials">
              <span>Follow along</span>
              {site.socialLinks.map((social) => (
                <a href={social.href} key={social.href} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">◎</span>{social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-contact-details">
            <p className="eyebrow">Contact us</p>
            <a className="hero-contact-email" href={`mailto:${site.email}`}>{site.email}</a>
            <p>Questions about care, scheduling, or whether Springwell may be a good fit? Send us a note and we’ll get back to you.</p>
            <Link className="text-link" href="/contact">Get in touch <ArrowIcon /></Link>
          </div>

          <div className="hero-contact-action">
            <p className="eyebrow light">Ready when you are</p>
            <h3>Book your visit</h3>
            <Link className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book Your Visit <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-provider-section section-pad" aria-labelledby="home-provider-title">
        <div className="container home-provider-grid">
          <div className="home-provider-image">
            <Image
              src="/images/provider-renjinming.webp"
              alt="Renjinming Dai, licensed acupuncturist at Springwell"
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
            />
            <span>Springwell Acupuncture</span>
          </div>
          <div className="home-provider-copy">
            <p className="eyebrow">About your provider</p>
            <h2 id="home-provider-title">Care grounded in tradition, shaped for real life.</h2>
            <p className="home-provider-credentials">Renjinming Dai, L.Ac. · Diplomate of Acupuncture (NCCAOM)</p>
            <a
              className="provider-linkedin"
              href="https://www.linkedin.com/in/renjinming-d-6086122a6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Renjinming Dai on LinkedIn"
            >
              LinkedIn
            </a>
            <p className="home-provider-lead">
              Renjinming Dai is a Virginia-licensed acupuncturist with advanced training in Traditional Chinese Medicine gynecology and biomedical engineering. Grounded in traditional Chinese medicine and informed by contemporary biomedical knowledge, she provides thoughtful, individualized acupuncture care for women’s health, fertility and IVF support, pain, stress, sleep, and digestive concerns.
            </p>
            <div className="home-provider-tags" aria-label="Provider areas of focus">
              <span>Women’s health</span>
              <span>Fertility &amp; IVF support</span>
              <span>Pain management</span>
              <span>Stress, sleep &amp; digestion</span>
            </div>
            <Link className="text-link" href="/about#provider">Meet Renjinming <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad start-here-section">
        <div className="container">
          <div className="section-heading start-here-heading">
            <div>
              <p className="eyebrow">A simple place to begin</p>
              <h2>Your First Acupuncture Session:</h2>
            </div>
          </div>
          <div className="start-here-grid">
            <article>
              <div className="start-step-image">
                <Image src="/images/first-session-assessment.webp" alt="Practitioner and patient discussing health concerns" fill sizes="(max-width: 680px) 100vw, 33vw" />
                <span className="start-step-number">01</span>
              </div>
              <div className="start-step-content">
                <span className="start-step-label">Health assessment</span>
                <h3>Begin with a thoughtful assessment.</h3>
                <p>Share your health history, symptoms, goals, and the changes you would like support with.</p>
              </div>
            </article>
            <article>
              <div className="start-step-image">
                <Image src="/images/first-session-treatment.webp" alt="Acupuncture treatment being provided" fill sizes="(max-width: 680px) 100vw, 33vw" />
                <span className="start-step-number">02</span>
              </div>
              <div className="start-step-content">
                <span className="start-step-label">Focused treatment</span>
                <h3>Receive care shaped around you.</h3>
                <p>We explain the recommended approach and create a treatment plan based on your needs.</p>
              </div>
            </article>
            <article>
              <div className="start-step-image">
                <Image src="/images/first-session-rest.webp" alt="Patient resting calmly during acupuncture care" fill sizes="(max-width: 680px) 100vw, 33vw" />
                <span className="start-step-number">03</span>
              </div>
              <div className="start-step-content">
                <span className="start-step-label">Rest and move forward</span>
                <h3>Leave with a clear next step.</h3>
                <p>We’ll explain what to notice, how to support your progress, and when to check in again.</p>
              </div>
            </article>
          </div>
          <div className="start-here-actions">
            <Link className="button button-secondary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></Link>
            <Link className="text-link" href="/contact">Have a question first? <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="statement-band" aria-label="Springwell clinical perspective">
        <div className="container statement-grid">
          <div className="statement-quote-mark" aria-hidden="true">“</div>
          <blockquote>
            Moving beyond the “alternative medicine” label allows acupuncture to be evaluated more fairly—as a supportive care intervention, with the same focus on evidence, safety, patient selection, and clinical implementation.
          </blockquote>
          <p className="statement-attribution">A modern view of traditional care<br /><span>— Springwell Acupuncture</span></p>
        </div>
      </section>

      <section className="section-pad services-intro">
        <div className="container">
          <div className="section-heading split-heading">
            <div className="help-heading-copy">
              <p className="eyebrow">How we can help</p>
              <h2>Care for what matters to you.</h2>
            </div>
          </div>

          <div className="home-focus-list">
            {focusAreas.map((area) => (
              <article className="home-focus-item" key={area.number}>
                <Link className="home-focus-image" href={area.careHref}>
                  <Image src={area.image} alt={area.alt} fill sizes="(max-width: 860px) 100vw, 42vw" />
                </Link>
                <div className="home-focus-copy">
                  <p className="eyebrow">{area.eyebrow}</p>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <ul className="focus-concerns" aria-label={`${area.title} common concerns`}>
                    {area.concerns.map((concern) => <li key={concern}><Link href={area.careHref}>{concern}</Link></li>)}
                  </ul>
                  <Link className="text-link" href={area.careHref}>Read more <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container process-layout">
          <div className="process-intro">
            <p className="eyebrow">What to expect</p>
            <h2>A first visit with enough time to understand the full picture.</h2>
            <p>Appointments are unhurried enough for questions and focused enough to leave you with a clear next step.</p>
            <Link className="button button-secondary" href="/blog#first-acupuncture-visit">
              Read the first-visit guide <ArrowIcon />
            </Link>
          </div>
          <div className="process-steps">
            {visitSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step-number">{step.number}</span>
                <div>
                  <ProcessIllustration type={step.illustration} />
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
            <a className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book Your Visit <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
