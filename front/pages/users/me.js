import React from "react";
import { addLocalhostToUri } from "../../utils";
import { parseCookies } from "nookies";

import styles from "./Me.module.css";

const Me = ({ data }) => {
  const { profile_data } = data;
  return (
    <div className={styles.root}>
      My profile
      {/* <img
        className={styles.profileImg}
        src={addLocalhostToUri(profile_data.profile_img.formats.small.url)}
        alt="profile_img"
      /> */}
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
