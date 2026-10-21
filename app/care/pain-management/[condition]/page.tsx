import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "../../../components/icons";
import { PageShell } from "../../../components/site-shell";
import { site } from "../../../config/site";
import { painConditionBySlug, painConditions } from "../pain-condition-data";
import styles from "./pain-condition.module.css";

type Props = { params: Promise<{ condition: string }> };

export function generateStaticParams() {
  return painConditions.map((condition) => ({ condition: condition.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { condition: slug } = await params;
  const condition = painConditionBySlug[slug];
  if (!condition) return {};
  const canonical = `/care/pain-management/${condition.slug}`;
  return {
    title: condition.seoTitle,
    description: condition.description,
    alternates: { canonical },
    openGraph: { title: `${condition.seoTitle} | ${site.name}`, description: condition.description, url: canonical, type: "website", images: [{ url: condition.image, alt: condition.imageAlt }] },
    twitter: { card: "summary_large_image", title: `${condition.seoTitle} | ${site.name}`, description: condition.description, images: [condition.image] },
  };
}

export default async function PainConditionPage({ params }: Props) {
  const { condition: slug } = await params;
  const condition = painConditionBySlug[slug];
  if (!condition) notFound();
  const related = painConditions.filter((item) => item.slug !== condition.slug).slice(0, 3);
  const canonical = new URL(`/care/pain-management/${condition.slug}`, site.url).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": canonical, url: canonical, name: condition.seoTitle, description: condition.description, isPartOf: { "@id": `${site.url}/#website` } },
      { "@type": "Service", name: condition.title, serviceType: condition.title, provider: { "@type": "LocalBusiness", name: site.name, url: site.url }, areaServed: ["Herndon, VA", "Reston, VA", "Northern Virginia"], url: canonical },
      { "@type": "FAQPage", mainEntity: condition.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Pain Management", item: `${site.url}/care/pain-management` },
        { "@type": "ListItem", position: 3, name: condition.menuTitle, item: canonical },
      ] },
    ],
  };

  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/care/pain-management">Pain Management</Link><span>/</span><span>{condition.menuTitle}</span></nav>
          <p className="eyebrow">{condition.eyebrow}</p>
          <h1>{condition.title} in Herndon, VA</h1>
          <p className={styles.lead}>{condition.summary}</p>
          <div className={styles.heroActions}><a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></a><a className="text-link" href={site.phoneHref}>Call {site.phone} <ArrowIcon /></a></div>
        </div>
        <div className={styles.heroImage}><Image src={condition.image} alt={condition.imageAlt} fill priority quality={100} sizes="(max-width: 860px) 100vw, 46vw" /></div>
      </div>
    </section>

    <section className={`section-pad ${styles.overview}`}>
      <div className={`container ${styles.overviewGrid}`}>
        <div><p className="eyebrow">An individualized starting point</p><h2>{condition.overviewTitle}</h2></div>
        <div className={styles.overviewCopy}>{condition.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </section>

    <section className={`section-pad ${styles.symptoms}`}>
      <div className="container">
        <div className={styles.sectionHeading}><p className="eyebrow">Common reasons patients seek care</p><h2>Symptoms and patterns we discuss.</h2><p>These examples are not a diagnosis. Your visit considers your history, current care, and any symptoms that need medical evaluation.</p></div>
        <ul className={styles.symptomGrid}>{condition.symptoms.map((symptom) => <li key={symptom}><span aria-hidden="true">✓</span>{symptom}</li>)}</ul>
      </div>
    </section>

    <section className={`section-pad ${styles.focus}`}>
      <div className="container">
        <div className={styles.sectionHeading}><p className="eyebrow">Your treatment plan</p><h2>How we approach {condition.menuTitle.toLowerCase()}.</h2></div>
        <div className={styles.focusGrid}>{condition.treatmentFocus.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <aside className={styles.coordination}><strong>Safety and coordinated care</strong><p>{condition.careCoordination}</p></aside>
      </div>
    </section>

    <section className={`section-pad ${styles.evidence}`}>
      <div className={`container ${styles.evidenceInner}`}><div><p className="eyebrow">Research in context</p><h2>Evidence guides the conversation—not a guarantee.</h2></div><div><p>{condition.evidence.text}</p><a className="text-link" href={condition.evidence.url} target="_blank" rel="noreferrer">{condition.evidence.label} <ArrowIcon /></a></div></div>
    </section>

    <section className={`section-pad ${styles.faq}`}>
      <div className={`container ${styles.faqGrid}`}><div><p className="eyebrow">Frequently asked questions</p><h2>Before your first visit.</h2></div><div>{condition.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></div>
    </section>

    <section className={`section-pad ${styles.related}`}>
      <div className="container"><div className={styles.relatedHeading}><div><p className="eyebrow">Explore related pain care</p><h2>Other treatment guides.</h2></div><Link className="text-link" href="/care/pain-management">View pain management overview <ArrowIcon /></Link></div><div className={styles.relatedGrid}>{related.map((item) => <Link href={`/care/pain-management/${item.slug}`} key={item.slug}><span>{item.eyebrow}</span><h3>{item.menuTitle}</h3><p>{item.description}</p><strong>Explore this condition <ArrowIcon /></strong></Link>)}</div></div>
    </section>

    <section className={styles.cta}><div className="container"><p className="eyebrow light">SpringWell Acupuncture · Herndon, Virginia</p><h2>Ready to talk about your pain pattern?</h2><p>Schedule an individualized visit serving Herndon, Reston, and Northern Virginia.</p><a className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <ArrowIcon /></a></div></section>
  </PageShell>;
}
