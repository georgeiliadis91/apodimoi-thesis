import React from "react";
import ImageGallery from "react-image-gallery";

const ImageCarousel = ({ imageArray }) => {
  return <ImageGallery items={imageArray} />;
};

export default ImageCarousel;
