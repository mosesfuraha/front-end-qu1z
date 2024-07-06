import { QuizQuestion } from '../models/questions';

export const QUESTIONS: {
  [key: string]: QuizQuestion[];
} = {
  HTML: [
    {
      question: 'What does HTML stand for?',
      answers: [
        'Hyper Text Markup Language',
        'Hyperlinks and Text Markup Language',
        'Home Tool Markup Language',
        'Hyper Tool Markup Language',
      ],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'What is the purpose of the <head> tag in HTML?',
      answers: [
        'To define the main content of the document',
        'To contain meta-information about the document',
        'To create a header for the document',
        'To link external resources',
      ],
      correctAnswer: 'To contain meta-information about the document',
    },
    {
      question: 'Which HTML element is used to define important text?',
      answers: ['<strong>', '<important>', '<i>', '<b>'],
      correctAnswer: '<strong>',
    },
    {
      question: 'How do you create a hyperlink in HTML?',
      answers: [
        "<a href='url'>Link text</a>",
        "<link href='url'>Link text</link>",
        "<a url='url'>Link text</a>",
        "<href='url'>Link text</href>",
      ],
      correctAnswer: "<a href='url'>Link text</a>",
    },
    {
      question:
        'Which HTML element is used to specify a footer for a document or section?',
      answers: ['<footer>', '<bottom>', '<section>', '<end>'],
      correctAnswer: '<footer>',
    },
    {
      question: 'How can you make a numbered list?',
      answers: ['<ol>', '<ul>', '<list>', '<nl>'],
      correctAnswer: '<ol>',
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      answers: ['<br>', '<lb>', '<break>', '<newline>'],
      correctAnswer: '<br>',
    },
    {
      question:
        'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
      answers: ['alt', 'title', 'src', 'alt-text'],
      correctAnswer: 'alt',
    },
    {
      question: 'What is the correct HTML for creating a text input field?',
      answers: [
        "<input type='text'>",
        '<textinput>',
        "<input type='textfield'>",
        "<input type='textfield'>",
      ],
      correctAnswer: "<input type='text'>",
    },
    {
      question: 'Which HTML element is used to define the title of a document?',
      answers: ['<title>', '<head>', '<meta>', '<header>'],
      correctAnswer: '<title>',
    },
  ],
  JavaScript: [
    {
      question:
        'Which of the following is a correct syntax to create a function in JavaScript?',
      answers: [
        'function myFunction()',
        'def myFunction()',
        'create function myFunction()',
        'function: myFunction()',
      ],
      correctAnswer: 'function myFunction()',
    },
    {
      question: 'How do you declare a variable in JavaScript?',
      answers: [
        'let myVariable;',
        'var myVariable;',
        'both let and var',
        'declare myVariable;',
      ],
      correctAnswer: 'both let and var',
    },
    {
      question: 'Which company developed JavaScript?',
      answers: ['Netscape', 'Microsoft', 'Google', 'Apple'],
      correctAnswer: 'Netscape',
    },
    {
      question: 'Which method is used to write HTML output using JavaScript?',
      answers: [
        'document.write()',
        'console.log()',
        'window.write()',
        'document.output()',
      ],
      correctAnswer: 'document.write()',
    },
    {
      question: 'How can you add a comment in JavaScript?',
      answers: [
        '// This is a comment',
        '<!-- This is a comment -->',
        '# This is a comment',
        '/* This is a comment */',
      ],
      correctAnswer: '// This is a comment',
    },
    {
      question: 'What is the correct way to write a JavaScript array?',
      answers: [
        "var colors = ['red', 'green', 'blue'];",
        "var colors = 'red', 'green', 'blue';",
        "var colors = (1:'red', 2:'green', 3:'blue');",
        "var colors = {'red', 'green', 'blue'};",
      ],
      correctAnswer: "var colors = ['red', 'green', 'blue'];",
    },
    {
      question: 'How do you find the number with the highest value of x and y?',
      answers: ['Math.max(x, y)', 'ceil(x, y)', 'top(x, y)', 'Math.ceil(x, y)'],
      correctAnswer: 'Math.max(x, y)',
    },
    {
      question: 'Which event occurs when the user clicks on an HTML element?',
      answers: ['onclick', 'onchange', 'onmouseclick', 'onhover'],
      correctAnswer: 'onclick',
    },
    {
      question: 'How do you round the number 7.25 to the nearest integer?',
      answers: [
        'Math.round(7.25)',
        'Math.rnd(7.25)',
        'rnd(7.25)',
        'Math.floor(7.25)',
      ],
      correctAnswer: 'Math.round(7.25)',
    },
    {
      question: "How do you call a function named 'myFunction'?",
      answers: [
        'myFunction()',
        'call myFunction()',
        'call function myFunction()',
        'execute myFunction()',
      ],
      correctAnswer: 'myFunction()',
    },
  ],
  CSS: [
    {
      question: 'What does CSS stand for?',
      answers: [
        'Cascading Style Sheets',
        'Creative Style Sheets',
        'Colorful Style Sheets',
        'Computer Style Sheets',
      ],
      correctAnswer: 'Cascading Style Sheets',
    },
    {
      question: 'Which property is used to change the background color?',
      answers: ['background-color', 'color', 'bg-color', 'background'],
      correctAnswer: 'background-color',
    },
    {
      question: 'How do you add a background color for all <h1> elements?',
      answers: [
        'h1 {background-color: #FFFFFF;}',
        'all.h1 {background-color: #FFFFFF;}',
        'h1.all {background-color: #FFFFFF;}',
        'h1 {bg-color: #FFFFFF;}',
      ],
      correctAnswer: 'h1 {background-color: #FFFFFF;}',
    },
    {
      question: 'Which CSS property controls the text size?',
      answers: ['font-size', 'text-size', 'text-style', 'font-style'],
      correctAnswer: 'font-size',
    },
    {
      question:
        'What is the correct CSS syntax for making all the <p> elements bold?',
      answers: [
        'p {font-weight: bold;}',
        'p {text-size: bold;}',
        'p {font: bold;}',
        'p {font-weight: bolder;}',
      ],
      correctAnswer: 'p {font-weight: bold;}',
    },
    {
      question: 'How do you display hyperlinks without an underline?',
      answers: [
        'a {text-decoration: none;}',
        'a {decoration: no-underline;}',
        'a {underline: none;}',
        'a {text-decoration: underline-none;}',
      ],
      correctAnswer: 'a {text-decoration: none;}',
    },
    {
      question: 'Which property is used to change the font of an element?',
      answers: ['font-family', 'font-style', 'font-weight', 'font'],
      correctAnswer: 'font-family',
    },
    {
      question:
        'How do you make each word in a text start with a capital letter?',
      answers: [
        'text-transform: capitalize',
        'text-style: capitalize',
        'transform: capitalize',
        'text-capitalize: true',
      ],
      correctAnswer: 'text-transform: capitalize',
    },
    {
      question:
        'Which property is used to change the left margin of an element?',
      answers: ['margin-left', 'padding-left', 'left-margin', 'margin-right'],
      correctAnswer: 'margin-left',
    },
    {
      question: "How do you select an element with id 'demo'?",
      answers: ['#demo', '.demo', 'demo', '*demo'],
      correctAnswer: '#demo',
    },
  ],
  Accessibility: [
    {
      question: 'What does the acronym WCAG stand for?',
      answers: [
        'Web Content Accessibility Guidelines',
        'Web Content Adaptability Guidelines',
        'Web Compliance and Accessibility Guidelines',
        'Web Content Assistive Guidelines',
      ],
      correctAnswer: 'Web Content Accessibility Guidelines',
    },
    {
      question:
        'Which of the following attributes is used to provide alternative text for an image?',
      answers: ['alt', 'title', 'src', 'longdesc'],
      correctAnswer: 'alt',
    },
    {
      question:
        'What is the purpose of ARIA (Accessible Rich Internet Applications)?',
      answers: [
        'To enhance the accessibility of dynamic content',
        'To create a rich user interface',
        'To make websites more interactive',
        'To improve SEO',
      ],
      correctAnswer: 'To enhance the accessibility of dynamic content',
    },
    {
      question:
        'Which HTML element provides the most semantic value for indicating a primary navigation area?',
      answers: ['<nav>', '<div role="navigation">', '<header>', '<menu>'],
      correctAnswer: '<nav>',
    },
    {
      question: 'What role attribute should be used to mark up a search form?',
      answers: [
        'role="form"',
        'role="search"',
        'role="searchbox"',
        'role="input"',
      ],
      correctAnswer: 'role="search"',
    },
    {
      question:
        'Which attribute should be used to ensure screen readers announce content changes dynamically loaded after page load?',
      answers: ['aria-live', 'aria-announce', 'aria-role', 'aria-dynamic'],
      correctAnswer: 'aria-live',
    },
    {
      question: 'What is the purpose of the tabindex attribute in HTML?',
      answers: [
        'To specify the order of keyboard focus',
        'To define a custom tab order for elements',
        'To add styling to focused elements',
        'To enable tabbed navigation in web pages',
      ],
      correctAnswer: 'To specify the order of keyboard focus',
    },
    {
      question:
        'Which ARIA attribute should be used to provide a brief hint about the expected value of an input field?',
      answers: [
        'aria-label',
        'aria-describedby',
        'aria-placeholder',
        'aria-hint',
      ],
      correctAnswer: 'aria-placeholder',
    },
    {
      question: 'What is the purpose of the aria-hidden attribute in HTML?',
      answers: [
        'To hide elements from assistive technologies',
        'To visually hide elements on the page',
        'To disable user interaction with elements',
        'To improve SEO by hiding non-relevant content',
      ],
      correctAnswer: 'To hide elements from assistive technologies',
    },
    {
      question:
        'Which ARIA attribute should be used to indicate the current "page" within a set of pages?',
      answers: ['aria-current', 'aria-state', 'aria-selected', 'aria-position'],
      correctAnswer: 'aria-current',
    },
  ],
};
