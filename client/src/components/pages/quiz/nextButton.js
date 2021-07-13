import { createQuizButtonsDiv } from "./quiz-buttons.js";

const nextBtn = document
  .querySelector(".next-button")
  .appendChild(createQuizButtonsDiv().nextButton())
  .addEventListener("click", (e) => console.log(e));

export { nextBtn };
