import React from "react";
import { getSingleImageUrl } from "../utils";

const Services = ({ data }) => {
  if (!data) return null;
  return (
    <>
      <h1 className="pageTitle">Μαθήματα</h1>

      {/* TODO ADD SEARCH INPUT FIELD */}

      {data.map((item) => {
        const { attributes } = item;
        return (
          <div className="advisor-item">
            <h2 className="advisor-title">{attributes.Topic}</h2>
            <div className="advisor-container">
              {attributes.list.map((item) => {
                return (
                  <div className="advisor-list">
                    <span>{item.title}</span>
                    <a href={item.link}>
                      <img
                        className="advisor-list-img-link"
                        alt={`${attributes.title}-img`}
                        src={`${
                          process.env.NEXT_PUBLIC_API_URL
                        }${getSingleImageUrl(item.img_lnk, "url")}`}
                      />
                    </a>
                    {item.kids && <div className="advisor-kids">KIDS</div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const url =
    process.env.NEXT_PUBLIC_API_URL + "/api/lessons?populate=list.img_lnk";
  const finalUrl = localeUrl(url, locale);
  const res = await fetch(finalUrl);
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Services;
