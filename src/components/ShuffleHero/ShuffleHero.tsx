/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./ShuffleHero.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import Img1 from "../../../public/images/heroii.jpeg";
// import Img2 from "../../../public/images/heroiii.jpeg";
import Img3 from "../../../public/images/process.jpeg";
// import Img4 from "../../../public/images/ecomm.jpeg";
import Img5 from "../../../public/images/aboutiv.jpg";
// import Img6 from "../../../public/images/aboutiii.jpg";
import Img7 from "../../../public/images/aboutiii.jpg";
// import Img8 from "../../../public/images/about.jpeg";
import Img9 from "../../../public/images/heroii.jpeg";
import Image from "next/image";

const ShuffleHero = () => {
  return (
    <section className={styles.section}>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: Img1,
    title: "B2B (Business to Business)",
  },
  {
    id: 2,
    // src: Img2,
    title: "B2C (Business to Consumer)",
  },
  {
    id: 3,
    src: Img3,
    title: "Multi-Vendor Marketplace",
  },
  {
    id: 4,
    // src: Img4,
    title: "Subscription-Based E-commerce",
  },
  {
    id: 5,
    src: Img5,
    title: "Digital Products Store",
  },
  {
    id: 6,
    // src: Img6,
    title: "Services-Based E-commerce",
  },
  {
    id: 7,
    src: Img7,
    title: "Wix E-commerce",
  },
  {
    id: 8,
    // src: Img8,
    title: "Shopify",
  },
  {
    id: 9,
    src: Img9,
    title: "Woo Commerce",
  },
];

const generateSquares = () => {
  return squareData.map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={styles.square}
    >
      <span className={styles.title}>{sq.title}</span>
      {sq.src && <Image src={sq.src} fill alt='' className={styles.img} />}
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    setSquares((prevSquares) => shuffle([...prevSquares]));

    timeoutRef.current = setTimeout(shuffleSquares, 2000);
  };

  return <div className={styles.grid}>{squares}</div>;
};

export default ShuffleHero;
