export const replaceSpacesToDash = (str) => {
  return str.replace(/\s+/g, "_");
};

// parse 250 chars from string
export const parse250Chars = (str) => {
  return str.substring(0, 250);
};

//add localhost on uri
export const addLocalhostToUri = (uri) => {
  return process.env.NEXT_PUBLIC_API_URL + uri;
};
