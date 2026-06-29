// *******************accepting user input*******************

const prompt = require("prompt-sync")({ sigint: true }); // to accept user input in nodejs

let userInput = Number(prompt("Enter a number:")); // type casting to number is done there
console.log("You entered: " + userInput);
