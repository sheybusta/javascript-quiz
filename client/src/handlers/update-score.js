import { state } from "../init/state.js";
import { score } from "../components/pages/quiz/score.js";

/*
 * button next should change state of previous question to answered: true
 *
 * should be triggered by next button
 * take score from data
 * if question answered correctly - add score +1 to current question
 * updates score div
 */

// re-renders score-div and appends it to body
const renderScore = (scoreState) => {
  const scoreDiv = document.getElementById("score-container");
  scoreDiv.innerHTML = "";

  const newDivScore = score(scoreState);
  scoreDiv.appendChild(newDivScore);
};

// updates data
export const updateScore = () => {

// debugger;
  calculateScore();

  renderScore(state.currentScore);
};

const calculateScore = () =>{
  // reset the score to 0
  state.currentScore = 0;

  // go over all the questions 
  for (let index = 0; index < state.questions.length; index++) {
    const question = state.questions[index];
    let isAnsweredCorrectly = false;

     //for each question go over the answers 
    for (let index2 = 0; index2 < question.answers.length; index2++) {
     
      const answer = question.answers[index2];
    // check if the answer is correctly answered
    if (answer.correct === answer.selected) {
      isAnsweredCorrectly = true;
    } else {
      isAnsweredCorrectly = false;
      break;
    } 
    console.log(isAnsweredCorrectly); 
  }  
 
   // check if the answer is correctly answered
   if (isAnsweredCorrectly) {
     // add score +1
     state.currentScore++;
   }
   
  }

 



}
