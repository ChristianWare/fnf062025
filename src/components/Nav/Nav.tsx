"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const navItems = [
  { text: "Work", href: "/work" },
  { text: "Services", href: "/pricing" },
  { text: "About", href: "/about" },
  { text: "faq", href: "/faq" },
  { text: "Blog", href: "/blog" },
  // { text: "Contact", href: "/contact" },
];

const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 568px)").matches;

export default function Nav() {
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

  return (
    <header
      className={`${styles.header} ${showNav ? styles.show : styles.hide}`}
    >
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div className={styles.navItems} onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navItem}>
              {item.text}
            </Link>
          ))}
        </div>

        <div className={styles.btnContainer}>
          <Button
            text='Get Started'
            btnType='primary'
            href='/contact'
            marquee
          />
        </div>
      </nav>
    </header>
  );
}
