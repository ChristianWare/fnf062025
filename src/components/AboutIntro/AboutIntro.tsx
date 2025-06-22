"use client";

import styles from "./AboutIntro.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntroArea from "../SectionIntroArea/SectionIntroArea";
import dynamic from "next/dynamic"; // ➊ NEW

// ➋ Dynamically load Silk (avoids SSR issues)
const Silk = dynamic(() => import("../Silk/Silk"), {
  ssr: false,
  loading: () => null,
});

const services = [
  { id: 1, name: "Full-Build Storefronts" },
  { id: 2, name: "Performance Rescue" },
  { id: 3, name: "Conversion Optimization & A/B Testing" },
  { id: 4, name: "Maintenance & Growth Partnership" },
];

// Same lightning-bolt mask you used before
const lightningMaskURI =
  "url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2027.793%2027.793'%3E%3Cpolygon%20fill='white'%20points='20.972%200%205.076%2015.803%2010.972%2015.803%206.44%2027.793%2022.716%2011.989%2016.819%2011.989'/%3E%3C/svg%3E\")";

export default function AboutIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* ───────────────────────────── LEFT SIDE ─────────────────────────── */}
        <div className={styles.left}>
          <LayoutWrapper>
            <div className={styles.leftContent}>
              <SectionIntroArea
                sectionTitle='Our Story'
                heading='About Fonts & Footers'
                copy='Founded by a team of e-commerce enthusiasts with backgrounds in both design and development, Fonts & Footers was born from the recognition that successful online stores require both beautiful aesthetics and robust functionality.'
                border='greyBorder'
              />

              <span className={styles.servicesHeading}>We Specialize in:</span>
              <ul className={styles.servicesContainer}>
                {services.map((x) => (
                  <li className={styles.service} key={x.id}>
                    {x.name}
                    <span className={styles.blackDot} />
                  </li>
                ))}
              </ul>
            </div>
          </LayoutWrapper>
        </div>

        {/* ───────────────────────────── RIGHT SIDE ────────────────────────── */}
        <div className={styles.right}>
          <div
            className={styles.silkContainer} /* ➌ NEW class */
            style={{
              WebkitMaskImage: lightningMaskURI,
              WebkitMaskPosition: "center",
              WebkitMaskSize: "cover",
              WebkitMaskRepeat: "no-repeat",
              maskImage: lightningMaskURI,
              maskPosition: "center",
              maskSize: "cover",
              maskRepeat: "no-repeat",
            }}
          >
            {/* ➍ The shader now fills the masked area */}
            <Silk
              speed={5}
              scale={1.2}
              color='#7B7481'
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
