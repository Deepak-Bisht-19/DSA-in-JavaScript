let arr = [20, 50, 700, 10, 80,10, 110];
let min = Math.min(arr[0], arr[1]);
let sMin = Math.max(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i] < min) {
    sMin = min;
    min = arr[i];
  } else if (arr[i] < sMin && min != arr[i]) {
    sMin = arr[i];
  }
}
console.log(sMin);
