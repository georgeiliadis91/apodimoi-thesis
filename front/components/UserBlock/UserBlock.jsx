import React from "react";
import styles from "./UserBlock.module.css";

export const UserBlock = ({
  id,
  username,
  email,
  country,
  current_country,
}) => {
  return (
    <a href={`users/${id}`} className="content-block-list">
      <div className={styles.descriptionBox}>
        <h3 className={styles.username}>{username}</h3>
        <div className={styles.details}>
          <span className={styles.email}>Email: {email}</span>
          <span className={styles.email}>Τόπος Διαμονής: {country}</span>
          <span className={styles.email}>Νησί: {country}</span>
        </div>
      </div>
    </a>
  );
};
