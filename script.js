const validChoices = ['rock', 'paper', 'scissors'];

let player = 0;
let computer = 0;

window.onload(game());

function game() {
    playRound();
}

function playRound() {
    alert('Player: ' + player + ' Computer: ' + computer);
    let playerSelection = playerSelect();
    let computerSelection = computerPlay();
    let playerResult = compareResults(playerSelection, computerSelection);

    if (playerResult === 'tie'){
        player++;
        computer++;
        alert('Tie');
        handleGameEndSelection();
    } else {
        playerResult === 'win' ? player++ : computer++;

        let winner = playerResult === 'win' ? playerSelection : computerSelection;
        let loser = winner === playerSelection ? computerSelection : playerSelection;

        alert(winner + ' beats ' + loser);
        alert('You ' + playerResult);

        handleGameEndSelection();
    }
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
    return validChoices[compNumber];
}

function compareResults(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "tie";
    }
    if(playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            return "lose";
        } else {
            return 'win';
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissor'){
            return 'lose';
        } else {
            return 'win';
        }
    } else {
        return computerSelection === 'rock' ? "lose" : "win";
    }
}

function handleGameEndSelection() {
    if (player != 5 && computer != 5) {
        let playAgainChoice = prompt('Play again? (y/n)');
        if (playAgainChoice === 'y') {
            playRound();
        }
    } else {
        let finalGameWinner = player === 5 ? 'Player' : 'Computer';
        alert('Final Winner: ' + finalGameWinner + '\nGame Over');
    }
}