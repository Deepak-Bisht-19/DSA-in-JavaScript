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
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    console.log("reversed number is: ", rev);
  } 
  else {
    console.log("should be positive or more then zero");
  }
}

}
