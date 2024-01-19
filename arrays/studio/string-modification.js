const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

/* let newStr = str.substring(0,3);
console.log(str.slice(3).concat(newStr));

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string is '${str}' and the modified string is '${newStr}'.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numberOfLetters = input.question("Enter the number of letters to relocate: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (Number(numberOfLetters) > str.length) {
    numberOfLetters = 3;
    console.log(`The inputted number exceeds the maximum length. The original string is '${str}' and the modified string is '${str.slice(numberOfLetters).concat(newStr)}'.`);
} else {
    newStr = str.substring(0,numberOfLetters);
    console.log(`The original string is '${str}' and the modified string is '${str.slice(numberOfLetters).concat(newStr)}'.`);
}
*/

lettersRelocation = input.question("Enter the number of letters to relocate: ");

if (Number(lettersRelocation) > str.length) {
    endStr = str.slice(0,3);
    newStr = (str.slice(3).concat(endStr));
    console.log(`You entered a number higher than the letters in your word! We relocated 3 letters instead. The former phrase was ${str} and the new phrase is ${newStr}.`);
} else {
    endStr = (str.slice(0, lettersRelocation));
    newStr = (str.replace(endStr, "").concat(endStr));
    console.log(`The former phrase was ${str} and the new phrase is ${newStr}.`);
}