const prompt = require("prompt-sync")();
let age = Number(prompt("enter your age: "));
if(isNaN(age)){
    console.log("enter a valid number")
}
else if(age>=18){
console.log("you can vote")
}
else{
    console.log("not eligible");
    
}