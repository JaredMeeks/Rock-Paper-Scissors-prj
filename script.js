function getComputerChoice() {
    let randomChoice =  Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return "Rock";
    } else if (randomChoice === 1) {
        return "Paper";
    } else if (randomChoice === 2) {
        return "Scissors";
    }
    return randomChoice;
}
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, or Scissors");

    if (choice.toUpperCase() === "ROCK") {
        return "Rock";
    } else if (choice.toUpperCase() === "PAPER") {
        return "Paper";
    } else if (choice.toUpperCase() === "SCISSORS") {
        return "Scissors";
    } else {
        return "Invalid Choice";
    }
}
console.log(getHumanChoice());