import React, { useState, useEffect } from "react";
import { AnswearBtnProps, Answears } from "../../../types/index.ts";
import styles from "./AnswearBtn.module.scss";
import colors from "../../../colors.module.scss";

const checkAnswear = (
  answear: string,
  fillInside?: boolean,
  border?: boolean
): string => {
  if (answear === Answears.CORRECT) {
    return border ? colors?.green : colors.lightGreen;
  } else if (answear === Answears.WRONG) {
    return border ? colors?.red : colors.lightRed;
  }
  return fillInside ? colors?.gray : "none";
};

const AnswearBtn = ({
  title,
  style,
  answear,
  letter,
  onClick
}: AnswearBtnProps): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      style={style}
      className={styles.btn}
      onClick={onClick}
      type="submit"
    >
      <div
        className={`${styles.titleBlock} ${
          title.length > 25 ? styles.largeText : styles.smallText
        }`}
      >
        <span className={styles.letter}>{letter}</span>
        <span className={styles.title}>
          {title ? `${title[0].toUpperCase()}${title.slice(1)}` : ""}
        </span>
      </div>

      <svg
        width={width < 900 ? "280" : "373"}
        height={width < 900 ? "56" : "72"}
        viewBox="0 0 405 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M388 36L405 36" stroke={checkAnswear(answear, true, true)} />
        <path d="M0 36L17 36" stroke={checkAnswear(answear, true, true)} />
        <path
          d="M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z"
          fill={checkAnswear(answear)}
          stroke={checkAnswear(answear, true, true)}
        />
      </svg>
    </button>
  );
};

export default AnswearBtn;
