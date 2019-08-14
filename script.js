const validChoices = ['rock', 'paper', 'scissors'];

let player = 0;
let computer = 0;

game();

function game() {
    announceScore();
    playRound();
    handleGameEndSelection();
}

function playRound() {
    let playerSelection = playerSelect();
    let computerSelection = computerPlay();
    let gameResult = seeIfPlayerWon(playerSelection, computerSelection);

    if (gameResult === 'tie'){
        handleTie();
    } else {
        announceResult(gameResult, playerSelection, computerSelection);     
    }
}

function announceResult(gameResult, playerSelection, computerSelection) {
    gameResult === 'win' ? player++ : computer++;
    let winner = gameResult === 'win' ? playerSelection : computerSelection;
    let loser = winner === playerSelection ? computerSelection : playerSelection;
    alert(winner + ' beats ' + loser);
    alert('You ' + gameResult + ' this round');
}

function handleTie() {
    player++;
    computer++;
    alert('Tie');
}

function announceScore() {
    alert('Current Score \nPlayer: ' + player + ' Computer: ' + computer);
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

function seeIfPlayerWon(playerSelection, computerSelection) {
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
            game();
        } else {
            alert('Game Over');
        }
    } else {
        let finalGameWinner = player === 5 ? 'Player' : 'Computer';
        alert('Final Winner: ' + finalGameWinner + '\nGame Over');
    }
}