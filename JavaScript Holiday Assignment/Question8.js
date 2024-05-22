// Movie night given three variables that indicate if friends 
// are available for movie night (true or false), decide if the movie night is on 
// if at least two friends are available, movie night is on. if only one or none 
// can make it it's off

let friendAvailable1 = false;
let friendAvailble2 = true;
let friendAvailable3 = true;
let NumFriendsAvailable = 0;

switch (NumFriendsAvailable){
    case 0:
    case 1:
        console.log("Movie Night is OFF")
        break;
    case 2:
    case 3:
        console.log("Movie night is ON")
    default:
        console.log("invalid number of friends available")
        break;
}