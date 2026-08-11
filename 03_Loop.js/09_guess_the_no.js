const prompt = require("prompt-sync")();
let random = Math.floor(Math.random() * 100 + 1);

let guess = 0;
let attempts = 0;
while (guess !== random) {
  let input = prompt("enter the number (q to quit): ");
  if (input.toLowerCase() === "q") {
    console.log("game cancelled");
    break;
  }
  guess = Number(input);
  attempts++;
  if (isNaN(guess) || guess > 100 || guess < 1) {
    console.log("try again between 1 - 100");
  } else if (guess > random) {
    console.log("to high, try again");
  } else if (guess < random) {
    console.log("to loow, try again");
  } else {
    console.log(`congratulations you guessed the correct number ${guess}`);
  }
}
console.log(`attempts taken ${attempts}`);
