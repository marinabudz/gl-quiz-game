import React from "react";
import { ButtonProps } from "../../../types/index.ts";
import styles from "./Button.module.scss";

const Button = ({ title, style, onClick }: ButtonProps): JSX.Element => (
  <button style={style} className={styles.btn} onClick={onClick} type="submit">
    {title}
  </button>
);

export default Button;
