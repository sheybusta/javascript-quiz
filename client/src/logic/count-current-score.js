import { state } from "../init/state.js";

export const countCurrentScore = () => {
  for (const item of state.questions) {
    if (item.answered === true) {
      state.currentScore += 1;
    }
  }
};
