const prompt = require("prompt-sync")();
let choice;
do {
  choice = Number(
    prompt( "1 add num\n " + "2 sub num\n " + "3 mult num\n " + "4 div num\n " + "0 for exit\n " + "enter yur choice\n "),
  );
  if (choice <= 4 && choice >= 1) {
    let [a, b] = prompt("enter two number: ").split(" ").map(Number);
    if (choice === 1) {
      console.log("addition is ", a + b);
    } else if (choice === 2) {
      console.log("sub is ", a - b);
    } else if (choice === 3) {
      console.log("multi is ", a * b);
    } else if (choice === 4) {
      console.log("div is ", a / b);
    }
  } else if (choice !== 0) {
    console.log("invalid input");
  }
} while (choice !== 0);
console.log("end");
