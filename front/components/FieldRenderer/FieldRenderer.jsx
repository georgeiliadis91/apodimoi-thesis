import React from "react";
import { inputMatcher, inputTypes } from "../../constants";

export const FieldRenderer = ({ fieldName, value, setFieldVal }) => {
  const inputType = inputMatcher[fieldName];

  switch (inputType) {
    case inputTypes.file:
      return (
        <input
          type="file"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.textarea:
      return <textarea value={value} name={fieldName} onChange={setFieldVal} />;
    case inputTypes.select:
      return <select value={value} name={fieldName} onChange={setFieldVal} />;
    case inputTypes.number:
      return (
        <input
          type="number"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.email:
      return (
        <input
          type="email"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    case inputTypes.date:
      return (
        <input
          type="date"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
    default:
      return (
        <input
          type="text"
          value={value}
          name={fieldName}
          onChange={setFieldVal}
        />
      );
  }
};
