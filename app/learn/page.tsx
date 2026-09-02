import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { BottomCTA, PageShell } from "../components/site-shell";
import styles from "./learn.module.css";

export const metadata: Metadata = {
  title: "Acupuncture Learning Center",
  description:
    "Clear acupuncture guides and research insights for fertility and IVF, women’s health, pain, stress, sleep, and digestive concerns in Herndon, Virginia.",
  alternates: { canonical: "/learn" },
};

const research = [
  {
    topic: "Fertility & IVF",
    date: "August 25, 2026",
    title: "Can Acupuncture Support Embryo Quality During IVF?",
    summary: "A close look at a 2026 systematic review examining embryo quality, fertilization, oocyte quality, treatment timing, and acupuncture dose.",
    href: "/blog/acupuncture-embryo-quality-ivf-meta-analysis-2026",
  },
  {
    topic: "Pain & Migraine",
    date: "August 25, 2026",
    title: "Can Acupuncture Reduce Migraine Days?",
    summary: "What a 2025 meta-analysis of 23 randomized trials found about migraine frequency, duration, pain intensity, and quality of life.",
    href: "/blog/acupuncture-migraine-meta-analysis-2025",
  },
  {
    topic: "Stress & Anxiety",
    date: "August 25, 2026",
    title: "Can Acupuncture Support Anxiety Symptoms?",
    summary: "A clear review of 20 randomized trials evaluating short-term anxiety outcomes and follow-up after acupuncture.",
    href: "/blog/acupuncture-anxiety-meta-analysis-2026",
  },
] as const;

const topics = [
  {
    number: "01",
    title: "Fertility & IVF",
    description: "Learn how acupuncture visits may be timed around fertility planning, IUI, ovarian stimulation, egg retrieval, embryo transfer, sleep, and stress.",
    guides: [
      { title: "Planning before treatment", copy: "Cycle patterns, ovulation timing, sleep, digestion, stress, and your fertility goals help shape the starting plan." },
      { title: "Care through IUI and IVF", copy: "Visit timing and treatment focus can change around stimulation, retrieval, recovery, and embryo transfer." },
    ],
    href: "/care/fertility-ivf-support",
  },
  {
    number: "02",
    title: "Women’s Health",
    description: "Explore individualized acupuncture care for menstrual symptoms, irregular cycles, PCOS-related concerns, and perimenopause.",
    guides: [
      { title: "Cycle-based care", copy: "Point selection can change with menstrual timing, pain, flow, sleep, digestion, energy, and other symptoms." },
      { title: "Perimenopause and changing symptoms", copy: "Care follows the concerns affecting daily life, including hot flashes, sleep disruption, headaches, mood, and energy." },
    ],
    href: "/care/womens-health",
  },
  {
    number: "03",
    title: "Pain & TMJ",
    description: "Understand how acupuncture may address pain sensitivity, muscle tension, jaw clenching, headaches, neck pain, back pain, and movement.",
    guides: [
      { title: "Pain and muscle tension", copy: "Treatment can combine local and distal points to address sensitivity, muscle guarding, movement, and recurring tension." },
      { title: "The jaw, head, and neck connection", copy: "TMJ tension, headaches, neck tightness, and shoulder tension are often considered together instead of as isolated areas." },
    ],
    href: "/care/pain-management",
  },
  {
    number: "04",
    title: "Stress & Sleep",
    description: "Learn how treatment can help the body slow down, release physical tension, support restful sleep, and recover more consistently.",
    guides: [
      { title: "Helping the body slow down", copy: "Acupuncture gives the nervous system a physical signal to settle, helping breathing deepen and tense muscles release." },
      { title: "Support between visits", copy: "Ear seeds provide gentle acupressure that can be activated during the day to reinforce a calmer, more consistent rhythm." },
    ],
    href: "/care/stress-sleep",
  },
  {
    number: "05",
    title: "Digestive Health",
    description: "Read about acupuncture for bloating, nausea, constipation, abdominal tension, appetite changes, and stress-sensitive digestion.",
    guides: [
      { title: "The stress–digestion connection", copy: "Because the digestive and nervous systems communicate closely, stress can quickly affect appetite, bloating, nausea, and bowel rhythm." },
      { title: "Following your digestive pattern", copy: "Treatment considers timing, food-related changes, abdominal tension, sleep, stress, and how symptoms respond between visits." },
    ],
    href: "/care/digestive-support",
  },
  {
    number: "06",
    title: "Your First Visit",
    description: "Know what to expect from the health history, Chinese medicine assessment, acupuncture treatment, and follow-up plan at SpringWell.",
    guides: [
      { title: "Consultation and assessment", copy: "Your first visit includes time to discuss your health history, current symptoms, goals, and relevant tongue and pulse findings." },
      { title: "Treatment and next steps", copy: "Fine needles are placed while you rest comfortably, followed by a clear plan for timing, frequency, and what to notice afterward." },
    ],
    href: "/new-patients",
  },
] as const;

