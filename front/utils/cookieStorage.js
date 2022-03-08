export const cookieStorage = {
  set: (key, value) => {
    document.cookie = `${key}=${value}; path=/`;
  },
  get: (key) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === key) {
        return cookie[1];
      }
    }
    return null;
  },
  remove: (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
  },
};
