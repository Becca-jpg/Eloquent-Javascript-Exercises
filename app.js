//Chapter 2 Exercises 

//Chessboard Exercise 
let size = 8;
let result = ' ';

let row = 1;
while (row <= size) {

    let column = 1;
    while (column <= size) {

        if ((column + row) % 2 === 0) {
            result += ' ';
        } else {
            result += '#';
        } column += 1;
    }
    result += '\n'
    row += 1;
}

console.log(result)


//FizzBuzz 
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    
    else if (i % 3 === 0)
        console.log("Fizz");

    else if (i % 5 === 0)
        console.log("Buzz");

    else 
        console.log(i);
}


//Chapter 3 Exercises

//Recursive Function 

function isEven(n) {
    if (n < 0) {
        n = Math.abs(n);
    } 
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    }
    return isEven(n-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

 
//Bean Counting 

function countBs(string) {
    let result = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            result = result + 1;
        }
    }
    return result;
}


function countChar(string, character) {
    let result = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            result = result + 1;
        }
    }
    return result;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));