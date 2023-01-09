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