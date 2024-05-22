// loan Application Approval system Design a loan application Approval
// system with stricter criteria:
// if the applicant's income is over $80,000, their credit score is above
// 750, and they have no outstanding debts, approve the load.
// if the income is between $50,000 and $80,000 the credit score is above 700, 
// and thry have no more than one outstanding debt, offer a reduced interest rate
// if the income is below $50,000 but above $30,000 the credit score is above 650
// and they have less than three outstanding debts, consider the application 
// otherwise reject the loan application.

    let income = 70000;
    let creditScore = 700;
    let outStanding = 1;
    
    if ("income > 80000 && creditScore > 750 && outstandingDebts === 0") {
        console.log ("Loan approved.");
    } else if ("income >= 50000 && income <= 80000 && creditScore > 700 && outstandingDebts <= 1") {
        console.log ("Offer reduced interest rate.");
    } else if ("income > 30000 && income < 50000 && creditScore > 650 && outstandingDebts < 3") {
        console.log ("Consider application.");
    } else {
        console.log ("Reject loan application.");
    }

    // let income = 90000;
    // let creditScore = 750;
    // let outStandinDebts = 0;

    // switch (outStandinDebts) {
    //     case 80,000:("income > 80000 && creditScore > 750 && outstandingDebts === 0")
    //         console.log ("Loan approved.")
    //         break;
    //     case 50,000:
    //     case 80,000:("income >= 50000 && income <= 80000 && creditScore > 700 && outstandingDebts <= 1")
    //         console.log ("Offer reduced interest rate.")
    //         break;
    //     case 30,000:
    //     case 50,000: ("income > 30000 && income < 50000 && creditScore > 650 && outstandingDebts < 3")
    //         console.log ("Consider application.")
    //     default:
    //         console.log ("Reject loan application.")
    //         break;
    // }