

// let firstName = "12";

// if (firstName) {
//     if (firstName.length <3 || typeof firstName !=="string") {
//         console.error("please enter a valid name");
//     }else{
//         console.log("Good morning ${firstName}");
//     }

// }else{
//     console.log("enter your Name");
// }


// let score = 89;
// let grade ="";
// if (score <=100 && score >= 70) {
//     grade = "A";
// }else if(score>=60 && score < 70){
//     grade = "B",
// }else{
//     grade = ("grade = ${grade}");
// }
// console.log ("grade = ${grade}");

//SWITCH CASE

// let grade = ""
// let days = "tuesday";
// switch (days) {
//     case "monday":
//         grade = "today is monday begining of the week";
//         break;

//     case "tuesday":
//         grade = "what a wonderful tuesday";
//         break;

//     default:
//         grade = "wrong input";
// }
// console.log(grade);



//Math.pow && Math.floor

// let number = 3;
// let result = Math.pow(number, 2);

// console.log("The square of: " + result);
// let no =345.89;
// console.log(Math.floor(no));

function solution(P,C) {
   let Allowedplayers = Math.floor(P/2);

   if (Allowedplayers > C) {
        return C;
   }
   return Allowedplayers;
}
console.log(solution(5,3));

let myArray = [1, 2, 3].push(4);
console.log(myArray);