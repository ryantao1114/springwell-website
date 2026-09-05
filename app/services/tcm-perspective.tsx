import Image from "next/image";
import { ArrowIcon } from "../components/icons";
import { site } from "../config/site";
import styles from "./tcm-perspective.module.css";

export function TcmPerspective() {
  return (
    <section className={styles.section} aria-labelledby="tcm-perspective-title">
      <div className={styles.inner}>
        <h2 className={styles.title} id="tcm-perspective-title">
          How Traditional Chinese Medicine shapes the visit
        </h2>

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.copyBlock}>
              <h3>More than the location of a symptom</h3>
              <p>
                Traditional Chinese Medicine looks for patterns across the body,
                not just the place that hurts. Sleep, digestion, temperature,
                menstrual changes, stress, energy, tongue appearance, and pulse
                quality may all add useful context when they are relevant to your concern.
              </p>
            </div>

            <div className={styles.copyBlock}>
              <h3>Traditional reasoning, used with modern safety</h3>
              <p>
                Traditional pattern assessment helps guide point selection, while
                medications, diagnoses, pregnancy status, recent procedures, and
                other medical care are reviewed for safety. The two perspectives
                are used together rather than treating them as competing systems.
              </p>
              <div className={styles.action}>
                <a
                  className="button button-light"
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  BOOK NOW <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.media}>
            <Image
              src="/images/tcm-perspective-model.webp"
              alt="Traditional Chinese Medicine acupuncture model with meridian points"
              fill
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1120px) 46vw, 42vw"
            />
          </div>

          <div className={`${styles.copyBlock} ${styles.rightColumn}`}>
            <h3>Why point selection can change</h3>
            <p>
              Two people with the same diagnosis may not receive exactly the same
              treatment, and your own point selection may change from visit to visit.
              What matters is the pattern of symptoms that is present that day and
              whether the plan is producing meaningful change over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
