// check is str is email
export const isEmail = (str) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(str);
};

// verify login form data format
export const verifyLogin = (email, password) => {
  if (!email || !password) {
    return false;
  }
  if (isEmail(isEmail) || password.length < 8) {
    return false;
  }
  return true;
};
