console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a choice from the user
    
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
// Validate user choice to tell them if they made a mistake
    // Ignore capitalization of words


// Make a random selection for the computer
    // A random choice of rock, paper, scissors.
    // use math.random() to split the three choices. “rock” < 0.3, “paper” 0.3 - 0.6, “scissors” > 0.6

// Compare the two choices

// Report on who won

console.log(response);
    readline.close();
};

readline.question("Please chose either rock, paper or scissors!\n", handleUserResponse);
