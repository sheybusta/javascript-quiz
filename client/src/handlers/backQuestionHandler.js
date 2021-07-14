import { state } from "../init/state";

const backQuestionHandler = () => {
  console.log("here");
  // clean quiz
  const quiz = document.getElementsByClassName("quiz");
  quiz.innerHTML = "";

  // update the state
  state.indexOfRenderedQuestion -= 1;
  console.log(state.indexOfRenderedQuestion);

  // get length of questions or total questions
  const totalQuestions = state.numberOfTotalQuestions;
  // condition if index of question is less than total questions
  if (state.indexOfRenderedQuestion >= totalQuestions) {
    state.indexOfRenderedQuestion = state.numberOfTotalQuestions + 1;
  }
  console.log(state.indexOfRenderedQuestion);
  console.log(state.numberOfTotalQuestions);
};

export { backQuestionHandler };
