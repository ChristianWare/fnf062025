"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Close from "@/icons/Close/Close";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/* ───────────────────────── Variants ───────────────────────── */
const backdrop = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const dialog = {
  closed: { opacity: 0, scale: 0.98, y: 20 },
  open: { opacity: 1, scale: 1, y: 0 },
};

export default function Modal({ isOpen, onClose, children }: Props) {
  /* ─────────── Lock body scroll only when modal is open ─────────── */
  useEffect(() => {
    if (!isOpen) return; // nothing to do

    /* esc-to-close */
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);

    /* freeze scroll */
    const scrollY = window.scrollY;
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

  /* ───────────────────────── Render ───────────────────────── */
  return (
    <motion.div
      /* Backdrop */
      className={styles.modalBackdrop}
      variants={backdrop}
      initial={false} /* skip first animation */
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      /* When closed, ignore pointer events so underlying page is clickable */
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <motion.div
        /* Dialog */
        className={styles.modalContent}
        variants={dialog}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <button onClick={onClose} className={styles.button}>
          <Close className={styles.icon} />
        </button>
        <div className={styles.children}>{children}</div>
      </motion.div>
    </motion.div>
  );
}
