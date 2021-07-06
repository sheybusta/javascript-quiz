export const numberOfQu = () => {
  const divInst = document.createElement("div");
  divInst.classList = "quiz-instructions";
  const titleQu = document.createElement("h2");
  titleQu.innerText = "You have ${} questions to answer";
  divInst.appendChild(titleQu);
  return divInst;
};
