console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a choice from the user
    const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
// User choice
function handleUserResponse (response) {
    response = response.toLowerCase();
    if (response === 'rock' || response === 'paper' || response === 'scissors') {
        console.log(`You chose: ${response}`);
      } else {
        console.log('Mmmm that\'s not right! Please choose either rock, paper or scissors.');
};      // Need to find a way to reset the game here if answer is wrong.

// Computer choice    
let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = 'rock';
        } else if(computerChoice <= 0.67) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        };
        console.log(`Computer chose: ${computerChoice}`)

// Compare the two choices and report winner
function compareChoices(response, computerChoice) {
    if (response === "paper" && computerChoice === "rock") {
        return "You win! YAY!";
    } else if (response === "scissors" && computerChoice === "paper") {
        return "You win! YAY!";
    } else if (response === "rock" && computerChoice === "scissors") {
        return "You win! YAY!";
    } else if (computerChoice === "paper" && response === "rock") {
        return "Computer wins! Boo.";
    } else if (computerChoice === "scissors" && response === "paper") {
        return "Computer wins! Boo.";
    } else if (computerChoice === "rock" && response === "scissors") {
        return "Computer wins! Boo.";
    } else {
        return "It's a tie!";
    }
};
    console.log(compareChoices(response, computerChoice));


    readline.close();
};

readline.question("Please chose either rock, paper or scissors!\n", handleUserResponse);