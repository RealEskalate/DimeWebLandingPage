"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from '../styles/header.module.css';

export default function JoinWaitlistButton() {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.push("/waitlist/")}>
      Join Waitlist
    </button>
  );
}
