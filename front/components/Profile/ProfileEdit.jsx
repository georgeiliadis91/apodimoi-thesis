import React, { useState } from "react";
import { permissionModel } from "../../constants";
import { flatterPermissions } from "../../utils";
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

  const [permSettings, setPermissions] = useState(
    flatterPermissions(permissions)
  );

  const toggleChange = (e) => {
    const { name, value } = e.target;
    setPermissions({ ...permSettings, [name]: value });
  };

  const setAllPermissions = (val) => {
    const newPermissions = {};
    Object.keys(permSettings).forEach((key) => {
      newPermissions[key] = val;
    });
    setPermissions(newPermissions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo handle submit
  };

  return (
    <div>
      <div className={styles.row}>
        <h5 className={styles.labelKey}>Property</h5>
        <div className={styles.options}>
          <label>{permissionModel.private}</label>
          <label>{permissionModel.authed}</label>
          <label>{permissionModel.public}</label>
        </div>
      </div>
      <br />
      <div className={styles.setAllRow}>
        <h5 className={styles.setAllLabel}>Set All</h5>
        <div className={styles.options}>
          <button onClick={() => setAllPermissions(permissionModel.private)}>
            +
          </button>
          <button onClick={() => setAllPermissions(permissionModel.authed)}>
            +
          </button>
          <button onClick={() => setAllPermissions(permissionModel.public)}>
            +
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="radio">
          {Object.entries(permSettings).map(([key, value], index) => {
            return (
              <div key={`${index}-${key}`} className={styles.row}>
                <h5 className={styles.labelKey}>{key}</h5>
                <div className={styles.options}>
                  <input
                    type="radio"
                    name={key}
                    value={permissionModel.private}
                    checked={value === permissionModel.private}
                    onChange={toggleChange}
                  />
                  <input
                    type="radio"
                    name={key}
                    value={permissionModel.authed}
                    checked={value === permissionModel.authed}
                    onChange={toggleChange}
                  />
                  <input
                    type="radio"
                    name={key}
                    value={permissionModel.public}
                    checked={value === permissionModel.public}
                    onChange={toggleChange}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ProfileEdit;
