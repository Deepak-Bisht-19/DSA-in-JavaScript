//factorial of a number

const prompt = require("prompt-sync")();
let input = prompt("enter the number: ");

if (input === null) {
  console.log("cancelled");
} else {
  let num = Number(input);

  if (isNaN(num)) {
    console.log("invalid input");
  } else {
    if (num > 0) {
    for (let i = 1; i<=Math.floor(num/2); i++){
        if(num%i === 0){
            console.log(i);
        }
    }
    console.log(num);
    } else {
      console.log("should be positive or more then zero");
    }
  }
}
