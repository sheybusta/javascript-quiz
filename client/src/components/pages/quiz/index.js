import { quizQuestionPanel } from './quiz-question-panel.js';

/**
 * The quiz page. Loads when the quiz page is requested.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement('div');
  container.className = 'body';

  //Main display panel for the questions
  const mainQuestionPanel = quizQuestionPanel();

  container.appendChild(mainQuestionPanel);

  return container;
};
