// unit        price 
// 0 to 100   = 4
// 100 to 200 = 6
// 200 to 400 = 8
// above 400  = 13
const prompt = require("prompt-sync")()
let unit = Number(prompt("enter the electricity unit")); // 700 unit
let amount = 0;
if(unit>400){
    amount = (unit - 400)*13; //3900 rupees
    unit = 400;
} //400 unit
if(unit>200 && unit<=400){
    amount += (unit - 200)*8; // 1600 rupees
    unit = 200;
} // 200 unit
if(unit>100 && unit<=200){
    amount += (unit - 100)*6 ;
    unit = 100;
}
amount += unit*4;

console.log(amount);
