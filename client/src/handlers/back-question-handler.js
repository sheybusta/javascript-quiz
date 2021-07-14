import { state } from "../init/state";

const backQuestionHandler = () => {
  console.log("here");
  // clean quiz
  const quiz = document.getElementsByClassName("quiz");
  quiz.innerHTML = "";

  // update the state
  state.indexOfRenderedQuestion -= 1;
  console.log(state.indexOfRenderedQuestion);

  // condition if index of current question is greater than 0
  if (state.indexOfRenderedQuestion < 0) {
    state.indexOfRenderedQuestion = 0;
  }
  console.log(state.indexOfRenderedQuestion);
  console.log(state.numberOfTotalQuestions);
};

export { backQuestionHandler };
