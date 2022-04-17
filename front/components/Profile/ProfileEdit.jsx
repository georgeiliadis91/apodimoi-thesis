import React, { useEffect, useState } from "react";
import { permissionModel } from "../../constants";
import { flatterPermissions } from "../../utils";
import { FieldRenderer } from "../FieldRenderer/FieldRenderer";
import styles from "./ProfileEdit.module.css";

function ProfileEdit({ profile_data }) {
  const { permissions, ...rest } = profile_data;

  const [permSettings, setPermissions] = useState(
    flatterPermissions(permissions)
  );

  const [userData, setUserData] = useState({ ...rest });
  const [options, setOptions] = useState(null);

  const toggleChange = (e) => {
    const { name, value } = e.target;
    setPermissions({ ...permSettings, [name]: value });
  };

  const updateField = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/toponimia"
      );
      const { data } = await res.json();

      setOptions(data);
    };

    fetchOptions();
  }, []);

  if (!options) {
    return null;
  }

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
          {Object.entries(permSettings)
            // todo this is tmp remove it later
            .filter(([key]) => {
              return !["profile_img", "username"].includes(key);
            })
            .map(([key, value], index) => {
              return (
                <div key={`${index}-${key}`} className={styles.row}>
                  <span className={styles.labelKey}>{key}</span>
                  {/* EDIT INPUT VAL */}
                  <FieldRenderer
                    className={styles.inputRenderer}
                    value={userData[key]}
                    fieldName={key}
                    setFieldVal={updateField}
                    options={options}
                    island={userData.island}
                  />
                  {/* PERMISSION RADIO */}
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
        <input className={styles.submitBtn} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ProfileEdit;
