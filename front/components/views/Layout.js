import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

import styles from "./Layout.module.css";

export const Layout = (props) => {
  const [layoutData, setLayoutData] = useState(null);

  useEffect(() => {
    const fetchLayoutData = async () => {
      try {
        const layoutData = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/layout"
        );
        const res = await layoutData.json();
        setLayoutData(res.data.attributes.config);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLayoutData();
  }, []);

  if (!layoutData) {
    return null;
  }

  return (
    <div className={styles.layoutContainer}>
      <Navbar className={styles.navbar} navbar={layoutData.navbar} />
      <main className={styles.main}>{props.children}</main>
      <Footer className={styles.footer} footer={layoutData.footer} />
    </div>
  );
};
