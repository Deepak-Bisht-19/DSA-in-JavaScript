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
      console.log(isPrime(num));
      //   let isPrime = true;
      //   for (let i = 2; i <= Math.floor(num / 2); i++) {
      //     if (num % i === 0) {
      //       isPrime = false;
      //       break;
      //     }
      //   }
      //   console.log(isPrime);
      // //   if (isPrime === false) {
      // //     console.log(`${num} is not a prime number`);
      // //   } else {
      // //     console.log(`${num} is a prime number`);
      // //   }
    } else {
      console.log("should be positive or more then zero");
    }
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
