
const gameWords = ["rock", "paper", "scissors"];

let PlayerInput ,
  playerScore = 0,
  computerScore = 0;

const computerPlay = () => {

    const randomPosition = Math.floor(Math.random() * (gameWords.length - 0) + 0);
    return gameWords[randomPosition];
};

const play = (playerSelection, computerSelection) => {

  const formattedInput = playerSelection.toLowerCase();

  if (gameWords.includes(formattedInput)) {

        formattedInput === computerSelection && console.log("draw");

        if (computerSelection === "rock" && formattedInput === "paper") {
            console.log("paper beats rock");
            playerScore++;
        }

        if (computerSelection === "paper" && formattedInput === "scissors") {
            console.log("scissors beats paper");
            playerScore++;
        }

        if (computerSelection === "scissors" && formattedInput === "rock") {
            console.log("rock beats scissors");
            playerScore++;
        }

        if (computerSelection === "paper" && formattedInput === "rock") {
            console.log("paper beats rock");
            computerScore++;
        }

        if (computerSelection === "scissors" && formattedInput === "paper") {
            console.log("scissors beats paper");
            computerScore++;
        }

        if (computerSelection === "rock" && formattedInput === "scissors") {
            console.log("rock beats scissors");
            computerScore++;
    }
  } else {
        alert("You can only enter words such as rock, paper,scissors");
  }
};


(function main() {
  alert(
        "Welcome to Rock Paper Scissors Game\n  Rules of the game:\n 1-You can only enter words such as Rock, Paper, Sissors\n 2-Enter exit to quit the Game"
  );

  while (PlayerInput !== "exit") {
        PlayerInput = prompt(
        "Enter a Word shuch as Rock, Paper, scissors or exit to quit the game"
        );
        PlayerInput !== "exit" && play(PlayerInput, computerPlay());
  }

  alert(
         `Payer Score: ${playerScore}\n Computer Socre: ${computerScore}\n Winner: ${
         computerScore > playerScore ? "Computer" : "Player"
    }`
  );
})();
