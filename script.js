'use strict';
// Variable declarations
const player1 = document.querySelector('.player--0');
const player1Name = document.getElementById('name--0');
let player1Score = document.getElementById('score--0');
let player1CurrentScore = document.getElementById('current--0');
const player2 = document.querySelector('.player--1');
const player2Name = document.getElementById('name--1');
let player2Score = document.getElementById('score--1');
let player2CurrentScore = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let scores, currentscore, activePlayer, playing;

// Initialize the game
const init = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  dice.classList.add('hidden');
  scores = [0, 0];
  currentscore = 0;
  activePlayer = 0;
  playing = true;
  dice.classList.add('hidden');
  player1.classList.add('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--active', 'player--winner');
};

// Initializing the game values function
init();

// Switching player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Roll dice random number button
btnRoll.addEventListener('click', function () {
  if (playing) {
    let rollDice = Math.trunc(Math.random() * 6) + 1;
    // Display dice roll picture
    dice.classList.remove('hidden');
    // Dice picture
    dice.src = `./images/dice-${rollDice}.png`;
    // Adding dice number to the current score if not 1
    if (rollDice !== 1) {
      currentscore += rollDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

// Hold score button
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (
      Number(document.getElementById(`score--${activePlayer}`).textContent) >=
      100
    ) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
      playing = false;
    } else switchPlayer();
  }
});

// Initialize a new game button
btnNew.addEventListener('click', init);
