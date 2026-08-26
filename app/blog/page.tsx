import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { BottomCTA, PageShell } from "../components/site-shell";
import styles from "./research-blog.module.css";

export const metadata: Metadata = {
  title: "Acupuncture & Chinese Medicine Journal",
  description:
    "Patient-friendly articles about women’s health, fertility and IVF support, pain management, TMJ, stress, sleep, digestion, cupping, and Chinese herbal medicine.",
  alternates: { canonical: "/blog" },
};

type BlogPost = {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  image: string;
  imageAlt: string;
  related: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  references: string[];
};

const posts: BlogPost[] = [
  {
    id: "fertility-ivf",
    category: "Women’s health · Fertility",
    title: "Where acupuncture may fit into an IVF journey",
    summary: "A practical guide to supportive acupuncture care before and during fertility treatment—and what it does not replace.",
    readTime: "6 min read",
    image: "/images/home-hero-care.jpg",
    imageAlt: "Gentle wrist assessment during a fertility-focused consultation",
    related: "/specialist#fertility-ivf",
    sections: [
      {
        heading: "Supportive care is different from fertility treatment",
        paragraphs: [
          "An IVF journey can involve medication, monitoring, procedures, waiting, and a lot of uncertainty. Patients may seek acupuncture for support with stress, sleep, treatment-related discomfort, or the feeling of having a calm place to check in. Those are reasonable goals for supportive care.",
          "Acupuncture does not replace ovarian reserve testing, semen analysis, ultrasound, medication, embryo transfer, or the clinical judgment of your fertility team. A thoughtful plan begins by understanding where you are in the cycle and what your reproductive endocrinologist has recommended.",
        ],
      },
      {
        heading: "How timing can be planned",
        paragraphs: [
          "Some patients start before an IVF cycle to establish a treatment rhythm. Others come during stimulation, around a procedure, or after transfer for comfort and stress support. There is no single schedule that fits every patient, and timing should be coordinated with your fertility clinic, especially around procedures, pregnancy, and medication changes.",
          "At a first visit, we ask about cycle timing, medications, prior treatment, sleep, digestion, stress, and any symptoms that need medical follow-up. The plan stays flexible and can change when your fertility protocol changes.",
        ],
      },
      {
        heading: "What the evidence can—and cannot—tell us",
        paragraphs: [
          "Research on acupuncture around embryo transfer has produced mixed results. A guideline from the American Society for Reproductive Medicine reports that there is no consistent evidence that acupuncture around embryo transfer improves live-birth rates. That does not answer every question about supportive care, but it does mean a clinic should not promise that acupuncture will improve IVF success.",
          "Springwell frames fertility acupuncture around patient-centered goals: comfort, stress regulation, sleep, and a coordinated care experience. If your goal is to change an IVF outcome, we will encourage a direct discussion with your fertility specialist about what is supported by current evidence.",
        ],
      },
    ],
    references: [
      "American Society for Reproductive Medicine. Performing the embryo transfer: a guideline. Fertility and Sterility. 2017;107(4):882–892.",
      "National Center for Complementary and Integrative Health. Acupuncture: Effectiveness and Safety. Updated October 2022.",
    ],
  },
  {
    id: "menstrual-health",
    category: "Women’s health",
    title: "Acupuncture for menstrual cramps and cycle-related symptoms",
    summary: "How a Chinese medicine assessment looks at timing, pain quality, flow, sleep, digestion, and the rest of the cycle.",
    readTime: "5 min read",
    image: "/images/chinese-medicine-consultation.jpg",
    imageAlt: "Pulse assessment during a Traditional Chinese Medicine consultation",
    related: "/specialist#womens-health",
    sections: [
      {
        heading: "A period symptom is a pattern, not just a number",
        paragraphs: [
          "Two people can both report menstrual cramps and need very different conversations. We ask when the pain begins, where it is felt, whether warmth or movement changes it, how heavy the flow is, and what happens before and after the period. Sleep, digestion, stress, headaches, and energy can also add important context.",
          "Traditional Chinese Medicine uses this broader history to describe a treatment pattern. That pattern is not a replacement for a gynecologic diagnosis. It is a way of organizing the information that may help guide an individualized acupuncture plan.",
        ],
      },
      {
        heading: "When a medical evaluation matters",
        paragraphs: [
          "New or worsening pain, very heavy bleeding, bleeding between periods, pain with sex, fainting, fever, or difficulty becoming pregnant deserves medical evaluation. Conditions such as endometriosis, fibroids, infection, and other gynecologic problems may need care beyond acupuncture.",
          "Acupuncture can be considered alongside appropriate medical care for symptom support, but it should not be used to delay evaluation or to explain away symptoms that are changing quickly.",
        ],
      },
      {
        heading: "What a first treatment plan may include",
        paragraphs: [
          "A starting plan may focus on the most disruptive symptom first, then track changes across more than one cycle. We may discuss sleep, stress, movement, hydration, meals, and how to communicate with your OB-GYN. The goal is a plan you can follow—not a complicated list of rules.",
        ],
      },
    ],
    references: [
      "National Institutes of Health, Office on Women’s Health. Period problems: overview and when to seek care.",
      "National Center for Complementary and Integrative Health. Traditional Chinese Medicine: What You Need To Know. Updated April 2019.",
    ],
  },
  {
    id: "tmj-orofacial-pain",
    category: "Pain management · TMJ",
    title: "TMJ pain is more than a jaw-joint problem",
    summary: "Why jaw muscles, clenching, headaches, neck tension, sleep, and stress all matter in a focused orofacial pain assessment.",
    readTime: "6 min read",
    image: "/images/acupuncture-treatment-hero.png",
    imageAlt: "Fine needles being placed during a pain-focused acupuncture treatment",
    related: "/specialist#orofacial-pain",
    sections: [
      {
        heading: "TMJ and TMD are not the same term",
        paragraphs: [
          "The temporomandibular joints are the two joints in front of the ears that connect the jaw to the skull. Temporomandibular disorders, or TMD, describe a broader group of conditions involving the jaw joints and the muscles that control movement. Pain can also be felt in the face, temple, ear area, neck, or shoulders.",
          "Clenching, grinding, stress, posture, sleep, dental work, injury, and other factors can contribute to symptoms. A good assessment does not assume that every jaw symptom has one cause.",
        ],
      },
      {
        heading: "How acupuncture may be used as supportive care",
        paragraphs: [
          "Acupuncture may be considered for muscle tension, pain sensitivity, and related headache or neck patterns. Treatment may include local and distal points, gentle work around muscle tension, and a conversation about habits that keep the jaw active—such as daytime clenching or chewing gum.",
          "This approach works best as part of a broader plan. Depending on the presentation, coordination with a dentist, physical therapist, physician, or orofacial pain specialist may be important.",
        ],
      },
      {
        heading: "Know when to seek dental or medical care",
        paragraphs: [
          "Jaw locking, a sudden change in the bite, swelling, fever, trauma, progressive difficulty opening the mouth, unexplained numbness, or severe new pain should be evaluated by a dental or medical professional. Acupuncture is not a substitute for that evaluation.",
        ],
      },
    ],
    references: [
      "National Institute of Dental and Craniofacial Research. TMD (Temporomandibular Disorders). Last reviewed November 2025.",
      "National Center for Complementary and Integrative Health. Chronic Pain and Complementary Health Approaches: Usefulness and Safety.",
    ],
  },
  {
    id: "pain-management",
    category: "Pain management",
    title: "Acupuncture for headaches, neck tension, and persistent pain",
    summary: "A clear look at how acupuncture may fit into a pain plan without reducing every symptom to a single cause.",
    readTime: "5 min read",
    image: "/images/service-acupuncture.png",
    imageAlt: "Acupuncture treatment representing pain and muscle tension care",
    related: "/specialist#pain-management",
    sections: [
      {
        heading: "Pain is real—even when the pattern is complex",
        paragraphs: [
          "Persistent pain can affect movement, concentration, sleep, mood, and confidence. A treatment conversation should include more than a pain score: where symptoms are felt, what triggers them, what helps, and how the symptoms change across a day or week.",
          "For headaches and neck tension, we also ask about screen time, jaw clenching, posture, sleep, hydration, medication use, and warning signs. The purpose is to identify what can safely be addressed and what needs referral.",
        ],
      },
      {
        heading: "What research suggests",
        paragraphs: [
          "Research summarized by the National Center for Complementary and Integrative Health suggests acupuncture may reduce the frequency of migraines and tension headaches for some people. Evidence varies by condition, study design, treatment schedule, and comparison group. Results are not a guarantee for an individual patient.",
          "Springwell uses acupuncture as one part of care. We may also discuss movement, rest, stress regulation, dental or physical therapy coordination, and the need to review medications with a qualified clinician.",
        ],
      },
      {
        heading: "Red flags come first",
        paragraphs: [
          "A sudden severe headache, new neurologic symptoms, fainting, fever with neck stiffness, vision loss, head injury, or a major change from your usual pattern needs prompt medical attention. Seek urgent care instead of scheduling acupuncture for those symptoms.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Chronic Pain and Complementary Health Approaches: Usefulness and Safety.",
      "National Institute of Neurological Disorders and Stroke. Headache: hope through research and clinical evaluation.",
    ],
  },
  {
    id: "neck-back-muscle-pain",
    category: "Pain management · Musculoskeletal care",
    title: "Neck, back, and muscle pain: building a more useful care plan",
    summary: "A practical look at how pain, movement, sleep, workload, and muscle tension can be considered together.",
    readTime: "5 min read",
    image: "/images/service-acupuncture.png",
    imageAlt: "Acupuncture treatment representing neck, back, and muscle pain care",
    related: "/specialist#pain-management",
    sections: [
      {
        heading: "The painful area is only the starting point",
        paragraphs: [
          "Neck, back, and muscle pain can be influenced by more than the place that hurts. We ask how symptoms change with movement, sitting, exercise, sleep, stress, workload, and previous injury. We also look at whether the pain is local, spreading, recurring, or changing over time.",
          "This does not mean every pain symptom has one hidden cause. It means a useful plan should match the way the symptom behaves in your life—not only the body part named on a form.",
        ],
      },
      {
        heading: "Where acupuncture may fit",
        paragraphs: [
          "Acupuncture may be considered as supportive care for muscle tension, persistent or recurring discomfort, and pain that affects movement or sleep. Treatment is selected around the presentation and may be combined with movement, physical therapy, ergonomic changes, dental care, or medication review when appropriate.",
          "The first goal is usually practical: move more comfortably, sleep with less interruption, reduce the intensity or frequency of symptoms, or make another part of the rehabilitation plan easier to follow.",
        ],
      },
      {
        heading: "Safety and referral come first",
        paragraphs: [
          "New weakness, progressive numbness, loss of bladder or bowel control, fever, unexplained weight loss, major trauma, chest pain, or severe sudden pain needs prompt medical evaluation. Acupuncture should complement appropriate care—not delay it.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Chronic Pain and Complementary Health Approaches: Usefulness and Safety.",
      "National Institute of Neurological Disorders and Stroke. Low Back Pain: causes, evaluation, and treatment overview.",
    ],
  },
  {
    id: "cupping",
    category: "Fire cupping",
    title: "Fire cupping for muscle tension: what the marks mean",
    summary: "What traditional cupping is intended to support, why circular marks appear, and how safety screening shapes the treatment.",
    readTime: "5 min read",
    image: "/images/service-cupping.jpg",
    imageAlt: "Glass cups placed on the back during traditional cupping",
    related: "/services/cupping",
    sections: [
      {
        heading: "A traditional view of warmth and movement",
        paragraphs: [
          "In Traditional Chinese Medicine, tightness, aching, heaviness, and a feeling of restriction may be described as a pattern in which Qi and Blood are not moving freely. Fire cupping is traditionally used to bring warmth and a sense of movement to selected areas of tension.",
          "In everyday language, patients often choose cupping for tight neck and shoulders, overworked muscles, back stiffness, or a desire for a warming treatment. It can be used alone or alongside acupuncture when appropriate.",
        ],
      },
      {
        heading: "Cupping marks are not toxins leaving the body",
        paragraphs: [
          "The round marks are a temporary skin response to suction and local changes in blood flow. Their color and duration vary with skin, pressure, time, and individual response. A darker mark does not prove that more toxins were removed or that the treatment was more successful.",
          "Most marks fade over several days. Tell the practitioner if you have easily irritated skin, an active rash, an infection, significant bruising, or any concern about how your skin may respond.",
        ],
      },
      {
        heading: "When cupping may not be appropriate",
        paragraphs: [
          "We screen for bleeding risk, anticoagulant use, skin conditions, pregnancy-related considerations, recent procedures, and other factors before treatment. Cupping should not be placed over broken, infected, or irritated skin. It is not emergency care and does not replace evaluation for serious pain or injury.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Cupping. Consumer information and safety overview.",
      "Wang YT, et al. Effect of pressures and durations of cupping therapy on skin blood flow responses. Journal of Alternative and Complementary Medicine. 2021.",
    ],
  },
  {
    id: "stress-sleep-digestion",
    category: "Stress · Sleep",
    title: "Stress, sleep, and the body’s recovery rhythm",
    summary: "Why stress and sleep are often discussed together—and how acupuncture can be framed as supportive care rather than a promise of instant relaxation.",
    readTime: "5 min read",
    image: "/images/service-cupping.jpg",
    imageAlt: "Warm cupping treatment in a quiet setting",
    related: "/specialist#stress-sleep-digestion",
    sections: [
      {
        heading: "The goal is not to make stress disappear",
        paragraphs: [
          "Stress is part of life, but a body that stays activated can make it harder to relax, sleep, digest, and recover. Patients may notice a racing mind at bedtime, shallow breathing, muscle tension, fatigue, or changes in appetite and bowel habits.",
          "A first visit looks at the full pattern: when symptoms started, what the nights look like, caffeine and medication use, movement, digestion, hormonal changes, and whether anxiety or low mood needs additional support.",
        ],
      },
      {
        heading: "What acupuncture may support",
        paragraphs: [
          "Acupuncture may be used as part of a plan for relaxation, stress-related muscle tension, and sleep disruption. Evidence for acupuncture in insomnia is still limited and variable; studies differ in treatment methods and many are small or low quality. We therefore focus on measurable goals such as falling asleep, waking less, pain-related sleep disruption, or feeling more rested.",
          "Acupuncture is not a replacement for cognitive behavioral therapy for insomnia, evaluation of sleep apnea, medication review, or mental-health care. When those services are needed, coordination is part of responsible care.",
        ],
      },
      {
        heading: "Small changes can be clinically useful",
        paragraphs: [
          "A useful plan may include a consistent wake time, a short wind-down routine, less screen stimulation before bed, daytime movement, and a clear follow-up question: what changed, and what did not? We keep recommendations practical so they can fit a real schedule.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Sleep Disorders and Complementary Health Approaches: Usefulness and Safety. Updated May 2024.",
      "American Academy of Sleep Medicine. Behavioral and psychological treatments for chronic insomnia disorder in adults: clinical practice guideline.",
    ],
  },
  {
    id: "digestive-support",
    category: "Digestive support",
    title: "Bloating, constipation, and stress-sensitive digestion",
    summary: "How an acupuncture consultation can organize digestive symptoms while keeping red flags and medical evaluation in view.",
    readTime: "6 min read",
    image: "/images/service-herbal-medicine.jpg",
    imageAlt: "Traditional herbs prepared for an individualized digestive consultation",
    related: "/specialist#stress-sleep-digestion",
    sections: [
      {
        heading: "Digestive symptoms deserve a careful history",
        paragraphs: [
          "Bloating, constipation, diarrhea, cramping, reflux, nausea, and reduced appetite can have many causes. We ask about timing, meals, stool pattern, pain, stress, sleep, menstrual cycle, medications, supplements, and prior testing. That information helps separate a supportive acupuncture conversation from a need for medical evaluation.",
          "In Chinese medicine, digestion is considered together with energy, appetite, stool, sleep, and emotional strain. This pattern-based language can guide treatment, but it does not diagnose inflammatory bowel disease, celiac disease, obstruction, infection, or other medical conditions.",
        ],
      },
      {
        heading: "What the evidence shows",
        paragraphs: [
          "Research on acupuncture for irritable bowel syndrome is mixed. Studies comparing acupuncture with sham treatment have not shown a consistent specific benefit, while some comparisons with medication report different results. This is why we describe acupuncture as supportive care and avoid promising that it will “fix” digestion.",
          "Treatment may be considered alongside nutrition, primary care, gastroenterology, pelvic-floor, or mental-health support when appropriate. The plan should match the cause and severity of the symptoms.",
        ],
      },
      {
        heading: "Red flags should not wait",
        paragraphs: [
          "Seek medical evaluation for blood in the stool, black stool, unexplained weight loss, persistent vomiting, fever, severe or worsening abdominal pain, dehydration, jaundice, anemia, or a sudden lasting change in bowel habits. These are not symptoms to manage only with acupuncture or herbs.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Irritable Bowel Syndrome and Complementary Health Approaches: What the Science Says.",
      "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. American Journal of Gastroenterology. 2021;116:17–44.",
    ],
  },
  {
    id: "herbal-safety",
    category: "Herbal medicine",
    title: "Chinese herbal medicine: why individualized safety matters",
    summary: "Herbal formulas are not automatically gentle or interchangeable. Learn what to review before using one for digestion, women’s health, stress, or sleep.",
    readTime: "6 min read",
    image: "/images/service-herbal-medicine.jpg",
    imageAlt: "Dried herbs and prepared ingredients for a formula consultation",
    related: "/services/herbal-medicine",
    sections: [
      {
        heading: "A formula is not the same as a supplement aisle product",
        paragraphs: [
          "Traditional herbal medicine uses combinations of ingredients selected for a person’s pattern, not just a single symptom. The formula, dose, preparation, duration, and follow-up all matter. A product that seems appropriate for one person may be wrong for another.",
          "At a consultation, we review medications, supplements, allergies, pregnancy or fertility treatment, planned procedures, health history, and the symptoms that need attention. If the safety picture is unclear, the right answer may be to wait or coordinate with another clinician.",
        ],
      },
      {
        heading: "Interactions and product quality are real concerns",
        paragraphs: [
          "Herbal products can have side effects and can interact with prescription medicines. Quality and identity also matter; contamination, substitution, undeclared ingredients, and inaccurate labeling have been reported in some products. “Natural” does not mean risk-free.",
          "Do not start an herbal product during IVF, pregnancy, breastfeeding, or before a procedure without telling the relevant medical team. Do not stop a prescribed medication because an herbal product feels more natural.",
        ],
      },
      {
        heading: "When herbs are not the first step",
        paragraphs: [
          "Severe, new, or unexplained symptoms need appropriate medical evaluation first. Herbal medicine should not be used to delay care for bleeding, chest pain, severe abdominal pain, jaundice, neurologic symptoms, or other urgent concerns. A safe plan is often a coordinated plan.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Traditional Chinese Medicine: What You Need To Know. Updated April 2019.",
      "National Center for Complementary and Integrative Health. Herb–Drug Interactions: What Clinicians Need to Know.",
    ],
  },
  {
    id: "first-acupuncture-visit",
    category: "Getting started",
    title: "What to expect at your first acupuncture visit",
    summary: "A simple walkthrough of the conversation, assessment, treatment, and next-step planning at Springwell.",
    readTime: "4 min read",
    image: "/images/chinese-medicine-consultation.jpg",
    imageAlt: "Patient consultation and pulse assessment in Traditional Chinese Medicine",
    related: "/book",
    sections: [
      {
        heading: "The first visit starts with your story",
        paragraphs: [
          "We begin with the concern that brought you in, then widen the lens. Depending on your goals, we may discuss cycle timing, fertility treatment, pain location and triggers, sleep, stress, digestion, medications, and relevant medical or dental care.",
          "Traditional Chinese medicine assessment may include observation of the tongue and palpation of the pulse. These findings are used alongside your health history—not instead of it—to shape a focused treatment plan.",
        ],
      },
      {
        heading: "Treatment is explained before it begins",
        paragraphs: [
          "If acupuncture is appropriate, we explain the points and sensations you may notice. Needles are sterile and single-use. You may feel a brief pinch, warmth, heaviness, tingling, or a dull sensation. You can ask for an adjustment or stop at any time.",
          "Depending on your plan, treatment may also include fire cupping or a discussion of herbal medicine. Each service has its own safety screening, and you should share medications, supplements, pregnancy status, bleeding risk, and recent procedures.",
        ],
      },
      {
        heading: "You leave with a reasonable next step",
        paragraphs: [
          "A first visit is not a promise of a long series. We discuss what to notice, when to follow up, and whether coordination or referral is needed. The goal is for you to understand what we are working on and why.",
        ],
      },
    ],
    references: [
      "National Center for Complementary and Integrative Health. Acupuncture: Effectiveness and Safety. Updated October 2022.",
      "National Center for Complementary and Integrative Health. 6 Things To Know When Selecting a Complementary Health Practitioner.",
    ],
  },
];

export default function BlogPage() {
  const schema = posts.map((post) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    image: `${"https://springwellacu.com"}${post.image}`,
    author: { "@type": "Person", name: "Renjinming Dai" },
    publisher: { "@type": "Organization", name: "Springwell Acupuncture" },
    mainEntityOfPage: `${"https://springwellacu.com"}/blog#${post.id}`,
  }));

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.journalHero}>
        <div className="container">
          <p>Evidence, perspective, and practical guidance</p>
          <h1>SpringWell Acupuncture Blog</h1>
          <nav className={styles.journalTabs} aria-label="Blog topics">
            <a className={styles.activeTab} href="#evidence-insights">All</a>
            <a href="#fertility-evidence">Fertility</a>
            <a href="#pain-evidence">Pain Relief</a>
            <a href="#stress-evidence">Stress &amp; Sleep</a>
            <a href="#patient-guides">Patient Guides</a>
          </nav>
        </div>
      </header>
      <section className={styles.featuredSection} id="evidence-insights" aria-labelledby="evidence-insights-title">
        <div className="container">
          <div className={styles.collectionHeading}>
            <p className="eyebrow">Evidence &amp; Insights</p>
            <h2 id="evidence-insights-title">Research updates for fertility, pain, and stress.</h2>
            <nav className={styles.topicPills} aria-label="Evidence topics">
              <a href="#fertility-evidence">Fertility</a>
              <a href="#pain-evidence">Pain</a>
              <a href="#stress-evidence">Stress</a>
            </nav>
          </div>
          <div className={styles.evidenceArchive}>
            <section className={styles.evidenceTopic} id="fertility-evidence" aria-labelledby="fertility-evidence-title">
              <header className={styles.evidenceTopicHeading}>
                <p>01</p>
                <h3 id="fertility-evidence-title">Fertility</h3>
                <span>IVF, conception, and reproductive health research</span>
              </header>
              <div className={styles.evidenceList}>
                <article className={styles.evidenceRow}>
                  <div className={styles.evidenceDate}><time dateTime="2026-08-25">Aug 25, 2026</time><span>10 min read</span></div>
                  <div>
                    <p className="eyebrow">IVF · Meta analysis</p>
                    <h4><Link href="/blog/acupuncture-embryo-quality-ivf-meta-analysis-2026">Can Acupuncture Support Embryo Quality During IVF?</Link></h4>
                    <p>A 2026 meta analysis examining embryo quality, fertilization, oocyte quality, and treatment timing.</p>
                  </div>
                  <Link className={styles.evidenceArrow} href="/blog/acupuncture-embryo-quality-ivf-meta-analysis-2026" aria-label="Read the IVF research article"><ArrowIcon /></Link>
                </article>
              </div>
            </section>
            <section className={styles.evidenceTopic} id="pain-evidence" aria-labelledby="pain-evidence-title">
              <header className={styles.evidenceTopicHeading}>
                <p>02</p>
                <h3 id="pain-evidence-title">Pain</h3>
                <span>Migraine, musculoskeletal pain, and function research</span>
              </header>
              <div className={styles.evidenceList}>
                <article className={styles.evidenceRow}>
                  <div className={styles.evidenceDate}><time dateTime="2026-08-25">Aug 25, 2026</time><span>8 min read</span></div>
                  <div>
                    <p className="eyebrow">Migraine · Meta analysis</p>
                    <h4><Link href="/blog/acupuncture-migraine-meta-analysis-2025">Can Acupuncture Reduce Migraine Days?</Link></h4>
                    <p>A 2025 meta analysis of 23 randomized trials examining migraine frequency, duration, and quality of life.</p>
                  </div>
                  <Link className={styles.evidenceArrow} href="/blog/acupuncture-migraine-meta-analysis-2025" aria-label="Read the migraine research article"><ArrowIcon /></Link>
                </article>
              </div>
            </section>
            <section className={styles.evidenceTopic} id="stress-evidence" aria-labelledby="stress-evidence-title">
              <header className={styles.evidenceTopicHeading}>
                <p>03</p>
                <h3 id="stress-evidence-title">Stress</h3>
                <span>Anxiety, sleep, and stress regulation research</span>
              </header>
              <div className={styles.evidenceList}>
                <article className={styles.evidenceRow}>
                  <div className={styles.evidenceDate}><time dateTime="2026-08-25">Aug 25, 2026</time><span>8 min read</span></div>
                  <div>
                    <p className="eyebrow">Anxiety · Meta analysis</p>
                    <h4><Link href="/blog/acupuncture-anxiety-meta-analysis-2026">Can Acupuncture Support Anxiety Symptoms?</Link></h4>
                    <p>A 2026 meta analysis of 20 randomized trials examining short term anxiety outcomes and follow up.</p>
                  </div>
                  <Link className={styles.evidenceArrow} href="/blog/acupuncture-anxiety-meta-analysis-2026" aria-label="Read the anxiety research article"><ArrowIcon /></Link>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className={"section-pad blog-section " + styles.guidesSection} id="patient-guides" aria-labelledby="patient-guides-title">
        <div className="container blog-list">
          <div className={styles.collectionHeading}>
            <p className="eyebrow">Patient guides</p>
            <h2 id="patient-guides-title">Practical guidance, when you need it.</h2>
            <p>Concise introductions to common questions about acupuncture and supportive care.</p>
          </div>
          <div className={styles.guideGrid}>
            {posts.map((post) => (
              <article className={styles.guideCard} id={post.id} key={post.id}>
                <div className={styles.guideImage}>
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 44vw" />
                </div>
                <div className={styles.guideCopy}>
                  <div className={styles.guideMeta}><span>{post.category}</span><span>{post.readTime}</span></div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <details className={styles.guideDetails}>
                    <summary>Read guide</summary>
                    <div className={styles.guideExpanded}>
                      {post.sections.map((section) => (
                        <section key={section.heading}>
                          <h4>{section.heading}</h4>
                          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </section>
                      ))}
                      <Link className="text-link" href={post.related}>Explore related care <ArrowIcon /></Link>
                      <div className={styles.guideSources}>
                        <h4>Sources used for this guide</h4>
                        <ol>{post.references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
                      </div>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <div className="blog-disclaimer">
            <strong>Educational note:</strong> These articles are for general education and do not diagnose or treat an individual condition. Acupuncture, cupping, and herbal medicine should not replace emergency care, appropriate medical evaluation, or prescribed treatment.
          </div>
          <div className="blog-contact-band">
            <div>
              <p className="eyebrow">Have a question?</p>
              <h2>Bring the topic to your first visit.</h2>
            </div>
            <Link className="button button-secondary" href="/contact">Contact Springwell <ArrowIcon /></Link>
          </div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
