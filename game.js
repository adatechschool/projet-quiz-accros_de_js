import { quiz_js } from './questions.js';

const questions = document.querySelector('.question');
const allButtons = document.querySelector(".options");

let currentIndex = 0;

const next = document.getElementById('next-button');
const replay = document.getElementById('replay-button');

let score = 0;

// Fonction pour mettre à jour la barre de progression
function update(currentIndex, totalQuestions) {
  const element = document.getElementById("myprogressBar");   
  const width = (currentIndex / totalQuestions) * 100;
  element.style.width = width + '%'; 
}

function checkAnswer(answer, goodAnswer, button){
  if(answer === goodAnswer){
    button.classList.add("true");
    score++;
    let tom6=new Audio("sons/k.mp3");
    tom6.play();
  }else{
    button.classList.add("false");
    let tom2=new Audio("sons/a.mp3");
    tom2.play();
  }
  return score;
}

function loadQuestion(){
  next.classList.add("disabled")
  allButtons.innerHTML='';
  const currentQuestion = quiz_js.questions[currentIndex];
  const correctAnswer = currentQuestion.reponse;
  questions.innerText = currentQuestion.text;

  // Mettre à jour la barre de progression avec la question actuelle
  update(currentIndex, quiz_js.questions.length);

  currentQuestion.options.forEach((option, index) => {
    const bouton = document.createElement('button');
    bouton.innerText = option;
    bouton.classList.add('button');
    allButtons.appendChild(bouton);

    bouton.addEventListener('click', () => {
      checkAnswer(option, correctAnswer, bouton)

      // Mettre à jour la barre de progression après la sélection de la réponse
      update(currentIndex + 1, quiz_js.questions.length);

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

replay.addEventListener('click', () => {
  currentIndex=0;
  replay.style.display='none';
  next.style.display='inline-block';
  loadQuestion();
  score = 0;
})

loadQuestion();
