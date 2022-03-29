import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./NewsArticle.module.css";

const NewsArticle = ({ data }) => {
  const { title, description, thumbnail_img } = data.attributes;

  if (!data) return null;

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <img
        className={styles.articleImg}
        src={`${process.env.NEXT_PUBLIC_API_URL}${getImageUrl(thumbnail_img)}`}
        alt={title}
      />
      <p>{description}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/api/articles/" +
      context.params.id +
      "?populate=*"
  );
  const { data } = await res.json();
  console.log(data);
  return {
    props: { data },
  };
}

export default NewsArticle;
