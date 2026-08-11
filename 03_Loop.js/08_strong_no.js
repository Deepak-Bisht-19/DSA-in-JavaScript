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
      // 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
      let copy = num;
      let sum = 0;
      while (num > 0) {
        let rem = num % 10;
        var fact = 1;
        for (i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        num = Math.floor(num / 10);
      }
      if (copy === sum) {
        console.log(`${copy} is a strong number`);
      }
      else{
        console.log(`${copy} is not a strong number`);
        
      }
    } else {
      console.log("should be positive or more then zero");
    }
  }
}
