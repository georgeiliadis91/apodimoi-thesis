import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import { formatImage } from "../utils";

const About = ({ data }) => {
  const { description, images } = data.attributes;

  if (!data) return null;
  const formatterImageArray = formatImage(images.data);
  return (
    <>
      <h1 className="pageTitle">Σχετικά</h1>
      <ImageCarousel imageArray={formatterImageArray} />
      <p className="pagedescription">{description}</p>
    </>
  );

  return null;
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/about?populate=images"
  );
  const { data } = await res.json();
  return {
    props: { data },
  };
}
export default About;
