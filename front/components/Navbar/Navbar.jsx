import React, { useContext } from "react";
import { UserContext } from "../../store/store";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { NavBarItem } from "./components/NavBarItem";

export const Navbar = (props) => {
  const { navbar } = props;
  const { logged, logOut } = useContext(UserContext);
  const Routes = useRouter();

  const logOutUser = () => {
    logOut();
    Routes.replace("/");
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContentLeft}>
        {Object.entries(navbar.leftSideMenu).map(([key, val]) => (
          <NavBarItem key={key} keyVal={key} value={val} />
        ))}
      </div>
      <div className={styles.navbarContentRight}>
        {logged ? (
          <>
            <a className={`${styles.menuItem} ${styles.left}`} href="/users/me">
              Profile
            </a>
            <button className={styles.logOutBtn} onClick={logOutUser}>
              Log Out
            </button>
          </>
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
