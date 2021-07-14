import { data } from "../../../../data/quiz.js";
import { quizQuestionPanel } from "./quiz-question-panel.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";
  const x = data.indexOfRenderedQuestion;
  container.appendChild(quizQuestionPanel(x));
  return container;
};
