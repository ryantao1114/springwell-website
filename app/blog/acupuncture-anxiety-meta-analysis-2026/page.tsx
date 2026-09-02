import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/acupuncture-anxiety-meta-analysis-2026";
const title = "Can Acupuncture Support Anxiety Symptoms? What a 2026 Meta-Analysis Found";
const description = "A patient friendly review of a 2026 meta analysis on manual acupuncture for anxiety symptoms, including short term findings, follow up, safety, and limitations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "acupuncture anxiety Herndon",
    "stress acupuncture Herndon",
    "acupuncture anxiety meta analysis",
    "stress support Northern Virginia",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-08-25",
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: "/images/home-stress-sleep-upload.webp", alt: "Stress and anxiety acupuncture research update from Springwell Acupuncture" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/home-stress-sleep-upload.webp"],
  },
};

const pubMedUrl = "https://pubmed.ncbi.nlm.nih.gov/41460176/";
const doiUrl = "https://doi.org/10.1002/jclp.70079";

export default function AnxietyMetaAnalysisArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: new URL("/images/home-stress-sleep-upload.webp", site.url).toString(),
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    author: { "@type": "Person", name: "Renjinming Dai, L.Ac.", jobTitle: "Virginia Licensed Acupuncturist" },
    publisher: { "@type": "MedicalBusiness", name: "Springwell Acupuncture", url: site.url },
    mainEntityOfPage: new URL(slug, site.url).toString(),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <header className={styles.articleHero}>
          <div className={"container " + styles.articleHeroGrid}>
            <div className={styles.articleHeroCopy}>
              <Link className={styles.backLink} href="/learn">← SpringWell Learning Center</Link>
              <p className="eyebrow">Research update · Stress &amp; anxiety</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>What the study found in the short term, what happened at follow up, and why anxiety care should remain coordinated and individualized.</p>
              <div className={styles.articleByline}>
                <span>By Renjinming Dai, L.Ac.</span>
                <time dateTime="2026-08-25">August 25, 2026</time>
                <span>8 min read</span>
              </div>
            </div>
            <div className={styles.articleHeroImage}>
              <Image src="/images/home-stress-sleep-upload.webp" alt="A calm setting representing stress and anxiety support" fill priority sizes="(max-width: 860px) 100vw, 42vw" />
            </div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#study">What researchers studied</a>
              <a href="#results">Key findings</a>
              <a href="#follow-up">Follow up and safety</a>
              <a href="#limitations">Important limitations</a>
              <a href="#patients">What it means for patients</a>
              <a href="#reference">Research reference</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>Stress and anxiety are related, but they are not interchangeable. Stress may be a response to a situation, while persistent anxiety symptoms can continue beyond an immediate stressor and may require dedicated mental health care.</p>
            <p>A 2026 systematic review and meta analysis in the <em>Journal of Clinical Psychology</em> evaluated manual acupuncture for anxiety using randomized controlled trials in which anxiety was the primary outcome.</p>
            <p>The pooled results favored acupuncture in the short term, but high variability between studies and less certain follow up findings make careful interpretation essential. <a href={pubMedUrl} target="_blank" rel="noreferrer">Read the indexed abstract on PubMed</a>.</p>

            <section id="study">
              <h2>What Did the Researchers Study?</h2>
              <p>Jang and colleagues included <strong>20 randomized controlled trials with 1,462 participants</strong>. The review searched six databases for English language studies published through January 22, 2025.</p>
              <p>Eligible trials evaluated manual acupuncture against sham acupuncture, usual care, or a waiting list. Anxiety had to be the primary outcome and had to be measured with a validated scale.</p>
              <p>The authors used standardized mean differences because the included trials did not all use the same anxiety measurement tool.</p>
            </section>

            <section id="results">
              <h2>Short Term Anxiety Scores Favored Manual Acupuncture</h2>
              <p>Immediately after treatment, pooled anxiety outcomes favored manual acupuncture compared with both sham acupuncture and usual care or waiting list controls.</p>
              <div className={styles.metricGrid}>
                <div><span>Versus sham</span><strong>SMD −1.06</strong><small>95% CI −1.74 to −0.39 · I² = 94%</small></div>
                <div><span>Versus usual care</span><strong>SMD −1.35</strong><small>95% CI −2.26 to −0.44 · I² = 59%</small></div>
                <div><span>Included evidence</span><strong>20 RCTs</strong><small>1,462 participants</small></div>
              </div>
              <aside className={styles.interpretation}>
                <strong>How to read a standardized mean difference</strong>
                <p>An SMD combines results measured on different scales. It is not a percentage improvement and cannot be translated directly into a specific number of points on one anxiety questionnaire.</p>
              </aside>
              <p>The very high heterogeneity in the sham controlled analysis means the size of the reported effect varied substantially across studies. That uncertainty matters when applying the pooled estimate to an individual patient.</p>
            </section>

            <section id="follow-up">
              <h2>What Happened at Follow Up?</h2>
              <p>Compared with sham acupuncture, the pooled effect remained statistically significant at follow up: <strong>SMD −0.78</strong> with a 95% confidence interval from −1.21 to −0.35.</p>
              <p>Compared with usual care or waiting list controls, however, the follow up result was not statistically significant. The confidence interval crossed the line of no difference.</p>
              <blockquote>Short term improvement and durable long term benefit are different questions.</blockquote>
              <p>The follow-up findings support continued research into treatment duration and the schedules most likely to create lasting relief.</p>

              <h2>What Did the Review Report About Safety?</h2>
              <p>The included studies reported 79 adverse events, mainly temporary discomfort, minor bleeding, or localized pain. No severe adverse events were reported in the review.</p>
              <p>Safety still depends on appropriate screening, sterile single use needles, practitioner training, and clear communication about medications, pregnancy, bleeding risk, and relevant health conditions.</p>
            </section>

            <section id="limitations">
              <h2>How to Interpret the Findings</h2>
              <p>The meta-analysis supports acupuncture as a promising option for anxiety symptoms, especially when goals such as muscle tension, sleep, and the physical experience of stress are clearly defined.</p>
              <p>The review was limited to English language trials. Study methods varied, and the sham comparison showed very high heterogeneity. Some trials also had concerns involving allocation concealment or blinding.</p>
              <p>The authors concluded that additional research is needed to confirm long term effectiveness and standardize methods.</p>
            </section>

            <section id="patients">
              <h2>What Does This Mean for Someone Experiencing Anxiety or Stress?</h2>
              <p>Acupuncture may be considered as a supportive component of care for some people, particularly when goals are specific and progress is monitored. Examples may include muscle tension, sleep disruption, or the physical sense of remaining activated.</p>
              <p>At <strong>Springwell Acupuncture</strong>, treatment is individualized around the symptoms you are experiencing, your health history, stress patterns, sleep, muscle tension, and the response observed over time.</p>
              <div className={styles.articleCta}>
                <div>
                  <p className="eyebrow">Stress support in Herndon</p>
                  <h2>Talk through what your body has been carrying.</h2>
                  <p>Schedule a consultation to discuss whether individualized acupuncture may fit alongside your broader care plan.</p>
                </div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a consultation <ArrowIcon /></a>
              </div>
            </section>

            <section className={styles.references} id="reference">
              <h2>Research Reference</h2>
              <p>Jang A, Wenninger M, Lee H, Zheng S. <em>Acupuncture for Anxiety: A Systematic Review and Meta Analysis of Randomized Controlled Trials.</em> Journal of Clinical Psychology. 2026;82(4):479–494. DOI: 10.1002/jclp.70079.</p>
              <div className={styles.referenceLinks}>
                <a href={pubMedUrl} target="_blank" rel="noreferrer">PubMed</a>
                <a href={doiUrl} target="_blank" rel="noreferrer">DOI</a>
              </div>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
