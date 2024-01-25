// create a line of hashes
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

// console.log(makeLine(5));


// create a square of hashes
// function makeSquare(size) {
//     let str = '';
//     for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) {
//             str += '#';
//         }
//         str += '\n';
//     }
//     str = str.slice(0, str.length-1);
//     return str;
// }

// console.log(makeSquare(5));


// create a rectangle of hashes
// function makeRectangle(width, height) {
//     let str2 = '';
//     for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//             str2 += '#';
//         }
//         str2 += '\n';
//     }
//     str2 = str2.slice(0, str2.length-1);
//     return str2;
// }

// console.log(makeRectangle(5, 3));


// create a triangle of hashes
// function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i < height; i++) {
//         stairs += (makeLine(i + 1) + '\n');
//     }
//     return stairs.slice(0, stairs.length-1);
// }

// console.log(makeDownwardStairs(5));


// create a line of spaces and hashes
function makeSpaceLine(numSpaces, numChars) {
    let str3 = '';
    for (let i = 0; i < numSpaces; i++) {
        str3 += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        str3 += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
        str3 += ' ';
    }
    return str3;
}

// console.log(makeSpaceLine(3, 5));


// create a pyramid of hashes
// function makeIsoscelesTriangle(height) {
//     let triangle = '';
//     for (let i = 0; i < height; i++) {
//       triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
//     }
//     return triangle.slice(0, triangle.length-1);
//   }

// console.log(makeIsoscelesTriangle(5));


  // create a diamond of hashes
function makeDiamond(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, triangle.length-1);
  }

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

console.log(`${makeDiamond(5)}\n${reverse(makeDiamond(5))}`);