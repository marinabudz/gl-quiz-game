import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import quizReducer from "./reducers/quizReducer";

const rootReducer = combineReducers({
  quiz: quizReducer
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
