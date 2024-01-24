/**
 * @ARRAYS
 * type of non-primitive data type that allow you  to store collections of data
 * They are ordered and indexed, starting from zero
 * example: let fruit = ["apple", "banana", "cherry"];
 * You can access, manipulate, and iterate through arrays using various methods and loops.
 */

/**
 * @LOOPS
 * Loops are used to repeatedly execute a block of code until a specified condition is met.
*They are essential for iterating through data structures like arrays.
* @TYPESOFLOOPS
@forLoop

Used when you know how many times you want to execute the code.
Example:
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

@whileLoop

Used when the number of iterations is not known in advance.
Example:
let i = 0;
while (i < 5) {
  console.log("Iteration " + i);
  i++;
}

@dowhileLoop

Similar to the while loop, but it always executes the code block at least once.
Example:
let i = 0;
do {
  console.log("Iteration " + i);
  i++;
} while (i < 5);

 */



//What is Recursion?

/*
@RECURSION

Recursion is a programming technique where a function calls itself to solve a problem.
Recursion in JavaScript

JavaScript fully supports recursive functions.
Example: Factorial Calculation

A common example of recursion is calculating the factorial of a number:
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
*/