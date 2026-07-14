import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckIcon } from "../components/icons";
import { InteriorHero, PageShell } from "../components/site-shell";
import { AppointmentForm } from "./appointment-form";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: "Request an Acupuncture Appointment",
  description:
    "Request an appointment with Springwell Acupuncture for women’s health, fertility and IVF support, pain management, stress, sleep, or digestive care.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Request an appointment"
        title="Tell us how we can support you."
        text="Share a few details below. We’ll follow up to answer questions, confirm availability, and help plan your first visit."
        image="/images/acupuncture-treatment-hero.png"
      />
      <section className="section-pad booking-section">
        <div className="container booking-grid">
          <div className="booking-aside">
            <div className="contact-image">
              <Image src="/images/acupuncture-treatment-hero.png" alt="Fine acupuncture needles prepared for treatment" fill sizes="(max-width: 860px) 100vw, 38vw" />
            </div>
            <p className="eyebrow">Before you book</p>
            <h2>Your first visit, made simple.</h2>
            <div className="booking-points">
              <div><CheckIcon /><p><strong>Start with your goals</strong><br />We’ll review what brings you in and what you hope will change.</p></div>
              <div><CheckIcon /><p><strong>Plan enough time</strong><br />Initial appointments are approximately 60–75 minutes.</p></div>
              <div><CheckIcon /><p><strong>Know the next step</strong><br />We’ll confirm scheduling and current payment options before your visit.</p></div>
            </div>
            <div className="contact-card">
              <span>Contact details</span>
              <strong><a href={`mailto:${site.email}`}>{site.email}</a></strong>
              <p>Northern Virginia · Exact location shared before your visit</p>
            </div>
            <p className="small-copy">Looking for more information first? <Link href="/faq">Read common questions.</Link></p>
          </div>
          <div className="form-card">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
