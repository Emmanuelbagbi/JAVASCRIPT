
// let numbers = [1,4,6,8];

// let sum = 0;
// for (let sum of numbers) {
//     sum+=num;
// }
// console.log(sum);

// USING REDUCE FUNCTION

// let Sum = numbers.reduce((acc,curVal)=>acc+curVal,0);  => its samething as let sum = 0
// console.log("Sum: "+sum); 

//flatten an array
// const scores = [[80,100],[60,70],[30,50]];

// const allScores = scores.reduce((acc,conVaal)=>acc.concat(conVaal),[]);
// console.log(allScores);

// const fruits = ["banana","mango","lemon","apple","carrot"];
// let occurance = fruits.reduce((acc,fruits)=>acc{acc[fruits] = (acc[fruits] || 0) + 1;
//     return acc;
// }, {});

// console.log(occurance);

let = nos = [60,20,30,80,10];

const maxNo = nos.reduce(
    (max, curValue) => (curValue < max ? (curValue = max) : curValue),
    nos[0]
);
console.log(maxNo);

