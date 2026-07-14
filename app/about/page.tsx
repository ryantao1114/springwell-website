import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { BottomCTA, InteriorHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "About Springwell & Renjinming Dai",
  description:
    "Learn about Springwell Acupuncture, Traditional Chinese Medicine, and Virginia-licensed acupuncturist Renjinming Dai’s women’s health, fertility, and pain-focused clinical perspective.",
  alternates: { canonical: "/about" },
};

const endnotes = [
  "National Center for Complementary and Integrative Health. Traditional Chinese Medicine: What You Need To Know. Bethesda, MD: National Institutes of Health; updated April 2019.",
  "National Center for Complementary and Integrative Health. Acupuncture: Effectiveness and Safety. Bethesda, MD: National Institutes of Health; updated October 2022.",
  "Dai R, Tao R, Li X, Shang T, Zhao S, Ren Q. Expression profiling of mRNA and functional network analyses of genes regulated by human papilloma virus E6 and E7 proteins in HaCaT cells. Frontiers in Microbiology. 2022;13:979087.",
  "Ge X, Wekselblatt JB, Elmore S, Wang B, Wang T, Dai R, et al. In Vivo Cytosolic Delivery of Biomolecules into Neurons for Super-Resolution Imaging and Genome Modification. Advanced Science. 2025;12(25):e2501033.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="About Springwell"
        title="Traditional depth. Modern perspective. Personal care."
        text="Learn what Chinese medicine means in modern practice—and how Renjinming Dai’s clinical training, women’s health focus, and interdisciplinary education shape care at Springwell."
        image="/images/chinese-medicine-consultation.jpg"
      />

      <section className="section-pad medicine-intro" id="traditional-chinese-medicine">
        <div className="container medicine-intro-grid">
          <div className="medicine-intro-heading">
            <p className="eyebrow">Understanding Chinese medicine</p>
            <h2>Seeing the Pattern Behind Your Symptoms</h2>
            <Image
              className="medicine-intro-image"
              src="/images/chinese-medicine-consultation.jpg"
              alt="Traditional Chinese medicine practitioner taking a patient’s pulse"
              width={735}
              height={489}
            />
          </div>
          <div className="medicine-intro-copy">
            <p className="lead-copy">
              Chinese medicine is far more than “energy medicine.” It is a
              comprehensive clinical tradition built on centuries of observation
              and practice. It looks at how symptoms, body functions,
              constitution, and daily life relate to one another. Treatment may
              include acupuncture, Chinese herbal medicine, moxibustion, cupping,
              and personalized dietary and lifestyle guidance.<sup>[1]</sup>
            </p>
            <p>
              Rather than relying on a disease name alone, Traditional Chinese
              Medicine looks for patterns within the whole clinical picture.
              During a consultation, we consider what you are experiencing, when
              it began, what improves or aggravates it, related changes elsewhere
              in the body, and findings from traditional tongue and pulse
              examination. These details help us develop an individualized
              treatment plan.
            </p>
            <p>
              This reflects a longstanding principle of Chinese medicine: care
              pays attention not only to established illness, but also to early
              or recurring changes in how you feel and function. The goal is not
              to make every symptom sound mysterious. It is to understand the
              pattern clearly enough to choose a focused, practical next step.
            </p>
            <p>
              Today, Chinese medicine continues to evolve within modern
              healthcare. In China, it is taught at universities and practiced in
              hospitals, where traditional assessment may be considered alongside
              laboratory testing, medical imaging, and other conventional care.
              Complementary treatment should support—not delay—appropriate medical
              evaluation.<sup>[1]</sup>
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad acupuncture-explained" id="acupuncture">
        <div className="container acupuncture-grid">
          <div className="acupuncture-art-photo">
            <Image
              src="/images/acupuncture-treatment-hero.png"
              alt="Close-up of fine acupuncture needles being placed during treatment"
              fill
              sizes="(max-width: 860px) 100vw, 48vw"
            />
            <span>Acupuncture</span>
          </div>
          <div className="acupuncture-copy">
            <p className="eyebrow">What is acupuncture?</p>
            <h2>A traditional therapy studied through a modern lens.</h2>
            <p>
              Acupuncture uses very fine, sterile, single-use needles placed at
              selected points on the body. Modern research suggests that needle
              stimulation engages sensory nerves, connective tissue, and signaling
              pathways involved in pain processing, muscle tone, circulation, and
              autonomic regulation. It is not one single mechanism and it is not a
              substitute for an appropriate diagnosis.<sup>[2]</sup>
            </p>
            <div className="acupuncture-facts">
              <div><CheckIcon /><span>Sterile, single-use needles</span></div>
              <div><CheckIcon /><span>Individualized point selection</span></div>
              <div><CheckIcon /><span>May complement conventional care</span></div>
              <div><CheckIcon /><span>Comfort checked throughout treatment</span></div>
            </div>
            <Link className="text-link" href="/services/acupuncture">Explore acupuncture care <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad provider-section" id="provider">
        <div className="container provider-grid">
          <div className="provider-portrait provider-portrait-image">
            <Image
              src="/images/home-hero-care.jpg"
              alt="Hands-on pulse assessment in a calm clinical setting"
              fill
              sizes="(max-width: 860px) 100vw, 42vw"
            />
            <div className="provider-caption">Renjinming Dai<br />L.Ac. · Dipl. Ac.</div>
          </div>
          <div className="provider-copy">
            <p className="eyebrow">Meet your acupuncturist</p>
            <h2>Renjinming Dai</h2>
            <p className="credentials">Licensed Acupuncturist in Virginia · Diplomate of Acupuncture</p>
            <p className="provider-lead">
              Renjinming Dai is a Virginia-licensed, board-certified acupuncturist
              with advanced education in Traditional Chinese Medicine Gynecology
              and biomedical engineering. Her clinical formation in Chinese
              medicine included hospital-based training in China, with a focus on
              pattern differentiation, women’s health, reproductive wellbeing,
              and individualized treatment planning.
            </p>
            <p>
              She is especially interested in supporting women through the changing
              stages of reproductive health—from menstrual and hormonal concerns to
              fertility care, IVF support, and preparation for pregnancy. She also
              works with patients seeking focused support for jaw and facial pain,
              headaches, stress, sleep disruption, digestive concerns, and
              musculoskeletal tension.
            </p>
            <p>
              Renjinming’s scientific training shapes how she reads evidence,
              communicates uncertainty, and collaborates with other healthcare
              professionals. Her research experience includes molecular and
              biomedical projects in women’s disease research and neuroscience,
              giving her a practical bridge between traditional pattern-based care
              and the modern health information patients bring to the clinic.<sup>[3,4]</sup>
            </p>
            <div className="provider-specialty-links" aria-label="Explore specialist care">
              <Link href="/specialist#fertility-ivf">Women’s Health &amp; Fertility</Link>
              <Link href="/specialist#pain-management">Pain Management</Link>
              <Link href="/specialist#orofacial-pain">TMJ &amp; Orofacial Pain</Link>
              <Link href="/specialist#stress-sleep-digestion">Stress, Sleep &amp; Digestion</Link>
            </div>
          </div>
        </div>

        <div className="container provider-training-grid">
          <div>
            <p className="eyebrow">Clinical formation</p>
            <h3>Training that values both depth and clarity.</h3>
          </div>
          <div className="provider-training-list">
            <div><strong>M.S.</strong><span>Traditional Chinese Medicine Gynecology · Nanjing University of Chinese Medicine</span></div>
            <div><strong>M.S.</strong><span>Biomedical Engineering · United States</span></div>
            <div><strong>Dipl. Ac.</strong><span>Diplomate of Acupuncture · NCCAOM</span></div>
            <div><strong>L.Ac.</strong><span>Licensed Acupuncturist in Virginia</span></div>
          </div>
        </div>

        <div className="container xia-note" id="xia-guicheng-tradition">
          <p className="eyebrow light">A rhythm-centered perspective</p>
          <h3>Women’s health is not a collection of isolated symptoms.</h3>
          <p>
            Renjinming’s training in Chinese medicine gynecology emphasized the
            timing and rhythm of the menstrual cycle, changes across reproductive
            stages, and the value of individualized pattern differentiation. At
            Springwell, this perspective is paired with careful history-taking,
            appropriate referrals, and a treatment plan that stays understandable
            and practical.
          </p>
        </div>

        <div className="container provider-endnotes" id="provider-references">
          <div>
            <p className="eyebrow">References</p>
            <h3>Selected endnotes</h3>
          </div>
          <ol>
            {endnotes.map((note, index) => <li key={note} id={`endnote-${index + 1}`}>{note}</li>)}
          </ol>
        </div>
      </section>

      <section className="section-pad about-standards-section">
        <div className="container about-standards-grid">
          <div>
            <p className="eyebrow">What you can expect</p>
            <h2>Care that is specific, respectful, and honest about limits.</h2>
          </div>
          <div className="about-standards-list">
            <div><CheckIcon /><p><strong>Specific</strong><br />Your plan follows your symptoms, timing, goals, and response.</p></div>
            <div><CheckIcon /><p><strong>Collaborative</strong><br />We encourage coordination with your physicians, fertility team, dentist, or therapist.</p></div>
            <div><CheckIcon /><p><strong>Clear</strong><br />We explain what a service may support, what evidence can and cannot show, and when referral is important.</p></div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