const quickAnswers = [
  {
    question: "What does individualized acupuncture care mean?",
    answer: "Your point selection and treatment focus are based on your symptoms, health history, goals, and response to previous visits. The plan can change as your body, menstrual cycle, fertility timeline, pain pattern, sleep, or digestion changes.",
  },
  {
    question: "How can acupuncture fit into fertility and IVF care?",
    answer: "Visits can be thoughtfully timed around fertility planning, IUI, ovarian stimulation, egg retrieval, recovery, and embryo transfer. Treatment focus changes with the stage of care and how you are feeling that day.",
  },
  {
    question: "What concerns bring patients to SpringWell?",
    answer: "Patients commonly visit for women’s health and fertility care, headaches, TMJ and muscle tension, neck or back pain, stress, sleep disruption, fatigue, bloating, and other digestive concerns.",
  },
  {
    question: "Where is SpringWell Acupuncture located?",
    answer: "SpringWell Acupuncture is in Herndon, Virginia, and serves patients from Herndon, Reston, Sterling, Tysons, and communities throughout Northern Virginia.",
  },
] as const;

export default function LearnPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SpringWell Acupuncture Learning Center",
    description: metadata.description,
    url: "https://springwellacu.com/learn",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: research.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `https://springwellacu.com${article.href}`,
      })),
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: quickAnswers.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionSchema, faqSchema]) }} />
      <header className={styles.hero}>
        <div className="container">
          <p className="eyebrow">SpringWell Learning Center</p>
          <h1>Clear answers about acupuncture and your care.</h1>
          <p className={styles.heroIntro}>Explore practical guidance on fertility and IVF, women’s health, pain, stress, sleep, and digestion—written to help you understand what acupuncture can do and what a personalized treatment plan may look like.</p>
          <nav className={styles.jumpNav} aria-label="Learning center sections">
            <a href="#start-here">Start here</a>
            <a href="#research">Research &amp; evidence</a>
            <a href="#topics">Explore by topic</a>
          </nav>
        </div>
      </header>

      <section className={styles.answersSection} id="start-here" aria-labelledby="start-here-title">
        <div className="container">
          <div className={styles.sectionHeading}><p className="eyebrow">Start here</p><h2 id="start-here-title">Common questions, direct answers.</h2></div>
          <div className={styles.answerGrid}>
            {quickAnswers.map((item, index) => <article className={styles.answerItem} key={item.question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.question}</h3><p>{item.answer}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className={styles.researchSection} id="research" aria-labelledby="research-title">
        <div className="container">
          <div className={styles.sectionHeading}><p className="eyebrow">Research &amp; evidence</p><h2 id="research-title">Read the research in plain language.</h2><p>Focused reviews of recent studies, with the findings, limitations, and practical meaning separated clearly.</p></div>
          <div className={styles.researchList}>
            {research.map((article) => <article className={styles.researchRow} key={article.href}><div className={styles.researchMeta}><span>{article.topic}</span><time>{article.date}</time></div><div className={styles.researchCopy}><h3><Link href={article.href}>{article.title}</Link></h3><p>{article.summary}</p></div><Link className={styles.arrowLink} href={article.href} aria-label={`Read ${article.title}`}><ArrowIcon /></Link></article>)}
          </div>
        </div>
      </section>

      <section className={styles.topicsSection} id="topics" aria-labelledby="topics-title">
        <div className="container">
          <div className={styles.sectionHeading}><p className="eyebrow">Explore by topic</p><h2 id="topics-title">Find guidance for what brings you in.</h2></div>
          <div className={styles.topicList}>
            {topics.map((topic) => <article className={styles.topicRow} key={topic.title}><span className={styles.topicNumber}>{topic.number}</span><div className={styles.topicIntro}><h3>{topic.title}</h3><p>{topic.description}</p></div><div className={styles.topicGuides}>{topic.guides.map((guide) => <div className={styles.topicGuide} key={guide.title}><h4>{guide.title}</h4><p>{guide.copy}</p></div>)}</div><Link className={styles.topicLink} href={topic.href}>Explore {topic.title} <ArrowIcon /></Link></article>)}
          </div>
        </div>
      </section>

      <section className={styles.localSection} aria-labelledby="local-title">
        <div className={`container ${styles.localGrid}`}>
          <div><p className="eyebrow">Acupuncture in Herndon, Virginia</p><h2 id="local-title">Turn what you learn into a plan that fits you.</h2></div>
          <div><p>SpringWell provides individualized acupuncture care for patients in Herndon, Reston, Sterling, Tysons, and across Northern Virginia.</p><div className={styles.localActions}><Link className="button button-primary" href="/book">Book an appointment <ArrowIcon /></Link><Link className="text-link" href="/contact">Ask a question <ArrowIcon /></Link></div></div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
