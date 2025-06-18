"use client";

import styles from "./Support.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import Plus from "@/icons/Plus/Plus";
import { useState } from "react";

const data = [
  {
    id: 1,
    feature: "Dedicated Account Lead",
    desc: "→ From day one you’re paired with a single point of contact who knows your brand, answers questions within one business day, and keeps every task on track.",
  },
  {
    id: 2,
    feature: "Weekly Progress Check-Ins",
    desc: "→ Short video calls or Loom walkthroughs keep you updated on milestones, gather feedback early, and ensure there are zero surprise pivots at launch.",
  },
  {
    id: 3,
    feature: "Interactive Client Portal",
    desc: "→ A secure hub lets you review files, e-sign approvals, complete questionnaires, and chat with the team—available 24/7, all in one place.",
  },
  {
    id: 4,
    feature: "Hands-On Training & Handoff",
    desc: "→ We record step-by-step video tutorials and host a live training session so your staff can update products, run promos, and pull reports without us.",
  },
  {
    id: 5,
    feature: "Post-Launch Care & Iteration",
    desc: "→ Thirty days of complimentary support plus optional growth sprints for A/B tests and new features mean your store keeps improving, not just staying online.",
  },
];

export default function Support() {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: number) => setSelected(selected === i ? null : i);

  return (
    <section className={styles.container}>
      <ScrollVelocity
        texts={["End to end support •", "End to end support •"]}
        className='End to end support •'
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              From discovery to launch.
              <br />
              <span className={styles.headingSpan}>
                Every step of your website journey is supported in the following
                ways
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
