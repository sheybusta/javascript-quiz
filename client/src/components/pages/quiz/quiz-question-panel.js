import { state } from "../../../init/state.js";

// import { divElement } from "../../shared/div.js";
// import { createQuizButtonsDiv } from "./quiz-buttons.js";
// import { createRestartQuizButtonPanel } from "./restart-button.js";

export const quizQuestionPanel = () => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz";
  const questionEl = document.createElement("p");
  const currentQuestion = state.questions[0].question;
  questionEl.innerText = currentQuestion;
  const answersEl = document.createElement("ul");

  for (const answers of state.questions[0].answers) {
    const listEl = document.createElement("li");
    listEl.innerText = answers.text;
    answersEl.appendChild(listEl);
  }
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);

  // quizContainer.appendChild(createRestartQuizButtonPanel());
  return quizContainer;
};

// export const quizQuestionPanel = () => {
//   // Main display panel for the question
//   const questionPanel = divElement(
//     // To remove the borders remove classes 'border',  'border-secondary',
//     // and 'rounded'
//     "my-3 mx-auto p-2 border border-secondary rounded ",
//     "quiz-question-panel"
//   );

//   // Main question div to display the question
//   const questionDiv = divElement(
//     // To remove the borders remove classes 'border',  'border-secondary',
//     // and 'rounded'
//     "my-3 p-2 border border-secondary rounded",
//     "quiz-question-shows"
//   );

//   questionPanel.appendChild(questionDiv);

//   // Main answers div to display the answers
//   const answersDiv = divElement(
//     // To remove the borders remove classes 'border',  'border-secondary',
//     // and 'rounded'
//     "my-2  p-2 border border-secondary rounded",
//     "quiz-answers-show"
//   );

//   questionPanel.appendChild(answersDiv);

//   // Init the panel with question and answers
//   // The question
//   questionDiv.innerText =
//     state.questions[state.indexOfRenderedQuestion].question;

//   // The answers
//   state.questions[state.indexOfRenderedQuestion].answers.forEach((answer) => {
//     answersDiv.appendChild(document.createTextNode(answer.text));
//   });

//   // Main div for the quiz buttons
//   const quizButtonsDiv = createQuizButtonsDiv();
//   questionPanel.appendChild(quizButtonsDiv);

//   // Restart button for the quiz
//   const restartButtonDiv = createRestartQuizButtonPanel();
//   questionPanel.appendChild(restartButtonDiv);

//   return questionPanel;
// };
