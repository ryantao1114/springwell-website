"use client";

import Image from "next/image";
import imageStyles from "./mechanism-animation.module.css";

type MechanismAnimationProps = {
  kind: "acupuncture" | "cupping" | "herbal-medicine";
};

const content = {
  acupuncture: {
    eyebrow: "A simple view of the mechanism",
    title: "How acupuncture communicates with the body",
    copy: "A carefully selected point provides gentle sensory input. The nervous system receives that input and may respond through changes in pain processing, muscle tone, autonomic regulation, and local tissue response.",
    labels: ["Needle stimulation", "Sensory signalling", "Nervous system processing", "Local and whole-body responses"],
  },
  cupping: {
    eyebrow: "A simple view of the mechanism",
    title: "How cupping creates a local treatment signal",
    copy: "A controlled negative-pressure cup gently lifts the skin and superficial tissue. That local mechanical input may change sensation, muscle tone, and the way an area feels during movement.",
    labels: ["Gentle suction", "Local tissue", "Movement signal"],
  },
  "herbal-medicine": {
    eyebrow: "A simple view of the mechanism",
    title: "How an individualized formula is considered",
    copy: "A formula combines selected botanical ingredients in specific proportions. The plan is matched to the person, reviewed for interactions and safety, and adjusted as symptoms and response change.",
    labels: ["Selected herbs", "Body pathways", "Personalized plan"],
  },
} as const;

export function MechanismAnimation({ kind }: MechanismAnimationProps) {
  const playing = true;
  const item = content[kind];

  return (
    <section className={`mechanism-section mechanism-${kind} ${kind === "acupuncture" ? "mechanism-reference-section" : ""}`} aria-labelledby={`mechanism-title-${kind}`}>
      <div className="container mechanism-layout">
        <div className="mechanism-copy">
          <p className="eyebrow">{item.eyebrow}</p>
          <h2 id={`mechanism-title-${kind}`}>{item.title}</h2>
          <p>{item.copy}</p>
        </div>

        <div className={`mechanism-art ${playing ? "is-playing" : "is-paused"} ${kind === "acupuncture" ? "mechanism-reference-art" : ""}`} role="img" aria-label={`${item.title}. Animated medical line illustration.`}>
          {kind === "acupuncture" && <AcupunctureReferenceAnimation playing={playing} />}
          {kind === "acupuncture" ? (
            null
          ) : (
            <div className="mechanism-art-labels" aria-hidden="true">
              {item.labels.map((label, index) => <span key={label} className={`mechanism-label mechanism-label-${index + 1}`}>{label}</span>)}
            </div>
          )}
          {kind === "cupping" && <CuppingFeature />}
          {kind === "herbal-medicine" && <HerbalFeature />}
        </div>
      </div>
    </section>
  );
}

function CuppingFeature() {
  return <div className="mechanism-feature-visual">
    <Image className={`${imageStyles.featureImage} ${imageStyles.cuppingImage}`} src="/images/cupping-marks-overview.webp" alt="Temporary circular marks on the back following cupping" fill sizes="(max-width: 860px) calc(100vw - 48px), 55vw" />
  </div>;
}

function HerbalFeature() {
  return <div className="mechanism-feature-visual herbal-feature-visual">
    <Image className={`${imageStyles.featureImage} ${imageStyles.herbalImage}`} src="/images/herbal-medicine-user.webp" alt="Traditional Chinese herbs arranged for herbal medicine care" fill sizes="(max-width: 860px) calc(100vw - 48px), 55vw" />
    <div className="mechanism-feature-overlay"><span>01 · Symptoms</span><span>02 · Formula</span><span>03 · Review</span></div>
    <div className="mechanism-feature-caption"><strong>A formula that can change with you.</strong><small>Ingredients, proportions, interactions, and response are reviewed together.</small></div>
  </div>;
}

