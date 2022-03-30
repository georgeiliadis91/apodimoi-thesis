import { addLocalhostToUri } from "../utils";
// Format data and return image and thumnail urls array object
export const formatImage = (imgArray) => {
  if (!imgArray) return [];

  const images = imgArray.map((img) => {
    return {
      original: addLocalhostToUri(img?.attributes?.formats?.large?.url),
      thumbnail: addLocalhostToUri(img?.attributes?.formats?.thumbnail?.url),
    };
  });

  return images;
};

// get
export const getImageUrl = (imgObj, size = "large") => {
  if (imgObj?.data[0]?.attributes?.formats[size].url) {
    return `${imgObj.data[0].attributes.formats[size].url}`;
  }
  return null;
};

// extract data from the default strapi v4 api
export const parseDataFromRequestSingleType = ({ data }) => {
  if (data.attributes) return data.attributes;
  return null;
};
