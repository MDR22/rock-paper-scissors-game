//Create getComputerChoice function that randomly selects option for computer

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
};