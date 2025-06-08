"use client";

import styles from "./Focus.module.css";
// import Circle from "../Circle/Circle";
import LayoutWrapper from "../LayoutWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionIntro from "../SectionIntro/SectionIntro";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Img1 from '../../../public/images/aboutiv.jpg'

const data = [
  {
    id: 1,
    title: "AI at your service",
    description:
      "AI transformation designed to streamline your shift and enhance efficiency.",
  },
  {
    id: 2,
    title: "All-access pass",
    description:
      "Generate reports, run processes, submit service tickets and more–all using AI.",
  },
  {
    id: 3,
    title: "Relentless support",
    description:
      "Our comprehensive SLA ensures systems run smoothly and questions are answered promptly.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Focus() {
  const copyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!copyRef.current) return;

    gsap.set(copyRef.current, { visibility: "visible" });

    const split = new SplitType(copyRef.current, {
      types: "lines",
      lineClass: styles.line,
    });

    /* scroll-scrubbed timeline */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: copyRef.current, // watch the paragraph
        start: "top 80%", // when its top hits 90% of viewport
        end: "top 40%", // …animate until it reaches 40% (≈50 vh span)
        scrub: 3,
        // markers: true,
      },
    });

    tl.from(split.lines, {
      y: 200,
      x: -200,
      opacity: 0,
      stagger: 0.075,
      ease: "power4.out",
    });

    return () => {
      split.revert();
      tl.kill();
    };
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro title='About Us' />
          <h2 className={styles.heading}>
            Your Shortcut To Innovation Starts Here
          </h2>
        </div>
        <div className={styles.middle}>
          <p ref={copyRef} className={styles.copy}>
            Fonts & Footers exists exclusively for small to mid-sized businesses
            that sell physical products online. Whether you move five SKUs or
            five thousand, we concentrate on headless Shopify and custom Next.js
            storefronts that scale with you.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.mpaDataContent}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <ParallaxImage
            src={Img1}
            alt='Fonts & Footers office'
            title='Fonts & Footers'
            // color='tan'
            // border='taniiBorder'
          />
        </div>
      </LayoutWrapper>
    </section>
  );
}
