/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useState, useEffect } from "react";
import styles from "./ProjectSection.module.css";
import Thunder from "../../../public/images/thunder.jpg";
import Chuxly from "../../../public/images/chuxly.png";
import Honey from "../../../public/images/honey.jpg";
import Rentals from "../../../public/images/erRentals.png";
import Img3 from "../../../public/images/heroiii.jpeg";
import DefaultImg from "../../../public/images/about.jpeg";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Arrow from "@/icons/Arrow/Arrow";
import { StaticImageData } from "next/image";
import Logo from "../Logo/Logo";

const data = [
  { id: 1, title: "Thundertrails", src: Thunder },
  { id: 2, title: "Chuxly", src: Chuxly },
  { id: 3, title: "Golden Drips", src: Honey },
  { id: 4, title: "Elite Retreat Rentals", src: Rentals },
  { id: 5, title: "Furniture", src: Img3 },
];

export default function ProjectSection() {
  const [isTouch, setIsTouch] = useState(false);
  const [activeImage, setActiveImage] = useState(DefaultImg);
  const [activeTitle, setActiveTitle] = useState("Fonts & Footers");
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const touchCapable =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouch(touchCapable);
  }, []);

  const activate = (itemId: number, src: StaticImageData, title: string) => {
    setActiveImage(src);
    setActiveTitle(title);
    setActiveId(itemId);
  };

  const reset = () => {
    setActiveImage(DefaultImg);
    setActiveTitle("Fonts & Footers");
    setActiveId(null);
  };

  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.navContainer}>
          <Logo title='Projects' backgroundColor='backgroundColorWhite' />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <div className={styles.sectionIntroAreaBox}>
                <SectionIntroArea
                  sectionTitle='Our Portfolio'
                  heading='Featured Projects'
                  color='white'
                  dotColor='whiteDot'
                  border='grayBorder'
                />
              </div> */}

            {data.map((item) => (
              <div
                key={item.id}
                className={styles.card}
                onMouseEnter={() => {
                  if (!isTouch) activate(item.id, item.src, item.title);
                }}
                onMouseLeave={() => {
                  if (!isTouch) reset();
                }}
                onClick={() => {
                  if (isTouch) {
                    activeId === item.id
                      ? reset()
                      : activate(item.id, item.src, item.title);
                  }
                }}
              >
                <h3 className={styles.title}>{item.title}</h3>
                <Arrow className={styles.arrow} />
              </div>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={activeImage}
                alt={activeTitle}
                title={activeTitle}
                color='white'
                border='taniiiBorder'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
