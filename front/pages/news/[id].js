import React from "react";
import styles from "./NewsArticle.module.css";

const NewsArticle = ({ data }) => {
  const { title, description, thumbnail_img } = data;

  if (!data) return null;

  return (
    <div className={styles.root}>
      <img
        className={styles.articleImg}
        src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail_img.formats.large.url}`}
        alt={title}
      />
      <h1 className={styles.title}>{data.title}</h1>
      <p>{description}</p>

      {JSON.stringify(data)}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/articles/" + context.params.id
  );
  const data = await res.json();
  return {
    props: { data },
  };
}

export default NewsArticle;
