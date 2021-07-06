import { resetQuiz } from '../../../logic/resetQuiz.js';
import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The quiz page. Loads when the quiz page is requested.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement('div');
  container.className = 'body';

  //reset the quiz parameters
  resetQuiz();

  container.appendChild(inputGreeting());

  return container;
};
