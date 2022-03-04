import React from "react";
import { ArticlesBlock } from "../components/ArticlesBlock";
import { parse250Chars } from "../utils";

const News = ({ data }) => {
  if (!data || !data.length) {
    return null;
  }

  return (
    <>
      <h1>Νέα</h1>
      {data.map((article) => (
        <ArticlesBlock
          key={article.id}
          id={article.id}
          title={article.title}
          description={parse250Chars(article.description)}
          imgUrl={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail_img.formats.thumbnail.url}`}
        />
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/articles");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default News;
