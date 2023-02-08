import React from "react";
import styles from "./Input.module.css";

function Input({ className = "", ...rest }) {
  return <input className={`form-control ${styles.container} ${className}`} {...rest} />;
}

export default Input;
