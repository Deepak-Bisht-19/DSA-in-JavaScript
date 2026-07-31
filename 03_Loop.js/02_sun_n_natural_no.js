//sum of n natural number

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
    for (let i = 1; i <= num; i++) {
      sum = sum + i;
    }
    console.log(sum);
  } 
  else {
    console.log("should be positive or more then zero");
  }
}

}
