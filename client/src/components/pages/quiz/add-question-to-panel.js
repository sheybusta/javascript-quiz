import { state } from '../../../init/state.js';

export const addQuestionToPanel = () => {
  debugger;
  //   const questionPanel = document.getElementById('quiz-question-panel');

  console.log(state.questions);

  const questionDiv = document.getElementById('quiz-question-shows');
  questionDiv.innerText =
    state.questions[state.indexOfRenderedQuestion].question;

  //   questionPanel.appendChild(questionDiv);

  const answersDiv = document.getElementById('quiz-answers-show');

  // get the answers and display in the panel
  state.questions[questionIndex].answers.forEach((answer) => {
    answersDiv.appendChild(document.createTextNode(answer.text));
  });
};
