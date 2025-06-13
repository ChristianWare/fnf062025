"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Close from "../../icons/close.svg";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/* ——————————————————————————————————————————————————————————————— */
/*  Backdrop + dialog animation presets                              */
/* ——————————————————————————————————————————————————————————————— */
const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const dialogVariants = {
  initial: {  opacity: 0 },
  animate: {  opacity: 1 },
  exit: {  opacity: 0 },
};

export default function Modal({ isOpen, onClose, children }: Props) {
  /* — lock scrolling & ESC-to-close (same as before) — */
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);

    if (isOpen) {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      Object.assign(document.body.style, {
        position: "fixed",
        top: `-${scrollY}px`,
        left: "0",
        right: "0",
        width: "100%",
        overflow: "hidden",
        paddingRight: `${scrollbarWidth}px`,
      });
    }

    return () => {
      window.removeEventListener("keydown", onEsc);
      const top = document.body.style.top;
      if (top) {
        const y = -parseInt(top, 10) || 0;
        document.body.style.cssText = "";
        window.scrollTo(0, y);
      }
    };
  }, [isOpen, onClose]);

  /* — render with motion variants wrapped in AnimatePresence — */
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalBackdrop}
          variants={backdropVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <motion.div
            className={styles.modalContent}
            variants={dialogVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <button onClick={onClose} className={styles.button}>
              {/* <Close width={30} height={30} className={styles.icon} /> */}
            </button>

            <div className={styles.children}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
