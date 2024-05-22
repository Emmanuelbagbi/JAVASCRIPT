// let x= "Hello"
// let y="world"
// console.log(x+y)

// let x="Hello"
// let y=10
// let sum = x+y
// console.log(x+y)

// let a = 1
// // let b = ++a;
// let c = --a;
// console.log(b);
// // console.log(c)

// let num1 = 5;
// let num2 = 3;
// // num1 += num2;
// num1 = num1 + num2;
// console.log(num1)

// let a = true;
// let b = "Hello";
// console.log(a+b)

// let num1 = 22;
// let num2 = 10;
// let sum = num1 + num2
// console.log(sum)

// let x = 8;
// let y = 12;
// let z = 96;

// if (x < z){
//     console.log("x is less than z");
// }else{
//     console.log("x is not less than z");
// }

// let letter = "A";
// if( letter === "A"){
//     console.log("vowel")
// }else{
//     console.log("consonant")
// }

// let letter = "B";
// if( letter )

// let day = 2;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "sunday"
//         break;
//     case 2:
//         dayName = "monday"
//         break;
//     case 3:
//         dayName = "tuesday"
//         break;
//     case 4:
//         dayName = "wednesday"
//         break;
//     case 5:
//         dayName = "thursday"
//         break;
//     case 6:
//         dayName = "friday"
//         break;
//     case 7:
//         dayName = "saturday"
//         break; 
//     default:
//         break;
// }
// console.log(dayName)

// alert("start now")

// let ageG =parseInt(prompt("Enter age"))
// function addNumber(age){
//     if (age < 18){   
//         return "You are below 18"
//     }
//     return "You are above 18"
// }
// console.log(checkAge(ageG));

function cigarparty(cigars,isWeekend){
    if(cigars >=40 && cigars <=60 && !isWeekend){
        return true;
    }
    if(cigars >= 40 && isWeekend){
        return true;
    }
    return false;
    }

    console.log(cigarparty(30, true));

function squirrelPlay(temp, isSummer){
    if ((squirrelPlay >= 60 && squirrelPlay <= 90) && !isSummer) {
           return(true);
       } if (squirrelPlay >= 90 && !isSummer){
           return(true);
       }
   
       return false;
        }
    
   console.log(temp(30,true))