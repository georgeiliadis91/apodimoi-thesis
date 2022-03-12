import React from "react";

import styles from "./Footer.module.css";

export const Footer = (props) => {
  const { footer } = props;
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>{footer.content}</div>
      <span className={styles.copyright}>{footer.copyright}</span>
    </div>
  );
};
