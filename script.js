const choice = ['rock', 'paper', 'scissors'];

window.onload(playRound());

function playRound() {
    let playerSelection = playerSelect();
    let computerSelection = computerSelect();
    let winner = compareResults(playerSelection, computerSelection);

    alert(winer + ' beats ' + loser);
    alert('You ' + playerResult);

    handleGameEndSelection();
}

function playerSelect() {
    let playerSelection = promptUserInput();
    if (playerSelection !== null &&
        playerSelection.toLowerCase() !== 'rock' && 
        playerSelection.toLowerCase() !== 'paper' && 
        playerSelection.toLowerCase() !== 'scissors') {
        alert("Invalid input");
        playerSelect();
    }
    return playerSelection;
}

function promptUserInput() {
    let input = prompt("Please choose rock, paper, or scissors.");
    return input;
}

function computerPlay() {
    let compChoice = Math.floor(Math.random(0.2) * 10);
    alert(compChoice);
}

function computerSelect() {
    let computerSelection = pickComputerSelection();
    return computerSelection;
}

function compareResults(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {

    }
}

function pickComputerSelection() {

}

function handleGameEndSelection() {
    let playAgainChoice = prompt('Play again? (y/n)');
    if (playAgainChoice === 'y') {
        location.reload();
    }
    else {
        alert('Game Over');
    }
}