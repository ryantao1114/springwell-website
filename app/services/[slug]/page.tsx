import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, CheckIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { getService, services } from "../service-data";
import { MechanismAnimation } from "../mechanism-animation";
import { TcmPerspective } from "../tcm-perspective";
import { site } from "../../config/site";
import heroStyles from "./acupuncture-hero.module.css";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.summary} Explore common care areas, what to expect, and safety information at Springwell Acupuncture in Northern Virginia.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const isAcupuncture = service.slug === "acupuncture";

  return (
    <PageShell>
      <section className={`service-page-hero service-hero-${service.slug} ${isAcupuncture ? heroStyles.hero : ""}`}>
        {isAcupuncture && (
          <>
            <div className={heroStyles.background} aria-hidden="true">
              <Image
                src="/images/acupuncture-hero-background.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                unoptimized
              />
            </div>
            <div className={heroStyles.overlay} aria-hidden="true" />
          </>
        )}
        <div className={`container service-page-hero-grid ${isAcupuncture ? heroStyles.grid : ""}`}>
          <div className={`service-page-hero-copy ${isAcupuncture ? heroStyles.copy : ""}`}>
            <Link className={`service-back-link ${isAcupuncture ? heroStyles.back : ""}`} href="/services">Services</Link>
            <p className={`eyebrow ${isAcupuncture ? heroStyles.eyebrow : ""}`}>{service.eyebrow}</p>
            <h1 className={isAcupuncture ? heroStyles.title : undefined}>{service.title}</h1>
            <p className={isAcupuncture ? heroStyles.summary : undefined}>{service.summary}</p>
            {isAcupuncture ? (
              <a className={`button button-light ${heroStyles.button}`} href={site.bookingUrl} target="_blank" rel="noreferrer">
                BOOK NOW <ArrowIcon />
              </a>
            ) : (
              <a className="button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an appointment</a>
            )}
          </div>
          {!isAcupuncture && (
            <div className="service-page-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.image} alt={service.imageAlt} />
            </div>
          )}
        </div>
      </section>

      <section className="section-pad service-intro-statement">
        <div className="container service-intro-statement-inner">
          <p className="eyebrow">{service.eyebrow}</p>
          <h2>{service.introTitle}</h2>
          <p>{service.introCopy}</p>
        </div>
      </section>

      <MechanismAnimation kind={service.slug} />

      {service.slug === "acupuncture" && <section className="section-pad expected-results-section" aria-labelledby="expected-results-title">
        <div className="container expected-results-grid">
          <div>
            <p className="eyebrow">What you can expect</p>
            <h2 id="expected-results-title">Expected Results</h2>
            <p>Relief is often noticed during or after the first session, while symptoms may gradually change with each visit. Because tight or restricted muscles can be more vulnerable to strain, regular acupuncture may help address muscle tension and soreness as part of a broader plan for preventing recurring pain and injury.</p>
          </div>
          <div className="expected-results-detail">
            <p className="eyebrow">Treatment frequency</p>
            <h3>A plan that follows your condition.</h3>
            <p>Frequency depends on the severity and duration of the condition. Some chronic concerns benefit from ongoing maintenance visits, while others may need a shorter course of care.</p>
          </div>
        </div>
      </section>}

      <section className="section-pad service-explainer-section">
        <div className="container service-explainer-grid">
          <article><span>01</span><p className="eyebrow">{service.primaryLabel}</p><p>{service.primaryCopy}</p></article>
          <article><span>02</span><p className="eyebrow">{service.visitLabel}</p><p>{service.visitCopy}</p></article>
          <article className="service-safety-card"><span>03</span><p className="eyebrow">{service.safetyLabel}</p><p>{service.safetyCopy}</p></article>
        </div>
      </section>

      <section className="section-pad service-care-detail-section">
        <div className="container service-care-detail-grid">
          <div>
            <p className="eyebrow">Common care areas</p>
            <h2>Where {service.title} May Fit Into Your Care</h2>
            <p className="service-care-detail-note">{service.clinicalNote}</p>
          </div>
          <ul className="service-care-detail-list">
            {service.careAreas.map((area) => (
              <li key={area}><CheckIcon /> <span>{area}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad service-faq-section" aria-labelledby="service-faq-title">
        <div className="container service-faq-grid">
          <div>
            <p className="eyebrow">Questions about {service.title.toLowerCase()}</p>
            <h2 id="service-faq-title">A clearer place to begin.</h2>
            <p>Every treatment is discussed with attention to your history, comfort, and goals. These are a few practical questions patients often ask before booking.</p>
          </div>
          <div className="service-faq-list">
            {service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">＋</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <TcmPerspective />

      <BottomCTA />
    </PageShell>
  );
}
