"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import FalseButton from "../FalseButton/FalseButton";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";

const navItems = [
  { text: "About", href: "/#aboutus" },
  { text: "Work", href: "/#work" },
  { text: "Services", href: "/#services" },
  { text: "faq", href: "/#faq" },
  { text: "Contact", href: "/#contact" },
];

export default function Nav() {
  /* ──────────── modal only ──────────── */
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      {/*  centred, scrolls away with the hero  */}
      <header className={styles.header}>
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
              btnType='tanOutline'
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
