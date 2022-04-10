import React from "react";
import { addLocalhostToUri } from "../../utils";
import { parseCookies } from "nookies";

import styles from "./Me.module.css";

const Me = ({ data }) => {
  const { email, profile_data } = data;

  const {
    birth_place,
    birthdate,
    current_city,
    current_country,
    current_street,
    father_name,
    father_surname,
    island,
    mother_name,
    mother_surname,
    name,
    surname,
    occupation,
    other_groups,
    phone_number,
    postal_code,
    profile_img,
    permissions,
  } = profile_data;

  return (
    <div className={styles.root}>
      <h2>My profile</h2>
      <p>{JSON.stringify(profile_data)}</p>
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
