// replaces spaces with _
export const replaceSpacesToDash = (str) => {
  return str.replace(/\s+/g, "_");
};

// parse 250 chars from string
export const parse250Chars = (str) => {
  return str.substring(0, 250);
};
