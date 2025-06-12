"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import styles from "./FalseButton.module.css";

type MotionButtonProps = Omit<HTMLMotionProps<"button">, "children">;

interface FalseButtonProps extends MotionButtonProps {
  text?: string;
  btnType?: "primary" | "secondary" | string;
  marquee?: boolean;
  children?: ReactNode;
}

export default function FalseButton({
  text,
  btnType = "primary",
  marquee = false,
  children,
  ...rest // onClick, disabled, aria-*, whileHover, etc.
}: FalseButtonProps) {
  const content = text || children;
  

  return (
    <motion.button className={styles.container} {...rest}>
      <div className={`${styles.btn} ${styles[btnType]}`}>
        <span className={styles.label}>{content}</span>

        {marquee && (
          <>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "0%" }}
              animate={{ x: "calc(-100% - 6px)" }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            >
              {content} •
            </motion.span>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "calc(-100% - 6px)" }}
              animate={{ x: "calc(-200% - 12px)" }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            >
              {content} •
            </motion.span>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "calc(100% + 6px)" }}
              animate={{ x: "0%" }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            >
              {content} •
            </motion.span>
            <motion.span
              className={styles.marqueeSpan}
              initial={{ x: "calc(200% + 12px)" }}
              animate={{ x: "calc(100% + 6px)" }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            >
              {content} •
            </motion.span>
          </>
        )}
      </div>
    </motion.button>
  );
}
