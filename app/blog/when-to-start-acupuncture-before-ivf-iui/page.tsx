import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/when-to-start-acupuncture-before-ivf-iui";
const title = "When Should You Start Acupuncture Before IVF or IUI?";
const description = "When should you start acupuncture before IVF or IUI? Learn when to begin fertility acupuncture and how treatment can fit around stimulation, IUI, egg retrieval, and embryo transfer.";

const faqs = [
  {
    question: "When should I start acupuncture before IVF or IUI?",
    answer: "When possible, about three months before an IVF or IUI cycle is a useful time to begin. This allows care to follow several phases of the menstrual cycle before stimulation or insemination. If treatment has already started, acupuncture can begin from your current stage.",
  },
  {
    question: "Is it too late to start acupuncture after IVF medications begin?",
    answer: "No. Your acupuncture plan can be adapted to your current medication, monitoring, trigger, retrieval, insemination, or embryo-transfer schedule.",
  },
  {
    question: "Can acupuncture appointments be coordinated with a fertility clinic schedule?",
    answer: "Yes. Appointments can be adjusted around monitoring, ovarian stimulation, trigger timing, egg retrieval, IUI, fresh or frozen embryo transfer, and the two-week wait. Your fertility clinic remains responsible for medical treatment decisions.",
  },
  {
    question: "Where is SpringWell Acupuncture located?",
    answer: `SpringWell Acupuncture is located at ${site.address} and provides cycle-based fertility acupuncture care for patients in Herndon and surrounding Northern Virginia communities.`,
  },
] as const;

