/* eslint no-restricted-globals:0 */
export interface ScoreProps {
  score: string;
  className?: object;
  status: string;
}

export enum Statuses {
  CURRENT = "current",
  PASSED = "passed"
}
export interface Question {
  answers: string[];
  correctAnswer: string;
  question: string;
}
export interface NavbarProps {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AnswearBtnProps {
  title: string;
  style?: object;
  answear?: string;
  letter: string;
  onClick?: () => void;
}

export enum Answears {
  CORRECT = "correct",
  WRONG = "wrong"
}

export interface ButtonProps {
  title: string;
  style?: object;
  onClick?: () => void;
}
