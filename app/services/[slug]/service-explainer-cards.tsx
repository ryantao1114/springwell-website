import Image from "next/image";
import { ArrowIcon } from "../../components/icons";
import { site } from "../../config/site";
import type { Service } from "../service-data";
import styles from "./service-explainer-cards.module.css";

const acupunctureCards = [
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

const cuppingCards = [
  {
    label: "Traditional Chinese Medicine perspective",
    copy: "In Chinese medicine, aching, stiffness, and heaviness may reflect a pattern in which Qi and Blood are not moving freely. Fire cupping is traditionally used to ease this stagnation, dispel Cold and Dampness, and support a greater sense of ease and mobility.",
    image: {
      src: "/images/cupping-card-treatment.webp",
      alt: "Glass cups being placed during a cupping treatment",
      position: "center 48%",
    },
  },
  {
    label: "Why patients choose it",
    copy: "Fire cupping is often considered for areas that feel tight, sore, stiff, or heavy, especially when discomfort seems worse in cold or damp weather. It may be used on its own or combined with acupuncture based on your symptoms, preferences, and treatment plan.",
    image: {
      src: "/images/cupping-card-fire.webp",
      alt: "Traditional fire cupping preparation with a controlled flame",
      position: "center 43%",
    },
  },
  {
    label: "About cupping marks",
    copy: "Temporary circular marks are common after cupping and typically fade gradually over several days. In some cases, they may remain a little longer depending on the area and individual response. Your practitioner will check the skin before treatment, and cupping is avoided over broken, irritated, infected, or otherwise unsuitable areas.",
    image: {
      src: "/images/cupping-card-marks.webp",
      alt: "Temporary circular marks on the back after cupping",
      position: "center 48%",
    },
  },
] as const;

const herbalImages = [
  { src: "/images/herbal-medicine-user.webp", alt: "Individual Chinese herbal ingredients", position: "center 50%" },
  { src: "/images/chinese-medicine-consultation.webp", alt: "Traditional consultation with pulse assessment and herbs", position: "center 42%" },
  { src: "/images/service-herbal-medicine.jpg", alt: "Prepared Chinese herbal ingredients and powders", position: "center 44%" },
] as const;

type ServiceExplainerCardsProps = { service: Service };

export function ServiceExplainerCards({ service }: ServiceExplainerCardsProps) {
  const cards = service.slug === "acupuncture"
    ? acupunctureCards
    : service.slug === "cupping"
      ? cuppingCards
      : [
          { label: service.primaryLabel, copy: service.primaryCopy, image: herbalImages[0] },
          { label: service.visitLabel, copy: service.visitCopy, image: herbalImages[1] },
          { label: service.safetyLabel, copy: service.safetyCopy, image: herbalImages[2] },
        ];
  const heading = service.slug === "acupuncture"
    ? "How acupuncture care comes together."
    : service.slug === "cupping"
      ? "A closer look at fire cupping care."
      : "How herbal medicine care comes together.";

  return (
    <section className={styles.section} data-theme={service.slug} aria-labelledby={`${service.slug}-explainer-title`}>
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">A thoughtful approach to care</p>
          <h2 id={`${service.slug}-explainer-title`}>{heading}</h2>
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
                    aria-label={`Book a ${service.title.toLowerCase()} appointment: ${card.label}`}
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
