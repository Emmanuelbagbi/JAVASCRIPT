// Number Guesser write a simple number guessing Game. provide a secret
// number and a guess. based on those numbers give players clues if their 
// guess is higher, lower or correct.

// Function to generate a random number between 1 and 100
function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to check if the guess is correct and provide clues
function checkGuess(secretNumber, guess) {
    if (guess === secretNumber) {
        return "Congratulations! You guessed the correct number!";
    } else if (guess < secretNumber) {
        return "Too low! Try guessing a higher number.";
    } else {
        return "Too high! Try guessing a lower number.";
    }
}

