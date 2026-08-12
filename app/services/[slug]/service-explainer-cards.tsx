import Image from "next/image";
import { ArrowIcon } from "../../components/icons";
import { site } from "../../config/site";
import type { Service } from "../service-data";
import styles from "./service-explainer-cards.module.css";

type ServiceExplainerCardsProps = {
  service: Service;
};

const acupunctureImages = [
  {
    src: "/images/first-session-treatment.webp",
    alt: "Fine acupuncture needle being placed during treatment",
    position: "center 48%",
  },
  {
    src: "/images/first-session-assessment.webp",
    alt: "Acupuncturist discussing symptoms and treatment goals with a patient",
    position: "center 45%",
  },
  {
    src: "/images/first-session-rest.webp",
    alt: "Patient resting comfortably during an acupuncture session",
    position: "center 42%",
  },
] as const;

export function ServiceExplainerCards({ service }: ServiceExplainerCardsProps) {
  const cards = [
    { number: "01", label: service.primaryLabel, copy: service.primaryCopy },
    { number: "02", label: service.visitLabel, copy: service.visitCopy },
    { number: "03", label: service.safetyLabel, copy: service.safetyCopy },
  ];

  return (
    <section className={styles.section} aria-labelledby="acupuncture-explainer-title">
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">A thoughtful approach to care</p>
          <h2 id="acupuncture-explainer-title">How acupuncture care comes together.</h2>
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const image = acupunctureImages[index];

            return (
              <article className={styles.card} key={card.number}>
                <div className={styles.image}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 680px) calc(100vw - 64px), (max-width: 1050px) calc(50vw - 52px), 390px"
                    style={{ objectPosition: image.position }}
                  />
                </div>

                <div className={styles.content}>
                  <span className={styles.number}>{card.number}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
