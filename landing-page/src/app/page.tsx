"use client"
import * as React from 'react';
import styles from '../styles/page.module.css';
import '../styles/globals.css';
import ReadMore from '@/components/ReadMore';
import JoinWaitlistButton from '@/components/JoinWaitlistButton';
import ThemeSwitcher from '@/components/ThemeSwitcher';


export default function Home() {
  const placeholders = [
    "be@awesome.always",
    "rocketman@outerspace.net",
    "musiclover@melodyheaven.org",
    "adventureseeker@exploretheworld.com",
    "gamingpro@virtualworlds.io",
    "bookworm@bibliophile.com"
  ];

  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000); // Change placeholder every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [placeholders.length]);  
  return (
    <><ThemeSwitcher /><div className={styles.content}>
      <ReadMore />
      <h1 className={styles.h1}>A new era of payemnts <br /> is coming.</h1>
      <p className={styles.p}>All your accounts at one place. Easy bank to bank transfers.
        <br />Fast,transparent and reliable.</p>
      <div className={styles.imageContainer}>
        <img src="./Card.svg" alt='Card Logo' className={styles.image}></img>
      </div>
      <div className={styles.dashline}>
        <div className={styles.top}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.bottom}></div>
        <div className={styles.infoContainer}>
          <h1 className={styles.h1}>Be the first to have the <br /> best banking <br /> experince</h1>
          <p className={styles.p}>Be part of our limited waitlist get dime before anyone.</p>
          <div className={styles.field}>
            <input type="email" placeholder={placeholders[placeholderIndex]} className={styles.input} />
            <JoinWaitlistButton />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        Dime INC. All rights Reserved . 2024
      </footer>
    </div></>
  );
}
