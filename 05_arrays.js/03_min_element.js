let arr = [100, 60, 30, 29, 50, 120, 58, 550, 220, 40];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
