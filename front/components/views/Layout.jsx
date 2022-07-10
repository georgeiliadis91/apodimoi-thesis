import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";

export const Layout = ({ navigation, children }) => {
  const router = useRouter();

  if (!navigation) {
    return null;
  }

  return (
    <div className={styles.layoutContainer}>
      <Navbar className={styles.navbar} navbar={navigation.navbar} />
      <main className={router.pathname !== "/" && styles.main}>{children}</main>
      <Footer className={styles.footer} footer={navigation.footer} />
    </div>
  );
};
