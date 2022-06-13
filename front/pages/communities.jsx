import React from "react";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock";

const Communities = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="pageTitle">Σύλλογοι Κοινότητες</h1>
      <ul className="data-list">
        <li className="list-headers">
          <span className="list-label">Σύλλογος</span>
          <span className="list-label">E-mail</span>
          <span className="list-label">Τηλέφωνο</span>
          <span className="list-label">Διεύθυνση</span>
        </li>
        {data.map((item) => {
          const { attributes } = item;
          return (
            <li key={item.id} className="list-item">
              <span className="list-item-data">{attributes.name}</span>
              <span className="list-item-data">
                {attributes.email && (
                  <a href={`mailto:${attributes.email}`}>{attributes.email}</a>
                )}
              </span>
              <span className="list-item-data">
                {attributes.tel && (
                  <a href={`tel:+30${attributes.tel}`}>{attributes.tel}</a>
                )}
              </span>
              <span className="list-item-data">{attributes.address}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/communities?populate=*"
  );
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Communities;
