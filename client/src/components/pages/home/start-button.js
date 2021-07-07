import { button } from '../../shared/button.js';
import { resetQuiz } from '../../../logic/reset-quiz.js';

/**
 * This function creates a start/restart button for the quiz page and
 * resets the quiz state: , last seen question, score, answers
 *
 * @param {String} buttonText the text that will be shown on the button
 * @returns a div element containing the button
 */
export const startQuizButton = (buttonText = 'Start The Quiz') => {
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = 'buttons-container';
  //to give margin top spacing
  buttonsDiv.className = 'my-5';

  /*
   * with nagivo the way links work is to put the button
   * inside a 'a' element. This way you can add a proper
   * event listener to the button.
   */
  const theLink = document.createElement('a');
  theLink.href = '/quiz';
  theLink.setAttribute('data-navigo', true);

  const startButton = button('button', buttonText, 'btn btn-primary');

  theLink.appendChild(startButton);

  buttonsDiv.appendChild(theLink);

  startButton.addEventListener('click', () => {
    console.log(`Quiz: ${buttonText}`);

    //reset the quiz parameters
    resetQuiz();
  });

  return buttonsDiv;
};
