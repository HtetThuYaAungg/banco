import React from "react";
import { BUTTON } from "../../../constants/utils";
import styles from "./Button.module.css";

function Button({
  btnType = [BUTTON.DEFAULT],
  btnTitle,
  onClick,
  className = "",
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.container} ${btnType
        .map((type) => styles[type])
        .join(" ")} ${className}`}
      {...rest}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
