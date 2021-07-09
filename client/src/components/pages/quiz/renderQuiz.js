import { data } from "../../../../data/quiz.js";

// import { divElement } from "../../shared/div.js";
// import { createQuizButtonsDiv } from "./quiz-buttons.js";
// import { createRestartQuizButtonPanel } from "./restart-button.js";

export const quizQuestionPanel = (indexOfRenderedQuestion) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz";
  const questionEl = document.createElement("p");
  const currentQuestion = data.questions[indexOfRenderedQuestion].question;
  questionEl.innerText = currentQuestion;
  const answersEl = document.createElement("ul");

  for (const answers of data.questions[indexOfRenderedQuestion].answers) {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const listEl = document.createElement("li");
    listEl.innerText = answers.text;
    answersEl.appendChild(listEl);
    listEl.appendChild(checkbox);
    listEl.insertAdjacentElement("afterbegin", checkbox);
    // reads if selected

    // if selected need to push that to data
    // compare with correct === true
  }
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);
  return quizContainer;
};
