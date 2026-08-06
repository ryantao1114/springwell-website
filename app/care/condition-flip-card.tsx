"use client";

import { useState } from "react";
import type { ConditionDetail } from "./care-data";

type Props = { title: string; detail: ConditionDetail };

export function ConditionFlipCard({ title, detail }: Props) {
  const [flipped, setFlipped] = useState(false);
  return <button className={`condition-flip-card${flipped ? " is-flipped" : ""}`} type="button" onClick={() => setFlipped((value) => !value)} aria-pressed={flipped}>
    <span className="condition-flip-inner">
      <span className="condition-flip-face condition-flip-front">
        <img src={detail.image} alt={detail.imageAlt} />
        <span className="condition-flip-front-shade" />
        <span className="condition-flip-label"><small>Condition</small><strong>{title}</strong><em>View symptoms &amp; support</em></span>
      </span>
      <span className="condition-flip-face condition-flip-back">
        <span><small>Symptoms</small><strong>{detail.symptoms}</strong></span>
        <span><small>How acupuncture may help</small><strong>{detail.how}</strong></span>
        <em>← Turn back</em>
      </span>
    </span>
  </button>;
}
