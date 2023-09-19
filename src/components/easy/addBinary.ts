// Add Binary
// https://leetcode.com/problems/add-binary/

// Given two binary strings a and b, return their sum as a binary
// string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// * 1 <= a.length, b.length <= 104
// * a and b consist only of '0' or '1' characters.
// * Each string does not contain leading zeros except
// for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * */

// solution using BigInt (Fast runtime and low memory usage)
var addBinary = function (a: any, b: any) {
  // convert the strings to BigInts because the numbers are too large
  // create a variable to store the first BigInt
  let num1 = BigInt("0b" + a);
  // create a variable to store the second BigInt
  let num2 = BigInt("0b" + b);
  // add the BigInts and store the result in a variable
  let sum = num1 + num2;
  // convert the sum to a string
  let result = sum.toString(2);
  // return the result
  return result;
};

// Time Complexity: O(n) because we loop through the array once
// Space Complexity: O(1) because we don't create any new data structures

// Tests cases
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
console.log(addBinary("1111", "1111")); // "11110"
console.log(addBinary("0", "0")); // "0"

// In this solution we are using BigInts because the numbers are too
// large to be represented by the number primitive. We are converting
// the strings to BigInts and then adding them.
// Finally, we are converting the sum to a string and returning it.

// BigInt values represent numeric values which are too large to be
// represented by the number primitive. A BigInt value, also sometimes
// just called a BigInt, is a bigint primitive, created by appending n
// to the end of an integer literal, or by calling the BigInt()
// function (without the new operator) and giving it an integer value
// or string value.

// Ex:
// const previouslyMaxSafeInteger = 9007199254740991n;

// const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

// Another solution using BigInts (Fast runtime and low memory usage)
var addBinary1 = function (a: any, b: any) {
  // Convert the input a and b into binary string.
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  // Add the two binary strings
  const sum = BigInt(aBin) + BigInt(bBin);
  // Convert the sum to a binary string and return it
  return sum.toString(2);
};

// Time Complexity: O(n) because we loop through the array once
// Space Complexity: O(1) because we don't create any new data structures

// Another solution using a loop (SLOW runtime and HIGH memory usage)
var addBinary2 = function (a: any, b: any) {
  // create a variable to store the result
  let result = "";
  // create a variable to store the carry
  let carry = 0;
  // loop through the strings starting from the end
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    // create a variable to store the sum
    let sum = carry;
    // if the first string has a 1 at the current index
    if (a[i] === "1") {
      // add 1 to the sum
      sum++;
    }
    // if the second string has a 1 at the current index
    if (b[j] === "1") {
      // add 1 to the sum
      sum++;
    }
    // if the sum is 2 or 3
    if (sum === 2 || sum === 3) {
      // set the carry to 1
      carry = 1;
      // if the sum is 0 or 1
    } else {
      // set the carry to 0
      carry = 0;
    }
    // if the sum is 1 or 3
    if (sum === 1 || sum === 3) {
      // add 1 to the result
      result = "1" + result;
      // if the sum is 0 or 2
    } else {
      // add 0 to the result
      result = "0" + result;
    }
  }
  // if the carry is 1
  if (carry === 1) {
    // add 1 to the result
    result = "1" + result;
  }
  // return the result
  return result;
};

// Time Complexity: O(n) because we loop through the array once
// Space Complexity: O(1) because we don't create any new data structures
