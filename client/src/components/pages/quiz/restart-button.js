import { button } from "../../shared/button.js";
import { resetQuiz } from "../../../logic/reset-quiz.js";

/** .....................................................................
 * This function creates a start/restart button for the quiz page and
 * resets the quiz state: , last seen question, score, answers
 *
 * @param {String} buttonText the text that will be shown on the button
 * @returns a div element containing the button
 */
export const createRestartQuizButtonPanel = () => {
  const restartButtonPanel = document.createElement("div");
  restartButtonPanel.className = "mt-5";
  restartButtonPanel.id = "restart-button-panel";

  /*
   * with nagivo the way links works is to put the button
   * inside an 'a' element. This way you can add a proper
   * event listener to the button.
   * also 'a' must have 'data-navigo' property to work properly.
   *
   * Note from: Yoshi Malaise
   * If you really want to add this manually you can look into navbar.js,
   * router.js  and routes.js to manually navigate to page from your code
   * you should import ‘router’. from the src/init/router.js and then call
   * router.navigate(‘/quiz’); instead of the classic location.href=‘./quiz’;
   */
  const theLink = document.createElement("a");
  theLink.href = "/quiz";
  theLink.setAttribute("data-navigo", true);

  const restartButton = button(
    "button",
    "Restart The Quiz",
    "btn btn-danger float-right my-5"
  );

  theLink.appendChild(restartButton);

  // buttonsDiv.appendChild(theLink);

  restartButton.addEventListener("click", () => {
    const isConfirmed = window.confirm(
      "Are you sure that you want to restart the quiz?"
    );

    if (isConfirmed) {
      console.log(`Quiz Restarted`);

      // reset the quiz parameters
      resetQuiz();
    }
  });

  restartButtonPanel.appendChild(theLink);

  // return buttonsDiv;
  return restartButtonPanel;
};
