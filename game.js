import { quiz_js } from './questions.js';

const questions = document.querySelector('.question');
const choice = document.querySelector(".options");

// const expl = document.querySelector(".explication");

let currentIndex = 0;

const currentQuestion = quiz_js.questions[currentIndex];
questions.innerText = currentQuestion.text;

currentQuestion.options.forEach(option => {
    const bouton = document.createElement('button');
    bouton.innerText = option;
    bouton.classList.add('button');
    choice.appendChild(bouton);
  });  

// for(let i=0; i<questions.length; i++){
//    console.log(questions[i].options);
//}

//   option.innerText += `<button>${quiz_js.questions[0].options}</button>`;

