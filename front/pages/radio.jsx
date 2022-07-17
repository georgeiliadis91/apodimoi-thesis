import React from "react";
import { getSingleImageUrl, localeUrl } from "../utils";
import { useTranslations } from "../hooks/useTranslations";
const Radio = ({ data }) => {
  const { t } = useTranslations();

  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="pageTitle">{t.radioTitle}</h1>
      <div className="content-block-container">
        {data.map((item) => {
          const { attributes } = item;
          return (
            <div className="content-block-list">
              <h2 className="advisor-title">{attributes.Title}</h2>
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
      </div>
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
