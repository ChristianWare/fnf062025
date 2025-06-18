"use client";

import styles from "./Support.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import Plus from "@/icons/Plus/Plus";
import { useState } from "react";

const data = [
  {
    id: 1,
    feature: "Discovery & Goal Setting",
    desc: "→ A 30-minute call and analytics audit to uncover revenue targets, customer pain points, and technical constraints before a single pixel is designed.",
  },
  {
    id: 2,
    feature: "Blueprint & Roadmap",
    desc: "→ We draft a detailed project spec, site architecture, and timeline so you know exactly what’s being built, why it matters, and when each milestone ships.",
  },
  {
    id: 3,
    feature: "UX & UI Prototype",
    desc: "→ In Figma you’ll click through every screen—complete with micro-interactions—ensuring the user journey converts before we write production code.",
  },
  {
    id: 4,
    feature: "Full-Stack Development",
    desc: "→ Our engineers turn the prototype into a headless Shopify + Next.js storefront, integrating 3PLs, CRMs, and payment gateways for launch-ready functionality.",
  },
  {
    id: 5,
    feature: "Launch & Growth Optimization",
    desc: "→ After QA and performance tuning, we go live, monitor Core Web Vitals, and run quick-win A/B tests to squeeze added revenue in the first 30 days.",
  },
];

export default function Support() {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: number) => setSelected(selected === i ? null : i);

  return (
    <section className={styles.container}>
      <ScrollVelocity texts={["Our Process •", "Our Process •"]} className='' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              From discovery to launch.
              <br />
              <span className={styles.headingSpan}>
                Every step of your website journey is covered by a single person
              </span>
            </h2>
            <div className={styles.dataMapContainer}>
              {data.map((item, i) => (
                <div
                  key={item.id}
                  className={
                    selected === i
                      ? `${styles.card} ${styles.showBorder}`
                      : styles.card
                  }
                  onClick={() => toggle(i)}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.title}>
                      <span className={styles.index}>{i + 1}.</span>
                      {item.feature}
                    </div>
                    {selected === i ? (
                      <Plus className={styles.iconFlip} />
                    ) : (
                      <Plus className={styles.icon} />
                    )}
                  </div>

                  {/* Answer block */}
                  <div
                    className={
                      selected === i
                        ? `${styles.answerContainer} ${styles.show}`
                        : styles.answerContainer
                    }
                  >
                    <p className={styles.answer}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
