import { inputGreeting } from "../../shared/input-greeting.js";
import { instructions } from "./instructions.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.innerHTML = "home: ";

  container.appendChild(instructions());
  // container.appendChild(
  //   instructions(
  //     "You can test your JavaScript skills with Us! The test is not official, it's just a nice way to see how much you know, or don't know, about JavaScript. You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 10 points."
  //   )
  // );
  container.appendChild(inputGreeting());

  return container;
};
