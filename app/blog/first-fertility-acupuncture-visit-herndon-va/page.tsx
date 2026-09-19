import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/first-fertility-acupuncture-visit-herndon-va";
const title = "What to Expect at Your First Fertility Acupuncture Visit at SpringWell Acupuncture in Herndon, VA";
const description = "A step-by-step guide to your first fertility acupuncture visit at SpringWell Acupuncture in Herndon, including consultation, treatment, IVF timing, and follow-up planning.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fertility acupuncture Herndon VA",
    "first fertility acupuncture visit",
    "IVF acupuncture Herndon",
    "fertility acupuncture Northern Virginia",
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
};

export default function FirstFertilityAcupunctureVisitArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: new URL("/images/fertility-support.webp", site.url).toString(),
    datePublished: "2026-09-19",
    dateModified: "2026-09-19",
    author: { "@type": "Person", name: "Renjinming Dai, L.Ac.", jobTitle: "Virginia Licensed Acupuncturist" },
    publisher: { "@type": "MedicalBusiness", name: site.name },
    mainEntityOfPage: new URL(slug, site.url).toString(),
    about: ["Fertility acupuncture", "IVF support", "Patient education", "Herndon Virginia"],
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
              <p className={styles.articleDeck}>A calm, step-by-step look at the consultation, treatment, and personalized plan you can expect during your first appointment.</p>
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
            <p className={styles.lead}>Your first fertility acupuncture visit should feel clear, unhurried, and centered on where you are in your reproductive-health journey.</p>
            <p>Whether you are trying to conceive naturally, preparing for IUI or IVF, in an active treatment cycle, or looking for support after a previous cycle, the first visit is used to understand your history and build an individualized plan. It is not a one-size-fits-all appointment.</p>

            <section id="before">
              <h2>Before Your First Visit</h2>
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
              <h2>We Begin With a Detailed Conversation</h2>
              <p>Your first appointment includes time to discuss your main goals and the part of the fertility process you are currently navigating. The conversation may include cycle length and regularity, menstrual flow and discomfort, ovulation patterns, fertility diagnoses, ovarian stimulation, retrieval or transfer timing, and how you are feeling physically and emotionally.</p>
              <p>We also look beyond the reproductive system. Sleep, energy, headaches, muscle tension, temperature changes, appetite, digestion, and stress can influence how your care is planned from visit to visit.</p>
              <blockquote>The goal is to understand your whole pattern—not simply your fertility label.</blockquote>
            </section>

            <section id="assessment">
              <h2>Your Individualized Assessment</h2>
              <p>The assessment combines your health history and current symptoms with traditional Chinese medicine observations such as the tongue and pulse. These findings help guide point selection and may change as your menstrual cycle or fertility-treatment timeline changes.</p>
              <p>If you are receiving IVF care, the approach used during ovarian stimulation may differ from the approach used around retrieval, recovery, or embryo transfer. Acupuncture complements—not replaces—the medical care and instructions provided by your fertility team.</p>
            </section>

            <section id="treatment">
              <h2>What the Acupuncture Treatment Feels Like</h2>
              <p>After the assessment, you will rest comfortably while very fine, sterile, single-use needles are placed at selected points. Points may be located on the arms, legs, abdomen, head, or ears depending on your needs and the stage of care.</p>
              <p>Most patients describe the insertion as mild. You may notice a brief pinch, heaviness, warmth, tingling, or a dull sensation. Let your acupuncturist know at any time if you are uncomfortable. Once the needles are in place, you will usually rest quietly for approximately 20–30 minutes.</p>
            </section>

            <section id="plan">
              <h2>Planning the Next Steps</h2>
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
              <h2>Common Questions Before a First Visit</h2>
              <p><strong>Do I need to be in an IVF cycle?</strong><br />No. Patients may begin while trying to conceive naturally, before an IUI or IVF cycle, or during active fertility treatment.</p>
              <p><strong>Can acupuncture be coordinated with my fertility clinic?</strong><br />Yes. Bring the dates you know, and update us when your monitoring or procedure schedule changes. Your fertility specialist’s instructions remain the priority.</p>
              <p><strong>Will the first visit include treatment?</strong><br />In most cases, the initial consultation and assessment are followed by acupuncture during the same appointment, unless there is a reason to postpone treatment.</p>
              <p><strong>How many visits will I need?</strong><br />There is no single schedule for everyone. Recommendations depend on your goals, symptoms, fertility timeline, and response to care.</p>
              <p className={styles.disclaimer}><strong>Medical note:</strong> Acupuncture is supportive care and does not guarantee conception, embryo development, pregnancy, or live birth. It should not delay evaluation or treatment recommended by your physician or fertility specialist.</p>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
