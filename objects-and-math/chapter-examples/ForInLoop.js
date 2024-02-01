let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   "tortoise's diet": ["pumpkins", "lettuce", "cabbage"],
   //keys are any valid string, put "" around if necessary only
   sign: function() {
       return `${this.name} is a ${this.species}`;
   }
};


// // How to call an object
// console.log(tortoiseOne["tortoise's diet"]);
// //above required for keys with spaces in the name
// // console.log(tortoiseOne[name]);
// //above is invalid, bracket notation requires ""
// console.log(tortoiseOne["name"]);
// console.log(tortoiseOne.name);
// //both of the above work


// // Pete gained 10 pounds
// //REMEMBER! Objects are mutable. Changing a property's value will change the original too.
// console.log(tortoiseOne.weight);
// newWeight = tortoiseOne.weight + 10;
// tortoiseOne.weight = newWeight;
// console.log(tortoiseOne.weight);


// // Add New Key/Value Pairs
// // objectName["new-key"] = propertyValue;
// let tortoiseTwo = {
//    species: "Galapagos Tortoise",
//    name: "Adrian",
//    weight: 908
// };

// console.log(tortoiseTwo);

// tortoiseTwo["age"] = 120;
// tortoiseTwo["speed"] = 'Faster than the hare.'

// console.log(tortoiseTwo);
// console.log(tortoiseTwo.age);


// New Tortoise!
let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Patricia",
   weight: 800,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return `${this.name} is a ${this.species}`;
   }
 };
 // Even though tortoiseOne and tortoiseTwo have the same keys and values,
 //they are stored in separate locations in memory.
 //This means that even though you can compare the properties in different objects for equality,
 //you cannot compare the objects themselves for equality.
 //console.log(tortoiseOne === tortoiseTwo); outputs false

// Using a for...in loop, iterate through each property in the tortoiseOne object
//and print the value to the console.

let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };

 for (item in giraffe) {
    console.log(item + ", " + giraffe[item]);
 }
 // NOTE: Inside a for...in loop, we can only use BRACKET syntax to access the property values.