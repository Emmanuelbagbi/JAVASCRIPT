

const numbers = [1,2,3,4,5];
let sum = 0;

numbers.forEach((num) => {
    if (num % 2 == 0) {
        sum += num;
    }
});
// console.log(`sum = ${sum}`);

const onlyOddAdd = [2, 4, 10, 2, 99, 45];
let sumOdd = 0;

onlyOddAdd.forEach((num, index) =>{
    if (index % 2 === 1) {
        sumOdd += num;
    }
});
// console.log(`Sum Odd = ${sumOdd}`);

// MORDERN FUNCTION
const findMax = (arr) =>{
    let max = arr[0];

    for (let num of arr) {
       if (max < num) {
        max = num;
       } 
    }
    return max;
};
// console.log(findMax(onlyOddAdd));

const addTwo = (a, b) => {
    return a + b;
};
// console.log(addTwo(45,90));


// Find
// const findEmployeeById = (id) => {
//     return employees.find((employee) => employee.id === id);
// };
// console.log(findEmployeeById(1));

// const findEmployeeIndex = (id) => {
//     let return = employee.findIndex((employee) => employee.email === email);

//     if (result != -1){
//         return employee[result];
//     }else{
//         return "sorry user not found";
//     }
// }
// console.log(findEmployeeByIndex(""))

//ALWAYS USE RETURN IN FUNCTIONS

//DESTRUCTURING
const fruits = ["mango","banana","apple","lemon"];
[a,b,...c]=fruits;
console.log(a);


const user = {
    name:  "John",
    username: "mike",
    password: "1234"
};

const{username,password} = user;
console.log(username);