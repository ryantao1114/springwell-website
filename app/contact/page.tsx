import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckIcon } from "../components/icons";
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
      <section className="section-pad booking-section" id="request">
        <div className="container booking-grid">
          <div className="booking-aside" id="visit-details">
            <div className="contact-image">
              <Image src="/images/chinese-medicine-consultation.jpg" alt="Traditional Chinese medicine consultation" fill sizes="(max-width: 860px) 100vw, 38vw" />
            </div>
            <p className="eyebrow">Springwell Acupuncture</p>
            <h2>Thoughtful care for the Northern Virginia community.</h2>
            <div className="booking-points">
              <div><CheckIcon /><p><strong>Service area</strong><br />Northern Virginia · appointments by request</p></div>
              <div><CheckIcon /><p><strong>Scheduling</strong><br />Use Book Online for the fastest scheduling path</p></div>
              <div><CheckIcon /><p><strong>Email</strong><br /><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
            </div>
            <div className="contact-card">
              <span>New patient visits</span>
              <strong>Approximately 60–75 minutes</strong>
              <p>Consultation, focused assessment, initial treatment, and next steps.</p>
            </div>
            <div className="contact-social-note">
              <p className="eyebrow">Stay connected</p>
              {site.socialLinks.map((social) => <a href={social.href} key={social.href} target="_blank" rel="noreferrer">{social.label} {social.handle} ↗</a>)}
            </div>
            <p className="small-copy">Want to prepare first? <Link href="/faq">Read common questions.</Link></p>
          </div>
          <div className="form-card">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
