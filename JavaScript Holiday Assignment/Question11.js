// Basic License System write a system that grants licenses
// based on age and a written test score:
// must be at least list 80% or above for a driver's license
// if under 16 but the score is 90% or above, a learner's permit is granted.



let  age = 20;
let testscore = 50;

If("age >= 16 && testscore <= 80"){
    console.log("Driver's license not Granted");
}elseif("age <= 16 && testscore >= 90"){
    console.log("learners Permit is Granted");
}
    



