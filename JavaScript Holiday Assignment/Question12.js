// simple subscription model implement a simple subscription model
// based on user age content preference:
// under 18, only offer "Basic" subscription
// 18 and above with a preference for sports, offer "premium sports" package
// 18 and above without a specific preference, offer "Standard" package.

let age =  20; 

if("age <= 18");{
    console.log("Offers Basic Subscripton");
}elseif("age > 18 && with a preference for sports");{
        console.log("Offers Premium Sports")
}elseif("age > 18 && with a specific preference");{
        console.log("Offers Standard Package")
}