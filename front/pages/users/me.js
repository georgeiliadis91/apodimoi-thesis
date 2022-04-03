import React from "react";
import { addLocalhostToUri } from "../../utils";

import { withAuth } from "../../utils";
import styles from "./Me.module.css";

const Me = ({ data }) => {
  const { profile_data } = data;
  return (
    <div className={styles.root}>
      <img
        className={styles.profileImg}
        src={addLocalhostToUri(profile_data.profile_img.formats.small.url)}
        alt="profile_img"
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users/me", {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${context.req.cookies.jwtToken}`,
    },
  });
  const data = await res.json();

  return {
    props: { data },
  };
}

export default withAuth(Me);
