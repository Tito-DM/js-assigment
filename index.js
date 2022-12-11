const rockBtn = document.getElementById("rockBtn"),
  paperBtn = document.getElementById("paperBtn"),
  scissorsBtn = document.getElementById("scissorsBtn"),
  playerPointsDisplay = document.querySelector(".playerPoits"),
  computerPointsDisplay = document.querySelector(".computerPoints"),
  gameStatus = document.querySelector(".gameStatus"),
  gameWiiner = document.querySelector(".gameWiiner"),
  gameRounds = document.querySelector(".gameRounds");

let playerScore = 0,
  computerScore = 0,
  rounds = 0;

const gameWords = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const randomPosition = Math.floor(Math.random() * (gameWords.length - 0) + 0);
  return gameWords[randomPosition];
};

const game = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    rounds++;
    return `draw`;
  }

  if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    rounds++;
    return `you win! paper beats rock`;
  }

  if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
    rounds++;
    return `you win! scissors beats paper`;
  }

  if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    rounds++;
    return `you win! rock beats scissors`;
  }

  if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    rounds++;
    return `you lose! paper beats rock`;
  }

  if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    rounds++;
    return `you lose! scissors beats paper`;
  }

  if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase().trim() === "scissors"
  ) {
    computerScore++;
    rounds++;
    return `you lose! rock beats scissors`;
  }
};

const gameWinner = () => {
  gameRounds.textContent = rounds;
  playerPointsDisplay.textContent = playerScore;
  computerPointsDisplay.textContent = computerScore;

  if (playerScore === 5) {
    alert("You win congratulations 🎇 🎉  🎉");
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    gameStatus.textContent = "";
    playerPointsDisplay.textContent = "";
    computerPointsDisplay.textContent = "";
    gameRounds.textContent = "";
  }
  if (computerScore === 5) {
    alert("You Lose, 😧 😭 sorry try again ");
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    gameStatus.textContent = "";
    playerPointsDisplay.textContent = "";
    computerPointsDisplay.textContent = "";
    gameRounds.textContent = "";
  }
};

rockBtn.addEventListener("click", () => {
  gameStatus.textContent = game("rock", computerPlay());
  gameWinner();
});
paperBtn.addEventListener("click", () => {
  gameStatus.textContent = game("paper", computerPlay());
  gameWinner();
});
scissorsBtn.addEventListener("click", () => {
  gameStatus.textContent = game("scissors", computerPlay());
  gameWinner();
});
