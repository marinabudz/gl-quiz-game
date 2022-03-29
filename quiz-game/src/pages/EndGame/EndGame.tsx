import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";
import Hand from "../../assets/images/hand.png";
import { usdFormat } from "../../methods/methods.tsx";
import styles from "./EndGame.module.scss";

const EndGame = (): JSX.Element => {
  const history = useHistory();
  const currentScore = useSelector((state) => state.quiz.score);
  const endGame = () => history.push("/");

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <img src={Hand} alt="hello hand" />
        <div className={styles.endQuiz}>
          <div>
            <span className={styles.title}>Total score:</span>
            <p className={styles.score}>$ {usdFormat(currentScore)} earned</p>
          </div>
          <Button title="Try again" onClick={endGame} />
        </div>
      </div>
    </div>
  );
};

export default EndGame;
