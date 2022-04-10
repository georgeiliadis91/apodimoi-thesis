import React from "react";
import { replaceSpacesToDash } from "../../utils";

import styles from "./ArticlesBlock.module.css";

export const ArticlesBlock = ({ id, title, imgUrl, description }) => {
  return (
    <a className={styles.root} href={`news/${id}`}>
      <img
        className={styles.articleImg}
        src={imgUrl}
        alt={replaceSpacesToDash(title)}
      />
      <div className={styles.descriptionBox}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};
