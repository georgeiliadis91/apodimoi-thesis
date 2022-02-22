import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>Content goes here</div>
      <span className={styles.copyright}>
        Copyright © 2022 Απόδημοι Αιγαίου. All rights reserved.
      </span>
    </div>
  );
};
