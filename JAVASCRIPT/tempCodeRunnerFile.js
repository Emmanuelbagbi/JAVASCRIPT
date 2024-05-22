const array = [1,3,1,6,3,2]

function removeDuplicatedItem(arr) {
   let result = [];
   for(let i=0; i < arr.length; i--){
    if(!(result.includes(arr[i]))){
        result.push(arr[i])
    }
   } 
   return result;
}
console.log(removeDuplicatedItem(array))