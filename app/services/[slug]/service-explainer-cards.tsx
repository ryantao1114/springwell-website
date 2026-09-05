import Image from "next/image";
import { ArrowIcon } from "../../components/icons";
import { site } from "../../config/site";
import type { Service } from "../service-data";
import styles from "./service-explainer-cards.module.css";

const acupunctureCards = [
  {
    label: "How Acupuncture Works",
    copy: "Acupuncture needles stimulate sensory nerves and local connective tissue. That input can influence how the nervous system processes pain, change muscle tone, affect local blood flow, and interact with systems involved in stress and recovery. No single pathway explains every effect, and the quality of evidence differs by condition — which is why treatment should have a clear goal rather than being used as a cure-all.",
    image: {
      src: "/images/acupuncture-card-help.webp",
      alt: "Electroacupuncture clips connected to fine acupuncture needles",
      position: "center 50%",
    },
  },
  {
    label: "What to Expect",
    copy: "Your first visit starts with the details that matter clinically: when symptoms began, what makes them better or worse, medications, recent procedures, sleep, digestion, stress, and menstrual or fertility treatment when relevant. Fine needles are then placed at selected points while you rest. Electroacupuncture or cupping may be added only when it fits the problem. Follow-up visits focus on what changed and what still needs attention.",
    image: {
      src: "/images/acupuncture-card-expect.webp",
      alt: "Acupuncturist gently placing a needle during a back treatment",
      position: "center 43%",
    },
  },
  {
    label: "What You May Notice",
    copy: "Some people leave feeling deeply relaxed. Others first notice practical changes over the next day or two, such as easier movement, less muscle tension, fewer symptom spikes, or better sleep. Long-standing problems may change more gradually. Response varies, so we look for measurable improvement over time rather than promising a result after a set number of visits.",
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
    ? "How acupuncture works, what happens, and what to watch for."
    : service.slug === "cupping"
      ? "A closer look at fire cupping care."
      : "How herbal medicine care comes together.";

  return (
    <section className={styles.section} data-theme={service.slug} aria-labelledby={`${service.slug}-explainer-title`}>
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">A clear look at treatment</p>
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
