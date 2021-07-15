import { button } from "../../shared/button.js";
import { resetQuiz } from "../../../logic/reset-quiz.js";

/** This function creates a start/restart button for the quiz page and resets the quiz state: last seen question, score, answers.
 *
 * @param {string} buttonText - The text that will be shown on the button.
 * @returns {object} - A div element containing the button.
 */
export const startQuizButton = (buttonText = "Start The Quiz") => {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttons-container";
  // to give margin top spacing
  buttonsDiv.className = "my-5";

  /* eslint-disable-next-line spellcheck/spell-checker */
  /* With Nagivo the way links work is to put the button inside a 'a' element.
   * This way you can add a proper event listener to the button.
   *
   * Note from: Yoshi Malaise : If you really want to add this manually you can look into navbar.js,
   * router.js  and routes.js to manually navigate to page from your code
   * you should import ‘router’. from the src/init/router.js and then call
   * router.navigate(‘/quiz’); instead of the classic location.href=‘./quiz’;
   */
  /* eslint-disable-next-line spellcheck/spell-checker */
  const theLink = document.createElement("a");
  theLink.href = "/quiz";
  theLink.setAttribute("data-navigo", true);

  const startButton = button("button", buttonText, "btn btn-primary");

  theLink.appendChild(startButton);

  buttonsDiv.appendChild(theLink);

  startButton.addEventListener("click", () => {
    // reset the quiz parameters
    resetQuiz();
  });

  return buttonsDiv;
};
