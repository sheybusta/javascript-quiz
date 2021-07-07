import { state } from '../../../init/state.js';
import { resetQuiz } from '../../../logic/resetQuiz.js';
import { button } from '../../shared/button.js';
// import { inputGreeting } from '../../shared/input-greeting.js';

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

  // container.appendChild(inputGreeting());

  const quizQuestionPanel = document.createElement('div');
  quizQuestionPanel.className =
    'my-3 mx-auto p-2 border border-secondary rounded ';
  quizQuestionPanel.id = 'quiz-question-panel';

  const questionDiv = document.createElement('div');
  questionDiv.className = 'my-3 border border-secondary ';
  questionDiv.id = 'quiz-question-shows';

  //TODO: get the question
  let questionIndex = state.indexOfRenderedQuestion;
  console.log(state.questions[questionIndex]);
  questionDiv.innerText = state.questions[questionIndex].question;

  quizQuestionPanel.appendChild(questionDiv);

  const answersDiv = document.createElement('div');
  answersDiv.className = 'my-2 border border-secondary ';
  answersDiv.id = 'quiz-answers-show';
  //TODO: get the answers
  state.questions[questionIndex].answers.forEach((answer) => {
    answersDiv.appendChild(document.createTextNode(answer.text));
  });

  quizQuestionPanel.appendChild(answersDiv);

  const quizButtonsDiv = document.createElement('div');
  quizButtonsDiv.className = 'my-3 border border-secondary ';
  quizButtonsDiv.id = 'quiz-buttons';

  //TODO: add previous button
  const previousButton = button(
    'button',
    'Previous',
    'btn btn-primary',
    'previous-button'
  );
  quizButtonsDiv.appendChild(previousButton);

  //TODO: add next button
  const nextButton = button('button', 'Next', 'btn btn-primary', 'next-button');
  quizButtonsDiv.appendChild(nextButton);

  //TODO: add submit button
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

  const restartButton = button(
    'button',
    'Restart The Quiz',
    // '<a href="/quiz" data-navigo>Restart The Quiz</a>',
    'btn btn-danger',
    'restart-button'
  );

  restartButton.addEventListener('click', () => {
    console.log('Quiz Re-started');
  });

  theLink.appendChild(restartButton);

  restartButtonPanel.appendChild(theLink);

  container.appendChild(restartButtonPanel);

  return container;
};
