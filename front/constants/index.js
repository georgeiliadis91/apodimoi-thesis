export const permissionModel = {
  private: "private",
  public: "public",
  authed: "authenticated",
};

export const inputTypes = {
  text: "text",
  textarea: "textarea",
  select: "select",
  number: "number",
  email: "email",
  date: "date",
  image: "file",
};

export const inputMatcher = {
  birth_place: inputTypes.select,
  birthdate: inputTypes.date,
  current_city: inputTypes.text,
  current_country: inputTypes.select,
  current_street: inputTypes.text,
  email: inputTypes.email,
  father_name: inputTypes.text,
  father_surname: inputTypes.text,
  island: inputTypes.select,
  mother_name: inputTypes.text,
  mother_surname: inputTypes.text,
  name: inputTypes.text,
  occupation: inputTypes.text,
  other_groups: inputTypes.textarea,
  phone_number: inputTypes.number,
  postal_code: inputTypes.text,
  surname: inputTypes.text,
  dimotiki_enotita: inputTypes.select,
};

// List of private paths

export const privatePaths = [
  "/users/me",
  "/radio",
  "/advisor",
  "/classes",
  "/services",
  "/communities",
];
