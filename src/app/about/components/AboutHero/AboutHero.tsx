"use client";

import styles from "./AboutHero.module.css";
import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

gsap.registerPlugin(ScrollTrigger);

const Silk = dynamic(() => import("../../../../components/Silk/Silk"), {
  ssr: false,
});

export default function AboutHero() {
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
          <div className={styles.left} />
          <div className={styles.right}>
            <SectionIntro title='About Us' color='tan' dotColor='tanDot' />
            <h1 ref={refs.heading} className={styles.heading}>
              Meet us: <br /> Fonts &amp; Footers
            </h1>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
