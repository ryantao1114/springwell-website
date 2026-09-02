import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/acupuncture-migraine-meta-analysis-2025";
const title = "Can Acupuncture Reduce Migraine Days? What a 2025 Meta-Analysis Found";
const description = "A patient friendly review of a 2025 meta analysis on acupuncture for migraine frequency, duration, and quality of life, with important clinical limitations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "migraine acupuncture Herndon",
    "acupuncture for headaches Herndon",
    "migraine acupuncture meta analysis",
    "pain acupuncture Northern Virginia",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-08-25",
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: "/images/home-pain-management-upload.webp", alt: "Migraine and pain acupuncture research update from Springwell Acupuncture" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/home-pain-management-upload.webp"],
  },
};

const pubMedUrl = "https://pubmed.ncbi.nlm.nih.gov/41219786/";
const doiUrl = "https://doi.org/10.1186/s13643-025-02977-y";
const fullTextUrl = "https://pmc.ncbi.nlm.nih.gov/articles/PMC12606803/";

export default function MigraineMetaAnalysisArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: new URL("/images/home-pain-management-upload.webp", site.url).toString(),
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
              <p className="eyebrow">Research update · Pain &amp; migraine</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>What the pooled results suggest, how large the differences were, and why migraine care still needs an individualized medical plan.</p>
              <div className={styles.articleByline}>
                <span>By Renjinming Dai, L.Ac.</span>
                <time dateTime="2026-08-25">August 25, 2026</time>
                <span>8 min read</span>
              </div>
            </div>
            <div className={styles.articleHeroImage}>
              <Image src="/images/home-pain-management-upload.webp" alt="Acupuncture support for migraine and pain management" fill priority sizes="(max-width: 860px) 100vw, 42vw" />
            </div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#study">What researchers studied</a>
              <a href="#results">Key findings</a>
              <a href="#meaning">How to read the results</a>
              <a href="#limitations">Important limitations</a>
              <a href="#patients">What it means for patients</a>
              <a href="#reference">Research reference</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>Migraine is more than a severe headache. Attacks can affect concentration, sleep, work, movement, and the ability to take part in daily life.</p>
            <p>A 2025 systematic review with meta analysis in <em>Systematic Reviews</em> examined whether acupuncture was associated with changes in migraine duration, attack frequency, migraine days, and quality of life.</p>
            <p>The review found favorable pooled results for several outcomes, while also identifying language restrictions and potential bias that make cautious interpretation important. <a href={pubMedUrl} target="_blank" rel="noreferrer">Read the indexed abstract on PubMed</a>.</p>

            <section id="study">
              <h2>What Did the Researchers Study?</h2>
              <p>Lu and colleagues included <strong>23 randomized controlled trials involving 2,295 participants</strong>. The literature search covered seven English and Chinese databases through May 31, 2024.</p>
              <p>The review compared acupuncture with sham acupuncture, pharmacological treatment, and waiting list controls. Outcomes included migraine duration, number of attacks, migraine days per four weeks, and migraine specific quality of life.</p>
              <p>Because different control groups answer different questions, the results should be read by comparison type rather than treated as one universal effect.</p>
            </section>

            <section id="results">
              <h2>Acupuncture Was Associated With Fewer Migraine Days and Attacks</h2>
              <p>Compared with sham acupuncture, the pooled analysis favored acupuncture for migraine duration, average attack frequency, and migraine days during a four week period.</p>
              <div className={styles.metricGrid}>
                <div><span>Migraine duration</span><strong>−4.36 h</strong><small>95% CI −8.07 to −0.64 · versus sham</small></div>
                <div><span>Migraine attacks</span><strong>−0.82</strong><small>95% CI −1.57 to −0.08 · versus sham</small></div>
                <div><span>Migraine days</span><strong>−1.38</strong><small>per 4 weeks · 95% CI −2.16 to −0.60</small></div>
              </div>
              <p>The review also reported improvements in the restrictive and emotional function subscales of the Migraine Specific Quality of Life Questionnaire compared with sham acupuncture.</p>
              <aside className={styles.interpretation}>
                <strong>How to read these numbers</strong>
                <p>A pooled mean difference describes the average difference across study groups. Individual response can vary according to migraine pattern, treatment schedule, and the comparison used in each trial.</p>
              </aside>

              <h2>Results Also Varied by the Comparison Group</h2>
              <p>Compared with waiting lists, acupuncture was associated with approximately <strong>0.80 fewer attacks</strong> and <strong>2.10 fewer migraine days per four weeks</strong>. Compared with pharmacological treatment, the clearest reported differences were in quality of life subscales.</p>
              <p>This distinction matters. A waiting list, sham procedure, and active medication are not equivalent controls, and each comparison carries a different clinical meaning.</p>
            </section>

            <section id="meaning">
              <h2>What the Study Adds to the Conversation</h2>
              <p>The review suggests acupuncture may be a reasonable component of a migraine prevention or symptom management plan for some patients. The outcomes extend beyond pain intensity and include attack burden and day to day function.</p>
              <blockquote>The useful question is how acupuncture can be personalized within a broader migraine plan.</blockquote>
              <p>A practical plan should consider migraine pattern, triggers, medication use, sleep, menstrual timing, neck or jaw tension, and the goals most important to the patient.</p>
            </section>

            <section id="limitations">
              <h2>How to Interpret the Findings</h2>
              <p>The review supports acupuncture as a promising option for reducing migraine frequency, attack burden, and disruption to daily life, with individual response shaped by the treatment plan and migraine pattern.</p>
              <p>The authors highlighted language restrictions and potential bias. The included trials also differed in acupuncture methods, treatment schedules, control groups, and follow up. These differences limit how precisely the pooled estimates can be applied to an individual patient.</p>
              <p>Further rigorous trials are needed to clarify which patients are most likely to benefit and what treatment schedules are most appropriate.</p>
            </section>

            <section id="patients">
              <h2>What Does This Mean for Someone With Migraine?</h2>
              <p>Acupuncture may be considered as an <strong>individualized migraine-prevention and symptom-support option</strong>.</p>
              <p>At <strong>Springwell Acupuncture</strong>, treatment is adapted to headache frequency, triggers, neck or jaw tension, sleep, menstrual timing, and the broader factors that may influence each episode.</p>
              <div className={styles.articleCta}>
                <div>
                  <p className="eyebrow">Pain care in Herndon</p>
                  <h2>Discuss your headache pattern and care goals.</h2>
                  <p>Schedule a consultation to see whether individualized acupuncture may fit into your broader migraine care plan.</p>
                </div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a consultation <ArrowIcon /></a>
              </div>
            </section>

            <section className={styles.references} id="reference">
              <h2>Research Reference</h2>
              <p>Lu T, Yang Y, Li J, Lu L, Liu J. <em>Acupuncture improves migraine and quality of life in patients with migraine: a systematic review with meta analysis.</em> Systematic Reviews. 2025;14(1):220. DOI: 10.1186/s13643-025-02977-y.</p>
              <div className={styles.referenceLinks}>
                <a href={pubMedUrl} target="_blank" rel="noreferrer">PubMed</a>
                <a href={doiUrl} target="_blank" rel="noreferrer">DOI</a>
                <a href={fullTextUrl} target="_blank" rel="noreferrer">Full text</a>
              </div>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
