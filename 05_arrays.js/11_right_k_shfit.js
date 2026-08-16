/*
const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = Number(prompt("enter the number of shift: "));
k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i - k + arr.length) % arr.length];
temp[(i+k)%arr.length]= arr[i]
}
console.log(temp);
*/

const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("enter value of shift: "));
k = k % arr.length;

reverse(0, arr.length - 1);
reverse(0, k - 1);
reverse(k, arr.length - 1);

console.log(arr);

function reverse(i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++
    j--
  }
}
