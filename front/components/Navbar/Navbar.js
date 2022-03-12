import React, { useContext } from "react";
import { UserContext } from "../../store/store";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  const { navbar } = props;
  const { data, useRemoveLogged } = useContext(UserContext);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContentLeft}>
        {Object.entries(navbar.leftSideMenu).map(([key, val]) => (
          <a
            className={`${styles.menuItem} ${styles.left}`}
            key={key}
            href={`/${key}`}
          >
            {val}
          </a>
        ))}
      </div>
      <div className={styles.navbarContentRight}>
        {data.userLoggedIn ? (
          <button onClick={useRemoveLogged}> log out</button>
        ) : (
          <>
            {Object.entries(navbar.rightSideMenu).map(([key, val]) => (
              <a
                className={`${styles.menuItem} ${styles.left}`}
                key={key}
                href={key}
              >
                {val}
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
