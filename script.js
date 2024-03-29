const validChoices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
let playerResults = [];
let computerResults = [];

let createdTable = document.createElement('table');

const playerButtons = document.getElementsByClassName('playerSelectionButton');
const resultDisplay = document.getElementById('resultDisplay');
const resultsDisplay = document.getElementById('resultsDisplay');
const roundResultDiv = document.getElementById('roundResult');
const scoreBoard = document.getElementById('scoreBoard');
const gamePromptMessageDiv = document.getElementById('gamePromptMessage');
const finalWinnerMessageDiv = document.getElementById('finalWinnerMessage');

resultsDisplay.appendChild(createdTable);

startGame();

function startGame() {
    initializeButtonListeners();
    intializeTableHeaders();
    promptPlayerSelect();
}

function intializeTableHeaders() {
    let resultsTableHeaderRow = createdTable.insertRow(0);
    let rowHeading = resultsTableHeaderRow.insertCell(0);
    let playerHeaderCell = resultsTableHeaderRow.insertCell(1);
    let computerHeaderCell = resultsTableHeaderRow.insertCell(2);
    rowHeading.textContent = 'Round';
    playerHeaderCell.textContent = 'Player';
    computerHeaderCell.textContent = 'Computer';
}

function updateResultsTable() {
    let currentRoundRow = createdTable.insertRow(currentRound);
    let currentRoundRowHeading = currentRoundRow.insertCell(0);
    let currentRoundPlayerCell = currentRoundRow.insertCell(1);
    let currentRoundComputerCell = currentRoundRow.insertCell(2);
    currentRoundRowHeading.textContent = currentRound;
    currentRoundPlayerCell.textContent = playerResults[currentRound -1];
    currentRoundComputerCell.textContent = computerResults[currentRound - 1];
}

function initializeButtonListeners() {
    Array.prototype.forEach.call(playerButtons, playerButton => {
        playerButton.addEventListener('click', (e) => {
            playRound(playerButton.id);
        });
    });
}

function playRound(playerSelection) {
    if (finalWinnerMessageDiv.textContent != '') {
        for (var i = currentRound; i > 1; i--){
            createdTable.deleteRow(i - 1);
        }
        currentRound = 1;
        finalWinnerMessageDiv.textContent = '';
    }
    let computerChoice = makeComputerChoice();
    let gameResult = seeIfPlayerWon(playerSelection, computerChoice);
    displayResult(gameResult);
    updateScore(gameResult, playerSelection, computerChoice);
    handleGameEndSelection();
}

function displayResult(result) {
    resultDisplay.textContent = result;
}

function updateScore(gameResult, playerSelection, computerSelection) {
    if (gameResult === 'tie') {
        handleTie();
        promptTie()
    } else {
        gameResult === 'win' ? handlePlayerWin() : handleComputerWin();
        let winner = gameResult === 'win' ? playerSelection : computerSelection;
        let loser = winner === playerSelection ? computerSelection : playerSelection;
        promptWinnerAndLoser(winner, loser);
    }
    scoreBoard.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;

}

function promptTie() {
    roundResultDiv.textContent = 'Tie';
    gamePromptMessageDiv.textContent = '\r\nChoose to play next round';
}

function promptWinnerAndLoser(winner, loser) {
    roundResultDiv.textContent = winner.charAt(0).toUpperCase() + winner.slice(1) + ' beats ' + loser;
    gamePromptMessageDiv.textContent = '\r\nChoose to play next round';
}

function handlePlayerWin() {
    playerScore++;
    playerResults[currentRound - 1] = 'loss';
    computerResults[currentRound -1] = 'win';
    updateResultsTable();
    currentRound++;
}

function handleComputerWin() {
    computerScore++;
    playerResults[currentRound - 1] = 'win';
    computerResults[currentRound -1] = 'loss';
    updateResultsTable();
    currentRound++;
}

function handleTie() {
    playerResults[currentRound - 1] = 'tie';
    computerResults[currentRound - 1] = 'tie';
    updateResultsTable();
    currentRound++;
    playerScore++;
    computerScore++;
}

function promptPlayerSelect() {
    gamePromptMessageDiv.textContent = 'Pick any to choose';
}

function makeComputerChoice() {
    let compNumber = Math.floor((Math.random() * 2) + 1);
    return validChoices[compNumber];
}

function seeIfPlayerWon(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "lose";
        } else {
            return 'win';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'lose';
        } else {
            return 'win';
        }
    } else {
        return computerSelection === 'rock' ? "lose" : "win";
    }
}

function handleGameEndSelection() {
    if (playerScore != 5 && computerScore != 5 || (playerScore === 5 && computerScore === 5)) {
        return;
    } else {
        let finalGameWinner = playerScore === 5 ? 'Player' : 'Computer';
        finalWinnerMessageDiv.textContent = 'Final Winner: ' + finalGameWinner + '\nGame Over \nChoose to play again';
        playerScore = 0;
        computerScore = 0;
    }
}