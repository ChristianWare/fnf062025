"use client";

import styles from "./WorkPageIntro.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPageIntro() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  useGSAP(() => {
    const animateText = (el: HTMLElement | null, type: "words" | "lines") => {
      if (!el) return;
      gsap.set(el, { visibility: "visible" });

      const split = new SplitType(el, {
        types: type,
        lineClass: styles.line, // style below
      });

      const targets = type === "words" ? split.words : split.lines;

      gsap.set(targets, { y: 200, x: -200, opacity: 0 });

      gsap.to(targets, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => split.revert();
    };

    const cleanups = [animateText(refs.heading.current, "words")];

    return () => cleanups.forEach((c) => c && c());
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copy}>
              See how we&lsquo;ve transformed underperforming stores into
              revenue engines.
            </p>
          </div>
          <div className={styles.right}>
            <h1 ref={refs.heading} className={styles.heading}>
              Our work speaks <br /> for itself
            </h1>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
