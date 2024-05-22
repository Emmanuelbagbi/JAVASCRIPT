
const carts = ["mango","fanta","orange","eggs","bread"];
//to know the number or amount of this items us Length
let len = carts.length
//console.log(len);


//Access the Elements of gray
let first = carts[0];
console.log(first);
let last = carts[carts.length -1];
console.log(last);

//a loop without index 
for(let items of carts){
    console.log(items);
}

// console.log("********************")
// carts.forEach((index, carts)=>console.log(index+";"+carts));
// console.log("********************")
// for (let i = 0; i < carts.length; i++) {
//     console.log(carts[i]);
// }

let removeLast = carts.pop();
console.log(removeLast);
//remove first
let firstRemoved = carts.shift();
console.log(carts);

//add to end of array
carts.push("Avogadro");
console.log(carts)


//add to the beginning of the array

carts.unshift("watermelon");
console.log(carts);

//check if an array include an item

// let isMango = carts.includes("fanta");

//you can also use loop to each if an array include an item
// for(let fruit of carts){
//     if(fruit === "mango");
// }
// console.log(isMango);

let isMango = carts.includes("fanta");
//console.log(isMango);
let itemIndex = carts.indexOf("orange");
console.log(itemIndex);

//Concat means to join two arrays together
let newArray = carts.concat(prices);
let newArr2 = [carts,...prices];
console.log(newArray)
//copy
arr2 = carts.slice(carts.length-2);
console.log(arr2);

//CONVERT ARRAY TO STRING
let newcart = carts.toString();
console.log(newcart);

//CONVERT A STRING BACK TO AN ARRAY
let convertArrStr = newcart.split(",")[0];
console.log(convertArrStr);