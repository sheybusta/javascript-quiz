import { state } from "../../../init/state.js";
import { backButton } from "./back-button.js";
import { createHintPanel } from "./hint-panel.js";
import { quizQuestionPanel } from "./quiz-question-panel.js";
import { createRestartQuizButtonPanel } from "./restart-button.js";
import { nextButton } from "./nextButton.js";
import { submitButton } from "./submit-button.js";
import { score } from "./score.js";

/**
 * The quiz page. Loads when the quiz page is requested.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  if (state.indexOfRenderedQuestion >= 0) {
    const scoreContainer = document.createElement("div");
    scoreContainer.id = "score-container";
    scoreContainer.appendChild(score(state.currentScore));

    container.appendChild(scoreContainer);
    container.appendChild(quizQuestionPanel(state.indexOfRenderedQuestion));
    container.appendChild(backButton());
    container.appendChild(nextButton());
    container.appendChild(submitButton());
    container.appendChild(createHintPanel());
    container.appendChild(createRestartQuizButtonPanel());
  } else {
    // warn if the start button is never clicked
    container.appendChild(
      document.createTextNode("Please start the quiz from home page!")
    );
  }
  return container;
};
