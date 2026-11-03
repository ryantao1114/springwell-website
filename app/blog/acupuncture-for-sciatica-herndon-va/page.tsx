import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/acupuncture-for-sciatica-herndon-va";
const title = "Acupuncture for Sciatica in Herndon, VA: Relief for Low-Back and Leg Pain";
const description = "Shooting pain down the leg, numbness, or stiffness that makes sitting and walking hard? Learn how acupuncture in Herndon, VA eases sciatica, what treatment looks like, and how many sessions it usually takes.";

const faqs = [
  {
    question: "How is sciatica different from ordinary low-back pain?",
    answer: "Low-back pain usually stays in the back, while sciatica travels — a sharp, burning, or tingling sensation that runs from the buttock down the back of the leg, sometimes into the calf or foot. Numbness, weakness, or pain that worsens with sitting often points to sciatica. Treatment at SpringWell is shaped to the pattern you actually have, not just the label.",
  },
  {
    question: "How many acupuncture sessions does sciatica usually take?",
    answer: "Care often begins with weekly visits over about four to six weeks, then reassesses together. Some patients notice easier movement and calmer pain sooner; steadier, longer-lasting change tends to build over a series of visits as guarded muscles release and movement returns.",
  },
  {
    question: "Does acupuncture for sciatica hurt?",
    answer: "Acupuncture needles are very fine, and most patients find sessions restful — many relax deeply or doze during treatment. Any brief sensation at a point usually settles within moments, and treatment is always adjusted to your comfort.",
  },
  {
    question: "Can I keep working and walking while I am being treated for sciatica?",
    answer: "Yes — gentle, regular movement is part of getting better, and your plan includes practical guidance for sitting, standing, and walking at work and at home. Treatment aims to get you back to the activities you enjoy, not to put your life on hold.",
  },
  {
    question: "Where can I find acupuncture for sciatica near Herndon and Reston, Virginia?",
    answer: `SpringWell Acupuncture is located at ${site.address} and is open Tuesday, Thursday, Friday, and Sunday from 9:00 AM to 6:30 PM. The clinic serves patients from Herndon, Reston, Sterling, Vienna, Tysons, Fairfax, and nearby Northern Virginia communities.`,
  },
] as const;

