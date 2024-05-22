 
//  const student = {
//     firstName: "Emmy",
//     lastName: "boi",
//     age: 18,
//     favFood: ["rice", "beans","plantain"],
//     skills: ["HTML","CSS","JAVASCRIPT"],
//     address: {
//         street: "30 pakani street",
//         city: "lagos",
//         country: "Nigeria",
//     },

//     fullName: function () {
//         return this.firstName +" "+this.lastName;
//     },
//  };
 //access object

//  console.log(student.address.city);
//  console.log(Object.keys(student));
//  console.log(Object.values(student));
// console.log(Object.entries(student));

// if ("subject" in student) {
//     console.log("found");
// }else{
//     student.subject = "Chemistry";
// }

// console.log(student);

// to delete any key from the subject
// delete student.subject; 
// to delete a word you can use delete keyword



//  OR YOU USE THE OTHER METHOD
// console.log(student['favoriteFood'][0]);
// console.log(student['address']['city']);

//to update an object


const Emma = {
    firstName: "Emmy",
    lastName: "boy",
    age: 18,
    favFood: ["millet","chicken","rice"],
    skills: ["Programming", "computer operator","web"],
    address: {
        street: "30 pakani street",
        city: "lagos",
        country: "Nigeria",
    },

}

console.log(Object.values(Emma));