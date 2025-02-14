// let humanScore = 0;
// let computerScore = 0;



// function getComputerChoice() {
//     let randomChoice =  Math.floor(Math.random() * 3);

//     if (randomChoice === 0) {
//         return "ROCK";
//     } else if (randomChoice === 1) {
//         return "PAPER";
//     } else if (randomChoice === 2) {
//         return "SCISSORS";
//     }
//     return randomChoice;
// }
// // console.log(getComputerChoice());

// function getHumanChoice() {
//     let choice = prompt("Choose: Rock, Paper, or Scissors");
//     if (choice.toUpperCase() === "ROCK") {
//         return "ROCK";
//     } else if (choice.toUpperCase() === "PAPER") {
//         return "PAPER";
//     } else if (choice.toUpperCase() === "SCISSORS") {
//         return "SCISSORS";
//     } else {
//         return "Invalid Choice";
//     }
// }
// // console.log(getHumanChoice());

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// function playRound(humanChoice, computerChoice) {
    
//     if (humanSelection.toUpperCase() === computerSelection) {
//         return "It's a tie!";
//     } else if (
//         (humanSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") ||
//         (humanSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") ||
//         (humanSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER")
//     ) {
//         return "You WIN! " + humanSelection + " beats " + computerSelection + "!";
//         humanScore++;
//     } else {
//         return "You Lose. " + computerSelection + " beats " + humanSelection + ".";
//         computerScore++;
//     }
// }
// console.log(playRound(humanSelection, computerSelection));


// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     getComputerChoice();
//     getHumanChoice();
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
// }










let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];
    let cpuChoice = Math.floor(Math.random() * rps.length);
    return rps[cpuChoice];
}
// console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Enter Rock, Paper, or Scissors");

    if (humanChoice.toUpperCase() === "ROCK") {
        return "Rock";
    } else if (humanChoice.toUpperCase() === "PAPER") {
        return "Paper";
    } else if (humanChoice.toUpperCase() === "SCISSORS") {
        return "Scissors";
    } else {
        return;
    }
}

let userChoice = getHumanChoice();
let pcChoice = getComputerChoice();

function playRound(hChoice, cChoice) {
    
    if (userChoice === pcChoice) {
        return "It's a Tie!";
    } else if (
        (userChoice === "Rock" && pcChoice === "Scissors") ||
        (userChoice === "Paper" && pcChoice === "Rock") ||
        (userChoice === "Scissors" && pcChoice === "Paper") 
    ) {
        console.log("Player Score: " + ++playerScore);
        return "You WIN! " + userChoice + " beats " + pcChoice + "!";
    } else if (
        (userChoice === "Scissors" && pcChoice === "Rock") ||
        (userChoice === "Paper" && pcChoice === "Scissors") ||
        (userChoice === "Rock" && pcChoice === "Paper")
    ) {
        console.log("Computer Score: " + ++computerScore);
        return "You lose. " + pcChoice + " beats " + userChoice + ".";
    } else {
        return "Invalid input. Try again.";
    }
}
// console.log(playRound(userChoice, pcChoice));

function playGame() {
    console.log(playRound(userChoice, pcChoice));
}
playGame();