// job Application filter create a filter for job applications Based
// on experience and skill level: if the applicant has at least 3 years 
// of experience and knows javascript, consider them for a senior developer position 
// if the applicant does not know the javascript, reject their application.


   
    
    // if ("Years >= 3 && knowsJavaScript") {
    //     console.log("Consider for Senior Developer position");
    // } else if ("Years < 3 || do not knowsJavaScript"){
    //     console.log("Reject application. JavaScript knowledge required");
    // } else {
    //     console.log("Reject application. Insufficient experience");
    // }

    let Years = 0; 
    
    switch (Years) {
        case 3:
        case 100: ("knowsJavaScript")
                console.log("Consider for Senior Developer position")
            break;
        case 0:
        case 2: ("do not knowsJavaScript")
                console.log("Reject application. Insufficient experience")
                break;
        default:
            break;
    }
