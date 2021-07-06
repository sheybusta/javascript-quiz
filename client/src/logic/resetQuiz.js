import { state } from '../init/state.js';

export const resetQuiz = () => {
  state.indexOfRenderedQuestion = 0;
  state.currentScore = 0;
  //   debugger;
  //   console.log(state.indexOfRenderedQuestion);
  //   console.log(state.currentScore);
};
