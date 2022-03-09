import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import { formatImage } from "../utils";

const About = ({ data }) => {
  const { description, images } = data;

  if (!data) return null;
  console.log(data);
  const formatterImageArray = formatImage(images.data);
  return (
    <>
      <h1 className="pageTitle">Σχετικά</h1>
      <ImageCarousel imageArray={formatterImageArray} />
      <p className="pageDescription">{description}</p>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/about?populate=*"
  );
  const { data } = await res.json();
  return {
    props: { data: data.attributes },
  };
}
export default About;
