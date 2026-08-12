const prompt = require("prompt-sync")()
let n = Number(prompt("enter the number"))

for (let i= 1 ; i <= n ; i++){
    let ascii = 65
    for(j =1 ; j <=i ; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ")
        ascii++
    }
console.log()
}