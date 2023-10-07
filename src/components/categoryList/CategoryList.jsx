import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
          <Image
            className={styles.image}
            alt=""
            width={32}
            height={32}
            src="/style.png"
          />
          Style
        </Link>
        <Link className={`${styles.category} ${styles.fashion}`} href="/blog?cat=style">
          <Image
            className={styles.image}
            alt=""
            width={32}
            height={32}
            src="/style.png"
          />
          Fashion
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog?cat=style">
          <Image
            className={styles.image}
            alt=""
            width={32}
            height={32}
            src="/style.png"
          />
          Coding
        </Link>
        <Link className={`${styles.category} ${styles.culture}`} href="/blog?cat=style">
          <Image
            className={styles.image}
            alt=""
            width={32}
            height={32}
            src="/style.png"
          />
          Culture
        </Link>
        <Link className={`${styles.category} ${styles.travel}`} href="/blog?cat=style">
          <Image
            className={styles.image}
            alt=""
            width={32}
            height={32}
            src="/style.png"
          />
          Travel
        </Link>
        <Link className={`${styles.category} ${styles.food}`} href="/blog?cat=style">
          <Image
            className={styles.image}
            alt=""
            width={32}
            height={32}
            src="/style.png"
          />
          Food
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
