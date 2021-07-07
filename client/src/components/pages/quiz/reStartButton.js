import { button } from '../../shared/button.js';
import { resetQuiz } from '../../../logic/resetQuiz.js';

/**
 * This function creates a start/restart button for the quiz page and
 * resets the quiz state: , last seen question, score, answers
 *
 * @param {String} buttonText the text that will be shown on the button
 * @returns a div element containing the button
 */
export const reStartQuizButton = (buttonText = 'Start The Quiz') => {
  // const buttonsDiv = document.createElement('div');
  // buttonsDiv.id = 'buttons-container';
  // //to give margin top spacing
  // buttonsDiv.className = 'my-5';

  /*
   * with nagivo the way links works is to put the button
   * inside an 'a' element. This way you can add a proper
   * event listener to the button.
   * also 'a' must have 'data-navigo' property to work properly.
   */
  const theLink = document.createElement('a');
  theLink.href = '/quiz';
  theLink.setAttribute('data-navigo', true);

  const restartButton = button(
    'button',
    buttonText,
    'btn btn-danger float-right my-5'
  );

  theLink.appendChild(restartButton);

  // buttonsDiv.appendChild(theLink);

  restartButton.addEventListener('click', () => {
    const isConfirmed = confirm(
      'Are you sure that you want to restart the quiz?'
    );

    if (isConfirmed) {
      console.log(`Quiz Restarted`);

      //reset the quiz parameters
      resetQuiz();
    }
  });

  // return buttonsDiv;
  return theLink;
};
