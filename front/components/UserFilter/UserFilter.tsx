import React, { useState, useEffect } from "react";
import countryList from "../../json-data-files/countryList.json";
import ReactAutocomplete from "react-autocomplete";
import styles from "./UserFilter.module.css";

export const UserFilter = ({ input, setInput }) => {
  const [value, setValue] = useState(input);
  useEffect(() => {
    setValue(input);
  }, [input]);

  return (
    <div className={styles.root}>
    <ReactAutocomplete
      items={countryList.map((item) => {
        return { id: item.value, label: item.label };
      })}
      shouldItemRender={(item, value) =>
        item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
      }
      getItemValue={(item) => item.label}
      renderItem={(item, highlighted) => (
        <div
        key={item.id}
        style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
        >
          {item.label}
        </div>
      )}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSelect={(value) => setInput(value)}
      />
      </div>
  );
};
