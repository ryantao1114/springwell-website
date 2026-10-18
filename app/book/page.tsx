import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckIcon } from "../components/icons";
import { InteriorHero, PageShell } from "../components/site-shell";
import { SafeContactOptions } from "./appointment-form";
import { SquareAppointmentsEmbed } from "./square-appointments-embed";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: "Book an Acupuncture Appointment in Herndon, VA",
  description:
    "Book an acupuncture appointment with SpringWell Acupuncture in Herndon, VA for fertility, women’s health, TMJ and pain, stress, or sleep support.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Book an appointment"
        title="Book an acupuncture appointment in Herndon, VA."
        text="View current availability and schedule through our secure Square booking calendar. Call us if you need help choosing the right visit."
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
            <div className="online-booking-block">
              <p className="eyebrow">Book online</p>
              <h2>Choose a time that works for you.</h2>
              <p className="booking-intro">
                Use the secure Square booking calendar to view current availability and request an appointment.
              </p>
              <SquareAppointmentsEmbed />
            </div>
            <div className="booking-form-divider" aria-hidden="true"><span>Need help booking?</span></div>
            <SafeContactOptions />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