export const metadata: Metadata = {
  title: `${title} | SpringWell`,
  description,
  keywords: [
    "acupuncture for sciatica Herndon",
    "acupuncture for sciatica Herndon VA",
    "sciatica treatment Herndon VA",
    "acupuncture for low back pain Herndon",
    "sciatica leg pain acupuncture Reston",
    "back pain acupuncture Northern Virginia",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title: `${title} | SpringWell`,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-11-03",
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: "/images/home-back-neck-sciatica-user.jpg", alt: "A patient receiving acupuncture treatment for back and sciatica pain" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/home-back-neck-sciatica-user.jpg"] },
};

export default function AcupunctureForSciaticaArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        image: new URL("/images/home-back-neck-sciatica-user.jpg", site.url).toString(),
        datePublished: "2026-11-03",
        dateModified: "2026-11-03",
        author: { "@type": "Person", name: "Renjinming Dai, L.Ac.", jobTitle: "Virginia Licensed Acupuncturist", url: new URL("/about", site.url).toString() },
        publisher: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
          telephone: site.phone,
          address: { "@type": "PostalAddress", streetAddress: site.streetAddress, addressLocality: site.addressLocality, addressRegion: site.addressRegion, postalCode: site.postalCode, addressCountry: "US" },
        },
        mainEntityOfPage: new URL(slug, site.url).toString(),
        about: ["Sciatica", "Low Back Pain", "Acupuncture", "Leg Pain", "Herndon, Virginia"],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog", site.url).toString() },
          { "@type": "ListItem", position: 3, name: "Acupuncture for Sciatica in Herndon, VA", item: new URL(slug, site.url).toString() },
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
              <p className="eyebrow">SpringWell View · Pain &amp; sciatica</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>How individualized acupuncture calms shooting leg pain, releases guarded muscles, and restores freer movement — and what a realistic course of care looks like.</p>
              <div className={styles.articleByline}><span>By Renjinming Dai, L.Ac.</span><time dateTime="2026-11-03">November 3, 2026</time><span>7 min read</span></div>
            </div>
            <div className={styles.articleHeroImage}><Image src="/images/home-back-neck-sciatica-user.jpg" alt="A patient receiving acupuncture treatment for back and sciatica pain" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#how-it-helps">How does acupuncture help?</a>
              <a href="#patterns">Patterns we see</a>
              <a href="#treatment">What treatment looks like</a>
              <a href="#timeline">A typical first six weeks</a>
              <a href="#daily-life">Sitting, walking, and daily life</a>
              <a href="#questions">Common questions</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>If a sharp pain shoots from your low back down your leg when you sit, stand, or take a first step in the morning, you know how quickly sciatica can shrink a day — driving, working at a desk, even sleeping on one side becomes something to plan around. Acupuncture offers a direct, drug-free way to calm that pain and get you moving freely again.</p>
            <p>Sciatica is rarely just one tight spot. An irritated nerve, guarded muscles around the hip and low back, and the way you have started moving to avoid pain all reinforce each other. At <strong>SpringWell Acupuncture in Herndon, VA</strong>, sciatica care addresses the whole pattern — the nerve irritation, the muscle guarding, and the stiffness — so relief lasts beyond a single good day.</p>
            <div className={styles.answerBlock}>
              <p className={styles.answerLabel}>Short answer</p>
              <p>Acupuncture for sciatica calms irritated nerves, releases guarded muscles, and restores freer movement, easing the shooting leg pain and stiffness that travel down from the low back. At SpringWell Acupuncture in Herndon, VA, treatment is individualized to your pain pattern, usually weekly at first, with a clear plan for sitting, walking, and returning to the activities you enjoy.</p>
            </div>

            <section id="how-it-helps">
              <h2>How Does Acupuncture Help Sciatica?</h2>
              <p>Acupuncture works on sciatica from several directions at once, which is exactly what a traveling, layered pain like this needs. Fine needles at points along the low back, hip, and leg help settle nerve sensitivity, relax the deep muscles that guard the area, and improve local circulation so irritated tissue can recover.</p>
              <p>That combination is where acupuncture&apos;s strengths show:</p>
              <ul>
                <li><strong>Calmer nerves:</strong> easing the sharp, burning, or tingling sensation that runs down the leg, not just the ache in the back.</li>
                <li><strong>Muscles that let go:</strong> releasing the guarded hip, buttock, and low-back muscles that keep the nerve compressed and movement stiff.</li>
                <li><strong>Freer movement:</strong> as pain and guarding ease, sitting, standing, and walking become easier — and movement itself becomes part of the recovery.</li>
                <li><strong>Whole-pattern care:</strong> one plan can address the leg pain, the back stiffness, and the poor sleep that often travels with sciatica, because in TCM they are parts of a single pattern. Our guide to <Link href="/blog/acupuncture-for-insomnia-herndon-va">acupuncture for insomnia</Link> explores the sleep side of that pattern.</li>
                <li><strong>Drug-free and gentle:</strong> no grogginess and no dependency — quiet, restorative sessions that many patients describe as the most restful hour of their week.</li>
              </ul>
              <p>Learn more about <Link href="/care/pain-management#low-back-pain-sciatica">low-back pain and sciatica care at SpringWell</Link>.</p>
            </section>

            <section id="patterns">
              <h2>What Sciatica Patterns Do We See?</h2>
              <p>Two patients can both say “my leg hurts” and need quite different care. Common patterns include:</p>
              <ul>
                <li><strong>The sitting flare:</strong> pain builds the longer you sit — driving, desk work, or a long meal — and eases when you stand and move.</li>
                <li><strong>The morning stiffness:</strong> the first steps of the day are the hardest, then the leg loosens as you move.</li>
                <li><strong>The sharp, traveling pain:</strong> a shooting or burning line down the back of the leg, sometimes with tingling in the calf or foot.</li>
                <li><strong>The guarded hip:</strong> deep buttock tightness with pain on one side, often after long sitting or a new exercise routine.</li>
              </ul>
              <p>Traditional Chinese medicine reads these patterns — together with your movement, sleep, digestion, and energy — to choose points and build your plan. The details matter because the pattern, not just the label “sciatica,” guides treatment.</p>
              <blockquote>Steadier relief starts with understanding exactly how your pain travels and what sets it off.</blockquote>
            </section>

            <section id="treatment">
              <h2>What Treatment Looks Like at SpringWell</h2>
              <p>Your first visit begins with a conversation: when the pain started, exactly where it travels, what sitting, standing, and walking feel like, and what you most want to get back to. Treatment itself is quiet and unhurried — fine needles while you rest comfortably, with time for guarded muscles to genuinely release.</p>
              <p>Most sciatica plans begin with <strong>weekly visits over about four to six weeks</strong>, then reassess together. As pain calms and movement returns, visits may space out, and the plan keeps adjusting to your pattern — points, focus, and rhythm all follow how your leg and back are changing.</p>
              <p>SpringWell is open Tuesday, Thursday, Friday, and Sunday, 9:00 AM to 6:30 PM, so visits can be scheduled at a consistent time that fits work and family life.</p>
            </section>

            <section id="timeline">
              <h2>A Typical First Six Weeks</h2>
              <p>Every pattern moves at its own pace, but this timeline is what most sciatica patients can expect:</p>
              <table>
                <thead><tr><th>Stage</th><th>What usually changes</th></tr></thead>
                <tbody>
                  <tr><td>Visits 1–2</td><td>Pain intensity and muscle guarding start to ease; sitting and first steps in the morning feel less sharp.</td></tr>
                  <tr><td>Visits 3–4</td><td>Good days become more frequent; walking distance grows and flare-ups shorten.</td></tr>
                  <tr><td>Visits 5–6</td><td>Movement feels freer and steadier; together we reassess and set the spacing for the next phase.</td></tr>
                  <tr><td>Beyond</td><td>Visits space out as gains hold, with a plan for the sitting, work, and activity habits that keep sciatica from returning.</td></tr>
                </tbody>
              </table>
              <p>Progress is rarely a straight line — a demanding week can stir symptoms — but the trend across the first six weeks is what we judge together.</p>
            </section>

            <section id="daily-life">
              <h2>Sitting, Walking, and Daily Life With Sciatica</h2>
              <p>Acupuncture works best alongside a few steady daily habits. These are the foundations we discuss most often:</p>
              <ul>
                <li><strong>Break up sitting</strong> — stand and walk briefly every 30 to 45 minutes rather than pushing through a long stretch at the desk or in the car.</li>
                <li><strong>Walk a little, often</strong> — short, regular walks beat one long outing that flares symptoms for days.</li>
                <li><strong>Keep the hip open</strong> — gentle movement for the hips and low back, as guided in your plan, helps guarded muscles stay released between visits.</li>
                <li><strong>Sleep on your side with support</strong> — a pillow between the knees often makes nights more comfortable while the pattern settles.</li>
                <li><strong>Pace the good days</strong> — when pain eases, build activity gradually instead of catching up on everything at once.</li>
              </ul>
              <p>None of these replaces care for ongoing sciatica, but together they give treatment a better foundation to build on.</p>
            </section>

            <section id="questions">
              <h2>Common Questions About Acupuncture for Sciatica</h2>
              {faqs.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
              <p>SpringWell Acupuncture welcomes patients from Herndon, Reston, Sterling, Vienna, Tysons, Fairfax, and the broader Northern Virginia and DC metro area. The clinic is located at <a href={site.directionsUrl} target="_blank" rel="noreferrer">{site.address}</a>.</p>
              <div className={styles.articleCta}>
                <div><p className="eyebrow">Sciatica care in Herndon</p><h2>Start moving with a plan.</h2><p>Schedule an initial consultation to talk through your pain pattern and what care may look like for you.</p></div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an initial appointment <ArrowIcon /></a>
              </div>
              <p><Link href="/care/pain-management#low-back-pain-sciatica">Explore Low-Back Pain &amp; Sciatica Care at SpringWell</Link></p>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
