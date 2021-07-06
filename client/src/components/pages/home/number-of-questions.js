import { state } from "../../../init/state.js";

export const numberOfQu = () => {
  const divInst = document.createElement("div");
  divInst.classList = "numberofQuDiv";
  const titleQu = document.createElement("h2");
  titleQu.innerText = `
  You have ${state.questions.length} questions to answer.`;
  divInst.appendChild(titleQu);
  return divInst;
};
