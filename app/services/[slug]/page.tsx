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
import faqStyles from "./service-faq.module.css";
import { ServiceExplainerCards } from "./service-explainer-cards";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const serviceSeo: Record<string, { title: string; description: string }> = {
  acupuncture: {
    title: "Acupuncture in Herndon, VA",
    description:
      "Acupuncture in Herndon, VA for women’s health, fertility, perimenopause, pain, stress, sleep, and digestive concerns at SpringWell Acupuncture.",
  },
  cupping: {
    title: "Cupping Therapy in Herndon, VA",
    description:
      "Cupping therapy in Herndon, VA for muscle tension, soreness, stiffness, and movement-related discomfort at SpringWell Acupuncture.",
  },
  "herbal-medicine": {
    title: "Chinese Herbal Medicine in Herndon, VA",
    description:
      "Chinese herbal medicine in Herndon, VA with careful formula selection, medication review, and safety screening at SpringWell Acupuncture.",
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const seo = serviceSeo[service.slug] ?? {
    title: `${service.title} in Herndon, VA`,
    description: service.summary,
  };
  const canonicalUrl = `${site.url}/services/${service.slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${seo.title} | SpringWell Acupuncture`,
      description: seo.description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.title} | SpringWell Acupuncture`,
      description: seo.description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const isAcupuncture = service.slug === "acupuncture";
  const heroImage = isAcupuncture ? "/images/acupuncture-treatment-hero.png" : service.image;
  const pageTitle = isAcupuncture ? "Acupuncture in Herndon, VA" : service.title;
  const seo = serviceSeo[service.slug] ?? {
    title: `${service.title} in Herndon, VA`,
    description: service.summary,
  };
  const canonicalUrl = `${site.url}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: seo.title,
    serviceType: service.title,
    description: seo.description,
    url: canonicalUrl,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Herndon", addressRegion: "VA" },
      { "@type": "City", name: "Reston", addressRegion: "VA" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className={`service-page-hero service-hero-${service.slug} ${heroStyles.hero}`}>
        <div className={`${heroStyles.background} ${heroStyles[`${service.slug.replace("-", "")}Background`] ?? ""}`} aria-hidden="true">
          <Image src={heroImage} alt="" fill priority sizes="100vw" unoptimized />
        </div>
        <div className={heroStyles.overlay} aria-hidden="true" />
        <div className={`container service-page-hero-grid ${heroStyles.grid}`}>
          <div className={`service-page-hero-copy ${heroStyles.copy}`}>
            <Link className={`service-back-link ${heroStyles.back}`} href="/services">Services</Link>
            <p className={`eyebrow ${heroStyles.eyebrow}`}>{service.eyebrow}</p>
            <h1 className={heroStyles.title}>{pageTitle}</h1>
            <p className={heroStyles.summary}>{service.summary}</p>
            <a className={`button button-light ${heroStyles.button}`} href={site.bookingUrl} target="_blank" rel="noreferrer">
              BOOK NOW <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad service-intro-statement">
        <div className="container service-intro-statement-inner">
          <p className="eyebrow">{isAcupuncture ? "Acupuncture care in Herndon" : service.eyebrow}</p>
          <h2>{service.introTitle}</h2>
          <p>{service.introCopy}</p>
        </div>
      </section>

      {!isAcupuncture && <MechanismAnimation kind={service.slug} />}

      <ServiceExplainerCards service={service} />

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

      <section className={faqStyles.section} aria-labelledby="service-faq-title">
        <div className="container">
          <div className={faqStyles.heading}>
            <p className="eyebrow">Knowledge</p>
            <h2 id="service-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className={faqStyles.list}>
            {service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">⌄</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <TcmPerspective />

      <BottomCTA />
    </PageShell>
  );
}
