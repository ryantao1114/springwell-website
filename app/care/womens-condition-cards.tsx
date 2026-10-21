import Image from "next/image";
import type { ConditionDetail } from "./care-data";
import styles from "./womens-condition-cards.module.css";

type Props = {
  conditions: string[];
  details: Record<string, ConditionDetail>;
  detailed?: boolean;
  symptomLabel?: string;
  womensLayout?: boolean;
};

function WomensHowIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="10"/><path d="M11 17c3 0 3-5 6-5 2 0 3 2 4 4"/><path d="M12 21c3-1 6-1 9 0"/></svg>;
}

export function WomensConditionCards({ conditions, details, detailed = false, symptomLabel, womensLayout = false }: Props) {
  return (
    <div className={`${styles.grid} ${detailed ? styles.detailedGrid : ""} ${womensLayout ? styles.womensGrid : ""}`}>
      {conditions.map((condition) => {
        const detail = details[condition];

        if (womensLayout) {
          return (
            <article className={`${styles.card} ${styles.womensCard}`} key={condition}>
              <div className={styles.womensHeading}>
                <h3>{condition}</h3>
                {detail.symptoms ? <p>{detail.symptoms}</p> : null}
              </div>
              <div className={styles.womensBody}>
                <div className={`${styles.media} ${styles.womensMedia}`}>
                  <Image
                    src={detail.image}
                    alt={detail.imageAlt}
                    fill
                    quality={100}
                    unoptimized
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 520px) 320px, (max-width: 700px) 36vw, (max-width: 1500px) 24vw, 220px"
                  />
                </div>
                <div className={`${styles.support} ${styles.womensSupport}`}>
                  <span>{detail.approachLabel ?? "How acupuncture may fit"}</span>
                  {detail.howPoints ? <ul className={styles.womensPoints}>{detail.howPoints.map((point)=><li key={point.label}><WomensHowIcon/><p><strong>{point.label}</strong>{point.text ? ` ${point.text}` : ""}</p></li>)}</ul> : <p>{detail.how}</p>}
                </div>
              </div>
            </article>
          );
        }

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
