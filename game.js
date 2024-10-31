import { quiz_js } from './questions.js';

const questions = document.querySelector('.question');
const choice = document.querySelector(".options");

let currentIndex = 0;

const next = document.getElementById('next-button')
const replay = document.getElementById('replay-button');

function loadQuestion(){
  choice.innerHTML='';
  const currentQuestion = quiz_js.questions[currentIndex];
  questions.innerText = currentQuestion.text;
  currentQuestion.options.forEach(option => {
    const bouton = document.createElement('button');
    bouton.innerText = option;
    bouton.classList.add('button');
    choice.appendChild(bouton);
  });  
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
