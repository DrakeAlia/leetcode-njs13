// Factorials

// Make a function that computes a factorial recursively.
// A factorial is when you take a number n and multiply by each preceding integer until you hit one.
// n * (n-1) * (n-2) ... * 3 * 2 * 1

// Call the function factorial

// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6

function factorial(n: number): number {
  // base case
  if (n === 1) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
}

// Time Complexity: O(n) because we are calling the function recursively
// Space Complexity: O(n) because we are creating new function calls

// Test cases:
// Example 1:
// const n = 1;
// console.log(factorial(n)); // 1

// Example 2:
// const n2 = 2;
// console.log(factorial(n2)); // 2

// Example 3:
// const n3 = 3;
// console.log(factorial(n3)); // 6

// Example 4:
// const n4 = 4;
// console.log(factorial(n4)); // 24

// Another solution:
function factorial2(n: number) {
  // create a variable to store the factorial
  let factorial = 1;
  // iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // multiply the factorial by the current number
    factorial *= i;
  }
  // return the factorial
  return factorial;
}

// Time Complexity: O(n) because we are iterating from 1 to n
// Space Complexity: O(1) because we are not creating any new data structures

// Another solution:
function factorial3(n: number) {
  // base case
  if (n < 2) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
}
