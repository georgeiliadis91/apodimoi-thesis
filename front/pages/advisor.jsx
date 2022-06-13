import React from "react";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock";
import { getSingleImageUrl } from "../utils";

const Advisor = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="pageTitle">Σύμβουλοι - Χρήσιμα στοιχεία επικοινωνίας</h1>
      {data.map((item) => {
        const { attributes } = item;
        return (
          <div className="advisor-item">
            <h2 className="advisor-title">{attributes.island}</h2>
            {attributes.list.map((item) => {
              return (
                <div className="advisor-list">
                  <span>{item.description}</span>
                  {item.email && (
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  )}
                  {item.phone && (
                    <a href={`tel:+30${item.phone}`}>{item.phone}</a>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/advisors?populate=*"
  );
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Advisor;
