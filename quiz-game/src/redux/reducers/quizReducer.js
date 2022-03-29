import { QuizActionTypes } from "../types/quizActionTypes";

const initialState = {
  quizError: false,
  quiz: null,
  isLoading: false,
  score: 0
};
const defaultAction = {
  type: "",
  quiz: undefined,
  error: undefined,
  loading: false,
  score: 0
};

const userReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case QuizActionTypes.SET_QUIZ:
      return {
        ...state,
        quiz: action.quiz
      };
    case QuizActionTypes.SET_QUIZ_ERROR:
      return {
        ...state,
        quizError: action.error
      };
    case QuizActionTypes.SET_SCORE:
      return {
        ...state,
        score: action.score
      };
    case QuizActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.loading
      };

    default:
      return state;
  }
};

export default userReducer;
