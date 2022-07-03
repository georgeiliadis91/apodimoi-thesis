import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import { formatImage, localeUrl } from "../utils";

const About = ({ data }) => {
  const { description, images } = data?.attributes;

  if (!data) return null;
  const formatterImageArray = formatImage(images.data);
  return (
    <>
      <h1 className="pageTitle">Σχετικά</h1>
      <ImageCarousel imageArray={formatterImageArray} />
      <p className="pagedescription">{description}</p>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { locale } = ctx;

  const url = process.env.NEXT_PUBLIC_API_URL + "/api/about?populate=images";
  const finalUrl = localeUrl(url, locale);

  let res = await fetch(finalUrl);
  let { data } = await res.json();

  // fall back to default in case the locale data is not found
  if (!data) {
    res = await fetch(url);
    const response = await res.json();
    data = response.data;
  }

  return {
    props: { data },
  };
}
export default About;
