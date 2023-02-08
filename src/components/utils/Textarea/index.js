import React from "react";
import styles from "./Textarea.module.css";

function Textarea({ className = "", ...rest }) {
  return (
    <textarea
      className={`form-control ${styles.container} ${className}`}
      {...rest}
    ></textarea>
  );
}

export default Textarea;
