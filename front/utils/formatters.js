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

// Flatter permissions objects
export const flattenPermissions = (permissions) => {
  const newPermissions = {};

  Object.keys(permissions).forEach((key) => {
    const fieldKey = permissions[key];

    // skip iteration for everything key
    if (key === "everything") {
      return;
    }

    // if is profile_data object
    if (key === "profile_data") {
      Object.keys(permissions.profile_data).forEach((key) => {
        const keyPermission = permissions.profile_data[key];
        permissions[key] = keyPermission;
      });
    } else {
      newPermissions[key] = fieldKey;
    }
  });

  return newPermissions;
};
