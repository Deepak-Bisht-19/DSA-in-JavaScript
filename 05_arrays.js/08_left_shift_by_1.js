let arr =[10,20,30,40,50]
let copy =arr[0]

for(let i = 0; i< arr.length-1; i ++){
    arr[i] = arr[i+1]
}
arr[arr.length-1]= copy;
console.log(arr);
