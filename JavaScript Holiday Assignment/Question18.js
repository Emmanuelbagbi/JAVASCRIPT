// Assignment 18: Complex Access Control System
// Design a complex access control system for a high-security facility with multiple entry points and varying levels of clearance. The system should incorporate the following criteria:
// The facility has three main entry points: A, B, and C.
// Each entry point requires different levels of clearance for access.
// Clearance levels range from 1 to 5, with 5 being the highest level of access.
// Access to Entry Point A requires clearance level 3 or higher.
// Access to Entry Point B requires clearance level 4 or higher.
// Access to Entry Point C requires clearance level 5.
// Additionally, individuals with VIP status have special access privileges, granting them clearance to all entry points regardless of their clearance level.
// Your task is to implement an access control system that prompts the user to enter their clearance level and VIP status, and then determines which entry points they are allowed to access based on the provided criteria.

    let ClearanceLevel = isVIP
 if (isVIP) {
        console.log("You have VIP status. Access granted to all entry points.");
    }else if ("clearanceLevel >= 5"){
    console.log("Access granted to Entry Point A, B, and C.")
    } else if("clearanceLevel >= 4"){
        console.log("Access granted to Entry Point B and C.")
    } else if ("clearanceLevel >= 3"){
        console.log("Access granted to Entry Point A.")
    }else {
        console.log("Insufficient clearance level. Access denied to all entry points.")
    }
  


