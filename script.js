'use strict';

/*
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 40) + 1;
let score = 40;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

const changeNumberStyle = function (number) {
  document.querySelector('.number').style.width = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);

  // when there is no guess
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');

    // when guess is greater than 40.
  } else if (guess > 40) {
    displayMessage('Pick a number between 1 and 40!');
    // document.querySelector('body').style.backgroundColor = '#FFA500';
    changeBody('#FFA500');

    // when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    changeBody('#60b347');

    // document.querySelector('.number').style.width = '30rem';
    changeNumberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      displayHighscore(highscore);
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'Your guess is too high!'
      //     : 'Your guess is too low';
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high!'
          : 'Your guess is too low'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      displayMessage('You lost the Game!');

      displayScore(0);

      changeBody('#FF463A');

      changeNumberStyle('30rem');
    }
  }
  /*
    // when guess is too low
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your guess is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#FF463A';

      document.querySelector('.number').style.width = '30rem';
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your guess is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#FF463A';

      document.querySelector('.number').style.width = '30rem';
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');

  score = 40;
  displayScore(score);

  secretNumber = Math.trunc(Math.random() * 40) + 1;

  document.querySelector('.guess').value = '';

  changeBody('#222');

  changeNumberStyle('15rem');

  displayNumber('?');
});
