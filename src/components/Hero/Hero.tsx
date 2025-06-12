"use client";

import styles from "./Hero.module.css";

import { useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import LayoutWrapper from "../LayoutWrapper";
import FalseButton from "../FalseButton/FalseButton";
import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";
// import Image from "next/image";
// import Img1 from "../../../public/images/speed.jpg";

gsap.registerPlugin(ScrollTrigger);

/*  load Silk only on the client to avoid SSR issues  */
const Silk = dynamic(() => import("../Silk/Silk"), { ssr: false });

export default function Hero() {
  /* ───────── refs for GSAP ───────── */
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  /* ───────── hero animations ─────── */
  useGSAP(() => {
    /* fade-in overlay while scrolling  */
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

    /* split & animate headline words  */
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

  /* ───────── modal state ─────────── */
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  /* ───────── render ──────────────── */
  return (
    <section className={styles.container}>
      {/* flowing shader background */}
      <div className={styles.silkBg}>
        <Silk
          speed={5}
          scale={1.2}
          color='#7B7481'
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* dark overlay that fades with scroll */}
      <div className={styles.overlay} ref={refs.overlay} />

      {/* main hero content */}
      <LayoutWrapper>
        <div className={styles.content}>
          {/* left column ------------------------------------------------ */}
          <div className={styles.left}>
            <div className={styles.headingClip}>
              <h1 ref={refs.heading} className={styles.heading}>
                We Build <br />
                Blazing fast <br />
                Online Stores
              </h1>
            </div>

            <p className={styles.copy}>
              Fonts &amp; Footers builds lightning-fast, revenue-driven online
              stores for small and medium-sized brands. Every line of code is
              written with one purpose: turning casual browsers into loyal
              buyers.
            </p>

            <div className={styles.btnContainer}>
              <FalseButton
                text='Get Started'
                btnType='primary'
                marquee
                onClick={openModal}
              />
              <FalseButton
                text='Book A Call'
                btnType='tanOutline'
                onClick={openModal}
              />
            </div>
          </div>

          {/* right column ------------------------------------------------ */}
          <div className={styles.right}>
            {/* <div className={styles.imgContainer}>
              <Image
                src={Img1}
                fill
                alt=''
                title=''
                className={styles.img}
                placeholder='blur'
              />
            </div> */}
          </div>
        </div>
      </LayoutWrapper>

      {/* contact modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </section>
  );
}
