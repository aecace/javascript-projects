// // Unlike other objects, the Math built-in object is immutable.
// // The Math object has 8 defined properties.
// // These represent mathematical constants, like the value for pi (π) or the square root of 2.
// console.log(Math.PI);
// console.log(Math.PI*4);
// console.log(Math.PI + Math.PI);
// console.log(Math.SQRT2);

// Math.PI = 1234;
// console.log(Math.PI);
// //nothing changes coz immutable object


// // Start here
// function randomSelection(arr){
//    let index = Math.floor(Math.random()*arr.length);
//    return arr[index];
//  }
 
//  let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
//  let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.


 // Practice
 let number = 5.56789123;
 let decimalPlaces = 2;

 console.log(Math.round(number*10**decimalPlaces)/10**decimalPlaces);