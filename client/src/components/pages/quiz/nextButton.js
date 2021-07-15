import { nextButtonHandler } from "../../../handlers/nextButtonHandler.js";

const nextButton = () => {
  const nextBtn = document.createElement("button");
  nextBtn.id = "next-button";
  nextBtn.classList = "btn btn-primary";
  nextBtn.innerText = "Next";
  document.body.appendChild(nextBtn);
  nextBtn.addEventListener("click", nextButtonHandler);
  return nextBtn;
};

export { nextButton };
