import Image from "next/image";
import styles from "./cycle-treatment-section.module.css";

const stages = [
  {
    title: "Menstruation",
    days: "Day 1–5",
    image: "/images/womens-cycle/menstruation.webp",
    tone: "rose",
    focus: "Pain, cramping, heavy flow, clots, headaches, digestive changes.",
  },
  {
    title: "Follicular Phase",
    days: "Day 6–13",
    image: "/images/womens-cycle/follicular.webp",
    tone: "sage",
    focus: "Rebuilding, supporting follicular development, boosting energy and vitality.",
  },
  {
    title: "Ovulation",
    days: "Day 14–16",
    image: "/images/womens-cycle/ovulation.webp",
    tone: "gold",
    focus: "Pelvic circulation, ovulatory function, reducing tension or discomfort.",
  },
  {
    title: "Luteal Phase",
    days: "Day 17–28",
    image: "/images/womens-cycle/luteal.webp",
    tone: "lavender",
    focus: "PMS, breast tenderness, sleep, mood changes, preparing for the next period or possible implantation.",
  },
] as const;

function CycleConnector() {
  return (
    <svg className={styles.connector} viewBox="0 0 160 46" aria-hidden="true">
      <path d="M4 35C47 6 110 6 151 28" />
      <path d="m143 18 10 11-14 5" />
    </svg>
  );
}

export function CycleTreatmentSection() {
  return (
    <section className={styles.section} aria-labelledby="cycle-treatment-title">
      <div className="container">
        <div className={styles.heading}>
          <p className="eyebrow">The Springwell approach</p>
          <h2 id="cycle-treatment-title">Treatment Changes With Your Cycle</h2>
          <p>
            At Springwell, a core principle of women&apos;s health care is adjusting
            treatment dynamically throughout the menstrual cycle.
          </p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.cycleGrid}>
            {stages.map((stage, index) => (
              <article className={styles.stage} key={stage.title}>
                <div className={styles.iconRow}>
                  <Image
                    src={stage.image}
                    alt=""
                    width={150}
                    height={150}
                    className={styles.icon}
                    unoptimized
                  />
                  {index < stages.length - 1 ? <CycleConnector /> : null}
                </div>
                <h3>{stage.title}</h3>
                <p className={styles.days}>{stage.days}</p>
                <div className={`${styles.focusCard} ${styles[stage.tone]}`}>
                  <span>Focus</span>
                  <p>{stage.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className={styles.summary}>
          <strong>
            Rather than using the same acupuncture points at every visit,
            treatment changes with your cycle, symptoms, and what your body needs
            at each stage.
          </strong>
        </p>
        <div className={styles.closing}>
          <span className={styles.closingLeaf} aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <path d="M24 40V17" />
              <path d="M24 25C14 24 9 18 9 9c9 0 15 5 15 16Z" />
              <path d="M24 31c10-1 15-7 15-16-9 0-15 5-15 16Z" />
            </svg>
          </span>
          <strong>Your treatment changes because your cycle changes.</strong>
        </div>
      </div>
    </section>
  );
}
