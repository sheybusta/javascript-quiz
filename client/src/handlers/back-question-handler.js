import { quizQuestionPanel } from "../components/pages/quiz/quiz-question-panel.js";
import { state } from "../init/state.js";

const backQuestionHandler = () => {
  // console.log("here");
  // clean quiz
  const quiz = document.getElementsByClassName("quiz");
  quiz.innerHTML = "";

  // update the state
  state.indexOfRenderedQuestion -= 1;
  quiz.appendChild(quizQuestionPanel(state.indexOfRenderedQuestion));
  // console.log(state.indexOfRenderedQuestion);
};
export { backQuestionHandler };
