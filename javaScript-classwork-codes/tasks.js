//sum only odd numbers
console.log(34346);
function sumOdd(arr){
let sum =0;
for(let i=0; i<arr.length; i++){
   if(arr[1] % 2 i===0) && (arr[1] > 0){
    sum +=arr[i];
   }
}
return sum;
}

let sum1 = sumOdd([2,5,1,6])
let sum2 = sumOdd([7,8,18,20,22])

console.log([
    sum1, sum2
])

function sumEvenGreaterThanZero(arr){
let sum =0;
for(let i=0; i<arr.length; i++){
    if((arr[i] % 2===0) && (arr[i])){
        sum +=arr[i];
    }
}
return sum;
}
console.log(sumEvenGreaterThanZero([2,-4,-8,9,6]))

let compare = 0;
function greeterThanZero(num){
    if(num > compare){
        return num;
    }
}