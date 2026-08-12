// let arr = [0, 0, 1, 1, 1, 1, 0, 1, 0, 0];
let arr =[10,20,45,10,46,1,76,87,65,80]
let i = 0,
  j = 0;
while (i < arr.length) {
  if (arr[i]%2 !== 0) { // if (arr[i] ==  0)  for 0 and 1
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);
