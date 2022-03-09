import { addLocalhostToUri } from "../utils";
// Format data and return image and thumnail urls array object
export const formatImage = (imgArray) => {
  if (!imgArray) return [];
  const images = imgArray.map((img) => {
    return {
      original: addLocalhostToUri(img.attributes.formats.large.url),
      thumbnail: addLocalhostToUri(img.attributes.formats.thumbnail.url),
    };
  });

  return images;
};
