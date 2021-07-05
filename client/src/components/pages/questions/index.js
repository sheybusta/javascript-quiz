import { inputGreeting } from "../../shared/input-greeting.js";
import { instructions } from "../home/instructions.js";

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(inputGreeting());
  container.appendChild(instructions("text"));
  return container;
};
