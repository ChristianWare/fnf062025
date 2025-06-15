"use client";

import styles from "./FAQPageIntro.module.css";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import LayoutWrapper from "@/components/LayoutWrapper";
import Link from "next/link";
import { faqs } from "@/lib/data";

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface CardItem {
  id: number;
  title: string;
  icon: SVGComponent | string;
  href: string;
}

const cards: CardItem[] = faqs.map(({ id, title, icon }) => ({
  id,
  title,
  icon,
  href: "#",
}));

export default function FAQPageIntro() {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    copy: useRef<HTMLParagraphElement>(null),
  };

  useGSAP(() => {
    const animate = (el: HTMLElement | null, type: "words" | "lines") => {
      if (!el) return;
      gsap.set(el, { visibility: "visible" });

      const split = new SplitType(el, { types: type, lineClass: styles.line });
      const parts = type === "words" ? split.words : split.lines;

      gsap.set(parts, { y: 200, x: -200, opacity: 0 });
      gsap.to(parts, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2.5,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => split.revert();
    };

    const clean = [
      animate(refs.heading.current, "words"),
      animate(refs.copy.current, "lines"),
    ];
    return () => clean.forEach((c) => c && c());
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 
  const progressTl = useRef<gsap.core.Tween | null>(null); 
  const pausedRef = useRef(false); 
  const remainingRef = useRef(5000); 
  const startedTsRef = useRef<number>(Date.now()); 
  const scheduleNext = (delay = 5000) => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % cards.length);
    }, delay);
    startedTsRef.current = Date.now();
  };

  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(timeoutRef.current!);
  }, []);

  useEffect(() => {
    progressTl.current?.kill();
    gsap.set(`.${styles.progress}`, { scaleX: 0 });

    progressTl.current = gsap.fromTo(
      `.${styles.card}[data-idx="${activeIndex}"] .${styles.progress}`,
      { scaleX: 0 },
      { scaleX: 1, duration: 5, ease: "none", transformOrigin: "left" }
    );

    if (pausedRef.current) progressTl.current.pause();

    clearTimeout(timeoutRef.current!);
    if (!pausedRef.current) scheduleNext();
  }, [activeIndex]);

  const handlePause = () => {
    if (pausedRef.current) return;
    pausedRef.current = true;

    const elapsed = Date.now() - startedTsRef.current;
    remainingRef.current = Math.max(5000 - elapsed, 0);

    clearTimeout(timeoutRef.current!);
    progressTl.current?.pause();
  };

  const handleResume = () => {
    if (!pausedRef.current) return;
    pausedRef.current = false;

    progressTl.current?.resume();
    scheduleNext(remainingRef.current);
  };

  const rawIcon = cards[activeIndex].icon;
  const ActiveIcon =
    typeof rawIcon === "string" ? null : (rawIcon as SVGComponent);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h1 ref={refs.heading} className={styles.heading}>
                Frequently Asked <br />
                Questions
              </h1>
            </div>
            <div className={styles.right}>
              <p ref={refs.copy} className={styles.copy}>
                Explore answers to common inquiries about our workflow,
                timelines, and technology.
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div
              className={styles.bottomLeft}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            >
              {cards.map((item, idx) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${styles.card} ${
                    activeIndex === idx ? styles.active : ""
                  } `}
                  data-idx={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <h2 className={styles.title}>{item.title}</h2>
                  <span className={styles.progress} />
                </Link>
              ))}
            </div>
            <div className={styles.bottomRight}>
              {ActiveIcon && <ActiveIcon className={styles.icon} />}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
