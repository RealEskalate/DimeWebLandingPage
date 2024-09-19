"use client";
import * as React from "react";
import styles from "../styles/header.module.css";
import JoinWaitlistButton from "./JoinWaitlistButton";
import stylesButton from "../styles/header.module.css";

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else if (currentScrollTop < lastScrollTop) {
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToSection = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.logo}>
        <img src="/logoDIME.svg" alt="DIME Logo" className="logo" />
      </div>
      <button
        type="button"
        className={stylesButton.button}
        onClick={scrollToSection}
      >
        Join Waitlist
      </button>
    </header>
  );
}
