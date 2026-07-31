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
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    console.log(fact);
  } 
  else {
    console.log("should be positive or more then zero");
  }
}

}
