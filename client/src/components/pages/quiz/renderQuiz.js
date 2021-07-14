import { data } from "../../../../data/quiz.js";

// import { divElement } from "../../shared/div.js";
// import { createQuizButtonsDiv } from "./quiz-buttons.js";
// import { createRestartQuizButtonPanel } from "./restart-button.js";
const checked = (e) => {
  debugger;
  const target = e.target;
  if (target.nodeName === "INPUT") {
    const isChecked = target.checked;

    if (isChecked) {
      data.questions[data.indexOfRenderedQuestion].answers[
        e.target.dataset.index
      ].selected = true;
    } else {
      data.questions[data.indexOfRenderedQuestion].answers[
        e.target.dataset.index
      ].selected = false;
    }
    console.log(isChecked);
    console.log(target);
    console.log(e.target.dataset.index);
  }
};

export const quizQuestionPanel = (flag) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz";
  const questionEl = document.createElement("p");

  const currentQuestion = data.questions[flag].question;
  questionEl.innerText = currentQuestion;
  const answersEl = document.createElement("ul");

  for (let a = 0; a < data.questions[flag].answers.length; a++) {
    const answers = data.questions[flag].answers[a];
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.dataset.index = a;
    const listEl = document.createElement("li");
    listEl.innerText = answers.text;
    answersEl.appendChild(listEl);
    listEl.appendChild(checkbox);
    listEl.insertAdjacentElement("afterbegin", checkbox);
    checkbox.addEventListener("click", checked);
  }
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);
  return quizContainer;
};
