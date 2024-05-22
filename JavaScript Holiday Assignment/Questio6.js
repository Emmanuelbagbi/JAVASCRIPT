// find the season given to a month as a number from 1-12, display the season it falls in 
// spring, summer , winter, autumn, 
;
let season = 9;
let seasonName;

switch (season) {
    case 9:
    case 10:
    case 11:
        console.log("Autumn")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break;
    case 12:
    case 1:
    case 2:
        console.log("Winter")
        break;
    default:
        break;
}
