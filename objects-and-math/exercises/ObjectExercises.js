let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.

let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

for (let i = 0; i < crew.length; i++) {
   crew[i]["astronautID"] = i+1;
   crew[i]["move"] = function() {
      return Math.round(Math.random()*10);
   };
}
// console.log(crew);

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
};
// console.log(crewReports(tardigrade));

// Start an animal race!

function fitnessTest(array) {
   let results = [];

   for (let i = 0; i < array.length; i++) {
      let turns = 0;
      let numSteps = 0;

      while (numSteps < 20) {
         numSteps += array[i].move();
         turns++;
      }
      results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }
   
   return results;
};

console.log(fitnessTest(crew));