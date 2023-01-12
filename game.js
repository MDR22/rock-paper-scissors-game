//Add player and computer score constants
let playerScore = 0;
let computerScore = 0;

//Update scores
const playerScoreUpdated = document.querySelector("#playerScore");

const computerScoreUpdated = document.querySelector("#computerScore");

function updateScore() {
    playerScoreUpdated.textContent = `Your score: ${playerScore}`;
    computerScoreUpdated.textContent = `Computer score: ${computerScore}`;
};

//Add rock paper scissors choices constant
const rpsChoices = ["rock", "paper", "scissors"];

//Add event listener for the RPS buttons that plays a round of RPS
const rpsButtons = document.querySelectorAll("button");

rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    })
})


//Create getComputerChoice function that randomly selects option for computer

function getComputerChoice() {
    const computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    return computerChoice;
};

//Create getPlayerChoice function that prompts user to enter a selection then converts answer to lower case

function getPlayerChoice() {
    let playerChoice = prompt("Choose an option - rock, paper, or scissors");
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
};

//Add function that checks who won the round comparing player and computer choice
function verifyWinner(player, computer) {
    if (player === computer) {
        console.log(player, computer);
        updateScore();
        return "Tie";
    } else if (player === "rock" && computer === "scissors" ||
    player === "paper" && computer === "rock" ||
    player === "scissors" && computer === "paper") {
        playerScore++;
        updateScore();
        console.log(player, computer);
        return "playerWin";
    } else {
        computerScore++;
        updateScore();
        console.log(player, computer);
        return "computerWin"
    }
};


//Create playRound function that plays a round of RPS and determines the winner

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    const winner = verifyWinner(playerSelection, computerSelection);

    // if (playerSelection === computerSelection) {
    //     // console.log(playerSelection, computerSelection);
    //     return "Tie";
    // } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    // playerSelection === "paper" && computerSelection === "rock" ||
    // playerSelection === "scissors" && computerSelection === "paper") {
    //     // console.log(playerSelection, computerSelection);
    //     return "playerWin";
    // } else {
    //     // console.log(playerSelection, computerSelection);
    //     return "computerWin"
    // }
};

//Create game function that plays 5 rounds of RPS and then displays the winner

function game() {
    for (let i = 1; i <= 5; i++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult === "playerWin") {
            playerScore++;
            console.log(`You win round ${i}`);
        } else if (roundResult === "computerWin") {
            computerScore++;
            console.log(`The computer has won round ${i}`);
        } else {
            console.log("It is a tie - no one wins.");
        }
    }
    if (playerScore > computerScore) {
        return console.log(`Congratulations! You have defeated the computer. The final score was Player: ${playerScore} and Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        return console.log(`Unfortunately, you have been defeated by the computer. The final score was Player: ${playerScore} and Computer: ${computerScore}`);
    } else {
        return console.log(`It is a tie so no one wins. The final score was Player: ${playerScore} and Computer: ${computerScore}`);
    }
};