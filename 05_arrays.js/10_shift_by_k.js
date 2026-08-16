// left rotation
// not a efficient way as time complexity is n^2
/*
const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("enter the number of shift: "));
k = k % arr.length;

for (let i = 1; i <= k; i++) {
  let copy = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);
*/

// this is also not good in terms of space
/*
const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = Number(prompt("enter the number of shift: "));
k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length];
}
console.log(temp);
*/

// we use this

const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("enter value of shift: "));
k = k % arr.length;

reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);

console.log(arr);

function reverse(i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++
    j--
  }
}
