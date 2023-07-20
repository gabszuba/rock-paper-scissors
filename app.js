let playerPoints = 0;
let computerPoints = 0;
const buttons = Array.from(document.querySelectorAll(".btn"));

const content = document.querySelector('#content');

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(e) {
  let computerSelection = getComputerChoice().toLowerCase();
  let playerSelection = e.currentTarget.id;

  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    return `You won this round! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    return`You lost this round! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
}

const numOfWins = 5;
function getWinner() {
  const resultBoard = document.createElement('div');
  const gameResult = document.createElement('div');

  if (playerPoints >= numOfWins) {
    gameResult.style.color = "#045b04";
    gameResult.textContent = "Congratulations! you won the game. ";
  } else if (computerPoints >= numOfWins) {
    gameResult.style.color = "#bb0606";
    gameResult.textContent =  "Oh no, computer won the game... I guess the world domination it's coming";
  } else return;

  resultBoard.classList.add('result-board');

  gameResult.classList.add('gameResult');
  resultBoard.appendChild(gameResult);
  
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart the Game';
  restartButton.id = 'restart-button';
  resultBoard.appendChild(restartButton);

  content.appendChild(resultBoard);

  restartButton.addEventListener('click', () => { 
    playerPoints =  computerPoints = 0;
    content.removeChild(resultBoard);
    const roundResult = document.querySelector('.roundResult');
    if (roundResult) roundResult.textContent = '';
    updateScore();
  })
} 

function game() {
  const roundResult = document.createElement('div');
  roundResult.classList.add('roundResult');
  content.appendChild(roundResult);

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      roundResult.textContent = playRound(e);
      updateScore();
      getWinner();
    });
  });

}

game();
