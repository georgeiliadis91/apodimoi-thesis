import React from "react";

import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  const { navbar } = props;
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContentLeft}>
        {Object.entries(navbar.leftSideMenu).map(([key, val]) => (
          <a
            className={`${styles.menuItem} ${styles.left}`}
            key={key}
            href={key}
          >
            {val}
          </a>
        ))}
      </div>
      <div className={styles.navbarContentRight}>
        {Object.entries(navbar.rightSideMenu).map(([key, val]) => (
          <a
            className={`${styles.menuItem} ${styles.left}`}
            key={key}
            href={key}
          >
            {val}
          </a>
        ))}
      </div>
    </div>
  );
};
