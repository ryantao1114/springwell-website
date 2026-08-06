import type { Metadata } from "next";
import { ArrowIcon } from "../components/icons";
import { InteriorHero, PageShell } from "../components/site-shell";
import { AppointmentForm } from "../book/appointment-form";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: "Contact Springwell Acupuncture",
  description:
    "Contact Springwell Acupuncture in Northern Virginia about women’s health, fertility and IVF support, pain management, stress, sleep, and digestive care.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Contact us"
        title="Let’s find the right next step."
        text="Send an appointment request or a brief question. We’ll follow up with availability and the information you need before scheduling."
        image="/images/chinese-medicine-consultation.jpg"
      />
      <section className="section-pad contact-simple-section" id="request">
        <div className="container contact-simple-grid">
          <div className="contact-simple-info" id="visit-details">
            <p className="eyebrow">Visit Springwell</p>
            <h2>One clear place to ask a question.</h2>
            <p>Tell us what you would like to know about care, scheduling, or payment. Please do not include sensitive medical details.</p>
            <div className="contact-detail-block">
              <span className="contact-detail-label">Address</span>
              <address>{site.address}</address>
              <span className="contact-detail-label">Hours</span>
              <p>Tuesday, Thursday, Friday &amp; Sunday<br />By appointment</p>
              <span className="contact-detail-label">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <a className="button button-secondary contact-book-button" href={site.bookingUrl} target="_blank" rel="noreferrer">Book online <ArrowIcon /></a>
          </div>
          <div className="form-card contact-form-card">
            <p className="eyebrow">Have a question?</p>
            <h2>We’re here to help.</h2>
            <AppointmentForm mode="question" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
