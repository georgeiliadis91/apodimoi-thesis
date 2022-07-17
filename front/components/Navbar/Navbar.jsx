import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../store/store";
import { useRouter } from "next/router";
import { NavBarItem } from "./components/NavBarItem";
import { useTranslations } from "../../hooks/useTranslations";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  const { navbar } = props;
  const { logged, logOut } = useContext(UserContext);
  const Routes = useRouter();
  const { t } = useTranslations();
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
            <Link
              className={`${styles.menuItem} ${styles.left}`}
              href="/users/me"
            >
              {t.navbarLogin}
            </Link>
            <button className={styles.logOutBtn} onClick={logOutUser}>
              {t.navbarLogout}
            </button>
          </>
        ) : (
          <>
            {Object.entries(navbar.rightSideMenu).map(([key, val]) => (
              <Link
                className={`${styles.menuItem} ${styles.left}`}
                key={key}
                href={key}
              >
                {val}
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
