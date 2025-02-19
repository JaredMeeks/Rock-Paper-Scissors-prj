let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let playerScore1 = 0;
let computerScore1 = 0;
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const resetGameButton = document.querySelector('#reset-game');
const winner = document.querySelector('#winner');
const results = document.querySelector('#results');
const buttonsContainer = document.querySelector('.buttons-container');


function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function didPlayerWinRound(player, computer) {
    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        return true;
    } else if (player === computer) {
        return false;
    }
}

function roundResults(userOption) {
    const computerResult = getComputerChoice();
    if (computerResult === userOption) {
        return "It's a tie.";
    } else if (didPlayerWinRound(userOption, computerResult)) {
        playerScore1++;
        return `You win! ${userOption} beats ${computerResult}`;
    } else {
        computerScore1++;
        return `You lose. ${computerResult} beats ${userOption}`;
    }
}

function endGame(userOption) {
    results.innerText = roundResults(userOption);
    playerScore.innerText = playerScore1;
    computerScore.innerText = computerScore1;

    if (playerScore1 === 5 || computerScore1 === 5) {
        resetGameButton.style.display = 'block';
        buttonsContainer.style.display = 'none';
        winner.innerText = `${
            playerScore === 5 ? 'Player' : 'Computer'
        } has won the game!`
    }
}

function playAgain() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    resetGameButton.style.display = 'none';
    buttonsContainer.style.display = 'flex';
    winner.innerText = '';
    results.innerText = '';
    playerScore1 = 0;
    computerScore1 = 0;
}



rock.addEventListener('click', () => {
    endGame('Rock');
})

paper.addEventListener('click', () => {
    endGame('Paper');
})

scissors.addEventListener('click', () => {
    endGame('Scissors');
})

resetGameButton.addEventListener('click', playAgain);