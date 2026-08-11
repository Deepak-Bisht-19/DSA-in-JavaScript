//factorial of a number

const prompt = require("prompt-sync")();
let input = prompt("enter the number: ");

if(input === null){
    console.log("cancelled")
}
else{
let num = Number(input);


if (isNaN(num)) {
  console.log("invalid input");
} 
else {
  if (num > 0) {
    let sum = 0;
    while (num > 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    console.log("sum of digits is: ", sum);
  } 
  else {
    console.log("should be positive or more then zero");
  }
}

}
