import React, { useState } from "react";
import { parseCookies } from "nookies";

import styles from "./Me.module.css";
import Profile from "../../components/Profile/Profile";
import ProfileEdit from "../../components/Profile/ProfileEdit";

const Me = ({ data }) => {
  const [isEdit, setEdit] = useState(false);
  const { email, profile_data } = data;

  const toggleEdit = () => setEdit(!isEdit);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My profile</h1>
      {isEdit ? (
        <button onClick={toggleEdit} className={styles.editBtnCancel}>
          Cancel
        </button>
      ) : (
        <button onClick={toggleEdit} className={styles.editBtn}>
          Edit
        </button>
      )}
      {isEdit ? (
        <ProfileEdit profile_data={{ ...profile_data, email }} />
      ) : (
        <Profile profile_data={{ ...profile_data, email }} />
      )}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users/me", {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await res.json();

  
  return {
    props: { data },
  };
}

export default Me;
