let playerPoints = 0;
let computerPoints = 0;
const content = document.querySelector('#content');

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(e) {
  let computerSelection = getComputerChoice().toLowerCase();
  let playerSelection = e.target.id;

  const result = document.createElement('div');

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  result.classList.add('result');
  content.appendChild(result);
}

function game() {
  const buttons = Array.from(document.querySelectorAll(".btn"));

  buttons.forEach((button) => button.addEventListener("click", playRound));
}

game();
