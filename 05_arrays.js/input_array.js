const prompt = require('prompt-sync')()
let n = Number(prompt("How many elements do you want in your array: "))
let arr = new Array(n);
for (let i = 0 ; i < arr.length; i++){
    arr[i] = Number(prompt("enter the value: "))
}


let sum = 0
for (let i = 0 ; i< arr.length; i++){
    sum = sum + arr[i]
}
console.log(sum);
