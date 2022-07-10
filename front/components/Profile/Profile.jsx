import React from "react";
import { useTranslations } from "../../hooks/useTranslations";
import styles from "./Profile.module.css";

function Profile({ profile_data }) {
  const {
    email,
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

  const { t } = useTranslations();

  return (
    <div className={styles.profileContainer}>
      <section className={styles.leftColumn}>
        {email && (
          <span className={styles.textDisplay}>
            {t.meEmail}: {email}
          </span>
        )}
        {name && (
          <span className={styles.textDisplay}>
            {t.meName}: {name}
          </span>
        )}
        {surname && (
          <span className={styles.textDisplay}>
            {t.meSurname}: {surname}
          </span>
        )}
        {island && (
          <span className={styles.textDisplay}>
            {t.meIslandOfOrigin}: {island}
          </span>
        )}
        {current_country && (
          <span className={styles.textDisplay}>
            {t.meCurrLocation}: {current_country}
          </span>
        )}
        {birthdate && (
          <span className={styles.textDisplay}>
            {t.meBirthdate}: {birthdate}
          </span>
        )}
      </section>
      <section className={styles.rightColumn}>
        {/* family related data */}
        <div className={styles.rightSubSection}>
          <h2 className={styles.secondaryTitle}>{t.meFamilyData}</h2>

          {birth_place && (
            <span className={styles.textDisplay}>
              {t.meBirthPlace}: {birth_place}
            </span>
          )}
          {father_name && (
            <span className={styles.textDisplay}>
              {t.meFathersName}: {father_name}
            </span>
          )}

          {father_surname && (
            <span className={styles.textDisplay}>
              {t.FathersSurname}: {father_surname}
            </span>
          )}

          {mother_name && (
            <span className={styles.textDisplay}>
              {t.meMothersName}: {mother_name}
            </span>
          )}

          {mother_surname && (
            <span className={styles.textDisplay}>
              {t.meMothersSurname}: {mother_surname}
            </span>
          )}
        </div>

        {/* personal data */}
        <div className={styles.rightSubSection}>
          <h2 className={styles.secondaryTitle}>{t.mePersonalData}</h2>
          {current_city && (
            <span className={styles.textDisplay}>
              {t.meCurrCity}: {current_city}
            </span>
          )}

          {postal_code && (
            <span className={styles.textDisplay}>
              {t.mePostalCode}: {postal_code}
            </span>
          )}

          {current_street && (
            <span className={styles.textDisplay}>
              {t.meStreet}: {current_street}
            </span>
          )}

          {occupation && (
            <span className={styles.textDisplay}>
              {t.meOccupation}: {occupation}
            </span>
          )}

          {phone_number && (
            <span className={styles.textDisplay}>
              {t.mePhone}: {phone_number}
            </span>
          )}
          {other_groups && (
            <>
              <span className={styles.textDisplay}>
                {t.meOtherCommunities} :
              </span>
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
