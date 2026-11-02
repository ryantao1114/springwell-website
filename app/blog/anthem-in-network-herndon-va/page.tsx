import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/anthem-in-network-herndon-va";
const title = "Now In-Network with Anthem at SpringWell Acupuncture in Herndon, VA";
const description = "SpringWell Acupuncture in Herndon, VA is now in-network with Anthem, effective September 2, 2026. Learn what that means for your coverage and how to use your benefits.";
const logo = "/images/anthem-blue-cross-blue-shield-logo.png";

const faqs = [
  {
    question: "Is SpringWell Acupuncture in-network with Anthem?",
    answer: "Yes. SpringWell Acupuncture in Herndon, VA is in-network with Anthem, effective September 2, 2026.",
  },
  {
    question: "Does my Anthem plan cover acupuncture?",
    answer: "Coverage varies by plan. Call us at 703-495-2857 and we will help you confirm what your plan covers before your visit.",
  },
  {
    question: "Do I need a referral?",
    answer: "Referral requirements vary by plan. We will help you check when you call.",
  },
  {
    question: "What should I bring to my first visit?",
    answer: "Your Anthem insurance card and a list of your current health concerns, so we can confirm your benefits and plan your care.",
  },
  {
    question: "How do I book an appointment?",
    answer: `Book online or call 703-495-2857. SpringWell Acupuncture is located at ${site.address} and is open Tuesday, Thursday, Friday, and Sunday from 9:00 AM to 6:30 PM.`,
  },
] as const;

export const metadata: Metadata = {
  title: `${title} | SpringWell`,
  description,
  keywords: [
    "anthem in-network acupuncture Herndon VA",
    "anthem blue cross blue shield acupuncture Herndon",
    "acupuncture covered by anthem Virginia",
    "in-network acupuncturist Herndon VA",
    "anthem acupuncture benefits Northern Virginia",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title: `${title} | SpringWell`,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-11-02",
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: logo, alt: "Anthem Blue Cross Blue Shield logo" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [logo] },
};

export default function AnthemInNetworkArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        image: new URL(logo, site.url).toString(),
        datePublished: "2026-11-02",
        dateModified: "2026-11-02",
        author: { "@type": "Person", name: "Renjinming Dai, L.Ac.", jobTitle: "Virginia Licensed Acupuncturist", url: new URL("/about", site.url).toString() },
        publisher: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
          telephone: site.phone,
          address: { "@type": "PostalAddress", streetAddress: site.streetAddress, addressLocality: site.addressLocality, addressRegion: site.addressRegion, postalCode: site.postalCode, addressCountry: "US" },
        },
        mainEntityOfPage: new URL(slug, site.url).toString(),
        about: ["Anthem", "Health insurance", "Acupuncture", "Herndon, Virginia"],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog", site.url).toString() },
          { "@type": "ListItem", position: 3, name: "Now In-Network with Anthem at SpringWell Acupuncture in Herndon, VA", item: new URL(slug, site.url).toString() },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.article}>
        <header className={styles.articleHero}>
          <div className={"container " + styles.articleHeroGrid}>
            <div className={styles.articleHeroCopy}>
              <Link className={styles.backLink} href="/blog">← SpringWell Blog</Link>
              <p className="eyebrow">SpringWell View · Insurance update</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>Good news for Anthem members in Northern Virginia: acupuncture care at SpringWell is now covered in-network, making it simpler and more affordable to start care.</p>
              <div className={styles.articleByline}><span>By Renjinming Dai, L.Ac.</span><time dateTime="2026-11-02">November 2, 2026</time><span>3 min read</span></div>
            </div>
            <div className={styles.articleHeroImage} style={{ background: "#ffffff" }}><Image src={logo} alt="Anthem Blue Cross Blue Shield logo" fill priority style={{ objectFit: "contain" }} sizes="(max-width: 760px) 100vw, 42vw" /></div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#what-it-means">What it means for you</a>
              <a href="#how-to-use">How to use your benefits</a>
              <a href="#what-we-treat">What we treat</a>
              <a href="#questions">Common questions</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>If you carry Anthem coverage, acupuncture at SpringWell Acupuncture in Herndon, VA is now easier to access: we are in-network with Anthem, effective September 2, 2026.</p>
            <div className={styles.answerBlock}>
              <p className={styles.answerLabel}>Short answer</p>
              <p>SpringWell Acupuncture in Herndon, VA is now in-network with Anthem, effective September 2, 2026. If you carry Anthem coverage, you can now use your in-network benefits for acupuncture care at our clinic. Call us and we will help you confirm what your plan covers before your visit.</p>
            </div>

            <section id="what-it-means">
              <h2>What Being In-Network with Anthem Means for You</h2>
              <p>Acupuncture is now easier to access at SpringWell. In-network coverage usually means lower out-of-pocket costs than going out of network, and a simpler billing experience. Your exact benefits depend on your individual Anthem plan, and we are happy to help you check before you book.</p>
              <p>This is a meaningful step for patients who have been waiting to use their benefits for acupuncture — whether for pain, fertility support, sleep, or stress — and it reflects the same individualized, whole-pattern care SpringWell is known for.</p>
            </section>

            <section id="how-to-use">
              <h2>How to Use Your Anthem Benefits at SpringWell</h2>
              <p>Getting started is simple:</p>
              <ol>
                <li><strong>Call us at 703-495-2857</strong> and tell us you have Anthem coverage.</li>
                <li><strong>Bring your Anthem insurance card</strong> to your visit.</li>
                <li><strong>We will help you confirm</strong> your plan&apos;s acupuncture benefits and what to expect.</li>
              </ol>
              <p>Coverage and referral requirements vary by plan, so a quick call before your first visit is the best way to know exactly where you stand.</p>
            </section>

            <section id="what-we-treat">
              <h2>What We Treat at SpringWell Acupuncture</h2>
              <p>We support patients with fertility and IVF preparation, <Link href="/care/pain-management">pain including back pain and sciatica</Link>, sleep and stress, and digestive concerns, with care tailored to your health history and daily rhythm. Our <Link href="/blog/acupuncture-for-insomnia-herndon-va">guide to acupuncture for insomnia in Herndon</Link> is a good example of how we approach a single concern as part of your whole pattern.</p>
            </section>

            <section id="questions">
              <h2>Common Questions About Anthem Coverage at SpringWell</h2>
              {faqs.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
              <p>SpringWell Acupuncture welcomes patients from Herndon, Reston, Sterling, Vienna, Tysons, Fairfax, and the broader Northern Virginia and DC metro area. The clinic is located at <a href={site.directionsUrl} target="_blank" rel="noreferrer">{site.address}</a>.</p>
              <div className={styles.articleCta}>
                <div><p className="eyebrow">Anthem members in Herndon</p><h2>Use your benefits for acupuncture.</h2><p>Call us to confirm your plan&apos;s coverage and schedule your first visit.</p></div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an initial appointment <ArrowIcon /></a>
              </div>
              <p><Link href="/care/pain-management">Explore Pain Management Acupuncture at SpringWell</Link></p>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
