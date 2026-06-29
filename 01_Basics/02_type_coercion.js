// *******************type coercion*******************

let x = "20"; // string
let y = 10; // number

console.log(x + y); // Output: 2010 (string concatenation)
// we are adding a string and a number, so the number and string will be concatenated as in js + operator will do addition only whem both are numbers
// this is because + operator has two meanings, which are addition and concatenation, so the javascript engine will try to convert the number to a string

console.log(x - y); // Output: 10 (type coercion to number)
// we are subtracting a string and a number, so the string will be coerced to a number
// this is because - operator has only one meaning, which is subtraction, so the javascript engine will try to convert the string to a number