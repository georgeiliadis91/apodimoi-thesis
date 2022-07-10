import React, { useState } from "react";
import { parseCookies } from "nookies";
import { useTranslations } from "../../hooks/useTranslations";
import styles from "./Me.module.css";
import Profile from "../../components/Profile/Profile";
import ProfileEdit from "../../components/Profile/ProfileEdit";

const Me = ({ data }) => {
  const { email, profile_data } = data;
  const { t } = useTranslations();
  const [isEdit, setEdit] = useState(false);

  const toggleEdit = () => setEdit(!isEdit);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{t.meTitle}</h1>
      {isEdit ? (
        <button onClick={toggleEdit} className={styles.editBtnCancel}>
          {t.meCancel}
        </button>
      ) : (
        <button onClick={toggleEdit} className={styles.editBtn}>
          {t.meEdit}
        </button>
      )}
      {isEdit ? (
        <ProfileEdit
          profile_data={{ ...profile_data, email }}
          toggleEditOff={() => setEdit(false)}
        />
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
