let arr = [10, 60, 30, 29, 50, 120, 58, 550, 220, 40];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
