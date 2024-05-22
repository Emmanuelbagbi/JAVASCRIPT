function hello(name) {
    if (name) {
        return `Hello ${name} how are you doing`;
    }
    return `How are you doing`;
}
console.log(hello("Emmy"));


function number(a,b,c) {
   let sum = a + b + c;
   return sum; 
}
console.log(number(1,4,7));

function sumAll(a,b,...c) {
    let total = a + b;
    let num = [...c];
    for (let i = 0; i < num.length; i++) {
         total += num[i];  
    }
    return total;
}
console.log(sumAll(2,4,8,9,6,3,4));


