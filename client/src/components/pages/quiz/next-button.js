import { nextQuestionHandler } from "../../../handlers/next-question-handler.js";

const nextButton = () => {
  const nxtButton = document.createElement("button");
  nxtButton.innerText = "next";
  nxtButton.classList = "next-button";
  nxtButton.addEventListener("click", nextQuestionHandler);
  return nxtButton;
};

export { nextButton };
