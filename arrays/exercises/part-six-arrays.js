//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];

table.push(element1,element2,element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]);
console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2], table[1][0], table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let definition1 = ['small rolls of vinegar-flavored cold cooked rice served with a garnish', 'the second-best food known to humankind'];
let definition2 = ['rice topped with sautéed vegetables, chili paste, and beef', 'the third-best food known to humankind'];
let definition3 = ['a solid block made from roasted and ground cacao seeds', 'the best food known to humankind'];
let word1 = ['sushi', 'Japanese', definition1];
let word2 = ['kimbimbap', 'Korean', definition2];
let word3 = ['chocolate', 'Nahuatl', definition3];

let wordArray = [];
wordArray.push(word1,word2,word3);

console.log(wordArray[0][1], wordArray[1][0], wordArray[2][2][1]);
// interesting, so if you use the third [] on one of the values that doesn't have a 3D array, then it indexes the string itself for the character