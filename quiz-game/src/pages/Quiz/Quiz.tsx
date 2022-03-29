import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuizes, quizActions } from "../../redux/actions/getQuiz";
import { Statuses, Question } from "../../types/index.ts";
import Score from "../../components/buttons/Score/Score.tsx";
import AnswearBtn from "../../components/buttons/AnswearBtn/AnswearBtn.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import styles from "./Quiz.module.scss";

const Quiz = (): JSX.Element => {
  const scores = [
    1000000, 500000, 250000, 125000, 64000, 32000, 16000, 8000, 4000, 2000,
    1000, 500
  ];
  const reversedScore = [...scores]?.reverse();
  const [width, setWidth] = useState(window.innerWidth);
  const [showNavbar, setShowNavbar] = useState(true);
  const [question, setQuestion] = useState(0);

  const history = useHistory();

  const dispatch = useDispatch();

  const quiz = useSelector((state) => state.quiz.quiz);
  const isLoading = useSelector((state) => state.quiz.isLoading);
  const quizError = useSelector((state) => state.quiz.quizError);
  const currentScore = useSelector((state) => state.quiz.score);

  useEffect(() => {
    const quizThunk = () => dispatch(getQuizes());
    quizThunk();
  }, [dispatch]);

  const selectAnswear = (answear: string, quizQuestion: Question): any => {
    if (answear !== quizQuestion?.correctAnswer) {
      return history.push("/result");
    } else if (
      reversedScore[question] === reversedScore[reversedScore.length - 1]
    ) {
      dispatch(quizActions.setScore(reversedScore[question]));
      return history.push("/result");
    }
    dispatch(quizActions.setScore(reversedScore[question]));
    return setQuestion(() => question + 1);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeToLetter = (letter: number): string => {
    switch (letter) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      default:
        return "";
    }
  };
  const checkStatus = (score: number): string => {
    if (score === currentScore) {
      return Statuses.CURRENT;
    } else if (currentScore > score) {
      return Statuses.PASSED;
    }
    return "";
  };

  if (isLoading) {
    return <div> Loading ....</div>;
  }
  if (quizError) {
    return <div> Error</div>;
  }

  return (
    <div>
      {quiz && (
        <div className={styles.container}>
          <div
            className={`${styles.questionsBlock} ${
              width < 800 && !showNavbar ? styles.hide : styles.display
            }`}
          >
            <span className={styles.question}>
              {quiz[question]?.question || ""}
            </span>
            <div className={styles.answears}>
              {quiz[question]?.answers?.map((answear, idx) => (
                <AnswearBtn
                  title={answear}
                  letter={changeToLetter(idx + 1)}
                  onClick={() => selectAnswear(answear, quiz[question])}
                  key={answear}
                />
              ))}
            </div>
          </div>
          {width > 800 ? (
            <div className={styles.amountBlock}>
              {scores?.map((score) => (
                <Score
                  score={score}
                  className={styles.burgerAmountItem}
                  key={score}
                  status={checkStatus(score)}
                />
              ))}
            </div>
          ) : (
            <div
              className={`${styles.burgerMenu} ${
                !showNavbar ? styles.displayMenu : styles.hideMenu
              }`}
            >
              <Navbar setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
              {!showNavbar && (
                <div className={styles.burgerAmountBlock}>
                  {scores?.map((score) => (
                    <Score
                      score={score}
                      className={styles.burgerAmountItem}
                      status={checkStatus(score)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
