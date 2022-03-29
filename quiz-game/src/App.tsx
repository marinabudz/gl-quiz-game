import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./common/Routes";
import store from "./redux/store";
import StartGame from "./pages/StartGame/StartGame.tsx";
import EndGame from "./pages/EndGame/EndGame.tsx";
import Quiz from "./pages/Quiz/Quiz.tsx";
import "./App.module.scss";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={Routes.START} component={StartGame} exact />
        <Route path={Routes.QUIZ} component={Quiz} exact />
        <Route path={Routes.RESULT} component={EndGame} exact />
      </Switch>
    </Router>
  </Provider>
);

export default App;
