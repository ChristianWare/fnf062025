"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Button.module.css";
import ChevronDown from "../../../public/icons/chevronDown.svg";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  marquee?: boolean;
  showChevron?: boolean;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  disabled,
  children,
  marquee = false,
  showChevron = false,
}: Props) {
  const content = text || children;

  return (
    <motion.button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        <span className={styles.label}>{content}</span>

        {marquee && (
          <>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "0%" }}
              animate={{ x: "calc(-100% - 6px)" }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {content} •
            </motion.span>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "calc(-100% - 6px)" }}
              animate={{ x: "calc(-200% - 12px)" }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {content} •
            </motion.span>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "calc(100% + 6px)" }}
              animate={{ x: "0%" }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {content} •
            </motion.span>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "calc(200% + 12px)" }}
              animate={{ x: "calc(100% + 6px)" }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {content} •
            </motion.span>
          </>
        )}

        {showChevron && (
          <div className={styles.iconContainer}>
            <ChevronDown className={styles.chevron} />
          </div>
        )}
      </Link>
    </motion.button>
  );
}
