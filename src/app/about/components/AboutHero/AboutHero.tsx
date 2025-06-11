"use client";

import styles from "./AboutHero.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
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
        lineClass: styles.line,
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
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <SectionIntro title='About Us' />
              <h1 ref={refs.heading} className={styles.heading}>
                Meet us: <br /> Fonts & Footers
              </h1>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
