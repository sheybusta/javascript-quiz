import { state } from "../../../init/state.js";
import { backButton } from "./back-button.js";
import { quizQuestionPanel } from "./quiz-question-panel.js";
import { createRestartQuizButtonPanel } from "./restart-button.js";

/**
 * The quiz page. Loads when the quiz page is requested.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  // if (state.indexOfRenderedQuestion >= 0) {
  //   //Main display panel for the questions
  //   const mainQuestionPanel = quizQuestionPanel();

  //   container.appendChild(mainQuestionPanel);
  // } else {
  //   //warn if the start button is never clicked
  //   container.appendChild(
  //     document.createTextNode("Please start the quiz from home page!")
  //   );
  // }
  container.appendChild(quizQuestionPanel(state.indexOfRenderedQuestion));
  container.appendChild(createRestartQuizButtonPanel());

  // display back button
  container.appendChild(backButton());

  return container;
};
