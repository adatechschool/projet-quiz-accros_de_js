import { quiz_js } from './questions.js';

const questions = document.querySelector('.question');
const allButtons = document.querySelector(".options");

let currentIndex = 0;

const next = document.getElementById('next-button');
const replay = document.getElementById('replay-button');

let score = 0;
function checkAnswer(answer, goodAnswer, button){
  if(answer === goodAnswer){
    button.classList.add("true");
    score++;
  }else{
    button.classList.add("false");
  }
  return score;
}

function loadQuestion(){
  next.classList.add("disabled")
  allButtons.innerHTML='';
  const currentQuestion = quiz_js.questions[currentIndex];
  const correctAnswer = currentQuestion.reponse;
  questions.innerText = currentQuestion.text;
  currentQuestion.options.forEach((option, index) => {
    const bouton = document.createElement('button');
    bouton.innerText = option;
    bouton.classList.add('button');
    allButtons.appendChild(bouton);
    bouton.addEventListener('click', () => {
      checkAnswer(option, correctAnswer, bouton)
      const button = allButtons.querySelectorAll(".button")
      for (const btn of button) {
      btn.classList.add("disabled")
      }
      next.classList.remove("disabled")
      next.classList.add("enabled")
    })
  })
}

function message(){
  if(score==4){
    allButtons.innerText="BRAVOOOO!!!🥳";
    confetti(
      {
        particleCount: 150,
        spread: 180
      })
  }else if(score==3){
    allButtons.innerText="pas mal 😉";
  }else{allButtons.innerText="essaye encore 🙁"}
}

next.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex<quiz_js.questions.length){
    loadQuestion();
  }else{
    questions.innerText= `Ton score : ${score}`;
    allButtons.innerHTML='';
    next.style.display='none';
    replay.style.display='inline-block';
    message()
  }
});
loadQuestion();

replay.addEventListener('click', () => {
  currentIndex=0;
  replay.style.display='none';
  next.style.display='inline-block';
  loadQuestion();
  score = 0;
})
