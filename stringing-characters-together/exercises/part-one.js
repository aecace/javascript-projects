let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(1001);
console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = String(123.45);
console.log(num.replace(".", "").length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = String(23.456);
if (num.includes(".")) {
    console.log(num.replace(".", "").length);
} else {
    console.log(num.length);
}

/* Solution given:

if (String(num).includes('.')){
    console.log(String(num).length-1);
} else {
    console.log(String(num).length);
}