// Declare and assign the variables below

let spaceShuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let mpk = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

/* console.log(typeof(spaceShuttle));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceToMarsKm));
console.log(typeof(distanceToMoonKm));
console.log(typeof(mpk)); */

// Calculate a space mission below

let distancetoMarsMiles = distanceToMarsKm * mpk;
let timeToMarsHours = distancetoMarsMiles / shuttleSpeedMph;
let timeToMarsDays = timeToMarsHours / 24;

// Print the results of the space mission calculations below

console.log(spaceShuttle + " will take " + timeToMarsDays + " days to reach Mars.");

// Calculate a trip to the moon below

let distancetoMoonMiles = distanceToMoonKm * mpk;
let timeToMoonHours = distancetoMoonMiles / shuttleSpeedMph;
let timeToMoonDays = timeToMoonHours / 24;

// Print the results of the trip to the moon below

console.log(spaceShuttle + " will take " + timeToMoonDays + " days to reach the Moon.");