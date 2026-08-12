let arr = [20, 50, 700, 10, 80,110,700, 110];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {
    sMax = arr[i];
  }
}
console.log(sMax);
