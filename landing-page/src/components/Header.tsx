import * as React from 'react';
import styles from '../styles/header.module.css';
import JoinWaitlistButton from './JoinWaitlistButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logoDIME.svg" alt="DIME Logo" className="logo" />
      </div>
      <JoinWaitlistButton />
    </header>
  );
}
