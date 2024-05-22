// let username = "markmama"
// console.log(username.endsWith("ma"))
// console.log(username);

// let username = "emmyboi"
// console.log(username.endsWith("oi"))
// console.log(username);

// function (){
//     let state = prompt("Enter State");
//     isStateStart = state.startsWith("a");
//     if(!isStateStart){
//         document.write('<p style="color:red">app this application only for any A. state');
//     }
//     else{
//         document.write("")
//     }
// }

// let len = username.length;
// console.log(len)

// let school = "aptech"
// console.log(school.toUpperCase())
// console.log(school.length[0])

// for(let i=0; i<school.length; i++){
//     console.log(school[i]);
// }

// who wins the battle between uppercase and lowercase in any given string:
// if there is no winner return draw;
// mike => lower wins;
// love => draw
// mark => upperwins



// function caseBattles(str) {
//     let uppercase = 0;
//     let lowercase = 0;

//     for(let i=0; i<str.length; i++){
//         let elem = str[i];
//         if(elem===elem.touppercase()){
//             uppercount++;
//         }else{
//             lowercase;
//         }
//     }

//     if (uppercount===lowercase){
//         return "draw";
//     }
//     if (uppercount > lowercount){
//         return "Uppercase won";
//     }
//     return "Lowercase won";
// }
// console.log("love")


// repeat the vowels in any string by the multiplier
// love,2=>loovee
// hate,4=>haaateee
// dad,0=>dad


// function vowelReapter(str,mul) {
//     let vowel ="aeiou";
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         let elem = str[i];
//         if(vowel.includes(elem)){
//             result += elem.repeat(mul);
//         }else{
//             result += elem;
//         }
//     }
//     return result;
// }
// console.log(vowelReapter("dad",0));

// function multiplier(str,no) {
//    let ans ="";
//    for(let i=0; i<no;i++){
//     ans +=str;
//    }
// return ans; 
// }
// console.log(multiplier("a",3));


//TARNARY OPERATORS
// let age = 100;
// let message = age >= 18 ? "you are an adult" : "you're a minor"
// console.log(message);

// let time = 12;
// let greeting = time < 12 ? "Goodmorning" : "Good afternoon"
// console.log(greeting);


let bitselect = ["bit","dsj", "djden"]
console.log(bitselect[1]);

//EXPLAIN HOW JAVASCRIPT WORK INTERNALLY STORE ARRAY 