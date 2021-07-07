import { state } from '../../../init/state.js';

import { button } from '../../shared/button.js';
import { reStartQuizButton } from './reStartButton.js';

/**
 * The quiz page. Loads when the quiz page is requested.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement('div');
  container.className = 'body';

  //Main display panel for the question
  const quizQuestionPanel = document.createElement('div');

  // To remove the borders remove classes 'border',  'border-secondary',
  // and 'rounded'
  quizQuestionPanel.className =
    'my-3 mx-auto p-2 border border-secondary rounded ';
  quizQuestionPanel.id = 'quiz-question-panel';

  //main question div to display the question
  const questionDiv = document.createElement('div');
  // To remove the borders remove classes 'border',  'border-secondary',
  // and 'rounded'
  questionDiv.className = 'my-3 p-2 border border-secondary rounded';
  questionDiv.id = 'quiz-question-shows';

  //get the question to display
  let questionIndex = state.indexOfRenderedQuestion;
  console.log(state.questions[questionIndex]);
  questionDiv.innerText = state.questions[questionIndex].question;

  quizQuestionPanel.appendChild(questionDiv);

  //main answers div to display the answers
  const answersDiv = document.createElement('div');
  // To remove the borders remove classes 'border',  'border-secondary',
  // and 'rounded'
  answersDiv.className = 'my-2  p-2 border border-secondary rounded';
  answersDiv.id = 'quiz-answers-show';

  // get the answers and display in the panel
  state.questions[questionIndex].answers.forEach((answer) => {
    answersDiv.appendChild(document.createTextNode(answer.text));
  });

  quizQuestionPanel.appendChild(answersDiv);

  //main div for the quiz buttons
  const quizButtonsDiv = document.createElement('div');
  quizButtonsDiv.className = 'my-3 border border-secondary ';
  quizButtonsDiv.id = 'quiz-buttons';

  /*
   * add previous button
   * by default visibility: hidden; from the css
   * to take the space in the div
   * after the first question this button must be visible
   */
  const previousButton = button(
    'button',
    'Previous',
    'btn btn-primary',
    'previous-button'
  );
  quizButtonsDiv.appendChild(previousButton);

  // add next button
  const nextButton = button('button', 'Next', 'btn btn-primary', 'next-button');
  quizButtonsDiv.appendChild(nextButton);

  /*
   * add submit button
   * by default display:none; from the css
   * in the last question this button must be visible (display:block;)
   */
  const submitButton = button(
    'button',
    'Submit',
    'btn btn-primary',
    'submit-button'
  );
  quizButtonsDiv.appendChild(submitButton);

  quizQuestionPanel.appendChild(quizButtonsDiv);

  container.appendChild(quizQuestionPanel);

  const restartButtonPanel = document.createElement('div');
  restartButtonPanel.className = 'mt-5';
  restartButtonPanel.id = 'restart-button-panel';

  const theLink = document.createElement('a');
  theLink.href = '/quiz';
  theLink.setAttribute('data-navigo', true);

  const restartButton = reStartQuizButton('Restart The Quiz');

  theLink.appendChild(restartButton);

  restartButtonPanel.appendChild(theLink);

  quizQuestionPanel.appendChild(restartButtonPanel);

  return container;
};
