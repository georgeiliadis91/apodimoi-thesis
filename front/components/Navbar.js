import React from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContentLeft}>left</div>
      <div className={styles.navbarContentRight}>right</div>
    </div>
  );
};
