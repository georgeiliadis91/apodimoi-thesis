import React from "react";
import styles from "../styles/Services.module.css";

const Services = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <h1 className="pageTitle">Υπηρεσίες</h1>
      <div className={styles.serviceTable}>
        {data.map((service) => {
          return (
            <div className={styles.serviceRow} key={service.id}>
              <span className={`${styles.cell} ${styles.title}`}>
                {service.service_tiltle}
              </span>
              <span className={`${styles.cell}`}>{service.email}</span>
              <span className={`${styles.cell}`}>{service.phone}</span>
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
