import { data } from "../../data/quiz.js";
import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";

let numberOfTotalQuestions = 0;

const nextButtonHandler = () => {
  if (numberOfTotalQuestions < data.questions.length) {
    numberOfTotalQuestions++;
    quizQuestionPanel(numberOfTotalQuestions);
  } else {
    console.log("alert/error");
  }
  return nextButtonHandler;
};

export { nextButtonHandler };
