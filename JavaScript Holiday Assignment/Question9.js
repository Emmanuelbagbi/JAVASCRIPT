// Temperature Warning system issue a temperature warnning based on the following 
// conditions:
// if the temperature is below 6% warn about potential freezing conditions,
// if the temperature is above 35%, warn about a heaatwave.


let temperature = 35;

switch (temperature) {
    case 0:
    case 6:
        console.log("Potential Freezing Condition");
        break;

    case 35:
    case 100:
        console.log("Warnning HeatWave");
        break;

    default:
        console.log("temperature is within normal range")
        break;
}