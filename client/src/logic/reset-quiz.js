import { state } from '../init/state.js';

/**
 * This function reset the state of quiz:
 * - resets indexOfRenderedQuestion,
 * - resets currentScore, and
 * - resets the state of each question
 */
export const resetQuiz = () => {
  state.indexOfRenderedQuestion = 0;
  state.currentScore = 0;

  resetQuestions();
  //   debugger;
  //   console.log(state.indexOfRenderedQuestion);
  //   console.log(state.currentScore);
};

/**
 * This function resets the state of each question in the quiz:
 * - resets answered property and
 * - resets selected property of each available answer for each question
 */
const resetQuestions = () => {
  state.questions.forEach((question) => {
    question.answered = false;

    question.answers.forEach((answer) => {
      answer.selected = false;
    });
  });
};
