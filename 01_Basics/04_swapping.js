// ********************swap two variables********************

// Method 1: swap with extra variable

let a = 10;
let b = 20;

let c = a; // c = 10 , a = 10
a = b; // a = 20 , b = 20
b = c; // b = 10

console.log("After swapping: a = " + a + ", b = " + b); // Output: After swapping: a = 20, b = 10

// Method 2: swap without extra variable

let x = 10;
let y = 20;

x = x + y; // x = 30
y = x - y; // y = 10
x = x - y; // x = 20

console.log("After swapping: x = " + x + ", y = " + y); // Output: After swapping: x = 20, y = 10

// Method 3: swap using destructuring assignment

let p = 10;
let q = 20;

[p, q] = [q, p];

console.log("After swapping: p = " + p + ", q = " + q); // Output: After swapping: p = 20, q = 10