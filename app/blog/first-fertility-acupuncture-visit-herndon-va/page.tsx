import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/first-fertility-acupuncture-visit-herndon-va";
const title = "What to Expect at Your First Fertility Acupuncture Visit at SpringWell Acupuncture in Herndon, VA";
const description = "What happens at a first fertility acupuncture visit in Herndon, VA? Learn about SpringWell’s consultation, TCM assessment, treatment, IUI and IVF timing, and follow-up plan.";

const faqs = [
  {
    question: "What happens at a first fertility acupuncture visit at SpringWell Acupuncture?",
    answer: "Your first visit includes a detailed menstrual and reproductive-health consultation, an individualized traditional Chinese medicine assessment, acupuncture treatment when appropriate, and a follow-up plan based on your goals and fertility timeline.",
  },
  {
    question: "Do I need to be in an IVF cycle to start fertility acupuncture?",
    answer: "No. Patients may begin while trying to conceive naturally, preparing for IUI or IVF, during an active treatment cycle, or between fertility-treatment cycles.",
  },
  {
    question: "Can fertility acupuncture be coordinated with my Herndon or Northern Virginia fertility clinic?",
    answer: "Yes. Bring the dates you know and update SpringWell when monitoring, medication, retrieval, or transfer dates change. Instructions from your reproductive endocrinologist remain the priority.",
  },
  {
    question: "Will my first fertility acupuncture appointment include treatment?",
    answer: "In most cases, the initial consultation and assessment are followed by acupuncture during the same appointment, unless the provider identifies a reason to postpone treatment.",
  },
  {
    question: "Where is SpringWell Acupuncture located?",
    answer: "SpringWell Acupuncture is located at 463 Carlisle Dr Ste B, Herndon, VA 20170, serving Herndon, Reston, Sterling, Oak Hill, Chantilly, Fairfax, Vienna, Tysons, McLean, and nearby Northern Virginia communities.",
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fertility acupuncture Herndon VA",
    "first fertility acupuncture visit",
    "IVF acupuncture Herndon",
    "fertility acupuncture Northern Virginia",
    "fertility acupuncturist Reston VA",
    "IUI acupuncture Northern Virginia",
    "what to expect fertility acupuncture",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-09-19",
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: "/images/fertility-support.webp", alt: "A calm fertility acupuncture visit at SpringWell Acupuncture in Herndon" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/fertility-support.webp"],
  },
};

export default function FirstFertilityAcupunctureVisitArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        image: new URL("/images/fertility-support.webp", site.url).toString(),
        datePublished: "2026-09-19",
        dateModified: "2026-09-19",
        author: {
          "@type": "Person",
          name: "Renjinming Dai, L.Ac.",
          jobTitle: "Virginia Licensed Acupuncturist",
          url: new URL("/about", site.url).toString(),
          knowsAbout: ["Traditional Chinese medicine gynecology", "Fertility acupuncture", "IVF support", "Women’s health acupuncture"],
        },
        publisher: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.streetAddress,
            addressLocality: site.addressLocality,
            addressRegion: site.addressRegion,
            postalCode: site.postalCode,
            addressCountry: "US",
          },
        },
        mainEntityOfPage: new URL(slug, site.url).toString(),
        about: ["Fertility acupuncture", "IVF support", "IUI support", "First acupuncture visit", "Herndon, Virginia"],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog", site.url).toString() },
          { "@type": "ListItem", position: 3, name: "First Fertility Acupuncture Visit", item: new URL(slug, site.url).toString() },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <header className={styles.articleHero}>
          <div className={"container " + styles.articleHeroGrid}>
            <div className={styles.articleHeroCopy}>
              <Link className={styles.backLink} href="/blog">← SpringWell Blog</Link>
              <p className="eyebrow">SpringWell View · Fertility acupuncture</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>A step-by-step guide to your first fertility acupuncture consultation, treatment, and personalized care plan in Herndon, Virginia.</p>
              <div className={styles.articleByline}>
                <span>By Renjinming Dai, L.Ac.</span>
                <time dateTime="2026-09-19">September 19, 2026</time>
                <span>6 min read</span>
              </div>
            </div>
            <div className={styles.articleHeroImage}>
              <Image src="/images/fertility-support.webp" alt="A welcoming fertility acupuncture setting at SpringWell Acupuncture" fill priority sizes="(max-width: 760px) 100vw, 42vw" />
            </div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#before">Before your visit</a>
              <a href="#conversation">The first conversation</a>
              <a href="#assessment">Your assessment</a>
              <a href="#treatment">The treatment</a>
              <a href="#plan">Your care plan</a>
              <a href="#questions">Common questions</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>At your first fertility acupuncture visit at SpringWell Acupuncture in Herndon, VA, you can expect a detailed consultation, an individualized traditional Chinese medicine assessment, acupuncture treatment when appropriate, and a care plan aligned with your fertility timeline.</p>
            <p>Whether you are trying to conceive naturally, preparing for IUI or IVF, in an active treatment cycle, or looking for support after a previous cycle, the first visit is used to understand your history and build an individualized plan. SpringWell serves patients from Herndon, Reston, Sterling, Fairfax, Tysons, and communities throughout Northern Virginia.</p>

            <section id="before">
              <h2>How to Prepare for Your First Fertility Acupuncture Visit</h2>
              <p>Complete your intake forms as fully as you can. Information about your menstrual cycle, fertility evaluation, medications, supplements, previous pregnancies, prior IUI or IVF cycles, sleep, stress, digestion, and pain helps make the consultation more useful.</p>
              <p>If you are working with a reproductive endocrinologist, you may bring your treatment calendar or recent information that you feel comfortable sharing. You do not need to have every laboratory result memorized.</p>
              <ul>
                <li>Eat a light meal or snack before the appointment.</li>
                <li>Wear loose, comfortable clothing when possible.</li>
                <li>Bring your current medication and supplement list.</li>
                <li>Tell us if you may be pregnant or if your treatment schedule recently changed.</li>
              </ul>
            </section>

            <section id="conversation">
              <h2>A Detailed Fertility and Menstrual Health Consultation</h2>
              <p>Your first appointment includes time with <Link href="/about">Renjinming Dai, a Virginia-licensed acupuncturist with advanced training in traditional Chinese medicine gynecology and fertility care</Link>. We carefully review your menstrual and reproductive history, including cycle length and regularity, flow, discomfort, ovulation patterns, fertility diagnoses, previous treatments, and the timing of ovarian stimulation, egg retrieval, or embryo transfer.</p>
              <p>In traditional Chinese medicine gynecology, menstrual patterns provide important clinical context for reproductive health. Understanding how your symptoms change across the cycle helps your provider identify your individual TCM pattern and develop a more focused treatment plan.</p>
              <p>We also look beyond the reproductive system. Sleep, energy, stress, digestion, headaches, muscle tension, appetite, and temperature changes can provide additional context. Your plan may include acupuncture, practical lifestyle recommendations, and appropriate nutritional or supplement guidance coordinated with your fertility team.</p>
              <blockquote>The goal is to understand your whole pattern—not simply your fertility label.</blockquote>
            </section>

            <section id="assessment">
              <h2>How SpringWell Personalizes Fertility Acupuncture</h2>
              <p>The assessment combines your health history and current symptoms with traditional Chinese medicine observations such as the tongue and pulse. These findings help guide point selection and may change as your menstrual cycle or fertility-treatment timeline changes.</p>
              <p>If you are receiving IVF care, the approach used during ovarian stimulation may differ from the approach used around retrieval, recovery, or embryo transfer. Learn more about <Link href="/care/fertility-ivf-support">fertility and IVF acupuncture support at SpringWell</Link>. Acupuncture complements—not replaces—the medical care and instructions provided by your fertility team.</p>
            </section>

            <section id="treatment">
              <h2>What Fertility Acupuncture Feels Like</h2>
              <p>After the assessment, you will rest comfortably while very fine, sterile, single-use needles are placed at selected points. Points may be located on the arms, legs, abdomen, head, or ears depending on your needs and the stage of care.</p>
              <p>Most patients describe the insertion as mild. You may notice a brief pinch, heaviness, warmth, tingling, or a dull sensation. Let your acupuncturist know at any time if you are uncomfortable. Once the needles are in place, you will usually rest quietly for approximately 20–30 minutes.</p>
            </section>

            <section id="plan">
              <h2>Your Fertility Acupuncture Care Plan and Next Steps</h2>
              <p>At the end of the visit, we discuss what was observed, what to notice afterward, and a reasonable follow-up schedule. Frequency depends on your goals, menstrual timing, symptoms, fertility-clinic calendar, and how much preparation time is available.</p>
              <p>Someone preparing several weeks before an IVF cycle may follow a different schedule from someone approaching retrieval or transfer. The plan can be adjusted when medication dates, monitoring results, or procedures change.</p>
              <div className={styles.articleCta}>
                <div>
                  <p className="eyebrow">Fertility acupuncture in Herndon</p>
                  <h2>Start with a plan built around your timeline.</h2>
                  <p>Schedule an initial consultation at SpringWell Acupuncture to discuss your goals and where you are in your fertility journey.</p>
                </div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></a>
              </div>
            </section>

            <section id="questions">
              <h2>Frequently Asked Questions About Fertility Acupuncture in Herndon</h2>
              {faqs.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
              <p><strong>How many fertility acupuncture visits will I need?</strong><br />There is no single schedule for everyone. Recommendations depend on your goals, symptoms, fertility timeline, and response to care.</p>
              <p>SpringWell Acupuncture is located at <a href={site.directionsUrl} target="_blank" rel="noreferrer">{site.address}</a>. You can also review information for <Link href="/new-patients">new patients</Link> or <Link href="/contact">contact the clinic</Link> before scheduling.</p>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