export const metadata: Metadata = {
  title: `${title} | SpringWell`,
  description,
  keywords: [
    "when to start acupuncture before IVF",
    "when to start acupuncture before IUI",
    "fertility acupuncture Herndon VA",
    "IVF acupuncture Northern Virginia",
    "IUI acupuncture Reston VA",
    "acupuncture before embryo transfer",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title: `${title} | SpringWell`,
    description,
    type: "article",
    url: slug,
    publishedTime: "2026-09-27",
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: "/images/blog-natural-conception-family.jpg", alt: "A newborn holding a parent’s fingers, representing fertility and the path to parenthood" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/blog-natural-conception-family.jpg"] },
};

export default function WhenToStartAcupunctureArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        image: new URL("/images/blog-natural-conception-family.jpg", site.url).toString(),
        datePublished: "2026-09-27",
        dateModified: "2026-09-27",
        author: { "@type": "Person", name: "Renjinming Dai, L.Ac.", jobTitle: "Virginia Licensed Acupuncturist", url: new URL("/about", site.url).toString() },
        publisher: {
          "@type": "MedicalBusiness",
          name: site.name,
          url: site.url,
          telephone: site.phone,
          address: { "@type": "PostalAddress", streetAddress: site.streetAddress, addressLocality: site.addressLocality, addressRegion: site.addressRegion, postalCode: site.postalCode, addressCountry: "US" },
        },
        mainEntityOfPage: new URL(slug, site.url).toString(),
        about: ["Fertility acupuncture", "IVF", "IUI", "Egg retrieval", "Embryo transfer", "Herndon, Virginia"],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog", site.url).toString() },
          { "@type": "ListItem", position: 3, name: "When to Start Acupuncture Before IVF or IUI", item: new URL(slug, site.url).toString() },
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
              <p className="eyebrow">SpringWell View · IVF &amp; IUI timing</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>How cycle-based fertility acupuncture can fit around preparation, ovarian stimulation, egg retrieval, IUI, embryo transfer, and the two-week wait.</p>
              <div className={styles.articleByline}><span>By Renjinming Dai, L.Ac.</span><time dateTime="2026-09-27">September 27, 2026</time><span>7 min read</span></div>
            </div>
            <div className={styles.articleHeroImage}><Image src="/images/blog-natural-conception-family.jpg" alt="A newborn holding a parent’s fingers, representing fertility and the path to parenthood" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#three-months">Why begin three months before</a>
              <a href="#stimulation">Ovarian stimulation</a>
              <a href="#retrieval">Egg retrieval</a>
              <a href="#iui">IUI timing</a>
              <a href="#transfer">Embryo transfer</a>
              <a href="#already-started">If treatment already started</a>
              <a href="#questions">Common questions</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>When possible, about three months before an IVF or IUI cycle is a useful time to begin acupuncture. If your medications or treatment cycle have already started, you can still begin from where you are now.</p>
            <p>If you are preparing for IVF or IUI, you probably already have many dates on your calendar: blood work, ultrasounds, medications, injections, monitoring appointments, and procedures. Some patients contact SpringWell several months before treatment. Others call after stimulation begins or when an embryo transfer is approaching.</p>
            <p>Starting earlier gives cycle-based care time to follow your menstrual pattern, address symptoms, and prepare for the changing stages of fertility treatment. It is a helpful preparation window, not a deadline.</p>

            <section id="three-months">
              <h2>Why Start About Three Months Before IVF or IUI?</h2>
              <p>Follicles develop over time, well before the treatment cycle in which an egg is ovulated or retrieved. Beginning earlier provides time to observe several phases of the menstrual cycle before ovarian stimulation or active fertility treatment begins.</p>
              <p>It also gives us an opportunity to understand the bigger picture: your menstrual pattern, previous fertility treatment, current IVF or IUI plan, medications, sleep, stress, digestion, pelvic symptoms, and how you feel throughout the month.</p>
              <p>For patients planning IVF, the plan may begin with preparation for ovarian stimulation and egg retrieval. For patients planning IUI, appointments may be coordinated around follicular development, ovulation, trigger timing, and the expected insemination date.</p>
              <blockquote>The treatment plan changes as your cycle and fertility schedule change. That is the foundation of cycle-based fertility acupuncture.</blockquote>
            </section>

            <section id="stimulation">
              <h2>Acupuncture During Ovarian Stimulation</h2>
              <p>Once stimulation begins, the schedule can move quickly. Your fertility clinic uses ultrasound and blood work to monitor follicular growth and determine when medications or a trigger injection should be given.</p>
              <p>Acupuncture appointments can be planned around that schedule instead of following the same routine every week. As follicles develop and retrieval or insemination approaches, the treatment focus may change as well.</p>
              <p>For a medicated IUI cycle, acupuncture can also be coordinated with monitoring appointments, medication, trigger timing, and the planned insemination. Your fertility clinic remains responsible for your medical treatment, and acupuncture is used alongside that care.</p>
            </section>

            <section id="retrieval">
              <h2>Acupuncture Around Egg Retrieval</h2>
              <p>As egg retrieval approaches, timing becomes more specific. Rather than relying only on your usual appointment day, we look at your trigger and retrieval dates and plan around the schedule provided by your fertility clinic.</p>
              <p>After retrieval, the next stage depends on your IVF plan. A fresh transfer follows quickly. If embryos are frozen for a later frozen embryo transfer, there may be more time before the next treatment phase. Your acupuncture plan can change with that timeline.</p>
            </section>

            <section id="iui">
              <h2>Acupuncture Around IUI</h2>
              <p>For IUI, timing centers on follicular development and ovulation. If you are using fertility medication or a trigger injection, appointments can be planned around the schedule given by your fertility clinic.</p>
              <p>As the insemination date approaches, treatment can be timed around that part of your cycle. After IUI, the focus changes again as you enter the waiting period before your pregnancy test.</p>
            </section>

            <section id="transfer">
              <h2>Acupuncture Around Embryo Transfer</h2>
              <p>Some patients begin acupuncture well before embryo transfer, while others first contact us after the transfer date has been scheduled.</p>
              <p>For a frozen embryo transfer, care can follow the preparation cycle and adjust as the transfer date approaches. For a fresh transfer, the timeline is shorter because it follows egg retrieval.</p>
              <p>Around transfer day, many patients also value acupuncture as quiet time away from the pressure of appointments, medications, and waiting.</p>
            </section>

            <section id="already-started">
              <h2>What If You Have Already Started IVF or IUI?</h2>
              <p><strong>“I already started my medications. Did I wait too long?”</strong></p>
              <p>No. Three months is a useful preparation period, but it is not a deadline.</p>
              <p>You may already be taking stimulation medication. Your IUI may be next week. You may have completed egg retrieval and be preparing for a frozen embryo transfer. We do not try to go backward. We look at where you are in your cycle, what your fertility clinic has planned next, and what makes sense now.</p>
              <p>That becomes the starting point for your acupuncture plan.</p>
            </section>

            <section id="questions">
              <h2>Fertility Acupuncture in Herndon, VA</h2>
              <p>SpringWell Acupuncture provides <strong>cycle-based fertility acupuncture care</strong> for patients preparing for or going through IVF and IUI. Treatment can change with your menstrual cycle and fertility schedule, including IVF preparation, ovarian stimulation, egg retrieval, IUI, frozen embryo transfer, fresh embryo transfer, and the two-week wait.</p>
              <p>Fertility schedules can change quickly. Your reproductive endocrinologist may adjust medication, move a retrieval date, or confirm a transfer date with short notice. Your acupuncture schedule can change with it.</p>
              <p>SpringWell Acupuncture is located at <a href={site.directionsUrl} target="_blank" rel="noreferrer">{site.address}</a>, serving patients in Herndon, Reston, Sterling, Vienna, Tysons, Fairfax, and surrounding Northern Virginia communities.</p>

              <h2>Common Questions About Starting Acupuncture Before IVF or IUI</h2>
              {faqs.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}

              <div className={styles.articleCta}>
                <div><p className="eyebrow">Planning IVF or IUI?</p><h2>Start with where you are now.</h2><p>Learn more about fertility and IVF acupuncture or schedule an initial appointment to discuss your current treatment timeline.</p></div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book an initial appointment <ArrowIcon /></a>
              </div>
              <p><Link href="/care/fertility-ivf-support">Explore Fertility &amp; IVF Acupuncture at SpringWell</Link></p>
            </section>
          </div>
        </div>
      </article>
      <BottomCTA />
    </PageShell>
  );
}
