const nextButton = () => {
  const nextBtn = document.createElement("button");
  nextBtn.id = "next-button";
  nextBtn.classList = "btn btn-primary";
  nextBtn.innerText = "Next";
  document.body.appendChild(nextBtn);
  nextBtn.addEventListener("click", (e) => console.log(e));
  return nextBtn;
};

export { nextButton };
