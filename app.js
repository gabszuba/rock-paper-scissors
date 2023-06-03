let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {  
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++; 
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getScore() {
  console.log('Final score:');
  console.log(`Player: ${playerPoints}`);
  console.log(`Computer: ${computerPoints}`);
  if (playerPoints > computerPoints) {
    return "Congratulations! you won the game. ";
  } else if (playerPoints < computerPoints) {
    return "Oh no, computer wins the game... I guess the world domination it's coming";
  } else {
    return "We don't have winners";
  }
}

const numberOfRounds = 5;
function game() {
  for (let i = 0; i < numberOfRounds; i++) {
    let playerSelection = prompt("Rock Paper or Scissors? ").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    while (!playerSelection || !["rock", "paper", "scissors"].includes(playerSelection)) {
      console.log("Invalid input");
      console.log(playerSelection);
      playerSelection = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    }

    console.log(playRound(playerSelection, computerSelection));

  }
  console.log(getScore());
}

game();

