import React from "react";
import styles from "./Select.module.css";

function Select({ options, className = "", ...rest }) {
  return (
    <select className={`form-select ${styles.container} ${className}`} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
