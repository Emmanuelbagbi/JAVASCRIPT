// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

// function greetuser(name){
//     name = prompt("Enter name: ");
//     if (!name){
//         alert("please enter your name: ");
//         return;
//     }else {
//         document.write('Thanks $(Emmy) for contacting us');
//     }
// }


// const fruits = ["mango", "apple", "banana", "watermelon"];
// console.log(fruits.length)
// fruits.push("pawpaw");
// fruits.unshift("orange");
// let removedItem = fruits.pop();
// console.log(removedItem);

// let rFirstItem = fruits.pop();
// console.log(rFirstItem)

// console.log(fruits);

// let first = fruits[0];
// console.log(first)
// let last = fruits[fruits.length-1];
// console.log(last);

//splice
// myFruits.splice(1,0,"grape");
// console.log(myFruits)

// console.log(fruits.indexOf("banana"))
// console.log(fruits.includes("apple"))

//sort in decending order
// myFruits.sort().reverse()

// function myFruits(arr){
//     for (let i=0; i<arr.length;i++){
//         console.log(arr[i])
//         if(arr[i]==="apple"){
//             break;
//         }else{
//             console.log(arr[i]);
//         }
//     }
// }
// myFruits(myFruits);

// function reverseElement(arr) {
//     let result = [];
//     for(let i=arr.length-1; i>=0, i--){
//         console.log(arr[i]);
//         result.push(arr[i])
//     }
//     return result;
// }
// console.log(reverseElement(fruits));


// write a js to remove the duplicate element from any given array[1,3,1,6,3,2]=[1,3,6,2]
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
console.log(removeDuplicatedItem(array));


// console.log(fruits.toString());

// let peo = ["Mike", "Kenny"];
// let pets = ["Cat", "Dog"];

// let combine = peo.concat(pets);
// console.log(combine);

// //use spread operator
// let newEll = [peo, ...pets]
// console.log(newEll)

//BIG O NOTATION
//A TIME COMPONENT SPACE COMPLENENT