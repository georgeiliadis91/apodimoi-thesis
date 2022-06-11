import React, { useState } from "react";
import styles from "./NavBarItem.module.css";

export const NavBarItem = ({ value, keyVal }) => {
  const [show, setShow] = useState(false);
  if (!value.values) {
    return (
      <a
        className={`${styles.menuItem} ${styles.left}`}
        href={keyVal !== "home" ? `/${keyVal}` : "/"}
      >
        {value}
      </a>
    );
  }

  return (
    <>
      <button className="invis-button-wrapper" onClick={() => setShow(!show)}>
        {value.name}
      </button>
      {show && (
        <div className={styles.dropDownMenu}>
          {Object.entries(value.values).map(([key, val]) => {
            return (
              <a
                key={key}
                href={key !== "home" ? `/${key}` : "/"}
                className={styles.dropDownMenuitem}
              >
                {val}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};
