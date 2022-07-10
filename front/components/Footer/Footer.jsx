import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export const Footer = (props) => {
  const router = useRouter();
  const { footer } = props;
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>{footer.content}</div>
      <span className={styles.copyright}>{footer.copyright}</span>
      <div className={styles.langContainer}>
        <Link className={styles.langToggle} href={router.pathname} locale="el">
          GR
        </Link>
        <Link className={styles.langToggle} href={router.pathname} locale="en">
          EN
        </Link>
      </div>
    </div>
  );
};
