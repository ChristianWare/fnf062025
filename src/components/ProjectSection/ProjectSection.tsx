"use client";

import styles from "./ProjectSection.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import LayoutWrapper from "../LayoutWrapper";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import Button from "../Button/Button";
import Thunder from "../../../public/images/thunder.jpg";
import Chuxly from "../../../public/images/chuxly.png";
import Honey from "../../../public/images/honey.jpg";
import Rentals from "../../../public/images/erRentals.png";
import Img3 from "../../../public/images/heroiii.jpeg";
import Arrow from "../../../public/icons/arrow.svg";
import gsap from "gsap";

const projectData = [
  {
    id: 1,
    title: "Thundertrails",
    type: <Arrow className={styles.icon} />,
    description: "Thundertrails",
    label: <Arrow className={styles.icon2} />,
    src: Thunder,
  },
  {
    id: 2,
    title: "Chuxly",
    type: <Arrow className={styles.icon} />,
    description: "Chuxly",
    label: <Arrow className={styles.icon2} />,
    src: Chuxly,
  },
  {
    id: 3,
    title: "Golden Drips",
    type: <Arrow className={styles.icon} />,
    description: "Golden Drips",
    label: <Arrow className={styles.icon2} />,
    src: Honey,
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    type: <Arrow className={styles.icon} />,
    description: "Elite Retreat Rentals",
    label: <Arrow className={styles.icon2} />,
    src: Rentals,
  },
  {
    id: 5,
    title: "Furnitlure",
    type: <Arrow className={styles.icon} />,
    description: "Furnitlure",
    label: <Arrow className={styles.icon2} />,
    src: Img3,
  },
];

const POSITIONS = {
  BOTTOM: 0,
  MIDDLE: -80,
  TOP: -160,
};

export default function ProjectSection() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projectsListRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressTl = useRef<gsap.core.Tween | null>(null);
  const pausedRef = useRef(false);
  const remainingRef = useRef(5000);
  const startedTsRef = useRef<number>(Date.now());

  const scheduleNext = (delay = 5000) => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % projectData.length);
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
      {
        scaleX: 1,
        duration: 5,
        ease: "none",
        transformOrigin: "left",
      }
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

  const handleMouseEnterCard = useCallback(
    (idx: number) => setActiveIndex(idx),
    []
  );

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projectData.length);
  }, []);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div
            className={styles.projectDataContainer}
            ref={projectsListRef}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          >
            <div className={styles.sectionHeaderContainer}>
              <SectionHeading2 title='Featured projects' />
            </div>
            {projectData.map((project, index) => (
              <div
                key={project.id}
                ref={(el: HTMLDivElement | null) => {
                  projectRefs.current[index] = el;
                }}
                className={`${styles.card} ${
                  activeIndex === index ? styles.active : ""
                }`}
                data-idx={index}
                onMouseEnter={() => handleMouseEnterCard(index)}
              >
                <div
                  className={styles.projectWrapper}
                  style={{
                    transform:
                      activeIndex === index
                        ? `translateY(${POSITIONS.MIDDLE}px)`
                        : `translateY(${POSITIONS.TOP}px)`,
                  }}
                >
                  <div className={styles.projectInfo}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <h4 className={styles.type}>{project.type}</h4>
                  </div>

                  <div className={styles.projectDetails}>
                    <h3 className={styles.description}>
                      {project.description}
                    </h3>
                    {project.label}
                  </div>

                  <div className={styles.projectInfo}>
                    <h3 className={styles.title}>{project.title}</h3>
                    {project.type}
                  </div>
                </div>

                <span className={styles.progress} />
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={projectData[activeIndex].src}
                alt={projectData[activeIndex].title}
                title='Project preview:'
                border='taniiiBorder'
              />
            </div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button text='View All Projects' btnType='black' href='/portfolio' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
