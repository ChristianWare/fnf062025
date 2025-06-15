"use client";

import styles from "./ServicesHero.module.css";
import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayoutWrapper from "@/components/LayoutWrapper";
import Button from "@/components/Button/Button";

gsap.registerPlugin(ScrollTrigger);

const Silk = dynamic(() => import("../../../../components/Silk/Silk"), {
  ssr: false,
});

export default function ServicesHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const el = headingRef.current;
    if (!el) return;
    gsap.set(el, { visibility: "visible" });
    const split = new SplitType(el, { types: "words", lineClass: styles.line });
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
            <h1 ref={headingRef} className={styles.heading}>
              E-Commerce <br /> Services Built <br /> for Growth
            </h1>
            <p className={styles.copy}>
              Explore my services and pricing that adapt to your project while
              keeping things transparent and simple.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='tanOutline'
                text='Get in touch'
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
