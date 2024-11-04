import { quiz_js } from './questions.js';

const questions = document.querySelector('.question');
const choice = document.querySelector(".options");

let currentIndex = 0;

const next = document.getElementById('next-button')
const replay = document.getElementById('replay-button');

function checkAnswer(answer, goodAnswer, button) {
  // console.log("j'imprime mes paramètres", answer, goodAnswer)
  if (answer === goodAnswer) {
    button.classList.add("true")
  // console.log("bonne réponse") 
  } else {
    button.classList.add("false")
  // console.log("mauvaise réponse")
  }
}

function loadQuestion(){
  next.classList.add("disabled")
  choice.innerHTML='';
  const currentQuestion = quiz_js.questions[currentIndex];
  const correctAnswer = currentQuestion.reponse
  questions.innerText = currentQuestion.text;
  currentQuestion.options.forEach((option, index) => {
    const bouton = document.createElement('button');
    bouton.innerText = option;
    bouton.classList.add('button');
    choice.appendChild(bouton);
    bouton.addEventListener('click', () => {
      checkAnswer(option, correctAnswer, bouton)
      next.classList.remove("disabled")
      next.classList.add("enabled")
    })
  })
}

next.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex<quiz_js.questions.length){
    loadQuestion();
  }else{
    questions.innerText='The end';
    choice.innerHTML='';
    next.style.display='none';
    replay.style.display='inline-block';
  }
});
loadQuestion();

replay.addEventListener('click',()=>{
  currentIndex=0;
  replay.style.display='none';
  next.style.display='inline-block';
  loadQuestion();
})