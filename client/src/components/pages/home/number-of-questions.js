import { data } from "../../../../data/quiz.js";

export const numberOfQu = () => {
  const divInst = document.createElement("div");
  divInst.classList = "numberofQuDiv";
  const titleQu = document.createElement("h2");
  titleQu.innerText = `
  You have ${data.questions.length} questions to answer`;
  divInst.appendChild(titleQu);
  return divInst;
};
