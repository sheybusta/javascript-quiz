import { data } from "../../data/quiz.js";
import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";

let numberOfTotalQuestions = 1;

const nextButtonHandler = () => {
  if (numberOfTotalQuestions < data.questions.length) {
    // empty the container
    document.querySelector(".quiz").innerHTML = "";
    const quizContainer = document.querySelector(".quiz");
    // render the question panel
    quizContainer.appendChild(quizQuestionPanel(numberOfTotalQuestions));
    numberOfTotalQuestions++;
  } else {
    console.log("alert/error");
  }
};

export { nextButtonHandler };
