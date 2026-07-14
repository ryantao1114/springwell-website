import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";
import { services } from "./service-data";

export const metadata: Metadata = {
  title: "Acupuncture, Fire Cupping & Herbal Medicine",
  description:
    "Explore personalized acupuncture, traditional fire cupping, and Chinese herbal medicine at Springwell Acupuncture in Northern Virginia.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Our services"
        title="Three therapies. One individualized plan."
        text="Explore the treatments available at Springwell. Each service has its own page with a clear explanation of the clinical approach, what a visit may involve, and safety considerations."
        image="/images/service-acupuncture.png"
      />

      <section className="section-pad service-overview-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Treatment modalities</p>
              <h2>Traditional care, explained clearly.</h2>
            </div>
            <p>
              Services may be used individually or combined when appropriate,
              based on your goals, health history, and response to care.
            </p>
          </div>

          <div className="service-overview-grid">
            {services.map((service) => (
              <article className="service-overview-card" key={service.slug}>
                <Link className="service-overview-image" href={`/services/${service.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.imageAlt} />
                  <span>{service.number}</span>
                </Link>
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <Link className="text-link" href={`/services/${service.slug}`}>
                  Explore {service.title} <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad service-care-map">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">What we commonly support</p>
              <h2>Start with the concern that brought you here.</h2>
            </div>
            <p>
              The service is the method. Your reason for seeking care is where
              the conversation begins.
            </p>
          </div>
          <div className="service-care-map-grid">
            {services.map((service) => (
              <article key={service.slug}>
                <p className="eyebrow">{service.title}</p>
                <ul>
                  {service.careAreas.map((area) => <li key={area}>{area}</li>)}
                </ul>
                <p className="service-care-note">{service.clinicalNote}</p>
                <Link className="text-link" href={`/services/${service.slug}`}>Read the full service guide <ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad visit-types">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Appointment options</p>
            <h2>Simple, unhurried visits.</h2>
          </div>
          <div className="visit-grid">
            <article>
              <span>New patient</span>
              <h3>Initial consultation + treatment</h3>
              <strong>60–75 min</strong>
              <p>A detailed intake, focused assessment, first treatment, and recommended next steps.</p>
            </article>
            <article>
              <span>Returning patient</span>
              <h3>Follow-up care</h3>
              <strong>45–60 min</strong>
              <p>A progress check, updated treatment focus, and care shaped around your response.</p>
            </article>
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
