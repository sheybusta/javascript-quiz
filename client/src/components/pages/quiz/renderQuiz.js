import { data } from "../../../../data/quiz.js";

const quizQuestionPanel = (indexOfRenderedQuestion) => {
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
    listEl.insertAdjacentElement("afterbegin", checkbox);
    answersEl.appendChild(listEl);
  }
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);
  return quizContainer;
};

export { quizQuestionPanel };
