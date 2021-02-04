// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherResult = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(anotherResult.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


const average = (one + two + three) / 3;
console.log(average.toFixed(5));   


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"


const char = letters.charAt(2);
console.log(char);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
// Not reliable but works as there is only 1 j
console.log(fact.replace("j","J"));
// --------------------------------------



