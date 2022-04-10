import React from "react";
import styles from "../styles/Services.module.css";

const Services = ({ data }) => {
  if (!data) return null;
  return (
    <>
      <h1 className="pageTitle">Υπηρεσίες</h1>
      <div className={styles.serviceTable}>
        {data.map(({ attributes, id }) => {
          const { service_name, email, number } = attributes;
          return (
            <div className={styles.serviceRow} key={id}>
              <span className={`${styles.cell} ${styles.title}`}>
                {service_name}
              </span>
              <span className={`${styles.cell}`}>{email}</span>
              <span className={`${styles.cell}`}>{number}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/services");
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Services;
