import Image from "next/image";
import type { ConditionDetail } from "./care-data";
import styles from "./womens-condition-cards.module.css";

type Props = {
  conditions: string[];
  details: Record<string, ConditionDetail>;
  detailed?: boolean;
  symptomLabel?: string;
};

export function WomensConditionCards({ conditions, details, detailed = false, symptomLabel }: Props) {
  return (
    <div className={`${styles.grid} ${detailed ? styles.detailedGrid : ""}`}>
      {conditions.map((condition) => {
        const detail = details[condition];

        return (
          <article className={`${styles.card} ${detailed ? styles.detailedCard : ""}`} key={condition}>
            <div className={styles.media}>
              <Image
                src={detail.image}
                alt={detail.imageAlt}
                fill
                quality={100}
                unoptimized={detail.image.endsWith("-hd.webp")}
                sizes="(max-width: 560px) calc(100vw - 48px), (max-width: 860px) calc(50vw - 34px), 400px"
              />
            </div>
            <div className={styles.content}>
              <h3>{condition}</h3>
              {detail.symptoms && symptomLabel ? <span className={styles.symptomLabel}>{symptomLabel}</span> : null}
              {detail.symptoms ? <p>{detail.symptoms}</p> : null}
              <div className={styles.support}>
                <span>{detail.approachLabel ?? "How acupuncture may fit"}</span>
                {detail.howPoints ? <ul className={styles.howPoints}>{detail.howPoints.map((point)=><li key={point.label}><strong>{point.label}:</strong> {point.text}</li>)}</ul> : null}
                {detail.how.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
