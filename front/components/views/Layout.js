import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

import styles from "./Layout.module.css";

export async function getStaticProps(context) {
  const layoutData = await fetch(process.env.apiUrl + "/layout");
  const data = await layoutData.json();
  return {
    props: { data },
  };
}

export const Layout = (props) => {
  // const { navbar, footer } = layoutData;
  console.log(props);
  return (
    <div className={styles.layoutContainer}>
      <Navbar className={styles.navbar} />
      <main className={styles.main}>{props.children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
