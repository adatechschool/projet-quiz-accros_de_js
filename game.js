import { quiz_js } from './questions.js';

const questions = document.querySelector('.question');
const choices = document.querySelector(".options");

let currentIndex = 0;

const next = document.getElementById('next-button');
const replay = document.getElementById('replay-button');

let score = 0;

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
  choices.innerHTML='';
  const currentQuestion = quiz_js.questions[currentIndex];
  const correctAnswer = currentQuestion.reponse;
  questions.innerText = currentQuestion.text;

  update(currentIndex, quiz_js.questions.length);

  currentQuestion.options.forEach((option, index) => {
    const pressButton = document.createElement('button');
    pressButton.innerText = option;
    pressButton.classList.add('button');
    choices.appendChild(pressButton);
    
    pressButton.addEventListener('click', () => {
      checkAnswer(option, correctAnswer, pressButton)
      update(currentIndex + 1, quiz_js.questions.length);
      const answerButtons = choices.querySelectorAll(".button");
      answerButtons.forEach(btn => btn.classList.add("disabled"));      
      next.classList.remove("disabled")
      next.classList.add("enabled")
    })
  })
}

function message(){
  if(score==4){
    choices.innerText="BRAVOOOO!!!🥳";
    confetti(
      {
        particleCount: 150,
        spread: 180
      })
  }else if(score==3){
    choices.innerText="pas mal 😉";
  }else{choices.innerText="essaye encore 🙁"}
}

next.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex<quiz_js.questions.length){
    loadQuestion();
  }else{
    questions.innerText= `Ton score : ${score}`;
    choices.innerHTML='';
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
