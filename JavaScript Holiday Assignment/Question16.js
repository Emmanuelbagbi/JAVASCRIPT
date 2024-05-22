// University Scholarship Eligibility implement a scholarship eligibility checker
// for a university with a specific criteria:
// if the applicants GPA is above 3.8 and they have exceptional extracurricular activities,
// offer a full scholarship.
// if they have a strong academic record, offer a partial scholarship.
// if the GPA is between 3.0 and 3.5 and they demonstrate financial aid.
// otherwise, reject the scholarship application.


    // let GPA = 3.5

    // if ("GPA > 3.8 && extracurricularActivities === 'exceptional'") {
    //     console.log("Offer full scholarship.");
    // } else if (GPA = 3.5) {
    //     console.log ("Offer partial scholarship.");
    // } else if (GPA >= 3.0 && GPA <= 3.5 && financialAid) {
    //     console.log ("Offer partial scholarship with financial aid.");
    // } else {
    //     console.log ("Reject scholarship application.");
    // }

    let GPA = 3.0;
    financialAid = 0;

    switch (GPA) {
        case 3.8:
        case 100.6:("GPA > 3.8 && extracurricularActivities === 'exceptional'") 
            console.log("Offer full scholarship.")
            break;
        case 3.5:
            console.log ("Offer partial scholarship.")
            break;
        case 3.0:
        case 3.5:(GPA >= 3.0 && GPA <= 3.5 && financialAid)
            console.log ("Offer partial scholarship with financial aid.")
            break;
        default:
            console.log ("Reject scholarship application.")
            break;
    }