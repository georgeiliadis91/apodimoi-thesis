import { addLocalhostToUri } from "../utils";
// Format data and return image and thumnail urls array object
export const formatImage = (imgArray) => {
  if (!imgArray) return [];
  const images = imgArray.map((img) => {
    return {
      original: addLocalhostToUri(img.formats.large.url),
      thumbnail: addLocalhostToUri(img.formats.thumbnail.url),
    };
  });

  return images;
};
