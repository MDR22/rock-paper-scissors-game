//Add constant equivalent to getComputerChoice function
const computerSelection = getComputerChoice();


//Create getComputerChoice function that randomly selects option for computer

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
};

//Create getPlayerChoice function that prompts user to enter a selection then converts answer to lower case

function getPlayerChoice() {
    let playerChoice = prompt("Choose an option - rock, paper, or scissors");
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
};

//Create playRound function that plays a round of RPS and determines the winner

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(playerSelection, computerSelection);
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log(playerSelection, computerSelection);
        return "playerWin";
    } else {
        console.log(playerSelection, computerSelection);
        return "computerWin"
    }
};
