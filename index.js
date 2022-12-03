const gameWords = ["rock", "paper", "scissors"];

const gameRules = [
  "1-You can only enter words such as Rock, Paper, Sissors\n",
  "2-rock beats scissors\n",
  "3-paper beats rock\n",
  "4-scissors beats paper\n",
  "5-Enter exit to quit the game\n",
];

let playerInput,
  playerScore = 0,
  computerScore = 0,
  rounds = 0;

const computerPlay = () => {
  const randomPosition = Math.floor(Math.random() * (gameWords.length - 0) + 0);
  return gameWords[randomPosition];
};

const game = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase().trim() === computerSelection) {
    rounds++;
    return `Round: ${rounds},draw`;
  }

  if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase().trim() === "paper"
  ) {
    playerScore++;
    rounds++;
    return `Round: ${rounds}, you win! paper beats rock`;
  }

  if (
    computerSelection === "paper" &&
    playerSelection.toLowerCase().trim() === "scissors"
  ) {
    playerScore++;
    rounds++;
    return `Round: ${rounds}, you win! scissors beats paper`;
  }

  if (
    computerSelection === "scissors" &&
    playerSelection.toLowerCase().trim() === "rock"
  ) {
    playerScore++;
    rounds++;
    return `Round: ${rounds}, you win! rock beats scissors`;
  }

  if (
    computerSelection === "paper" &&
    playerSelection.toLowerCase().trim() === "rock"
  ) {
    computerScore++;
    rounds++;
    return `Round: ${rounds}, you lose! paper beats rock`;
  }

  if (
    computerSelection === "scissors" &&
    playerSelection.toLowerCase().trim() === "paper"
  ) {
    computerScore++;
    rounds++;
    return `Round: ${rounds}, you lose! scissors beats paper`;
  }

  if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase().trim() === "scissors"
  ) {
    computerScore++;
    rounds++;
    return `Round: ${rounds}, you lose! rock beats scissors`;
  }
};

const winner = () => {
  if (playerScore === computerPlay) return "draw";
  if (computerScore > playerScore) return "Computer";
  return "Player";
};



(function main() {
  alert(
    `Welcome to Rock Paper Scissors Game\n Rules of the game:\n  ${gameRules[0]}  ${gameRules[1]}  ${gameRules[2]}  ${gameRules[3]}  ${gameRules[4]}`
  );

  while (playerInput !== "exit") {
    playerInput = prompt(
      "Enter a Word shuch as Rock, Paper, scissors to play or exit to quit the game"
    );

    if (gameWords.includes(playerSelection.toLowerCase().trim())) {
      playerInput !== "exit" && console.log(game(playerInput, computerPlay()));
    } else {
      console.log("You can only enter words such as rock, paper,scissors");
    }

    if (rounds === 5) {
      alert(
        `Payer Score: ${playerScore}\n Computer Socre: ${computerScore}\n Winner: ${winner()}`
      );

      rounds = 0;
      playerScore = 0;
      computerScore = 0;
      console.clear();
    }
  }
})();
