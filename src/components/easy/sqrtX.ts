// Sqrt(x)
// https://leetcode.com/problems/sqrtx/

// Given a non-negative integer x, return the square root of x
// rounded down to the nearest integer. The returned integer should
// be non-negative as well.

// You must not use any built-in exponent function or operator.
// * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we
//  round it down to the nearest integer, 2 is returned.

// Constraints:
// * 0 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */

// Solution using a loop (Slow runtime)
var mySqrt = function (x: any) {
  if (x <= 1) {
    return x;
  }
  for (let i = 1; i <= x; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
};

// Time Complexity: O(n) because we loop through the numbers from 1 to x
// Space Complexity: O(1) because we don't create any new data structures

// Tests
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(1)); // 1
console.log(mySqrt(0)); // 0
console.log(mySqrt(2)); // 1
console.log(mySqrt(3)); // 1
console.log(mySqrt(5)); // 2
console.log(mySqrt(6)); // 2

// Solution using binary search (Fast runtime)
var mySqrt2 = function (x: any) {
  // create a variable to store the result, this will be the square root of x
  let result = 0;
  // create a variable to store the left pointer
  let left = 1;
  // create a variable to store the right pointer
  let right = x;
  // loop while the left pointer is less than or equal to the right pointer
  while (left <= right) {
    // create a variable to store the middle pointer
    let middle = Math.floor((left + right) / 2);
    // if the square of the middle pointer is less than or equal to x
    if (middle * middle <= x) {
      // set the result to the middle pointer
      result = middle;
      // set the left pointer to the middle pointer plus 1
      left = middle + 1;
      // if the square of the middle pointer is greater than x
    } else {
      // set the right pointer to the middle pointer minus 1
      right = middle - 1;
    }
  }
  // return the result
  return result;
};

// Time Complexity: O(log n) because we use binary search
// Space Complexity: O(1) because we don't create any new data structures
