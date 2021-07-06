/**
 * This data object will store the state of the quiz application.
 *
 * @property {number} indexOfRenderedQuestion - The index of the current question
 * which is rendered in the quiz page. This index is also shows the question
 * position in the question array (data.questions).
 * Before the app starts the index will have value of -1 and
 * At the start/restart of the quiz page the value will be initialized to 0. Then
 * every time the quiz question is changed the index will be updated accordingly
 * and the data.questions[indexOfRenderedQuestion] question will be rendered on the quiz page.
 *
 * @property {number} numberOfTotalQuestions - this variable stores
 * the total number of questions in the quiz
 * and shows when it is needed in the application.
 * This variable will be updated when the application (or home page) is loaded.
 * When then question page is loaded and questions are added or removed this
 * variable must be recalculated.
 *
 * @property {number} currentScore - The current score of the user. This value be
 * initialized to 0. Then every time the previous or the next button is clicked
 * the score will be updated accordingly. Each correct answer is 1 point.
 * there will be more then one answer for each question thus if every question
 * will have different scores.
 *
 * For example if the question has 2 correct answers
 * and the user selects both answers then user will get 2 points for the question.
 *
 * For example if the question has 2 correct answers
 * and the user selects both answers and selects a third answer which is wrong
 * then user will get 2 points for the question.
 *
 * For example if the question has 2 correct answers
 * and the user selects a correct answer and selects a wrong answer
 * then user will get 1 point for the question.
 *
 * @property {string} greeting -
 * @property {array of questions} questions -
 */
export const data = {
  indexOfRenderedQuestion: -1,
  numberOfTotalQuestions: -1,
  currentScore: -1,

  greeting: 'hello',
  questions: [
    {
      question:
        'Which are correct ways to declare a variable in JavaScript? (strict mode)',
      answered: false,
      answers: [
        {
          text: 'const name = "Tim";',
          correct: true,
          selected: false,
        },
        {
          text: 'name = "Tim";',
          correct: false,
          selected: false,
        },
        {
          text: 'let name = "Tim";',
          correct: true,
          selected: false,
        },
        {
          text: 'var name = "Tim";',
          correct: true,
          selected: false,
        },
      ],
      links: [
        {
          text: 'javascript.info',
          url: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          url: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      question: 'What does `typeof` do?',
      answered: false,
      answers: [
        {
          text: 'changes the type of a primitive value',
          correct: false,
          selected: false,
        },
        {
          text: 'returns a string describing the type of a value',
          correct: true,
          selected: false,
        },
        {
          text: 'determines if a value is primitive',
          correct: false,
          selected: false,
        },
        {
          text: 'can tell the difference between arrays and objects',
          correct: false,
          selected: false,
        },
      ],
      links: [
        {
          text: 'javascript.info',
          url: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
  ],
};
