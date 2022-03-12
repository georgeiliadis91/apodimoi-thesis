import React from "react";
import styles from "./UserProfile.module.css";

const Users = ({ data }) => {
  const { username, profile_img, email } = data;

  if (!data) return null;

  return (
    <div className={styles.root}>
      <h1 className={styles.username}>{username}</h1>
      <img
        className={styles.profileImg}
        src={`${process.env.NEXT_PUBLIC_API_URL}${profile_img.attributes.formats.thumbnail.url}`}
        alt={`${username}_profile_img`}
      />
      <span className={styles.email}>{email}</span>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/users/" + context.params.id
  );
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Users;
