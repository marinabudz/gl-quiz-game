import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizActions } from "../../redux/actions/getQuiz";
import Button from "../../components/buttons/Button/Button.tsx";
import Hand from "../../assets/images/hand.png";
import BackgroudBigImage from "../../assets/images/bgRectangle.png";
import styles from "./StartGame.module.scss";

const StartGame = (): any => {
  const history = useHistory();
  const dispatch = useDispatch();
  const startGame = () => {
    dispatch(quizActions.setScore(0));
    return history.push("/quiz");
  };

  return (
    <div className={styles.container}>
      <img
        src={BackgroudBigImage}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "-5000"
        }}
        alt="triabgle"
      />

      <div className={styles.block}>
        <img src={Hand} alt="hand" />
        <div className={styles.startQuiz}>
          <span className={styles.title}>Who wants to be a millionaire?</span>
          <Button title="Start" onClick={startGame} />
        </div>
      </div>
    </div>
  );
};

export default StartGame;
