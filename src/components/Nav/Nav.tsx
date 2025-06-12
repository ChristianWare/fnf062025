"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import FalseButton from "../FalseButton/FalseButton";
import Modal from "../Modal/Modal"; // ← NEW import
import ContactForm from "../ContactForm/ContactForm";

const navItems = [
  { text: "home", href: "/" },
  { text: "Work", href: "/work" },
  { text: "Services", href: "/services" },
  { text: "About", href: "/about" },
  { text: "faq", href: "/faq" },
  { text: "Contact", href: "/contact" },
];

const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 568px)").matches;

export default function Nav() {
  /* ─────────────────────────────── NAV VISIBILITY ────────────────────────── */
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (isMobile()) {
      setShowNav(true);
      return;
    }

    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setShowNav(!(y > lastY && y > 100));
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (isMobile()) {
        window.removeEventListener("scroll", onScroll);
        setShowNav(true);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* ─────────────────────────────── MODAL STATE ───────────────────────────── */
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  /* ────────────────────────────────── JSX ────────────────────────────────── */
  return (
    <>
      <header
        className={`${styles.header} ${showNav ? styles.show : styles.hide}`}
      >
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>

          <div className={styles.navItems}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navItem}>
                {item.text}
              </Link>
            ))}
          </div>

          <div className={styles.btnContainer}>
            <FalseButton
              text='Get Started'
              btnType='primary'
              onClick={openModal}
            />
          </div>
        </nav>
      </header>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </>
  );
}
