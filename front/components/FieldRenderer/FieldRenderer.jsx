import React from "react";
import { inputMatcher, inputTypes } from "../../constants";
import countryList from "../../json-data-files/countryList.json";
import styles from "./Fieldrenderer.module.css";

export const FieldRenderer = ({
  fieldName,
  value,
  setFieldVal,
  options,
  island,
}) => {
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
      if (fieldName === "dimotiki_enotita") {
        // island and dimotiki enotita are exceptions and need field values to render
        return (
          <select
            className={styles.inputField}
            name={fieldName}
            id={fieldName}
            // disabled if no island selected
            disabled={!island}
            required
            onChange={setFieldVal}
          >
            {options.attributes.toponimia[island] && (
              <>
                <option className="island" value={island} defaultValue={value}>
                  {island}
                </option>
                <>
                  {Object.values(options.attributes.toponimia[island]).map(
                    (val) => {
                      return (
                        <option
                          className="dimotiki_enotita"
                          key={val}
                          value={val}
                        >
                          {val}
                        </option>
                      );
                    }
                  )}
                </>
              </>
            )}
          </select>
        );
      }

      if (fieldName === "island" || fieldName === "birth_place") {
        return (
          <select
            name={fieldName}
            id={fieldName}
            required
            onChange={setFieldVal}
            defaultValue={value}
            className={styles.inputField}
          >
            {Object.keys(options.attributes.toponimia).map((key, index) => {
              return (
                <option
                  className="island"
                  key={key}
                  value={key}
                  defaultValue={index === 0}
                >
                  {key}
                </option>
              );
            })}
          </select>
        );
      }

      if (fieldName === "current_country") {
        return (
          <select
            className={styles.inputField}
            name={fieldName}
            id={fieldName}
            required
            onChange={setFieldVal}
            defaultValue={value}
          >
            {countryList.map(({ label }) => {
              return (
                <option className="island" key={label} value={label}>
                  {label}
                </option>
              );
            })}
          </select>
        );
      }
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
