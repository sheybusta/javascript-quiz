import { state } from '../../../init/state.js';
import { instructions } from './instructions.js';
import { numberOfQu } from './number-of-questions.js';

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';

  container.appendChild(instructions());
  container.appendChild(numberOfQu());

  return container;
};

//calculate the number fo total questions in the quiz data
state.numberOfTotalQuestions = state.questions.length;
