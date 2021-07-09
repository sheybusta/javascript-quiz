import { state } from "../../../init/state.js";

// import { divElement } from "../../shared/div.js";
// import { createQuizButtonsDiv } from "./quiz-buttons.js";
// import { createRestartQuizButtonPanel } from "./restart-button.js";

export const quizQuestionPanel = (indexQuestion) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz";
  const questionEl = document.createElement("p");
  const currentQuestion = state.questions[indexQuestion].question;
  questionEl.innerText = currentQuestion;
  const answersEl = document.createElement("ul");

  for (let i = 0; i < state.questions[indexQuestion].answers.length; i++) {
    const answers = state.questions[indexQuestion].answers[i];
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.dataset.index = i;
    const listEl = document.createElement("li");
    listEl.innerText = answers.text;
    listEl.insertAdjacentElement("afterbegin", checkbox);
    answersEl.appendChild(listEl);

    // event listener to input checkbox

    checkbox.addEventListener("click", checked);
  }
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);
  return quizContainer;
};
