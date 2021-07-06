import { button } from '../../shared/button.js';

export const startQuizButton = () => {
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = 'buttons-container';
  buttonsDiv.className = 'my-5';

  const startButton = button(
    'button',
    '<a href="/quiz" data-navigo class="btn-outline-primary">Start The Quiz</a>',
    'btn btn-primary'
  );

  buttonsDiv.appendChild(startButton);

  startButton.addEventListener('click');

  return buttonsDiv;
};
