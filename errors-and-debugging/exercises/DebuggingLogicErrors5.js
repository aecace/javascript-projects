// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelReady = false;
let computerReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}

console.log("fuelReady = ", fuelReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   computerReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   computerReady = false;
}

console.log("computerReady = ", computerReady);

if (fuelReady && computerReady ) {
   launchReady = true;
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed");
}