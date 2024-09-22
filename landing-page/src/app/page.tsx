"use client";
import * as React from "react";
import styles from "../styles/page.module.css";
import "../styles/globals.css";
import ReadMore from "@/components/ReadMore";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import stylesButton from "../styles/header.module.css";

export default function Home() {
  const placeholders = [
    "be@awesome.always",
    "rocketman@outerspace.net",
    "musiclover@melodyheaven.org",
    "adventureseeker@exploretheworld.com",
    "gamingpro@virtualworlds.io",
    "bookworm@bibliophile.com",
  ];

  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [placeholders.length]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxM7SkNJnbU7h5h4iC2SoDV2GqZpOzzb9_rAqriDHR88poRiyWVKHtSREwBUWzsTEGcmQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          mode: "no-cors",
        }
      );
      setMessage("Email added successfully");
    } catch (error) {
      setMessage("An unknown error occurred: " + error);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <ThemeSwitcher />
      <div className={styles.content}>
        <ReadMore />
        <h1 className={styles.h1}>
          Fast, Secure, Global Remittance to Ethiopia.
        </h1>
        <p className={styles.p}>
          Transfer funds to family and friends from any country, in any
          currency—safe and easy.
        </p>
        <div className={styles.imageContainer}>
          <img src="./Card.png" alt="Card Logo" className={styles.image}></img>
        </div>
        <div className={styles.dashline} id="target-section">
          <div className={styles.top}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
          <div className={styles.bottom}></div>
          <div className={styles.infoContainer}>
            <h1 className={styles.h1}>
              Be the first to have the <br /> best remittance <br /> service.
            </h1>
            <p className={styles.p}>
              Be part of our limited waitlist, get Dime before anyone else.
            </p>
            <form className={styles.field} onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                value={email}
                placeholder={placeholders[placeholderIndex]}
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={stylesButton.button}>
                Join Waitlist
              </button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
        <footer className={styles.footer}>
          Dime INC. All rights Reserved. 2024
        </footer>
      </div>
    </>
  );
}
