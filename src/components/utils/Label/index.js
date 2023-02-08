import React from "react";
import styles from "./Label.module.css";

function Label({ labelText, className = "", ...rest }) {
  return (
    <label className={`form-label ${styles.container} ${className}`} {...rest}>
      {labelText}
    </label>
  );
}

export default Label;
