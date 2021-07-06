export const numberOfQu = () => {
  const divInst = document.createElement("div");
  divInst.classList = "quiz-instructions";
  const titleInst = document.createElement("h2");
  titleInst.innerText = "You have ${} questions to answer";
  const pInst = document.createElement("p");
  pInst.innerText =
    " The test is not official, it's just a nice way to see how much you know, or don't know, about JavaScript. You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 10 points.";
  divInst.appendChild(titleInst);
  divInst.appendChild(titleInst.appendChild(pInst));
  return divInst;
};
