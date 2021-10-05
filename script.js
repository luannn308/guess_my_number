'use strict';
let ranNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function checkNumber() {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) displayMessage('❌ No Number !!!');
  else if (guess < 1 || guess > 20)
    displayMessage('❗ Fail ! between 1 and 20 ');
  else {
    if (ranNumber === guess) {
      displayMessage('🎉Correct Number!!!');
      document.querySelector('.number').textContent = ranNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      var snd = new Audio('TB7L64W-winning.mp3');
      snd.play();
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      displayMessage(ranNumber < guess ? '📈 TOO HIGH' : '📉 TOO LOW');
      score !== 0 ? score-- : (score = 0);
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        displayMessage('🏳 YOU LOSE!!!');
      }
    }
  }
}
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
