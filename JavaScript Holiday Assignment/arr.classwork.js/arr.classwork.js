
let arr = [0,2,0,3];
function moveZero(arr) {
    let nonZeroIndex = 0;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}

console.log(moveZero([3,2,0,3,0,75,65,0]));