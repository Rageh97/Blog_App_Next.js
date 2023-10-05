"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link className={styles.link} href="/login">Login</Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div onClick={() => setOpen(!open)} className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link className={styles.link} href="/">
            Home Page
          </Link>
          <Link className={styles.link} href="/">
            Contact
          </Link>
          <Link className={styles.link} href="/">
            About
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
