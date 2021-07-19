export const data = {
  indexOfRenderedQuestion: -1,
  numberOfTotalQuestions: -1,
  currentScore: -1,

  questions: [
    {
      question:
        "Which are correct ways to declare a variable in JavaScript? (strict mode)",
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
          text: "javascript.info",
          url: "https://javascript.info/variables",
        },
        {
          text: "Tyler McGinnis",
          url: "https://ui.dev/var-let-const/",
        },
      ],
    },
    {
      question: "What does `typeof` do?",
      answered: false,
      answers: [
        {
          text: "changes the type of a primitive value",
          correct: false,
          selected: false,
        },
        {
          text: "returns a string describing the type of a value",
          correct: true,
          selected: false,
        },
        {
          text: "determines if a value is primitive",
          correct: false,
          selected: false,
        },
        {
          text: "can tell the difference between arrays and objects",
          correct: false,
          selected: false,
        },
      ],
      links: [
        {
          text: "javascript.info",
          url: "https://javascript.info/types#type-typeof",
        },
        {
          text: "MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
        },
      ],
    },
    {
      question: "question 3",
      answered: false,
      answers: [
        {
          text: "1",
          correct: true,
          selected: false,
        },
        {
          text: "2",
          correct: false,
          selected: false,
        },
        {
          text: "3",
          correct: true,
          selected: false,
        },
        {
          text: "4",
          correct: true,
          selected: false,
        },
      ],
      links: [
        {
          text: "javascript.info",
          url: "https://javascript.info/variables",
        },
        {
          text: "Tyler McGinnis",
          url: "https://ui.dev/var-let-const/",
        },
      ],
    },
  ],
};
