import Image from "next/image";
import type { ConditionDetail } from "./care-data";
import styles from "./womens-condition-cards.module.css";

type Props = {
  conditions: string[];
  details: Record<string, ConditionDetail>;
};

export function WomensConditionCards({ conditions, details }: Props) {
  return (
    <div className={styles.grid}>
      {conditions.map((condition) => {
        const detail = details[condition];

        return (
          <article className={styles.card} key={condition}>
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
                <span>How acupuncture may fit</span>
                <p>{detail.how}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
