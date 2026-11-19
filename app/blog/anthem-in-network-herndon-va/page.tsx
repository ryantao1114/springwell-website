import type { Metadata } from "next";
import Link from "next/link";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/anthem-in-network-herndon-va";
const title = "Using Your Insurance Benefits for Acupuncture at SpringWell";
const description = "Learn how to use your insurance benefits for acupuncture at SpringWell Acupuncture in Herndon, VA — check your coverage, copays, deductibles, and visit limits before your first appointment.";

const faqs = [
  {
    question: "Does SpringWell Acupuncture accept health insurance?",
    answer: "Yes. SpringWell Acupuncture participates in select insurance networks. Whether we are in-network with your specific plan depends on your insurance company and plan type. Contact us with your insurance information, and we'll help verify your acupuncture benefits before your appointment.",
  },
  {
    question: "Does my insurance plan cover acupuncture?",
    answer: "Many plans include acupuncture benefits, but coverage varies. Some cover treatment for certain pain conditions, while others have additional restrictions. Call us at 703-495-2857 or email info@springwellacu.com, and we'll help you check.",
  },
  {
    question: "How much will I pay for an acupuncture visit?",
    answer: "Your out-of-pocket cost depends on your plan's copay, deductible, coinsurance, and coverage rules. We'll help estimate your costs before your visit. Final patient responsibility is determined by your insurance plan when the claim is processed.",
  },
  {
    question: "How many acupuncture visits does insurance cover?",
    answer: "Some plans provide a fixed number of visits per calendar year, while others base coverage on medical necessity or additional plan requirements. We can help you check your available benefits and any visit limits.",
  },
  {
    question: "Do I need a referral or prior authorization?",
    answer: "Some insurance plans require a referral from your primary care provider or prior authorization before acupuncture treatment. Requirements vary by plan, and we'll help you verify them before your visit.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, your insurance card, and any relevant medical information. We recommend contacting us beforehand so we can review your benefits.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book online through our website or call 703-495-2857.",
  },
] as const;

export const metadata: Metadata = {
  title: `${title} | SpringWell`,
  description,
  keywords: [
    "insurance acupuncture Herndon VA",
    "acupuncture covered by insurance",
    "in-network acupuncturist Herndon VA",
    "acupuncture benefits Herndon",
    "acupuncture insurance coverage Virginia",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title: `${title} | SpringWell`,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-11-02",
    authors: ["Renjinming Dai, L.Ac."],
  },
  twitter: { card: "summary", title, description },
};

