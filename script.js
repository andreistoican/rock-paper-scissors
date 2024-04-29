let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomizer];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Make your choice! Rock, paper or scissors?").toLowerCase();
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(human, computer) {
        if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
            console.log(`You win! ${human} beats ${computer}.`);
            humanScore++;
        } else if ((human === "rock" && computer === "paper") || (human === "paper" && computer === "scissors") || (human === "scissors" && computer === "rock")) {
            console.log(`You lose! ${computer} beats ${human}.`);
            computerScore++;
        } else {
            console.log(`You chose ${human}, computer chose ${computer}! It's a tie!`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win by ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins by ${computerScore} to ${humanScore}`);
    } else {
        console.log(`The score is ${humanScore} - ${computerScore}. It's a tie!`);
    }
}

playGame();