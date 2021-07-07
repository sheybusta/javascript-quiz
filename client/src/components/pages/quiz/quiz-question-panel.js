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

  quizQuestionPanel.appendChild(questionDiv);

  //main answers div to display the answers
  const answersDiv = divElement(
    // To remove the borders remove classes 'border',  'border-secondary',
    // and 'rounded'
    'my-2  p-2 border border-secondary rounded',
    'quiz-answers-show'
  );

  quizQuestionPanel.appendChild(answersDiv);

  //init the panel with question and answers
  //the question
  questionDiv.innerText =
    state.questions[state.indexOfRenderedQuestion].question;

  //the answers
  state.questions[state.indexOfRenderedQuestion].answers.forEach((answer) => {
    answersDiv.appendChild(document.createTextNode(answer.text));
  });

  //main div for the quiz buttons
  const quizButtonsDiv = createQuizButtonsDiv();
  quizQuestionPanel.appendChild(quizButtonsDiv);

  //restart button for the quiz
  const restartButtonDiv = createRestartQuizButtonPanel();
  quizQuestionPanel.appendChild(restartButtonDiv);

  return quizQuestionPanel;
};
