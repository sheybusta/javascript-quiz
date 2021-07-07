// import { startQuizHandler } from '../../../handlers/startQuizHandler.js';
import { button } from '../../shared/button.js';

// import Navigo from '../../../../lib/navigo'; // When using ES modules.

// const router = new Navigo('/');

export const startQuizButton = () => {
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = 'buttons-container';
  buttonsDiv.className = 'my-5';

  const theLink = document.createElement('a');
  theLink.href = '/quiz';
  theLink.setAttribute('data-navigo', true);

  const startButton = button(
    'button',
    'Start The Quiz',
    // '<a href="/quiz" data-navigo>Start The Quiz</a>',
    'btn btn-primary'
  );

  theLink.appendChild(startButton);
  // buttonsDiv.appendChild(startButton);
  buttonsDiv.appendChild(theLink);

  startButton.addEventListener('click', () => {
    // router.navigate('/quiz');
    // location.replace('/quiz');
    // location.href = '/quiz';
    console.log('quiz started');
  });
  //   startButton.addEventListener('click', startQuizHandler);

  return buttonsDiv;
};
