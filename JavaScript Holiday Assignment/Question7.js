// validate triangle type givenths of the sides of a triangle, determind if the triangle is 
// equilateral, isosceles or scalene

let a = 5
let b = 10
let c = 7

if (a <= b && b >= c){
    console.log("this is equilateral triangle")
}else if(a >= b && b <= c){
    console.log("this is isosceles triangle")
}else{
    console.log("scales")
}