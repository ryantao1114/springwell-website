import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { getService, services } from "../service-data";

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

  return (
    <PageShell>
      <section className="service-page-hero section-pad">
        <div className="container service-page-hero-grid">
          <div className="service-page-hero-copy">
            <Link className="service-back-link" href="/services">← All services</Link>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
          </div>
          <div className="service-page-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.imageAlt} />
            <span>{service.number}</span>
          </div>
        </div>
      </section>

      <section className="section-pad service-explainer-section">
        <div className="container service-explainer-grid">
          <article>
            <span>01</span>
            <p className="eyebrow">{service.primaryLabel}</p>
            <p>{service.primaryCopy}</p>
          </article>
          <article>
            <span>02</span>
            <p className="eyebrow">{service.visitLabel}</p>
            <p>{service.visitCopy}</p>
          </article>
          <article className="service-safety-card">
            <span>03</span>
            <p className="eyebrow">{service.safetyLabel}</p>
            <p>{service.safetyCopy}</p>
          </article>
        </div>
      </section>

      <section className="section-pad service-care-detail-section">
        <div className="container service-care-detail-grid">
          <div>
            <p className="eyebrow">Common care areas</p>
            <h2>How this service may fit into your plan.</h2>
            <p className="service-care-detail-note">{service.clinicalNote}</p>
          </div>
          <ul className="service-care-detail-list">
            {service.careAreas.map((area) => (
              <li key={area}><CheckIcon /> <span>{area}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {service.commonReasons && (
        <section className="section-pad service-reasons-section">
          <div className="container service-reasons-grid">
            <div>
              <p className="eyebrow">Common reasons patients seek cupping</p>
              <h2>When warmth and movement are part of the treatment strategy.</h2>
            </div>
            <ul>
              {service.commonReasons.map((reason) => (
                <li key={reason}><CheckIcon /> {reason}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <BottomCTA />
    </PageShell>
  );
}
