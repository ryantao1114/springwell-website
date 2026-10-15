import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { BottomCTA, PageShell } from "../../components/site-shell";
import { site } from "../../config/site";
import styles from "../research-blog.module.css";

const slug = "/blog/adenomyosis-ivf-acupuncture";
const title = "Adenomyosis, IVF & Acupuncture: Endometrial Thickness Is Not the Whole Story";
const description = "Learn how adenomyosis may affect endometrial receptivity and implantation, and how cycle-based acupuncture can support patients during IVF and FET care.";
const published = "2026-10-15";
const heroImage = "/images/adenomyosis-ivf-pelvic-anatomy.jpg";
const heroImageAlt = "A practitioner explaining pelvic anatomy with an anatomical model during a consultation";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "adenomyosis IVF acupuncture",
    "adenomyosis fertility acupuncture",
    "endometrial receptivity",
    "FET acupuncture Herndon",
    "fertility acupuncture Northern Virginia",
  ],
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    type: "article",
    url: slug,
    publishedTime: published,
    authors: ["Renjinming Dai, L.Ac."],
    images: [{ url: heroImage, alt: heroImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
};

const humanReproductionUrl = "https://academic.oup.com/humrep/advance-article/doi/10.1093/humrep/deag160/8907194";
const humanReproductionDoi = "https://doi.org/10.1093/humrep/deag160";
const bmjOpenUrl = "https://bmjopen.bmj.com/content/14/7/e077025";
const bmjOpenDoi = "https://doi.org/10.1136/bmjopen-2023-077025";
const galatiPubMedUrl = "https://pubmed.ncbi.nlm.nih.gov/39666211/";
const galatiDoi = "https://doi.org/10.1007/s10815-024-03323-2";

export default function AdenomyosisIvfAcupunctureArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: new URL(heroImage, site.url).toString(),
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Person",
      name: "Renjinming Dai, L.Ac.",
      jobTitle: "Virginia Licensed Acupuncturist",
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: new URL("/images/springwell-official-logo.png", site.url).toString(),
      },
    },
    mainEntityOfPage: new URL(slug, site.url).toString(),
    citation: [humanReproductionDoi, bmjOpenDoi, galatiDoi],
    about: ["Adenomyosis", "In vitro fertilization", "Frozen embryo transfer", "Endometrial receptivity", "Acupuncture"],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className={styles.article}>
        <header className={styles.articleHero}>
          <div className={"container " + styles.articleHeroGrid}>
            <div className={styles.articleHeroCopy}>
              <Link className={styles.backLink} href="/blog#research">← Research &amp; Evidence</Link>
              <p className="eyebrow">Research update · Adenomyosis &amp; IVF</p>
              <h1>{title}</h1>
              <p className={styles.articleDeck}>New research is helping us understand how adenomyosis may affect endometrial receptivity and implantation—and why fertility care should look at more than lining thickness alone.</p>
              <div className={styles.articleByline}>
                <span>By Renjinming Dai, L.Ac.</span>
                <time dateTime={published}>October 15, 2026</time>
                <span>14 min read</span>
              </div>
            </div>
            <div className={styles.articleHeroImage}>
              <Image src={heroImage} alt={heroImageAlt} fill priority sizes="(max-width: 860px) 100vw, 42vw" />
            </div>
          </div>
        </header>

        <div className={"container " + styles.articleLayout}>
          <aside className={styles.articleAside}>
            <p className={styles.asideLabel}>In this article</p>
            <nav aria-label="Article sections">
              <a href="#adenomyosis">What is adenomyosis?</a>
              <a href="#ivf">Why it matters in IVF</a>
              <a href="#receptivity">Thickness vs. receptivity</a>
              <a href="#study">The 2026 study</a>
              <a href="#acupuncture">Cycle-based acupuncture</a>
              <a href="#fet">Adenomyosis and FET</a>
              <a href="#takeaway">The takeaway</a>
              <a href="#references">Research references</a>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <p className={styles.lead}>For many patients preparing for IVF or frozen embryo transfer, endometrial thickness becomes one of the numbers they watch most closely.</p>
            <p>Is 7 mm enough? Is 8 mm better? If the lining looks good on ultrasound, does that mean implantation should happen?</p>
            <p>Endometrial thickness matters, but it does not tell us everything about how the endometrium is functioning. This is especially relevant for patients with adenomyosis.</p>
            <p>Adenomyosis can contribute to painful periods, heavy bleeding, pelvic pressure, inflammation, altered uterine function, and changes within the endometrium itself. A 2026 study in <em>Human Reproduction</em> looked more closely at why the endometrium in adenomyosis may be less receptive even when lining thickness appears acceptable.</p>
            <p>At SpringWell Acupuncture, this fits with the way we approach fertility care. We do not look at one number or one treatment day in isolation. We look at the cycle, the symptoms, the fertility treatment plan, and where the patient is in that process.</p>

            <section id="adenomyosis">
              <h2>What Is Adenomyosis?</h2>
              <p>Adenomyosis occurs when endometrial-like glands and stromal tissue are found within the muscular wall of the uterus.</p>
              <p>Some patients have few symptoms. Others experience:</p>
              <ul>
                <li>Painful periods</li>
                <li>Heavy menstrual bleeding, clotting, prolonged bleeding, or spotting</li>
                <li>Pelvic pressure or aching</li>
                <li>Low-back discomfort around menstruation</li>
                <li>Fertility difficulties</li>
              </ul>
              <p>Adenomyosis and endometriosis are related conditions, but they are not the same. In endometriosis, endometrial-like tissue is located outside the uterus. In adenomyosis, this tissue is located within the uterine muscle.</p>
              <p>For fertility patients, that matters because implantation depends not only on embryo quality, but also on how well the uterus and endometrium respond during the implantation window.</p>
            </section>

            <section id="ivf">
              <h2>Why Adenomyosis Matters in IVF</h2>
              <p>Research has consistently shown that adenomyosis can affect reproductive outcomes. A 2024 systematic review and meta-analysis found lower clinical pregnancy rates in women with adenomyosis undergoing IVF/ICSI compared with women without adenomyosis.</p>
              <div className={styles.metricGrid}>
                <div><span>With adenomyosis</span><strong>42.5%</strong><small>Clinical pregnancy rate across included studies</small></div>
                <div><span>Without adenomyosis</span><strong>55.9%</strong><small>Clinical pregnancy rate across included studies</small></div>
                <div><span>Relative comparison</span><strong>OR 0.74</strong><small>95% CI 0.66–0.82</small></div>
              </div>
              <p>This does not mean every patient with adenomyosis will have difficulty implanting. It does show why adenomyosis deserves attention during IVF and FET planning.</p>
              <p>Implantation is not determined by one measurement. It depends on a sequence of events:</p>
              <blockquote>Endometrial growth → hormonal transition → progesterone exposure → decidualization → embryo–endometrium communication → implantation</blockquote>
              <p>A lining that looks adequate on ultrasound may still differ in how it responds to hormones and prepares for implantation.</p>
              <aside className={styles.interpretation}>
                <strong>How to read these numbers</strong>
                <p>The 2024 review pooled studies with different patient populations and treatment protocols. These group-level findings cannot predict an individual patient’s outcome, and decisions about IVF or FET protocols should be made with a reproductive endocrinologist.</p>
              </aside>
            </section>

            <section id="receptivity">
              <h2>Endometrial Thickness and Endometrial Receptivity Are Different</h2>
              <p>Ultrasound is essential during fertility treatment. It allows the fertility clinic to measure the endometrium, follow follicular development, and coordinate transfer timing.</p>
              <p>But endometrial thickness is mainly a structural measurement. Endometrial receptivity is functional.</p>
              <p>After ovulation—or after progesterone begins in a programmed FET cycle—the endometrium undergoes an important transformation called <strong>decidualization</strong>. During this process, endometrial stromal cells change their structure and function in preparation for implantation.</p>
              <p>So when we talk about receptivity, we are looking at more than thickness. We are also looking at:</p>
              <ul>
                <li>Hormonal responsiveness and progesterone timing</li>
                <li>Stromal-cell function and decidualization</li>
                <li>Immune activity and inflammatory signaling</li>
                <li>Embryo–endometrium synchronization</li>
              </ul>
            </section>

            <section id="study">
              <h2>Research Highlight: What Did the 2026 Study Find?</h2>
              <p>A 2026 study published in <em>Human Reproduction</em> examined why decidualization may be impaired in adenomyosis. The researchers used human endometrial samples, single-cell RNA sequencing, cellular experiments, and an adenomyosis model.</p>
              <p>They identified changes involving two important parts of the endometrial environment: stromal cells and macrophages. One population of stromal cells expressing FSP1 was increased in adenomyosis.</p>
              <p>The researchers found altered signaling involving:</p>
              <blockquote>GAS6 → MERTK → macrophage activity → TNF-α → stromal-cell senescence</blockquote>
              <p>The study suggests that this abnormal stromal-cell and macrophage interaction may increase cellular senescence and interfere with normal decidualization. Since decidualization is one of the key steps that prepares the endometrium for implantation, this gives researchers another possible explanation for why adenomyosis may affect embryo implantation.</p>
              <p>The practical message is simple: <strong>adenomyosis may affect how the endometrium functions, not just how thick it looks on ultrasound.</strong> That distinction matters during IVF and FET.</p>
              <aside className={styles.interpretation}>
                <strong>Important research limitation</strong>
                <p>This mechanistic study used a small human discovery cohort alongside laboratory and animal-model work. It helps explain a possible pathway, but it does not show that acupuncture changes the GAS6–MERTK–TNF-α pathway or improves implantation in adenomyosis.</p>
              </aside>
            </section>

            <section id="acupuncture">
              <h2>Acupuncture for Adenomyosis Is More Than “Increasing Blood Flow”</h2>
              <p>Fertility acupuncture is often described in very simple terms: “Acupuncture increases blood flow to the uterus.” That explanation leaves out much of what we actually see in practice.</p>
              <p>A patient with adenomyosis may be dealing with several issues at the same time:</p>
              <ul>
                <li>Painful menstruation, heavy bleeding, clotting, pelvic tension, or pressure</li>
                <li>Premenstrual discomfort, sleep disturbance, stress, or digestive changes</li>
                <li>IVF medications, endometrial preparation, and progesterone timing</li>
                <li>Embryo transfer and the emotional demands of fertility treatment</li>
              </ul>
              <p>For this reason, acupuncture care is not built around one goal such as “making the lining thicker.” The treatment focus depends on where the patient is in her cycle and where she is in fertility treatment.</p>
              <p>At one point, the main concern may be menstrual pain and heavy bleeding. Later, it may be recovery after menstruation. Later still, it may be FET preparation, progesterone timing, or transfer-day stress.</p>
              <p>The clinical question is not simply, “How thick is the lining?” A better question is: <strong>Where is the patient in her reproductive cycle, what symptoms are present now, and what is happening next in her fertility treatment?</strong></p>

              <h2>Research and Cycle-Based Acupuncture Can Work Together</h2>
              <p>Modern reproductive medicine is paying increasing attention to the timing and functional changes that occur across the menstrual cycle. Traditional Chinese Medicine has also long viewed the menstrual cycle as a sequence of changing phases rather than one static hormonal state.</p>
              <p>In clinical practice, we may consider the patient&apos;s menstrual pattern while also following information from her fertility clinic, including:</p>
              <ul>
                <li>Ultrasound monitoring and follicle measurements</li>
                <li>Hormone testing and stimulation protocols</li>
                <li>Trigger, progesterone, and embryo-transfer timing</li>
              </ul>
              <p>A patient preparing for IVF is not treated the same way as a patient preparing for FET. A patient in the menstrual phase is not treated the same way as a patient in the luteal phase. And a patient with painful, heavy adenomyosis periods may need a different approach from a patient whose main concern is implantation.</p>

              <h2>Why the Menstrual Cycle Still Matters</h2>
              <p>Adenomyosis is often highly cycle-dependent. Symptoms can change significantly across the month. Pain may begin before menstruation. Bleeding may be heavy during the first few days. Pelvic pressure may improve once the period ends. Then the hormonal environment changes again as the follicular phase progresses.</p>
              <p>For patients preparing for fertility treatment, following these changes over time gives useful clinical information. This is one reason we prefer to start fertility acupuncture before embryo transfer when possible. It gives us time to understand the patient&apos;s menstrual pattern, see when symptoms are most active, and adjust treatment as the reproductive cycle changes.</p>
              <p>When IVF or FET begins, acupuncture can then move with the fertility protocol rather than being introduced only at the final step.</p>
            </section>

            <section id="fet">
              <h2>Adenomyosis and FET: Why Timing Matters</h2>
              <p>Once embryos have already been created, the clinical focus shifts toward the uterus and transfer timing. For patients with adenomyosis, FET preparation may involve:</p>
              <ul>
                <li>Natural versus programmed FET</li>
                <li>Follicular development, LH surge, or hCG trigger in natural cycles</li>
                <li>Endometrial development and progesterone timing</li>
                <li>Transfer timing, pelvic symptoms, sleep, and stress</li>
              </ul>
              <p>This is where the difference between thickness and receptivity becomes especially important. A successful FET depends on more than reaching a target endometrial measurement.</p>
              <blockquote>Endometrial development → hormonal transition → progesterone exposure → decidualization → embryo transfer → implantation</blockquote>
              <p>That is why transfer timing, progesterone timing, and the overall endometrial environment are so important in fertility care.</p>

              <h2>The Bigger Picture</h2>
              <p>The 2026 <em>Human Reproduction</em> study gives us a more detailed look at what may be happening inside the endometrium in adenomyosis. It adds to a growing understanding that implantation is a functional biological process.</p>
              <p>The lining has to do more than grow. It has to respond. It has to transform. It has to communicate with the embryo. And all of this has to happen within the correct hormonal window.</p>
              <p>For patients with adenomyosis, that is an important distinction. It helps explain why a single ultrasound number cannot fully describe implantation potential.</p>

              <h2>A Cycle-Based Approach at SpringWell Acupuncture</h2>
              <p>At SpringWell Acupuncture, fertility care follows the patient&apos;s reproductive timeline:</p>
              <ul className={styles.sessionList}>
                <li><strong>Before IVF:</strong> menstruation → follicular phase → ovulation → luteal phase</li>
                <li><strong>During IVF:</strong> stimulation → trigger → egg retrieval</li>
                <li><strong>During FET:</strong> endometrial preparation → progesterone timing → embryo transfer</li>
              </ul>
              <p>The treatment focus changes as the physiology changes. For patients with adenomyosis, this allows us to work with recurring menstrual symptoms while also coordinating acupuncture around fertility treatment.</p>
            </section>

            <section id="takeaway">
              <h2>The Takeaway</h2>
              <p>For patients with adenomyosis undergoing IVF or FET, endometrial thickness is important, but it is not the whole story.</p>
              <p>Implantation depends on several factors working together: hormonal timing, endometrial development, stromal-cell function, immune signaling, decidualization, embryo quality, and embryo–endometrium synchronization.</p>
              <p>The newer research on adenomyosis is helping us better understand why the uterine environment may remain important even when the lining looks acceptable on ultrasound.</p>
              <p>For acupuncture, the practical message is similar: do not reduce fertility care to one number or one transfer day. At SpringWell Acupuncture, we use a cycle-based approach that follows the patient through the different stages of fertility care and adjusts treatment as those stages change.</p>

              <div className={styles.articleCta}>
                <div>
                  <p className="eyebrow">Fertility care in Herndon</p>
                  <h2>Plan support around your IVF or FET timeline.</h2>
                  <p>Schedule a consultation to discuss your cycle, symptoms, fertility protocol, and whether individualized acupuncture may fit alongside your medical care.</p>
                </div>
                <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a consultation <ArrowIcon /></a>
              </div>
            </section>

            <section className={styles.references} id="references">
              <h2>Research References</h2>
              <p>Wang X, et al. <em>FSP1+ stromal cell-associated macrophage efferocytosis contributes to impaired decidualization in adenomyosis.</em> Human Reproduction. Published October 10, 2026. DOI: 10.1093/humrep/deag160.</p>
              <div className={styles.referenceLinks}>
                <a href={humanReproductionUrl} target="_blank" rel="noreferrer">Human Reproduction</a>
                <a href={humanReproductionDoi} target="_blank" rel="noreferrer">DOI</a>
              </div>
              <p>Ge L, et al. <em>Effect of different treatment protocols on in vitro fertilisation/intracytoplasmic sperm injection outcomes in adenomyosis women: a systematic review and meta-analysis.</em> BMJ Open. 2024;14:e077025. DOI: 10.1136/bmjopen-2023-077025.</p>
              <div className={styles.referenceLinks}>
                <a href={bmjOpenUrl} target="_blank" rel="noreferrer">BMJ Open</a>
                <a href={bmjOpenDoi} target="_blank" rel="noreferrer">DOI</a>
              </div>
              <p>Galati G, et al. <em>Medical treatment before in-vitro fertilization in patients with adenomyosis: a systematic review and meta-analysis.</em> Journal of Assisted Reproduction and Genetics. 2025;42:381–388. DOI: 10.1007/s10815-024-03323-2.</p>
              <div className={styles.referenceLinks}>
                <a href={galatiPubMedUrl} target="_blank" rel="noreferrer">PubMed</a>
                <a href={galatiDoi} target="_blank" rel="noreferrer">DOI</a>
              </div>
              <p className={styles.disclaimer}>This article is for educational purposes and does not replace diagnosis or treatment from a reproductive endocrinologist, gynecologist, or other licensed medical professional. Acupuncture is complementary care and should be coordinated with your fertility team.</p>
            </section>
          </div>
        </div>
      </article>

      <BottomCTA />
    </PageShell>
  );
}
