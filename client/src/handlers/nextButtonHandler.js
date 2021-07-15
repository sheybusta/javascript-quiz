import { data } from "../../data/quiz.js";
import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";

const nextButtonHandler = () => {
  const quizContainer = document.querySelector(".quiz");
  quizContainer.innerHTML = "";
  data.indexOfRenderedQuestion++;
  // render the question panel
  quizContainer.appendChild(quizQuestionPanel(data.indexOfRenderedQuestion));
};

export { nextButtonHandler };
