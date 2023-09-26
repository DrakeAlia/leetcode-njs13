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

// Solution using binary search (Fast runtime and low memory usage)
var mySqrt2 = function (x: any) {
  // create a variable to store the result, result is the number we're looking for
  let result = 0;
  // create a variable to store the left pointer, left is the smallest possible value we can search for
  let left = 1;
  // create a variable to store the right pointer, right is the largest possible value we can search for
  let right = x;
  // while there are still numbers to consider, loop while the left pointer is less than or equal to the right pointer
  while (left <= right) {
    // create a variable to store the middle pointer and pick the middle number
    let middle = Math.floor((left + right) / 2);
    // if the square of the middle pointer is less than or equal to x, if the middle number is too small
    if (middle * middle <= x) {
      // set the result to the middle pointer
      result = middle;
      // set the left pointer to the middle pointer plus 1 and search to the right
      left = middle + 1;
      // if the square of the middle pointer is greater than x, if the middle number is too big
    } else {
      // set the right pointer to the middle pointer minus 1 and search to the left
      right = middle - 1;
    }
  }
  // return the result, once there's nothing left to search for, we're done
  return result;
};

// Time Complexity: O(log n) because we use binary search
// Space Complexity: O(1) because we don't create any new data structures

// Another solution using binary search
var mySqrt3 = function (x: any) {
  // Check if x is 0 or 1, as the square root of 0 or 1 is the number itself.
  if (x <= 1) {
    return x;
  }

  // Set the left and right boundaries for the binary search.
  // We clearly don't need to consider any numbers larger than x / 2,
  // since x / 2 * x / 2 = x * x / 4 > x for x > 1.
  let left = 0;
  let right = x;

  // Loop until our pointers meet.
  while (left <= right) {
    // Compute the midpoint of our current search space.
    const mid = Math.floor((left + right) / 2);
    const midSquared = mid * mid;

    // If we've found the target at the midpoint, we're done.
    if (midSquared === x) {
      return mid;
    }

    // If x is less than the midpoint, search the space to the left.
    if (midSquared > x) {
      right = mid - 1;
    }

    // If x is greater than the midpoint, search the space to the right.
    if (midSquared < x) {
      left = mid + 1;
    }
  }

  // The loop terminated without finding an exact integer square root,
  // so return the integer part of the last mid.
  return Math.floor((left + right) / 2);
};

// Time Complexity: O(log n) because we use binary search
// Space Complexity: O(1) because we don't create any new data structures
