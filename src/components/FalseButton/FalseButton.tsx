"use client";

import { ReactNode } from "react";
import styles from "./FalseButton.module.css";
import { motion } from "framer-motion";

interface Props {
  text?: string;
  btnType: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  marquee?: boolean;
}

export default function FalseButton({
  text,
  btnType,
  disabled,
  children,
  marquee = false,
}: Props) {
  const content = text || children;

  return (
    <div>
      <motion.button className={styles.container} disabled={disabled}>
        <div className={`${styles.btn} ${styles[btnType]}`}>
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
        </div>
      </motion.button>
    </div>
  );
}
