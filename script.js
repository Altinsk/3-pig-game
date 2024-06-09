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

let currentscore = 0;
let activePlayer = 0;

// Initialize the game
player1Score.textContent = 0;
player2Score.textContent = 0;
player1CurrentScore.textContent = 0;
player2CurrentScore.textContent = 0;
dice.classList.add('hidden');

// Initialize the game by New game button
btnNew.addEventListener('click', function () {
  player1Score.textContent = '0';
  player2Score.textContent = '0';
  player1CurrentScore.textContent = '0';
  player2CurrentScore.textContent = '0';
  currentscore = 0;
  activePlayer = 0;
  dice.classList.add('hidden');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
});

// Roll dice random number
btnRoll.addEventListener('click', function () {
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentscore = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }

  //   if (rollDice !== 1 && activePlayer === 1) {
  //     currentscore1 += rollDice;
  //     player1CurrentScore.textContent = currentscore1;
  //   } else if (rollDice !== 1 && activePlayer === 0) {
  //     currentscore2 += rollDice;
  //     player2CurrentScore.textContent = currentscore2;
  //   }

  // Switch player and hold score or dice number is 1
  //   if (player1.classList.contains('player--active') && rollDice == 1) {
  //     player1.classList.remove('player--active');
  //     player2.classList.add('player--active');
  //     player1Score.textContent = currentscore1;
  //     activePlayer = 0;
  //   } else if (player2.classList.contains('player--active') && rollDice === 1) {
  //     player1.classList.add('player--active');
  //     player2.classList.remove('player--active');
  //     player2Score.textContent = currentscore2;
  //     activePlayer = 1;
  //   }
});