function AcupunctureReferenceAnimation({ playing }: { playing: boolean }) {
  return <div
    className="reference-animation"
    aria-label="Animated acupuncture mechanism illustration"
  >
    {/* The supplied reference image is the complete visual base. These transparent layers only animate its existing elements. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="reference-animation-base" src="/images/mechanism/acupuncture-communication-reference.png" alt="" />
    <svg className="reference-animation-overlay" viewBox="0 0 1672 704" preserveAspectRatio="none">
      <circle className="reference-ripple reference-ripple-one" cx="724" cy="450" r="23" />
      <circle className="reference-ripple reference-ripple-two" cx="724" cy="450" r="39" />
      <circle className="reference-signal-dot reference-signal-dot-one" r="5" />
      <circle className="reference-signal-dot reference-signal-dot-two" r="5" />
      <circle className="reference-signal-dot reference-signal-dot-three" r="5" />
      <circle className="reference-brain-pulse" cx="1265" cy="444" r="60" />
      <circle className="reference-outcome-pulse" cx="1500" cy="280" r="26" />
    </svg>
  </div>;
}

function CuppingDiagram() {
  return <svg className="mechanism-svg" viewBox="0 0 620 430" aria-hidden="true">
    <path className="diagram-outline" d="M72 270c64-44 123-44 184-6 56 35 106 39 165 2 46-29 83-30 129-5" />
    <path className="diagram-outline" d="M72 303c61-38 119-39 178-7 61 34 110 39 171 6 49-27 86-27 129-7" />
    <path className="diagram-tissue" d="M83 285c59-33 111-31 169-2 59 30 112 35 171 3 48-26 87-27 118-10" />
    <path className="diagram-cup" d="M260 119h116l-15 132c-3 25-19 39-43 39h-1c-24 0-40-14-43-39Z" />
    <path className="diagram-cup-top" d="M250 119c0-17 14-27 68-27s68 10 68 27-14 27-68 27-68-10-68-27Z" />
    <path className="diagram-suction" d="M276 163c26-18 55-18 84 0" />
    <path className="diagram-wave wave-one" d="M256 250c-52 23-82 26-119 8" />
    <path className="diagram-wave wave-two" d="M364 250c52 23 82 26 119 8" />
    <circle className="diagram-node node-one" cx="173" cy="263" r="7" />
    <circle className="diagram-node node-two" cx="447" cy="263" r="7" />
  </svg>;
}

function HerbalDiagram() {
  return <svg className="mechanism-svg" viewBox="0 0 620 430" aria-hidden="true">
    <path className="diagram-outline" d="M108 104c-26 52-28 125-4 181 18 41 59 68 112 66 54-2 87-29 104-72 20-50 18-114-8-175" />
    <path className="diagram-outline" d="M312 103c-25 44-27 127-7 179 18 46 51 67 102 69 55 2 91-27 109-72 22-55 17-124-10-178" />
    <path className="diagram-organ" d="M167 179c22 13 26 49 4 66-22 17-52 0-54-24-2-25 23-53 50-42Z" />
    <path className="diagram-organ" d="M394 205c-23-16-51-2-51 25 0 24 24 38 46 28 18-9 23-40 5-53Z" />
    <path className="diagram-vessel" d="M237 123c-31 35-30 77 1 106 29 27 42 62 22 103" />
    <path className="diagram-vessel" d="M357 123c31 35 30 77-1 106-29 27-42 62-22 103" />
    <circle className="diagram-herb herb-one" cx="299" cy="90" r="19" />
    <path className="diagram-herb-line" d="M299 109v57" />
    <path className="diagram-wave wave-one" d="M299 166c-36 31-49 67-35 103" />
    <path className="diagram-wave wave-two" d="M299 166c36 31 49 67 35 103" />
    <circle className="diagram-node node-one" cx="250" cy="286" r="7" />
    <circle className="diagram-node node-two" cx="348" cy="286" r="7" />
  </svg>;
}
