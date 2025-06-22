"use client";

import styles from "./Hero.module.css";

import { useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import LayoutWrapper from "../LayoutWrapper";
import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import SectionIntro from "../SectionIntro/SectionIntro";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

const Silk = dynamic(() => import("../Silk/Silk"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  useGSAP(() => {
    if (refs.overlay.current) {
      gsap.fromTo(
        refs.overlay.current,
        { opacity: 0 },
        {
          opacity: 0.7,
          scrollTrigger: {
            trigger: refs.overlay.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

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

  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <section className={styles.container}>
      <div className={styles.silkBg}>
        <div className={styles.navContainer}>
          <Nav />
        </div>
        <Silk
          speed={5}
          scale={1.2}
          color='#7B7481'
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className={styles.overlay} ref={refs.overlay} />

      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionIntro
                title='FONTS & FOOTERS'
                color='tan'
                dotColor='tanDot'
              />
            </div>
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                We Build 
                Blazing fast 
                Online Stores
              </h1>
            </div>

            <p className={styles.copy}>
              Fonts &amp; Footers builds lightning-fast, revenue-driven online
              stores for small and medium-sized brands.
            </p>
            <div className={styles.btnContainer}>
              <Button href={"/"} btnType='tanOutline' text='view Projects' />
              <Button href={"/"} btnType='primary' text='Get Started' />
            </div>
          </div>

          {/* <div className={styles.right}></div> */}
        </div>
      </LayoutWrapper>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </section>
  );
}
