let humanScore = 0;
let computerScore = 0;
// let choice = prompt("Choose: Rock, Paper, or Scissors");


function getComputerChoice() {
    let randomChoice =  Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return "ROCK";
    } else if (randomChoice === 1) {
        return "PAPER";
    } else if (randomChoice === 2) {
        return "SCISSORS";
    }
    return randomChoice;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, or Scissors");
    if (choice.toUpperCase() === "ROCK") {
        return "ROCK";
    } else if (choice.toUpperCase() === "PAPER") {
        return "PAPER";
    } else if (choice.toUpperCase() === "SCISSORS") {
        return "SCISSORS";
    } else {
        return "Invalid Choice";
    }
}
// console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    
    if (humanSelection.toUpperCase() === computerSelection) {
        return "It's a tie!";
    } else if (
        (humanSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") ||
        (humanSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") ||
        (humanSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return "You WIN! " + humanSelection + " beats " + computerSelection + "!";
        humanScore++;
    } else {
        return "You Lose. " + computerSelection + " beats " + humanSelection + ".";
        computerScore++;
    }
}
console.log(playRound(humanSelection, computerSelection));
// playRound(humanSelection, computerSelection)

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    getComputerChoice();
    getHumanChoice();
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}
