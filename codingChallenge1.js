/*
1. Store Mark and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3.
*/
//BMI = mass/height^2
//mass in kg height in meters

const johnsHeight = 1.778;
const johnsMass = 81;
const marksHeight = 1.651;
const marksMass = 78;

let johnsBMI = calculateBMI (johnsHeight, johnsMass);
let marksBMI = calculateBMI (marksHeight, marksMass);

let markHigherBMI;

if (marksBMI > johnsBMI){
    markHigherBMI = true;
    console.log('Is Mark\'s BMI is higher than John\'s BMI?: ' + markHigherBMI);
}

function calculateBMI(height, mass) {
    return mass / (height * height)
}