let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {  
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
    return `You lose! ${playerSelection} beats ${computerSelection}`;
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

function game() {
  for (let i = 0; i < 5; i++) {
    const playerInput = prompt("Rock Paper or Scissors? ");
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      console.log("Invalid input");
    } else {
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  console.log(getScore());
}

game();

