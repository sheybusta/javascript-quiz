import { state } from "../../../init/state.js";
import { quizQuestionPanel } from "./quiz-question-panel.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(quizQuestionPanel(state.indexOfRenderedQuestion));
  return container;
};
