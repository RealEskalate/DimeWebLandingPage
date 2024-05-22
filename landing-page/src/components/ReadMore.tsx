"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from '../styles/readmore.module.css'

export default function ReadMore() {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.push("/readmore/")}>
      Dime is dropping soon | <span className={styles.readMore}>Read more</span> <span className={styles.arrow}>&rarr;</span>
    </button>
  );
}
