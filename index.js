console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a choice from the user
    const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
    // Ignore capitalization of words
    response = response.toLowerCase();
    // Validate user choice and tell them if they made a mistake
    if (response === 'rock' || response === 'paper' || response === 'scissors') {
        console.log(`You chose ${response}`);
      } else {
        console.log("Mmmm that's not right! Choose either rock, paper or scissors.");
};
        // Need to find a way to reset the game here if answer is wrong.
    
// Make a random selection for the computer
function getComputerChoice() {
    // use math.random() to split the three choices. “rock” < 0.3, “paper” 0.3 - 0.6, “scissors” > 0.6
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
        console.log(`Computer chose ${computerChoice}`);
};
    getComputerChoice();

// Compare the two choices
function compare() {
    let userChoice = handleUserResponse();
    let compChoice = getComputerChoice();
    
}
      // Create variables for player and computer choice and compare with rules.
// Report on who won


    readline.close();
};

readline.question("Please chose either rock, paper or scissors!\n", handleUserResponse);
