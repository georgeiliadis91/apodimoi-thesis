import React from "react";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock";
import { getSingleImageUrl } from "../utils";

const Radio = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="pageTitle">Ραδιοφωνικοί σταθμοί</h1>
      {data.map((item) => {
        const { attributes } = item;
        return (
          <div className="radio-item">
            <h2 className="radio-title">{attributes.Title}</h2>
            <a href={attributes.link}>
              <img
                alt={`${attributes.Title}-img`}
                src={`${process.env.NEXT_PUBLIC_API_URL}${getSingleImageUrl(
                  attributes.image,
                  "url"
                )}`}
              />
            </a>
            <p className="radio-body">{attributes.body}</p>
          </div>
        );
      })}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/radios?populate=image";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Radio;
