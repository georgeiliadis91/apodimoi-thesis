import React from "react";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock";
import { parse250Chars, getImageUrl } from "../utils";

const News = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="pageTitle">Νέα</h1>
      <div className="item-overview-display-grid">
        {data.map((item) => {
          const { attributes } = item;
          return (
            <ArticlesBlock
              key={item.id}
              id={item.id}
              title={attributes.title}
              description={parse250Chars(attributes.description)}
              imgUrl={`${process.env.NEXT_PUBLIC_API_URL}${getImageUrl(
                attributes.thumbnail_img,
                "thumbnail"
              )}`}
            />
          );
        })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/articles?populate=thumbnail_img"
  );
  const { data } = await res.json();
  return {
    props: { data },
  };
}

export default News;
