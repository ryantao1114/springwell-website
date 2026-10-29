import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, PageShell } from "../components/site-shell";
import { CurrencyMark } from "../components/currency-mark";
import { site } from "../config/site";
import homeStyles from "../home-redesign.module.css";

const pricingFaqs = [
  {
    question: "Does SpringWell Acupuncture accept in-network insurance?",
    answer: "SpringWell Acupuncture participates with select in-network insurance plans for acupuncture services. Coverage and patient responsibility vary by plan, so benefits should be verified before treatment.",
  },
  {
    question: "How can I verify my acupuncture insurance benefits?",
    answer: "Contact SpringWell before your first visit and check directly with your insurance plan. We can help you understand the information needed for benefit verification, but verification is not a guarantee of payment by the insurer.",
  },
  {
    question: "What if my insurance plan is out of network?",
    answer: "You may use our transparent self-pay rates. Upon request, we can also provide a detailed superbill that you may submit to your insurer for possible out-of-network reimbursement.",
  },
  {
    question: "Can I use an HSA or FSA card for acupuncture?",
    answer: "Yes. SpringWell welcomes Health Savings Account (HSA) and Flexible Spending Account (FSA) cards for eligible acupuncture and related services.",
  },
  {
    question: "How much does acupuncture cost at SpringWell?",
    answer: "The self-pay rate is $145 for an initial consultation and acupuncture treatment and $95 for a follow-up acupuncture visit. A focused 30-minute fire-cupping session is $50.",
  },
  {
    question: "Do I need a referral or prior authorization for acupuncture?",
    answer: "Requirements depend on your insurance plan. Some plans may require a referral, authorization, visit limit, copay, coinsurance, or deductible. Confirm your plan requirements before your appointment.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Acupuncture Insurance & Pricing | Herndon, VA" },
  description: "Review acupuncture insurance and pricing at SpringWell Acupuncture in Herndon, VA, including in-network care, self-pay rates, HSA/FSA, and superbill options.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/pricing#faq`,
    mainEntity: pricingFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="pricing-page-hero">
        <div className="pricing-page-hero-media">
          <Image
            src="/images/pricing-acupuncture-hero.jpg"
            alt="Acupuncture treatment in a calm SpringWell treatment room"
            fill
            priority
            quality={100}
            unoptimized
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        </div>
        <div className="pricing-page-hero-overlay" aria-hidden="true" />
        <div className="container pricing-page-hero-content">
          <p className="eyebrow light">Insurance &amp; pricing</p>
          <h1>In-Network Acupuncture Insurance &amp; Pricing in Herndon, VA</h1>
          <p>SpringWell Acupuncture accepts select in-network insurance plans for acupuncture services. Check your insurance benefits, explore self-pay pricing, and learn about HSA/FSA payments and superbill options before your visit.</p>
        </div>
      </section>

      <section className={homeStyles.insuranceSection} aria-labelledby="pricing-insurance-plans-heading">
        <div className="container">
          <div className={homeStyles.insuranceHeading}>
            <div>
              <p className="eyebrow">Insurance plans at SpringWell</p>
              <h2 id="pricing-insurance-plans-heading">In-network care and accepted payment options.</h2>
            </div>
            <p>Insurance participation is shown below. Coverage and patient responsibility vary by plan.</p>
          </div>
          <div className={homeStyles.insuranceCards}>
            <article className={`${homeStyles.insuranceCard} ${homeStyles.insuranceCardActive}`}>
              <span className={homeStyles.insuranceStatus}>In Network</span>
              <div className={homeStyles.anthemLogoFrame}>
                <Image className={homeStyles.anthemLogo} src="/images/anthem-bcbs-logo-clean.png" alt="Anthem Blue Cross and Blue Shield" width={1448} height={400} />
              </div>
              <p>Anthem</p>
            </article>
            <article className={homeStyles.insuranceCard}>
              <span className={homeStyles.insuranceStatusSoon}>Coming Soon</span>
              <Image className={homeStyles.insuranceLogo} src="/images/insurance/carefirst-bcbs.jpg" alt="CareFirst BlueCross BlueShield" width={620} height={375} />
              <p>BlueCross BlueShield</p>
            </article>
            <article className={homeStyles.insuranceCard}>
              <span className={homeStyles.insuranceStatusSoon}>Coming Soon</span>
              <Image className={homeStyles.insuranceLogo} src="/images/insurance/united-healthcare.jpg" alt="UnitedHealthcare" width={800} height={600} />
            </article>
            <article className={homeStyles.insuranceCard}>
              <span className={homeStyles.insuranceStatusSoon}>Coming Soon</span>
              <Image className={homeStyles.insuranceLogo} src="/images/insurance/aetna.jpg" alt="Aetna" width={3150} height={863} />
            </article>
            <article className={homeStyles.insuranceCard}>
              <span className={homeStyles.insuranceStatusSoon}>Coming Soon</span>
              <Image className={homeStyles.insuranceLogo} src="/images/insurance/cigna.jpg" alt="Cigna" width={1200} height={630} />
            </article>
            <article className={`${homeStyles.insuranceCard} ${homeStyles.insuranceCardAccepted}`}>
              <span className={homeStyles.insuranceStatus}>Accepted</span>
              <Image className={homeStyles.insuranceLogo} src="/images/insurance/hsa-fsa.jpg" alt="HSA and FSA cards accepted" width={590} height={203} />
              <p>Cards welcome for eligible services</p>
            </article>
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

      <section className="section-pad pricing-faq-section" aria-labelledby="pricing-faq-heading">
        <div className="container faq-grid">
          <aside>
            <p className="eyebrow">Insurance &amp; payment</p>
            <h2 id="pricing-faq-heading">Acupuncture Insurance &amp; Pricing FAQs</h2>
            <p>Clear answers about benefits, self-pay rates, HSA/FSA payments, and superbills before your visit.</p>
          </aside>
          <div className="faq-list">
            {pricingFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
