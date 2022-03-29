import React, { useState, useEffect } from "react";
import { ScoreProps, Statuses } from "../../../types/index.ts";
import { usdFormat } from "../../../methods/methods.tsx";
import styles from "./Score.module.scss";
import colors from "../../../colors.module.scss";

const Score = ({ score, status, className }: ScoreProps): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const checkColor = (statusName: string): string => {
    if (statusName === Statuses.CURRENT) {
      return colors.orange;
    } else if (statusName === Statuses.PASSED) {
      return colors.gray;
    }
    return colors.black;
  };

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={styles.amount} style={{ color: checkColor(status) }}>
        $ {usdFormat(score)}
      </div>
      <svg
        width={width < 900 ? "376" : "300"}
        height={width < 900 ? "35" : "32"}
        viewBox="0 0 376 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M69 20H0" stroke={checkColor(status)} />
        <path d="M376 20H307" stroke={checkColor(status)} />
        <path
          d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
          fill="white"
          stroke={checkColor(status)}
        />
      </svg>
    </div>
  );
};

export default Score;
