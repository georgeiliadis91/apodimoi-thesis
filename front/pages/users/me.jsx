import React from "react";
import { parseCookies } from "nookies";

import styles from "./Me.module.css";
import Profile from "../../components/Profile/Profile";

const Me = ({ data }) => {
  const { email, profile_data } = data;

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My profile</h1>
      <Profile profile_data={profile_data} email={email} />
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

  debugger;
  return {
    props: { data },
  };
}

export default Me;
