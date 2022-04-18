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
          // TODO add a default img
          src={addLocalhostToUri(profile_img?.formats?.small?.url) || ""}
          alt="profile_img"
        />
        {email && <span className={styles.textDisplay}>Email: {email}</span>}
        {name && <span className={styles.textDisplay}>Name: {name}</span>}
        {surname && (
          <span className={styles.textDisplay}>Surname: {surname}</span>
        )}
        {island && (
          <span className={styles.textDisplay}>Island of Origin: {island}</span>
        )}
        {current_country && (
          <span className={styles.textDisplay}>
            Current Location: {current_country}
          </span>
        )}
        {birthdate && (
          <span className={styles.textDisplay}>Birthdate: {birthdate}</span>
        )}
      </section>
      <section className={styles.rightColumn}>
        {/* family related data */}
        <div className={styles.rightSubSection}>
          <h2 className={styles.secondaryTitle}>Family data</h2>

          {birth_place && (
            <span className={styles.textDisplay}>
              Birth place: {birth_place}
            </span>
          )}
          {father_name && (
            <span className={styles.textDisplay}>
              Fathers name: {father_name}
            </span>
          )}

          {father_surname && (
            <span className={styles.textDisplay}>
              Mothers name: {father_surname}
            </span>
          )}

          {mother_name && (
            <span className={styles.textDisplay}>
              Birth place: {mother_name}
            </span>
          )}

          {mother_surname && (
            <span className={styles.textDisplay}>
              Birth place: {mother_surname}
            </span>
          )}
        </div>

        {/* personal data */}
        <div className={styles.rightSubSection}>
          <h2 className={styles.secondaryTitle}>Personal data</h2>
          {current_city && (
            <span className={styles.textDisplay}>
              Current city: {current_city}
            </span>
          )}

          {postal_code && (
            <span className={styles.textDisplay}>
              Postal Code: {postal_code}
            </span>
          )}

          {current_street && (
            <span className={styles.textDisplay}>Street: {current_street}</span>
          )}

          {occupation && (
            <span className={styles.textDisplay}>Occupation: {occupation}</span>
          )}

          {phone_number && (
            <span className={styles.textDisplay}>
              Phone number: {phone_number}
            </span>
          )}
          {other_groups && (
            <>
              <span className={styles.textDisplay}>Other communities :</span>
              <br />
              <p>{other_groups}</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Profile;
