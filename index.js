console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a choice from the user
    const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
    // Ignore capitalization of words
    response = response.toLowerCase();
    // Validate user choice to tell them if they made a mistake
    if (response === 'rock' || response === 'paper' || response === 'scissors') {
        console.log(response);
      } else {
        console.log("Mmmm that's not right! Please choose either rock, paper or scissors.");
      }

    

// Make a random selection for the computer
    // A random choice of rock, paper, scissors.
    // use math.random() to split the three choices. “rock” < 0.3, “paper” 0.3 - 0.6, “scissors” > 0.6

// Compare the two choices

// Report on who won


    readline.close();
};

readline.question("Please chose either rock, paper or scissors!\n", handleUserResponse);
