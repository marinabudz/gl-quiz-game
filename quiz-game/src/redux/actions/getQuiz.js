import { QuizActionTypes } from "../types/quizActionTypes";

export const quizActions = {
  setQuiz: (quiz) => ({
    type: QuizActionTypes.SET_QUIZ,
    quiz
  }),
  setQuizError: (error) => ({
    type: QuizActionTypes.SET_QUIZ_ERROR,
    error
  }),
  setIsLoading: (loading) => ({
    type: QuizActionTypes.IS_LOADING,
    loading
  }),
  setScore: (score) => ({
    type: QuizActionTypes.SET_SCORE,
    score
  })
};

export const getQuizes = () => async (dispatch) => {
  const { setQuiz, setQuizError, setIsLoading } = quizActions;
  const endpoint =
    "https://opentdb.com/api.php?amount=12&difficulty=easy&type=multiple";

  dispatch(setIsLoading(true));
  try {
    await fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const updatedResults = data.results?.map((result) => ({
          correctAnswer: result.correct_answer,
          question: result.question,
          answers: [...result.incorrect_answers, result.correct_answer].sort(
            () => 0.5 - Math.random()
          )
        }));
        dispatch(setQuiz(updatedResults));
      });
  } catch (e) {
    dispatch(setQuizError(e));
  } finally {
    dispatch(setIsLoading(false));
  }
};
