// create a function to render as instructions
// parameter {} text

const instructions = (text) => {
  const elP = document.createElement("p");
  elP.innerText = text;
  elP.classList = "quiz-instructions";
  return elP;
};

export { instructions };