export default function InsuranceBenefitsArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        datePublished: "2026-11-02",
        dateModified: "2026-11-19",
        author: { "@type": "Person", name: "Renjinming Dai, L.Ac.", jobTitle: "Virginia Licensed Acupuncturist", url: new URL("/about", site.url).toString() },
        publisher: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
          telephone: site.phone,
          address: { "@type": "PostalAddress", streetAddress: site.streetAddress, addressLocality: site.addressLocality, addressRegion: site.addressRegion, postalCode: site.postalCode, addressCountry: "US" },
        },
        mainEntityOfPage: new URL(slug, site.url).toString(),
        about: ["Health insurance", "Acupuncture", "Herndon, Virginia"],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog", site.url).toString() },
          { "@type": "ListItem", position: 3, name: "Using Your Insurance Benefits for Acupuncture at SpringWell", item: new URL(slug, site.url).toString() },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <header className={styles.articleHero}>
          <div className={"container " + styles.articleHeroGrid + " " + styles.articleHeroGridNoImage}>
            <div className={styles.articleHeroCopy}>
              <Link className={styles.backLink} href="/blog">← SpringWell Blog</Link>
              <p className="eyebrow">SpringWell View · Insurance update</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>We work with participating insurance networks and help patients verify their acupuncture coverage before their first appointment. Our goal is to make the insurance process simple and transparent, so you can focus on your care.</p>
              <div className={styles.articleByline}><span>By Renjinming Dai, L.Ac.</span><time dateTime="2026-11-02">November 2, 2026</time><span>5 min read</span></div>
            </div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#does-insurance-cover">Does your insurance cover acupuncture?</a>
              <a href="#what-it-means">What using insurance means for you</a>
              <a href="#how-to-use">How to use your benefits</a>
              <a href="#what-we-treat">What we treat</a>
              <a href="#questions">Common questions</a>
              <a href="#have-questions">Have questions about your benefits?</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>If you have health insurance that includes acupuncture benefits, receiving care at <strong>SpringWell Acupuncture in Herndon, VA</strong> may be more affordable than you think.</p>

            <section id="does-insurance-cover">
              <h2>Does Your Insurance Cover Acupuncture?</h2>
              <p>Many health insurance plans offer acupuncture benefits, particularly for certain pain-related conditions. However, coverage varies depending on your insurance company, specific plan, medical condition, and provider network.</p>
              <p><strong>Not sure whether your plan covers acupuncture?</strong> Contact SpringWell Acupuncture at <strong>703-495-2857</strong> or <strong>info@springwellacu.com</strong>. We&apos;ll help you check your acupuncture benefits, including copays, deductibles, visit limits, and any referral or authorization requirements.</p>
            </section>

            <section id="what-it-means">
              <h2>What Using Insurance at SpringWell Means for You</h2>
              <p>Using your insurance benefits for acupuncture may help reduce your out-of-pocket costs, especially when your plan includes in-network acupuncture coverage.</p>
              <p>At SpringWell, we aim to make the process as straightforward as possible. Before your visit, we can help you understand:</p>
              <ul>
                <li>Whether your plan covers acupuncture at our clinic</li>
                <li>Your estimated copay, coinsurance, or deductible</li>
                <li>How many acupuncture visits your plan allows</li>
                <li>Whether a referral or prior authorization is required</li>
              </ul>
              <p>We believe patients should have a clear understanding of their potential costs before beginning treatment.</p>
            </section>

            <section id="how-to-use">
              <h2>How to Use Your Insurance Benefits at SpringWell</h2>
              <p>Getting started is simple:</p>
              <ol>
                <li><strong>Contact us:</strong> Call <strong>703-495-2857</strong> or email <strong>info@springwellacu.com</strong>. We&apos;ll help you verify your acupuncture benefits before your visit, including coverage and estimated out-of-pocket costs.</li>
                <li><strong>Bring your ID and insurance card:</strong> Please bring a valid photo ID and your insurance card to your appointment.</li>
                <li><strong>Start your treatment:</strong> We&apos;ll discuss your health concerns, develop a personalized treatment plan, and get started with your acupuncture care.</li>
              </ol>
              <p>Insurance coverage, copays, deductibles, and referral requirements vary by plan. We recommend contacting us before your first appointment so you know what to expect.</p>
            </section>

            <section id="what-we-treat">
              <h2>What We Treat at SpringWell Acupuncture</h2>
              <p>At SpringWell Acupuncture, we provide individualized acupuncture care for a variety of health concerns, including:</p>
              <ul>
                <li><strong>Pain Management:</strong> Back pain, neck pain, sciatica, shoulder pain, TMJ discomfort, and other musculoskeletal conditions. <Link href="/care/pain-management">Learn more about pain management</Link>.</li>
                <li><strong>Fertility &amp; IVF Support:</strong> Cycle-based acupuncture care tailored to different stages of natural conception, IUI, and IVF treatment.</li>
                <li><strong>Stress &amp; Sleep:</strong> Acupuncture care for stress-related symptoms, sleep difficulties, and overall well-being. Read our <Link href="/blog/acupuncture-for-insomnia-herndon-va">guide to acupuncture for insomnia in Herndon</Link>.</li>
                <li><strong>Women&apos;s Health:</strong> Individualized care for menstrual concerns, perimenopause, and related symptoms.</li>
                <li><strong>Digestive Wellness:</strong> Acupuncture for digestive discomfort and overall digestive well-being.</li>
              </ul>
            </section>

            <section id="questions">
              <h2>Common Questions About Acupuncture Insurance Coverage</h2>
              {faqs.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
              <p><strong>SpringWell Acupuncture</strong><br />463 Carlisle Dr, Suite B<br />Herndon, VA 20170</p>
              <p><strong>Office Hours:</strong> Tuesday, Thursday, Friday, and Sunday, 9:00 AM–6:30 PM.</p>
              <p>We welcome patients from <strong>Herndon, Reston, Sterling, Ashburn, Vienna, Tysons, Fairfax</strong>, and surrounding Northern Virginia communities.</p>
            </section>

            <section id="have-questions">
              <h2>Have Questions About Your Acupuncture Benefits?</h2>
              <p>Understanding insurance shouldn&apos;t be complicated. Whether you&apos;re visiting us for the first time or exploring acupuncture as part of your ongoing care, we&apos;re happy to help you understand your options.</p>
              <p><strong>Call 703-495-2857 or email info@springwellacu.com to verify your acupuncture benefits before your visit.</strong></p>
              <p>We look forward to welcoming you to SpringWell Acupuncture.</p>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
