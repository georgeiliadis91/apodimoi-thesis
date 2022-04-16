import React from "react";
import { inputMatcher, inputTypes } from "../../constants";
import styles from "./Fieldrenderer.module.css";

export const FieldRenderer = ({ fieldName, value, setFieldVal }) => {
  const inputType = inputMatcher[fieldName] || "";

  switch (inputType) {
    case inputTypes.file:
      return (
        <input
          className={styles.inputField}
          type="file"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.textarea:
      return (
        <textarea
          className={styles.inputField}
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.select:
      return (
        <select
          className={styles.inputField}
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.number:
      return (
        <input
          className={styles.inputField}
          type="number"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.email:
      return (
        <input
          className={styles.inputField}
          type="email"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.date:
      return (
        <input
          className={styles.inputField}
          type="date"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    default:
      return (
        <input
          className={styles.inputField}
          type="text"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
  }
};
