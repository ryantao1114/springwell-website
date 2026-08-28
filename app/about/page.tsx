import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, CheckIcon } from "../components/icons";
import { CurrencyMark } from "../components/currency-mark";
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
          <h2>New patients receive <CurrencyMark />50 off their first visit.</h2>
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
              I’m Renjinming, a licensed acupuncturist with formal training in both Chinese and Western medicine and advanced training in Traditional Chinese Medicine gynecology.
            </p>
            <p>
              My journey with acupuncture and Traditional Chinese Medicine began at <strong>Hunan University of Chinese Medicine</strong>, where I completed five years of comprehensive training in both Chinese and Western medicine. My education included two years of clinical internship and rotations across a wide range of hospital departments, from Traditional Chinese Medicine Gynecology to Orthopedics.
            </p>
            <p>
              During those years, I became especially interested in women’s health. That interest led me to pursue graduate training at <strong>Nanjing University of Chinese Medicine, China’s oldest and leading universities of Chinese medicine</strong>, where I earned a master’s degree in <strong>Traditional Chinese Medicine Gynecology</strong>.
            </p>
            <p>
              During my graduate training, I completed three years of structured clinical training at <strong>Jiangsu Province Hospital of Chinese Medicine</strong> within a hospital based gynecology setting. Fertility was a major focus of my training, alongside menstrual disorders and other women’s health concerns. I cared for patients at many different stages of their reproductive journey, from those trying to conceive naturally to those undergoing IUI and IVF, and saw how acupuncture and Traditional Chinese Medicine could be thoughtfully integrated with modern gynecologic and reproductive care.
            </p>
            <p>
              From my training and practice in China to my work today, I have seen firsthand the value of combining Acupuncture and the Traditional Chinese Medicine with modern fertility care.
            </p>
            <p>
              My clinical background is also complemented by research experience in <strong>women’s health, reproductive medicine, and neuroscience in both China and the United States</strong>. Research has taught me to ask not only what has traditionally been done, but also what may be happening physiologically, what the evidence can tell us, and where important questions still remain. That scientific perspective continues to shape the way I think about acupuncture and Chinese medicine within modern healthcare.
            </p>
            <p>
              Today, that integrative perspective guides the way I practice at <strong>SpringWell Acupuncture</strong>. <strong>I listen closely to your concerns and look at the bigger picture through an integrative lens.</strong> I do not believe in a one-size-fits-all treatment plan. Whether we are working with fertility and IVF, menstrual health, pain, stress, sleep, or digestive concerns, treatment is adjusted to who you are, how you are feeling, and what your body needs at that point in time. Outside the clinic, I enjoy traveling, spending time outdoors, cooking, and discovering new foods.
            </p>
            <p>
              <strong>I’m grateful you’re considering Springwell as part of your health journey, and I look forward to supporting you along the way.</strong>
            </p>
            <div className="provider-specialty-links" aria-label="Explore specialist care">
              <Link href="/care/womens-health">Women’s Health</Link>
              <Link href="/care/fertility-ivf-support">Fertility &amp; IVF Support</Link>
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
            <h2>Care that is specific, respectful, and responsive to you.</h2>
          </div>
          <div className="about-standards-list">
            <div><CheckIcon /><p><strong>Specific</strong><br />Your plan follows your symptoms, timing, goals, and response.</p></div>
            <div><CheckIcon /><p><strong>Responsive</strong><br />Your treatment evolves as your symptoms, schedule, and goals change.</p></div>
            <div><CheckIcon /><p><strong>Clear</strong><br />We explain how each service may support your comfort, function, recovery, and wellbeing.</p></div>
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
            <iframe title={`Map showing ${site.name} at ${site.address}`} src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

    </PageShell>
  );
}
