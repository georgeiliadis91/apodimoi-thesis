import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import { formatImage } from "../utils";

const About = ({ data }) => {
  const { about_description, images } = data;

  console.log("data", data);
  if (!data) return null;
  const formatterImageArray = formatImage(images);
  return (
    <>
      <h1 className="pageTitle">Σχετικά</h1>
      <ImageCarousel imageArray={formatterImageArray} />
      <p className="pageDescription">{about_description}</p>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/about");
  const data = await res.json();
  return {
    props: { data },
  };
}
export default About;
