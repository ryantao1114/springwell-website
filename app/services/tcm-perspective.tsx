import Image from "next/image";
import { ArrowIcon } from "../components/icons";
import { site } from "../config/site";
import styles from "./tcm-perspective.module.css";

export function TcmPerspective() {
  return (
    <section className={styles.section} aria-labelledby="tcm-perspective-title">
      <div className={styles.inner}>
        <h2 className={styles.title} id="tcm-perspective-title">
          A thoughtful view of Traditional Chinese Medicine
        </h2>

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.copyBlock}>
              <h3>A long clinical tradition</h3>
              <p>
                Rooted in thousands of years of practice and refined through
                generations of observation, Traditional Chinese Medicine
                continues to support health and well-being in our modern world.
              </p>
            </div>

            <div className={styles.copyBlock}>
              <h3>A whole-person perspective</h3>
              <p>
                TCM looks beyond isolated symptoms to understand the patterns,
                lifestyle, and circumstances that influence your health. The
                goal is to restore balance, build resilience, and support your
                body’s natural capacity to heal.
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
            <h3>Individualized care</h3>
            <p>
              Treatments such as acupuncture, cupping, and herbal medicine are
              personalized to your unique needs. Your care plan is designed
              with intent and, when appropriate, coordinated with other
              healthcare providers to support your overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
