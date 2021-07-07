import { state } from '../../../init/state.js';

import { divElement } from '../../shared/div.js';
import { createQuizButtonsDiv } from './quiz-buttons.js';
import { createRestartQuizButtonPanel } from './restart-button.js';

export const quizQuestionPanel = () => {
  //Main display panel for the question

  const quizQuestionPanel = divElement(
    // To remove the borders remove classes 'border',  'border-secondary',
    // and 'rounded'
    'my-3 mx-auto p-2 border border-secondary rounded ',
    'quiz-question-panel'
  );

  //main question div to display the question
  const questionDiv = divElement(
    // To remove the borders remove classes 'border',  'border-secondary',
    // and 'rounded'
    'my-3 p-2 border border-secondary rounded',
    'quiz-question-shows'
  );

  //TODO init question
  //get the question to display
  let questionIndex = state.indexOfRenderedQuestion;
  console.log(state.questions[questionIndex]);
  questionDiv.innerText = state.questions[questionIndex].question;

  quizQuestionPanel.appendChild(questionDiv);

  //main answers div to display the answers
  const answersDiv = divElement(
    // To remove the borders remove classes 'border',  'border-secondary',
    // and 'rounded'
    'my-2  p-2 border border-secondary rounded',
    'quiz-answers-show'
  );

  //TODO init answers
  // get the answers and display in the panel
  state.questions[questionIndex].answers.forEach((answer) => {
    answersDiv.appendChild(document.createTextNode(answer.text));
  });

  quizQuestionPanel.appendChild(answersDiv);

  //main div for the quiz buttons
  const quizButtonsDiv = createQuizButtonsDiv();
  quizQuestionPanel.appendChild(quizButtonsDiv);

  //restart button for the quiz
  const restartButtonDiv = createRestartQuizButtonPanel();
  quizQuestionPanel.appendChild(restartButtonDiv);

  return quizQuestionPanel;
};
