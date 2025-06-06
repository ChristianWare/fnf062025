"use client";

import styles from "./AboutIntro.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/aboutIntro.jpg";
import Image from "next/image";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const copyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!copyRef.current) return;

    gsap.set(copyRef.current, { visibility: "visible" });

    const split = new SplitType(copyRef.current, {
      types: "lines",
      lineClass: styles.line,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: copyRef.current,
        start: "top 90%",
        end: "top 40%",
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
      <div className={styles.content}>
        <div className={styles.left}>
          <LayoutWrapper>
            <div className={styles.leftContent}>
              <div className={styles.sectionHeadingContainer}>
                <SectionHeading2 title='About Us' color='tan' />
              </div>
              <p ref={copyRef} className={styles.heading}>
                Founded by a team of e-commerce enthusiasts with backgrounds in
                both design and development, Fonts & Footers was born from the
                recognition that successful online stores require both beautiful
                aesthetics and robust functionality.{" "}
              </p>
              <p className={styles.copy}>
                Our name represents this philosophy – &ldquo;Fonts&rdquo;
                symbolizes the design elements that create emotional connections
                with your customers, while &ldquo;Footers&rdquo; represents the
                solid technical foundation that supports your business growth.
              </p>
              <p className={styles.copy}>
                Since our founding, we&apos;ve helped businesses across various
                industries establish and grow their e-commerce presence, always
                with a focus on creating solutions that convert visitors into
                customers and customers into advocates.
              </p>
            </div>
          </LayoutWrapper>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image src={Img1} fill title='' alt='' className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}
