import { ArrowIcon } from "../../components/icons";
import Link from "next/link";
import { site } from "../../config/site";
import { painConditions } from "./pain-condition-data";
import { PainHashOpener } from "./pain-hash-opener";
import styles from "./pain-condition-accordion.module.css";

export function PainConditionAccordion() {
  return <section className={`section-pad care-conditions-section ${styles.section}`} aria-labelledby="pain-conditions-title">
    <PainHashOpener />
    <div className="container">
      <div className="care-section-heading">
        <p className="eyebrow">Pain conditions we treat</p>
        <h2 id="pain-conditions-title">Explore pain care in one place.</h2>
        <p>Open a topic to review common symptoms, our treatment approach, and research context—all without leaving this page.</p>
      </div>
      <div className={styles.list}>
        {painConditions.map((condition, index) => <details className={styles.item} id={condition.slug} key={condition.slug}>
          <summary>
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.summaryCopy}><strong>{condition.title}</strong><small>{condition.summary}</small></span>
            <span className={styles.toggle} aria-hidden="true">+</span>
          </summary>
          <div className={styles.body}>
            <div className={styles.intro}>
              <div><p className="eyebrow">An individualized starting point</p><h3>{condition.overviewTitle}</h3></div>
              <div>{condition.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
            <div className={styles.detailGrid}>
              <section><h4>Common symptoms and patterns</h4><ul>{condition.symptoms.map((symptom) => <li key={symptom}>{symptom}</li>)}</ul></section>
              <section><h4>Personalized treatment focus</h4><ol>{condition.treatmentFocus.map((item) => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ol></section>
            </div>
            <div className={styles.actions}>
              <div><span>Research in context</span><p>{condition.evidence.text}</p><a className="text-link" href={condition.evidence.url} target="_blank" rel="noreferrer">{condition.evidence.label} <ArrowIcon /></a></div>
              <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book your first visit <ArrowIcon /></a>
            </div>
          </div>
        </details>)}
      </div>
      <nav className="button-row" aria-label="Related pain treatment resources"><Link className="text-link" href="/blog/acupuncture-migraine-meta-analysis-2025">Read the migraine acupuncture research guide <ArrowIcon /></Link><Link className="text-link" href="/services/acupuncture">How acupuncture works for pain care <ArrowIcon /></Link><Link className="text-link" href="/services/cupping">Explore cupping for muscle tension <ArrowIcon /></Link></nav>
    </div>
  </section>;
}
