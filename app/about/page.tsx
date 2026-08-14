import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { PageShell } from "../components/site-shell";
import { site } from "../config/site";

export const metadata: Metadata = {
  title: "About Springwell | Modern Acupuncture in Northern Virginia",
  description:
    "Learn about Springwell Integrative Acupuncture in Herndon, Virginia, and Renjinming Dai’s thoughtful approach to acupuncture and Chinese medicine.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="about-modern-hero" aria-labelledby="about-title">
        <div className="container about-modern-hero-grid">
          <div className="about-modern-hero-card">
            <p className="eyebrow">About Springwell</p>
            <h1 id="about-title">Traditional depth.<br />Modern perspective.<br />Personal care.</h1>
            <p>Springwell Integrative Acupuncture is a modern acupuncture and Chinese medicine clinic in Herndon, Virginia. We serve Herndon, Reston, Northern Virginia, and the greater DMV region with thoughtful, individualized care.</p>
            <a className="button button-dark" href={site.bookingUrl} target="_blank" rel="noreferrer">Book now <ArrowIcon /></a>
          </div>
          <div className="about-modern-hero-media">
            <Image
              src="/images/about-springwell-user.webp"
              alt="Acupuncture meridian model representing Springwell’s traditional and modern approach"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="about-offer" aria-label="New patient offer">
        <div className="container">
          <p className="eyebrow">A simple place to begin</p>
          <h2>New patients receive 💲50 off their first visit.</h2>
          <p>Explore a thoughtful first step for women’s health, fertility and IVF support, pain, stress, sleep, and digestive concerns.</p>
          <a className="button button-primary offer-inline-button" href={site.bookingUrl} target="_blank" rel="noreferrer">Claim your offer <ArrowIcon /></a>
        </div>
      </section>

      <section className="about-acupuncture-section" id="acupuncture" aria-labelledby="about-acupuncture-title">
        <div className="container about-acupuncture-grid">
          <div className="about-acupuncture-media">
            <Image src="/images/about-acupuncture-user.webp" alt="Traditional acupuncture model marked with meridian points" fill sizes="(max-width: 860px) 100vw, 44vw" style={{ objectFit: "cover", objectPosition: "center 42%" }} />
          </div>
          <div className="about-acupuncture-copy">
            <p className="eyebrow">About acupuncture</p>
            <h2 id="about-acupuncture-title">What is acupuncture?</h2>
            <p className="about-acupuncture-lead">A traditional therapy studied through a modern lens.</p>
            <p>Acupuncture uses very fine, sterile needles at carefully selected points on the body. The gentle sensory input may influence pain processing, muscle tone, local tissue response, and autonomic regulation.</p>
            <p>At Springwell, acupuncture is individualized around your symptoms, history, goals, and response. Traditional assessment—including careful questions, tongue observation, and pulse evaluation—helps shape a focused treatment plan.</p>
            <div className="about-acupuncture-points">
              <div><strong>Individualized</strong><span>Points and techniques are selected for your pattern and needs.</span></div>
              <div><strong>Supportive</strong><span>Care can complement medical, fertility, dental, or mental-health treatment.</span></div>
              <div><strong>Thoughtful</strong><span>Your comfort, safety, and response guide each visit.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-benefits" aria-labelledby="benefits-title">
        <div className="container">
          <h2 id="benefits-title">Benefits Of Acupuncture</h2>
          <div className="about-benefits-grid">
            {[
              ["/images/benefits/pain.webp", "Helps Manage Pain"],
              ["/images/benefits/muscle-tension.webp", "Eases Muscle Tension"],
              ["/images/benefits/stress-regulation.webp", "Supports Stress Regulation"],
              ["/images/benefits/mobility-function.webp", "Supports Mobility & Function"],
              ["/images/benefits/menstrual-reproductive.webp", "Supports Menstrual & Reproductive Wellness"],
              ["/images/benefits/care.webp", "Complements Your Care"],
              ["/images/benefits/digestive-comfort.webp", "Supports Digestive Comfort"],
            ].map(([icon, label]) => <div className="about-benefit" key={label}><span className="about-benefit-icon" style={{ aspectRatio: "1 / 1" }}><Image src={icon} alt="" width={220} height={220} sizes="150px" style={{ objectFit: "cover", borderRadius: "50%" }} /></span><p>{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad provider-section" id="provider">
        <div className="container provider-grid">
          <div className="provider-portrait provider-portrait-image">
            <Image
              src="/images/provider-renjinming-2026.webp"
              unoptimized
              alt="Renjinming Dai, licensed acupuncturist at Springwell"
              fill
              sizes="(max-width: 860px) 100vw, 42vw"
            />
            <div className="provider-caption">Renjinming Dai<br />L.Ac. · Dipl. Ac.</div>
          </div>
          <div className="provider-copy">
            <h2>Meet Your Acupuncturist</h2>
            <div className="provider-name-row">
              <h3 className="provider-name">Renjinming Dai</h3>
              <a
                className="provider-linkedin provider-linkedin-compact"
                href="https://www.linkedin.com/in/renjinming-d-6086122a6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Renjinming Dai on LinkedIn"
              >
                <span aria-hidden="true">in</span>
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="credentials">Licensed Acupuncturist in Virginia · Diplomate of Acupuncture (NCCAOM)</p>
            <p className="provider-lead">
              Renjinming Dai brings together formal Chinese medicine education, hospital-based clinical training, and research experience in China and the United States.
            </p>
            <p>
              She earned a master’s degree in Traditional Chinese Medicine Gynecology from Nanjing University of Chinese Medicine and completed three years of structured clinical training at Jiangsu Province Hospital of Chinese Medicine. Her research background includes women’s health, reproductive medicine, and neuroscience.
            </p>
            <p>
              Renjinming has a particular interest in menstrual and hormonal concerns, fertility and IVF support, pain, stress, sleep difficulties, and digestive health. Her approach combines careful listening, individualized assessment, and traditional diagnostic methods such as tongue and pulse evaluation.
            </p>
            <p>
              Outside the clinic, she enjoys traveling, spending time outdoors, cooking, and discovering new foods.
            </p>
            <div className="provider-specialty-links" aria-label="Explore specialist care">
              <Link href="/specialist#fertility-ivf">Women’s Health &amp; Fertility</Link>
              <Link href="/specialist#pain-management">Pain Management</Link>
              <Link href="/specialist#orofacial-pain">TMJ &amp; Orofacial Pain</Link>
              <Link href="/specialist#stress-sleep-digestion">Stress, Sleep &amp; Digestion</Link>
            </div>
          </div>
        </div>

        <div className="container provider-research" aria-labelledby="representative-work-title">
          <div>
            <p className="eyebrow">Representative research</p>
            <h3 id="representative-work-title">Research across biology, neuroscience, and women’s health.</h3>
          </div>
          <div className="provider-research-list">
            <article>
              <p>Dai R, Tao R, Li X, Shang T, Zhao S, Ren Q.</p>
              <p>Expression profiling of mRNA and functional network analyses of genes regulated by human papilloma virus E6 and E7 proteins in HaCaT cells.</p>
              <span>Frontiers in Microbiology. 2022;13:979087.</span>
            </article>
            <article>
              <p>Ge X, Dai R, et al.</p>
              <p>In Vivo Cytosolic Delivery of Biomolecules into Neurons for Super-Resolution Imaging and Genome Modification.</p>
              <span>Advanced Science. 2025;12(25):e2501033.</span>
            </article>
          </div>
        </div>

        <div className="container xia-note" id="xia-guicheng-tradition">
          <div className="xia-note-media" style={{ minHeight: 520 }}>
            <Image
              src="/images/womens-health-specialty.webp"
              alt="Four women resting together in warm afternoon light"
              fill
              sizes="(max-width: 860px) 100vw, 44vw"
              style={{ objectFit: "cover", objectPosition: "center 32%" }}
            />
          </div>
          <div className="xia-note-copy">
            <p className="eyebrow light">Women’s Health Specialty</p>
            <h3>Specialized Training in Traditional Chinese Medicine Gynecology</h3>
            <p>A rhythm-centered perspective on women’s health.</p>
            <p>
              Renjinming’s master’s education and hospital-based clinical training placed particular emphasis on menstrual health, fertility, and reproductive care. During her training, she learned from clinicians carrying forward the academic approach of TCM Master Xia Guicheng, whose work emphasized the phases and rhythms of the menstrual cycle and individualized pattern differentiation.
            </p>
            <p>
              At Springwell, this perspective informs an individualized approach that considers menstrual cycle patterns, symptoms, health history, lifestyle, and reproductive goals. Care is supported by careful history-taking, clear communication, and appropriate coordination with other healthcare professionals.
            </p>
          </div>
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

      <section className="section-pad about-location-section" id="location">
        <div className="container about-location-grid">
          <div>
            <p className="eyebrow">Visit Springwell</p>
            <h2>Thoughtful care in Herndon, Virginia.</h2>
            <p>Our clinic is located at <strong>{site.address}</strong>. We welcome patients from Herndon, Reston, Northern Virginia, and the greater DMV region.</p>
            <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">Book Your Visit <ArrowIcon /></a>
          </div>
          <div className="about-map-wrap">
            <iframe title="Map showing Springwell Acupuncture at 463 Carlisle Dr., Room 4, Herndon, Virginia" src="https://www.google.com/maps?q=463+Carlisle+Dr,+Herndon,+VA+20170&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

    </PageShell>
  );
}
