import Image from "next/image";
import { ArrowIcon } from "../../components/icons";
import { site } from "../../config/site";
import styles from "./service-explainer-cards.module.css";

const cards = [
  {
    label: "How Acupuncture May Help",
    copy: "Acupuncture may help manage pain, ease muscle tension, support mobility, and promote relaxation. It may also complement care for stress, sleep, digestive concerns, and menstrual or reproductive wellness. Treatment is tailored to your symptoms, health history, and goals.",
    image: {
      src: "/images/acupuncture-card-help.webp",
      alt: "Electroacupuncture clips connected to fine acupuncture needles",
      position: "center 50%",
    },
  },
  {
    label: "What to Expect",
    copy: "Your first visit begins with a conversation about your health history, current concerns, and treatment goals. Your practitioner will select individualized acupuncture points and gently place fine needles while you rest comfortably. Based on your condition and treatment goals, electroacupuncture or cupping may also be included. Your treatment plan may be adjusted over time according to your needs and response.",
    image: {
      src: "/images/acupuncture-card-expect.webp",
      alt: "Acupuncturist gently placing a needle during a back treatment",
      position: "center 43%",
    },
  },
  {
    label: "Safety & Comfort",
    copy: "Treatment is provided by a licensed acupuncturist using sterile, single-use needles. Most patients feel little or no discomfort, although temporary soreness, mild bruising, heaviness, or tingling may occur. Your health history is reviewed, and each technique is adjusted for your safety and comfort.",
    image: {
      src: "/images/acupuncture-card-safety.webp",
      alt: "Patient resting comfortably during a licensed acupuncture treatment",
      position: "center 46%",
    },
  },
] as const;

export function ServiceExplainerCards() {
  return (
    <section className={styles.section} aria-labelledby="acupuncture-explainer-title">
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">A thoughtful approach to care</p>
          <h2 id="acupuncture-explainer-title">How acupuncture care comes together.</h2>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
              <article className={styles.card} key={card.label}>
                <div className={styles.image}>
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 680px) calc(100vw - 64px), (max-width: 1050px) calc(50vw - 52px), 390px"
                    style={{ objectPosition: card.image.position }}
                  />
                </div>

                <div className={styles.content}>
                  <h3>{card.label}</h3>
                  <p>{card.copy}</p>
                  <a
                    className={`button button-light ${styles.button}`}
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Book an acupuncture appointment: ${card.label}`}
                  >
                    BOOK NOW <ArrowIcon />
                  </a>
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}
