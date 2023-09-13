// Palindrome Number:
// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same
// backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and
// from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121.
// From right to left,
// it becomes 121 -.Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it
// is not a palindrome.

// Constraints:

// -2^31 <= x <= 2^31 - 1
// Follow up: Could you solve it without converting the
// integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x: any) {
  // if x is negative, return false
  if (x < 0) {
    return false;
  }
  // if x is 0, return true
  if (x === 0) {
    return true;
  }
  // convert x to a string
  let stringNum = x.toString();
  // create a reversed string
  let reversedString = stringNum.split("").reverse().join("");
  // if the reversed string is equal to the original string
  if (reversedString === stringNum) {
    // return true
    return true;
  } else {
    // otherwise, return false
    return false;
  }
};

// Test Cases:
// Example 1
const x = 121;
console.log(isPalindrome(x)); // true

// Example 2
const x1 = -121;
console.log(isPalindrome(x1)); // false

// isPalindrome's time complexity: O(n) because we are using a for loop
// this function's space complexity: O(n) because we are using a reversed string

// copliot solution:
var isPalindrome2 = function (x: any) {
  // Convert the number to a string and store it in a variable
  let stringNum = x.toString();
  // Reverse the string using the split(), reverse(), and join() methods and store it in a new variable
  let reversedString = stringNum.split("").reverse().join("");
  // If the reversed string is equal to the original string, the number is a palindrome
  if (stringNum === reversedString) {
    return true;
  } else {
    return false;
  }
};

// this function's time complexity: O(n) because we are using a for loop
// this function's space complexity: O(n) because we are using a reversed string

// solve this function without converting the integer to a string(Best runtime and memory usage):
var isPalindrome3 = function (x: any) {
  // if x is negative, return false
  if (x < 0) {
    return false;
  }
  // if x is 0, return true
  if (x === 0) {
    return true;
  }
  // create a variable to hold the reversed number
  let reversedNum = 0;
  // create a variable to hold the original number
  let originalNum = x;
  // while x is greater than 0
  while (x > 0) {
    // multiply the reversed number by 10 and add the remainder of x divided by 10
    reversedNum = reversedNum * 10 + (x % 10);
    // divide x by 10
    x = Math.floor(x / 10);
  }
  // if the reversed number is equal to the original number
  if (reversedNum === originalNum) {
    // return true
    return true;
  }
  // otherwise, return false
  return false;
};

// isPalindrome3's time complexity: O(n) because we are using a while loop
// isPalindrome3's space complexity: O(1) because we are not using any additional data structures
