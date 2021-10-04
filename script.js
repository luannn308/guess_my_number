'use strict';
let ranNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function checkNumber() {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess)
    document.querySelector('.message').textContent = '❌ No Number !!!';
  else if (guess < 1 || guess > 20)
    document.querySelector('.message').textContent =
      '❗ Fail ! between 1 and 20 ';
  else {
    if (ranNumber === guess) {
      document.querySelector('.message').textContent = '🎉Correct Number!!! ';
      document.querySelector('.number').textContent = ranNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      var snd = new Audio('TB7L64W-winning.mp3'); // buffers automatically when created
      snd.play();
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (ranNumber < guess) {
      document.querySelector('.message').textContent = '📈 TOO HIGH';
      score !== 0 ? score-- : (score = 0);
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = '🏳 YOU LOSE!!! ';
      }
    } else {
      document.querySelector('.message').textContent = '📉 TOO LOW';
      score !== 0 ? score-- : (score = 0);
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        document.querySelector('.message').textContent = '🏳 YOU LOSE!!! ';
      }
    }
  }
}
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
