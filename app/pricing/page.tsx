import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";

export default function PricingPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Pricing & payment"
        title="Clear information before your first visit."
        text="We believe you should understand visit length, payment expectations, and available documentation before scheduling care."
        image="/images/service-herbal-medicine.jpg"
      />

      <section className="section-pad cost-section">
        <div className="container">
          <div className="cost-grid">
            <article className="cost-card featured" id="initial-visit">
              <p className="eyebrow">New patient</p>
              <h2>Initial consultation + treatment</h2>
              <div className="price-breakdown" aria-label="Initial visit price breakdown">
                <div><span>Consultation</span><strong>$50</strong></div>
                <div><span>Acupuncture session</span><strong>$95</strong></div>
                <div className="price-total"><span>Initial visit total</span><strong>$145</strong></div>
              </div>
              <p>Approximately 60–75 minutes, including a comprehensive intake, traditional Chinese medicine assessment, first acupuncture treatment, and care planning.</p>
              <ul className="check-list single-column">
                <li><CheckIcon /> Detailed health history</li>
                <li><CheckIcon /> Traditional tongue diagnosis</li>
                <li><CheckIcon /> Traditional pulse diagnosis</li>
                <li><CheckIcon /> Individualized TCM pattern assessment</li>
                <li><CheckIcon /> Personalized first treatment</li>
                <li><CheckIcon /> Recommended next steps</li>
              </ul>
            </article>
            <article className="cost-card" id="follow-up">
              <p className="eyebrow">Returning patient</p>
              <h2>Follow-up acupuncture</h2>
              <strong className="cost-value"><span>Per session</span>$95</strong>
              <p>Approximately 45–60 minutes, including a progress check, updated treatment focus, and full acupuncture session.</p>
              <ul className="check-list single-column">
                <li><CheckIcon /> Progress review</li>
                <li><CheckIcon /> Adjusted treatment plan</li>
                <li><CheckIcon /> Full acupuncture session</li>
              </ul>
            </article>
          </div>

          <div className="payment-note" id="insurance">
            <div>
              <p className="eyebrow">Insurance & payment</p>
              <h2>Superbills available for out-of-network reimbursement.</h2>
            </div>
            <div>
              <p>
                Springwell is a self-pay practice. Upon request, we can provide a
                detailed superbill for you to submit to your insurance plan for
                possible out-of-network reimbursement. Coverage varies by plan,
                and reimbursement is not guaranteed. We recommend contacting your
                insurer before your visit to confirm acupuncture benefits,
                deductible requirements, and the claims-submission process.
              </p>
              <Link className="text-link" href="/contact">Ask about insurance <ArrowIcon /></Link>
            </div>
          </div>

          <div className="pricing-details-grid">
            <article>
              <p className="eyebrow">Before you schedule</p>
              <h3>What to have ready</h3>
              <p>Bring a current medication and supplement list, relevant fertility or medical records, and the questions you want to discuss. Please do not send sensitive medical details through an unsecured form or email.</p>
            </article>
            <article>
              <p className="eyebrow">Choosing care</p>
              <h3>Start with the concern that matters most.</h3>
              <p>Your first visit is not a commitment to a long treatment series. We will review your goals, explain a reasonable starting plan, and adjust the plan based on your response.</p>
            </article>
            <article>
              <p className="eyebrow">Questions about payment?</p>
              <h3>Ask before you book.</h3>
              <p>For current payment details, superbill questions, or documentation needs, contact Springwell before scheduling so expectations are clear.</p>
              <Link className="text-link" href="/contact">Contact Springwell <ArrowIcon /></Link>
            </article>
          </div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
