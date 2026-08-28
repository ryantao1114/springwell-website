import Image from "next/image";
import type { ConditionDetail } from "./care-data";
import styles from "./womens-condition-cards.module.css";

type Props = {
  conditions: string[];
  details: Record<string, ConditionDetail>;
  detailed?: boolean;
};

export function WomensConditionCards({ conditions, details, detailed = false }: Props) {
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
                sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
              />
            </div>
            <div className={styles.content}>
              <h3>{condition}</h3>
              <p>{detail.symptoms}</p>
              <div className={styles.support}>
                <span>{detail.approachLabel ?? "How acupuncture may fit"}</span>
                {detail.how.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
