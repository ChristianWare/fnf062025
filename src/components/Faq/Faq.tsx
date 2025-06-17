/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import styles from "./Faq.module.css";
import React, { useEffect, useRef, useState } from "react";
import Arrow from "@/icons/Plus/Plus";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Img1 from "../../../public/images/aboutpage.jpg";
import { questions } from "@/lib/data";

const cardsData = [
  { id: 1, title: "Frequently" },
  { id: 2, title: "Asked" },
  { id: 3, title: "Questions" },
];

export default function Faq() {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray<HTMLDivElement>(
      `.${styles.card}`,
      container
    );

    cards.forEach((card, i) => {
      if (i === 0) return;

      gsap.fromTo(
        card,
        { marginTop: 0 },
        {
          marginTop: "-150px",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      {cardsData.map((card, index) => (
        <Card key={card.id} title={card.title} index={index} />
      ))}
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image src={Img1} fill alt='' title='' className={styles.img} />
          </div>
        </div>
        <div className={styles.bottom}>
          {" "}
          {questions.map((x, i) => (
            <div
              key={x.id}
              className={
                selected === i
                  ? styles.qaContainer + " " + styles.showBorder
                  : styles.qaContainer
              }
              onClick={() => toggle(i)}
            >
              <div className={styles.headingArrowContainer}>
                <div className={styles.h3Container}>
                  <span className={styles.index}>{i + 1}. </span>
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                </div>
                {selected === i ? (
                  <Arrow className={styles.iconFlip} />
                ) : (
                  <Arrow className={styles.icon} />
                )}
              </div>
              <div
                className={
                  selected === i
                    ? styles.answerContainer + " " + styles.show
                    : styles.answerContainer
                }
              >
                <p className={styles.answer} lang='en'>
                  {x.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  index: number;
}

function Card({ title, index }: CardProps) {
  return (
    <div className={`${styles.card} ${styles["card" + (index + 1)]}`}>
      <div className={styles.cardInner}>
        <div className={styles.cardContent}>
          <h2 className={styles.titleHeading}>{title}</h2>
        </div>
      </div>
    </div>
  );
}
