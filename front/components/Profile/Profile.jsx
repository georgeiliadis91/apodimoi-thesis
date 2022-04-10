import React from "react";

import { addLocalhostToUri } from "../../utils";
import styles from "./Profile.module.css";

function Profile({ profile_data }) {
  const {
    email,
    profile_img,
    birth_place,
    birthdate,
    current_country,
    father_name,
    father_surname,
    island,
    mother_name,
    mother_surname,
    name,
    surname,
    current_city,
    postal_code,
    current_street,
    occupation,
    phone_number,
    other_groups,
    permissions,
  } = profile_data;

  return (
    <div className={styles.profileContainer}>
      <section className={styles.leftColumn}>
        {/* important user data */}
        <img
          className={styles.profileImg}
          src={addLocalhostToUri(profile_img?.formats?.small?.url) || ""}
          alt="profile_img"
        />
        <span className={styles.textDisplay}>Email: {email}</span>
        <span className={styles.textDisplay}>Name: {name}</span>
        <span className={styles.textDisplay}>Surname: {surname}</span>
        <span className={styles.textDisplay}>Island of Origin: {island}</span>
        <span className={styles.textDisplay}>
          Current Location: {current_country}
        </span>
        <span className={styles.textDisplay}>Birthdate: {birthdate}</span>
      </section>
      <section className={styles.rightColumn}>
        {/* family related data */}
        <div className={styles.rightSubSection}>
          <h2 className={styles.secondaryTitle}>Family data</h2>

          <span className={styles.textDisplay}>Birth place: {birth_place}</span>

          <span className={styles.textDisplay}>
            Fathers name: {father_name}
          </span>

          <span className={styles.textDisplay}>
            Mothers name: {father_surname}
          </span>

          <span className={styles.textDisplay}>Birth place: {mother_name}</span>

          <span className={styles.textDisplay}>
            Birth place: {mother_surname}
          </span>
        </div>

        {/* personal data */}
        <div className={styles.rightSubSection}>
          <h2 className={styles.secondaryTitle}>Personal data</h2>
          <span className={styles.textDisplay}>
            Current city: {current_city}
          </span>

          <span className={styles.textDisplay}>Postal Code: {postal_code}</span>

          <span className={styles.textDisplay}>Street: {current_street}</span>

          <span className={styles.textDisplay}>Occupation: {occupation}</span>

          <span className={styles.textDisplay}>
            Other communities: {phone_number}
          </span>
          <span className={styles.textDisplay}>Birth place:</span>
          <br />
          <p>{other_groups}</p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
