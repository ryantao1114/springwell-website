import Link from "next/link";
import type { Metadata } from "next";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";
import { CurrencyMark } from "../components/currency-mark";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: { absolute: "Acupuncture Insurance & Pricing | Herndon, VA" },
  description: "Review acupuncture insurance and pricing at SpringWell Acupuncture in Herndon, VA, including in-network care, self-pay rates, HSA/FSA, and superbill options.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Insurance & pricing"
        title="Acupuncture Insurance & Pricing in Herndon, VA"
        text="Review in-network insurance information, transparent self-pay pricing, HSA/FSA options, and superbill support before scheduling care."
        image="/images/service-herbal-medicine.jpg"
      />

      <section className="pricing-network-strip" aria-labelledby="pricing-network-heading">
        <div className="container pricing-network-strip-inner">
          <h2 id="pricing-network-heading">Current in-network insurance</h2>
          <div className="pricing-network-mini-card">
            <span>In network</span>
            <strong>Anthem</strong>
            <p>Coverage varies by plan. Contact us to verify your acupuncture benefits.</p>
          </div>
        </div>
      </section>

      <section className="section-pad cost-section">
        <div className="container">
          <div className="cost-grid">
            <article className="cost-card featured" id="initial-visit">
              <p className="eyebrow">New patient</p>
              <h2>Initial consultation + treatment</h2>
              <strong className="cost-value"><span>Self-pay total</span><span className="currency-amount"><CurrencyMark />145</span></strong>
              <p>Approximately 60–75 minutes, including a comprehensive intake, traditional Chinese medicine assessment, first acupuncture treatment, and care planning.</p>
              <ul className="check-list single-column">
                <li><CheckIcon /> Detailed health history</li>
                <li><CheckIcon /> Traditional tongue diagnosis</li>
                <li><CheckIcon /> Traditional pulse diagnosis</li>
                <li><CheckIcon /> Individualized TCM pattern assessment</li>
                <li><CheckIcon /> Personalized first treatment</li>
                <li><CheckIcon /> Recommended next steps</li>
              </ul>
              <a className="button button-primary pricing-book-button" href={site.bookingUrl} target="_blank" rel="noreferrer">Book new patient visit <ArrowIcon /></a>
            </article>
            <article className="cost-card" id="follow-up">
              <p className="eyebrow">Returning patient</p>
              <h2>Follow-up acupuncture</h2>
              <strong className="cost-value"><span>Self-pay rate</span><span className="currency-amount"><CurrencyMark />95</span></strong>
              <p>Approximately 45–60 minutes, including a progress check, updated treatment focus, and full acupuncture session.</p>
              <ul className="check-list single-column">
                <li><CheckIcon /> Progress review</li>
                <li><CheckIcon /> Adjusted treatment plan</li>
                <li><CheckIcon /> Full acupuncture session</li>
              </ul>
              <a className="button button-primary pricing-book-button" href={site.bookingUrl} target="_blank" rel="noreferrer">Book follow-up care <ArrowIcon /></a>
            </article>
            <article className="cost-card" id="cupping">
              <p className="eyebrow">Cupping</p>
              <h2>Fire cupping</h2>
              <strong className="cost-value"><span>Self-pay · 30 minutes</span><span className="currency-amount"><CurrencyMark />50</span></strong>
              <p>A focused cupping session for muscle tightness, stiffness, and tension patterns.</p>
              <ul className="check-list single-column">
                <li><CheckIcon /> Brief health and comfort check</li>
                <li><CheckIcon /> Individualized cup placement</li>
                <li><CheckIcon /> Aftercare guidance</li>
              </ul>
              <a className="button button-primary pricing-book-button" href={site.bookingUrl} target="_blank" rel="noreferrer">Book cupping <ArrowIcon /></a>
            </article>
          </div>

          <div className="payment-note" id="insurance">
            <div>
              <p className="eyebrow">Insurance &amp; pricing</p>
              <h2>In-network Anthem care and transparent self-pay options.</h2>
            </div>
            <div className="payment-copy">
              <p className="eyebrow">Anthem insurance</p>
              <p>SpringWell Acupuncture is in network with Anthem.</p>
              <p className="eyebrow">Expanding insurance access</p>
              <p>We are actively working to join additional insurance networks and will update this page as participation becomes effective.</p>
              <p className="eyebrow">Self-pay &amp; superbills</p>
              <p>For patients whose plans are not in network—or who prefer not to use insurance—we offer transparent self-pay pricing. Detailed superbills are available upon request for possible out-of-network reimbursement.</p>
              <p className="eyebrow">HSA &amp; FSA welcome</p>
              <p>
                We gladly accept Health Savings Account (HSA) and Flexible Spending
                Account (FSA) cards for eligible services.
              </p>
              <p className="eyebrow">Individualized care</p>
              <p>
                Every visit reserves meaningful, one-on-one time and is tailored to your
                symptoms, goals, comfort, and response. Insurance participation does not
                change our commitment to thoughtful, individualized treatment.
              </p>
              <Link className="text-link" href="/contact">Ask about insurance <ArrowIcon /></Link>
            </div>
          </div>

        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
