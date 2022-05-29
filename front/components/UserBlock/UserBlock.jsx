import React from "react";
import styles from "./UserBlock.module.css";

export const UserBlock = ({ id, username, email }) => {
  return (
    <a href={`users/${id}`} className={styles.root}>
      <div className={styles.descriptionBox}>
        <h3 className={styles.username}>{username}</h3>
        <span className={styles.email}>{email}</span>
      </div>
    </a>
  );
};
