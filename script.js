//DOM Manipulation

let message = document.querySelector('.message').textContent;
console.log(message);

let score = Number(document.querySelector('.score').textContent);
console.log(score);

let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

function writeMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber, typeof inputNumber);

  if (!inputNumber) {
    writeMessage('Not a Number');
  } else if (inputNumber < 1 || inputNumber > 20) {
    writeMessage('Enter numbers between 1 and 20');
  } else if (inputNumber === secretNumber) {
    writeMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '33rem';

    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (inputNumber > secretNumber && !checkScore(score)) {
    writeMessage('Too High');
    document.querySelector('.score').textContent = --score;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  } else if (inputNumber < secretNumber && !checkScore(score)) {
    writeMessage('Too Low');
    document.querySelector('.score').textContent = --score;
  }
});

function checkScore(score) {
  if (score === 1) {
    writeMessage('You lost the game !!');
    document.querySelector('.score').textContent = 0;
    return true;
  }
  return false;
}

console.log(secretNumber, typeof secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  let num = document.querySelector('.number');
  num.textContent = '?';
  num.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  writeMessage('Start Guessing ...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Again generated secret number', secretNumber);
});


