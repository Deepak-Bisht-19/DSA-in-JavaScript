// with extra space

/*   
let arr = [1, 6, 8, 20, 65];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log(rev);
console.log(arr); 
*/

// without extra space

let arr = [10, 20, 30, 40, 50, 60];
let i = 0,
  j = arr.length - 1;

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);
