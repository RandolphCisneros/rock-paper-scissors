const validChoices = ['rock', 'paper', 'scissors'];

window.onload(playRound());

function playRound() {
    let playerSelection = playerSelect();
    let computerSelection = computerPlay();
    let winner = compareResults(playerSelection, computerSelection);

    alert(winer + ' beats ' + loser);
    alert('You ' + playerResult);

    handleGameEndSelection();
}

function playerSelect() {
    let playerSelection = promptUserInput();
    //limited understanding on js arrays but can probably check from valid choices
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
    let compNumber = Math.floor((Math.random() * 2) + 1);
    alert(compNumber);
    let compChoice = validChoices[compNumber];
    alert(compChoice);
}

function compareResults(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {

    }
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