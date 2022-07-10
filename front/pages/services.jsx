import React, { useState } from "react";
import { useTranslations } from "../hooks/useTranslations";
import styles from "../styles/Services.module.css";
import { localeUrl } from "../utils/helpers";

const Services = ({ data }) => {
  const [search, setSearch] = useState("");
  const { t } = useTranslations();

  if (!data) return null;
  return (
    <div className={styles.servicesContainer}>
      <h1 className="pageTitle">{t.servicesTitle}</h1>

      {/* TODO ADD SEARCH INPUT FIELD */}

      <ul className={styles.serviceTable}>
        <li className={styles.serviceTableRow}>
          <span className={styles.serviceTableLabels}>Υπηρεσία</span>
          <span className={styles.serviceTableLabels}>E-mail</span>
          <span className={styles.serviceTableLabels}>Τηλέφωνο</span>
        </li>
        {data.map(({ attributes, id }, index) => {
          const { service_name, email, number } = attributes;
          return (
            <li
              className={`${styles.serviceRow} ${
                index % 2 === 0 ? styles.odd : styles.even
              }`}
              key={id}
            >
              <span className={`${styles.serviceTableCell} ${styles.title}`}>
                {service_name}
              </span>
              <span className={`${styles.serviceTableCell}`}>
                {email && <a href={`mailto:${email}`}>{email}</a>}
              </span>
              <span className={`${styles.serviceTableCell}`}>
                {number && <a href={`tel:+30${number}`}>{number}</a>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/services";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Services;
