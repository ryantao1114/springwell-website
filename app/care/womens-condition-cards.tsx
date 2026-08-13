"use client";

import Image from "next/image";
import { useState } from "react";
import type { ConditionDetail } from "./care-data";
import styles from "./womens-condition-cards.module.css";

type Props = {
  conditions: string[];
  details: Record<string, ConditionDetail>;
};

export function WomensConditionCards({ conditions, details }: Props) {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className={styles.grid}>
      {conditions.map((condition) => {
        const detail = details[condition];
        const isOpen = openCard === condition;

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
              <div className={`${styles.support}${isOpen ? ` ${styles.supportOpen}` : ""}`}>
                <div>
                  <span>How acupuncture may fit</span>
                  <p>{detail.how}</p>
                </div>
              </div>
              <button
                className={styles.action}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenCard(isOpen ? null : condition)}
              >
                {isOpen ? "Hide support details" : "View symptoms & support"}
                <span aria-hidden="true">{isOpen ? "\u2191" : "\u2192"}</span>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
