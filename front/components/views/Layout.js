import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { parseDataFromRequestSingleType } from "../../utils";
import styles from "./Layout.module.css";

export const Layout = ({ navigation, children }) => {
  if (!navigation) {
    return null;
  }

  return (
    <div className={styles.layoutContainer}>
      <Navbar className={styles.navbar} navbar={navigation.navbar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} footer={navigation.footer} />
    </div>
  );
};
