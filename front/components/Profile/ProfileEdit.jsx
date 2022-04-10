import React, { useState } from "react";

import styles from "./ProfileEdit.module.css";

function ProfileEdit({ profile_data }) {
  const {
    email,
    profile_img,
    birth_place,
    birthdate,
    current_country,
    father_name,
    father_surname,
    island,
    mother_name,
    mother_surname,
    name,
    surname,
    current_city,
    postal_code,
    current_street,
    occupation,
    phone_number,
    other_groups,
    permissions,
  } = profile_data;

  const [val, setVal] = useState("option1");

  const toggleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="radio">
          {Object.entries(permissions).map(([key, value]) => {
            if (key === "profile_data") {
              return Object.entries(permissions.profile_data).map(
                ([key, value]) => {
                  return (
                    <div className={styles.row}>
                      <label htmlFor={value}>{key}</label>
                      <input
                        type="radio"
                        value="option1"
                        checked={val === "value"}
                        onChange={toggleChange}
                      />
                      <label htmlFor={value}>{key}</label>
                      <input
                        type="radio"
                        value="option1"
                        checked={val === "value"}
                        onChange={toggleChange}
                      />
                      <label htmlFor={value}>{key}</label>
                      <input
                        type="radio"
                        value="option1"
                        checked={val === "value"}
                        onChange={toggleChange}
                      />
                    </div>
                  );
                }
              );
            }
            return (
              <div className={styles.row}>
                <label htmlFor={value}>{key}</label>
                <input
                  type="radio"
                  value="option1"
                  checked={val === "value"}
                  onChange={toggleChange}
                />
                <label htmlFor={value}>{key}</label>
                <input
                  type="radio"
                  value="option1"
                  checked={val === "value"}
                  onChange={toggleChange}
                />
                <label htmlFor={value}>{key}</label>
                <input
                  type="radio"
                  value="option1"
                  checked={val === "value"}
                  onChange={toggleChange}
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default ProfileEdit;
