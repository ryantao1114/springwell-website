import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/renjinming-dai-bioengineering-informed-acupuncture-publication";
const title = "Celebrating Renjinming Dai’s Publication in Medical Acupuncture";
const seoTitle = "Renjinming Dai in Medical Acupuncture | SpringWell Herndon";
const description = "SpringWell Acupuncture in Herndon celebrates Renjinming Dai’s publication on bioengineering, acupuncture education, and better clinical measurement.";
const paperUrl = "https://journals.sagepub.com/doi/abs/10.1177/19336586261494913";
const journalUrl = "https://medicalacupuncture.org/for-physicians/journal/";
const portrait = "/images/provider-renjinming-2026.webp";
const published = "2026-10-03T23:15:00-04:00";

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description,
  alternates: { canonical: slug },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title, description, type: "article", url: slug,
    publishedTime: published,
    authors: ["SpringWell Acupuncture"],
    section: "Research & evidence",
    images: [{ url: portrait, alt: "Renjinming Dai, licensed acupuncturist at SpringWell Acupuncture in Herndon" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [portrait] },
};

export default function PublicationArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: new URL(portrait, site.url).toString(),
    datePublished: published,
    dateModified: published,
    inLanguage: "en-US",
    articleSection: "Research & evidence",
    author: { "@type": "Organization", name: "SpringWell Acupuncture", url: site.url },
    publisher: { "@type": "MedicalBusiness", name: "SpringWell Acupuncture", url: site.url },
    mainEntityOfPage: new URL(slug, site.url).toString(),
    about: { "@type": "Person", name: "Renjinming Dai", url: new URL("/about#provider", site.url).toString(), jobTitle: "Licensed Acupuncturist" },
    citation: {
      "@type": "ScholarlyArticle",
      headline: "Toward Bioengineering-Informed Acupuncture",
      datePublished: "2026-09-30",
      isPartOf: { "@type": "Periodical", name: "Medical Acupuncture" },
      identifier: "10.1177/19336586261494913",
      url: paperUrl,
    },
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Research & evidence", item: new URL("/blog#research", site.url).toString() },
      { "@type": "ListItem", position: 3, name: title, item: new URL(slug, site.url).toString() },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbs]) }} />
      <article className={styles.article}>
        <header className={styles.articleHero}>
          <div className={"container " + styles.articleHeroGrid}>
            <div className={styles.articleHeroCopy}>
              <Link className={styles.backLink} href="/blog#research">Research &amp; evidence</Link>
              <p className="eyebrow">Special news · Publication milestone</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>Our Herndon acupuncturist brings her clinical experience and biomedical engineering background to an international journal. We’re proud to celebrate her achievement.</p>
              <div className={styles.articleByline}>
                <span>By SpringWell Acupuncture</span>
                <time dateTime={published}>October 3, 2026</time>
                <span>3 min read</span>
              </div>
            </div>
            <div className={styles.articleHeroImage}>
              <Image src={portrait} alt="Renjinming Dai, licensed acupuncturist at SpringWell Acupuncture in Herndon, Virginia" fill priority unoptimized sizes="(max-width: 760px) 100vw, 42vw" style={{ objectPosition: "center 25%" }} />
            </div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout} style={{ gridTemplateColumns: "minmax(0, 780px)" }}>
          <div className={styles.articleBody}>
            <p className={styles.lead}>Congratulations to Renjinming Dai, our licensed acupuncturist at SpringWell, on the publication of <em>Toward Bioengineering-Informed Acupuncture</em> in <em>Medical Acupuncture</em>.</p>
            <p>Renjinming is the paper’s first author. Published on September 30, 2026, it draws on her training in Chinese medicine and biomedical engineering to address a practical question: how can acupuncture keep pace with advances in technology while retaining the clinical knowledge at its core?</p>
            <p><em>Medical Acupuncture</em> is the <a href={journalUrl} target="_blank" rel="noreferrer">official peer-reviewed journal of the American Academy of Medical Acupuncture</a>. It brings clinical practice, research, and education to an international readership. Renjinming’s publication places her work within this professional exchange and marks an important achievement for our Herndon clinic.</p>

            <section id="paper">
              <h2>What the article proposes</h2>
              <p>The paper calls for practical bioengineering education to support today’s acupuncture practice. As electrical stimulation, wearable sensors, and digital records become more common, practitioners need a clear understanding of how these tools work and how to evaluate the information they provide.</p>
              <ul>
                <li><strong>Better technical training.</strong> Teach the essentials of stimulation settings, device safety, sensors, and data interpretation alongside traditional acupuncture.</li>
                <li><strong>Clearer treatment records.</strong> Record electrical settings, placement, duration, and patient tolerance so clinicians can compare approaches and researchers can reproduce methods.</li>
                <li><strong>More useful measures of progress.</strong> Combine patients’ reports of pain, sleep, and function with appropriate measurements of movement, muscle activity, or other physiological changes.</li>
              </ul>
              <p>The article also examines early laboratory research on biomaterials and microneedles, pointing to questions for future study. Its immediate priorities are practical: better education, consistent documentation, and outcomes that matter to patients.</p>
              <blockquote>“Real precision comes from clear documentation, transparent methods, reproducible protocols, and meaningful outcomes.”</blockquote>
            </section>

            <section id="springwell">
              <h2>What this means for SpringWell</h2>
              <p>This publication gives SpringWell a direct place in the academic discussion about acupuncture’s future. Through Renjinming’s work, the experience of a community practitioner reaches colleagues across acupuncture, medicine, and bioengineering.</p>
              <p>That connection is central to our clinic. Renjinming brings years of Chinese medicine training, clinical experience, and a U.S. master’s degree in biomedical engineering to her work. Her publication shows how those perspectives can inform the profession’s approach to education, treatment documentation, and research.</p>
              <p>For patients in Herndon, Reston, and across Northern Virginia, this achievement speaks to the depth of professional engagement behind SpringWell. It strengthens our academic presence and creates opportunities to exchange ideas with clinicians and researchers who share our interest in advancing acupuncture care.</p>
              <p><strong>Congratulations, Renjinming.</strong> We are proud of your contribution and the dedication it represents. Thank you to our patients and colleagues for being part of this chapter at SpringWell.</p>
              <p><Link href="/about#provider">Meet Renjinming Dai</Link> and learn about her approach to <Link href="/services/acupuncture">acupuncture care in Herndon</Link>.</p>
            </section>

            <section className={styles.references} id="reference">
              <h2>Read the publication</h2>
              <p><em>Toward Bioengineering-Informed Acupuncture.</em> <em>Medical Acupuncture.</em> Published online September 30, 2026. DOI: 10.1177/19336586261494913.</p>
              <div className={styles.referenceLinks}>
                <a href={paperUrl} target="_blank" rel="noreferrer">View the journal article</a>
                <a href={journalUrl} target="_blank" rel="noreferrer">About Medical Acupuncture</a>
              </div>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
