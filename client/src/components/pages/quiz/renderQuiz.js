import { data } from "../../../../data/quiz.js";

// create an element "div" to add question from state
// append questions, answers and checkboxes

const renderQuiz = (questions) => {
  const quizContainer = document.createElement("div");
  quizContainer.className = "quiz";
  const questionEl = document.createElement("p");
  const currentQuestion = data.questions[0].question;
  questionEl.innerText = currentQuestion;
  const answersEl = document.createElement("ul");
  for (const answers of data.questions[0].answers) {
    const listEl = document.createElement("li");
    listEl.innerText = answers.text;
    answersEl.appendChild(listEl);
  }
  //   const currentAnswers = data.questions[0].answers.text;
  //   questionEl.innerText = currentAnswers;
  //   console.log(currentQuestion);
  //   console.log(currentAnswers);
  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(answersEl);

  // create loop to add li on ul

  return quizContainer;
};

export { renderQuiz };
