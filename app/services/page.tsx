import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";
import { services } from "./service-data";

export const metadata: Metadata = {
  title: "Acupuncture Services in Herndon, VA",
  description:
    "Explore personalized acupuncture, traditional fire cupping, and Chinese herbal medicine at SpringWell Acupuncture in Herndon, Virginia.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Our services"
        title="Three therapies. One individualized plan."
        text="Explore the treatments available at SpringWell. Each service has its own page with a clear explanation of the clinical approach, what a visit may involve, and safety considerations."
        image="/images/service-acupuncture.png"
      />

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
          <nav className="button-row" aria-label="Explore acupuncture care by concern">
            <Link className="text-link" href="/care/fertility-ivf-support">Fertility &amp; IVF acupuncture <ArrowIcon /></Link>
            <Link className="text-link" href="/care/womens-health">Women’s health acupuncture <ArrowIcon /></Link>
            <Link className="text-link" href="/care/pain-management">TMJ &amp; pain relief acupuncture <ArrowIcon /></Link>
            <Link className="text-link" href="/care/stress-sleep">Stress &amp; sleep acupuncture <ArrowIcon /></Link>
            <Link className="text-link" href="/book">Book an acupuncture appointment <ArrowIcon /></Link>
          </nav>
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
