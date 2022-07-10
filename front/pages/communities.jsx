import React from "react";
import { localeUrl } from "../utils";
import { useTranslations } from "../hooks/useTranslations";

const Communities = ({ data }) => {
  const { t } = useTranslations();

  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="pageTitle">{t.communitiesTitle}</h1>
      <ul className="data-list">
        <li className="list-headers">
          <span className="list-label">{t.communitiesCommunityLabel}</span>
          <span className="list-label">{t.communitiesEmailLabel}</span>
          <span className="list-label">{t.communitiesPhoneLabel}</span>
          <span className="list-label">{t.communitiesAddressLabel}</span>
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

export async function getServerSideProps(ctx) {
  const { locale } = ctx;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/communities?populate=*";
  const finalUrl = localeUrl(url, locale);

  const res = await fetch(finalUrl);
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default Communities;
