// health insurance eligibility determine eligibility for a health
// insurance plan based on age and pre-existing conditions
// if the applicant is between 18 and 60 years old and has no pre-existing
// conditions, approve their application.
// if the applicant is over 60 years old but has no pre-existing conditions
// offer them a limited coverage plan.
// if the applicant has pre-existing conditions, reject their application.

let age = 0;

switch (age) {
    case 18:
    case 60: ("No Pre-Existing Conditions") 
        console.log("Application Approved")
        break;
    case 61:
    case 100: ("No Pre-Existing Conditions")
        console.log("Limited Coverage Plan")
    default:
    case 0: ("Has Pre-Existing Conditions")
        console.log("Application Rejected")
        break;
}