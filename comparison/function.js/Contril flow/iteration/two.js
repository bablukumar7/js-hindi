// Guess the Number Game

// Computer picks a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;        // Count attempts
let guess = null;        // User's guess

// For demo (since no prompt in plain JS), we use an array of fake inputs
// In a browser you would replace this with prompt()
let userInputs = [50, 75, 60, 90, 100, 85, 80, 78]; 
let index = 0;

console.log("Guess the number between 1 and 100!");

// Keep looping until guess is correct
while (guess !== secretNumber && index < userInputs.length) {
  guess = userInputs[index];
  attempts++;

  console.log("Attempt " + attempts + ": You guessed " + guess);

  if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guess > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("🎉 Correct! The secret number was " + secretNumber);
    console.log("You found it in " + attempts + " attempts.");
  }

  index++;
}

if (guess !== secretNumber) {
  console.log("Out of guesses! The number was " + secretNumber);
}
