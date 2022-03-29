import React from "react";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock";
import { parse250Chars, parseDataFromRequest } from "../utils";

const News = ({ data }) => {
  if (!data) {
    return null;
  }
  console.log("here", data);
  return (
    <>
      <h1 className="pageTitle">Νέα</h1>
      {data.map(({ attributes }) => {
        return (
          <ArticlesBlock
            key={attributes.id}
            id={attributes.id}
            title={attributes.title}
            description={parse250Chars(attributes.description)}
            imgUrl={`${process.env.NEXT_PUBLIC_API_URL}${attributes.thumbnail_img.data[0].attributes.formats.thumbnail.url}`}
          />
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/articles?populate=thumbnail_img"
  );
  const { data } = await res.json();
  console.log("here", data);
  return {
    props: { data },
  };
}

export default News;
