"use client";

import styles from "./WorkPageIntro.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Silk = dynamic(() => import("../../../../components/Silk/Silk"), { ssr: false });

export default function WorkPageIntro() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
  };

  useGSAP(() => {
    const animateText = (el: HTMLElement | null) => {
      if (!el) return;
      gsap.set(el, { visibility: "visible" });
      const split = new SplitType(el, {
        types: "words",
        lineClass: styles.line,
      });
      gsap.set(split.words, { y: 200, x: -200, opacity: 0 });
      gsap.to(split.words, {
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
    const cleanup = animateText(refs.heading.current);
    return () => cleanup && cleanup();
  });

  return (
    <section className={styles.container}>
      <div className={styles.silkBg}>
        <Silk
          speed={4}
          scale={1.4}
          color='#7B7481'
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>
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
