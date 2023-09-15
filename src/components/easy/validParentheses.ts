// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

// This soluton uses a stack and a map to check if the string is valid
var isValid = function (s: string): boolean {
  // create a stack
  let stack = [];
  //   create a map of the valid parentheses pairs
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if the current element is an open parentheses
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      // push the current element to the stack
      stack.push(s[i]);
      // if the current element is a closing parentheses
    } else {
      // create a variable that holds the last element in the stack and remove it from the stack
      let lastElement = stack.pop();
      // if the current element is not equal to the last element in the stack
      if (s[i] !== map[lastElement]) {
        // return false
        return false;
      }
    }
  }
  // if the stack is not empty
  if (stack.length !== 0) {
    return false;
  }
  //   otherwise return true
  return true;
};

// Test cases
const result = isValid("()");
console.log("Expected result: ", true);
console.log("result:", result);

const result2 = isValid("()[]{}");
console.log("Expected result: ", true);
console.log("result:", result2);

const result3 = isValid("(]");
console.log("Expected result: ", false);
console.log("result:", result3);

// Time: O(n) because we loop through the string once and the stack once
// Space: O(n) because we create a stack and a map that are both the size of the string

// Another solution:
var isValid2 = function (s: string | any[]) {
  // create a map of the valid parentheses pairs
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // Create a stack with a empty array as its value
  const stack = [];
  // Create a for loop, initialize the index with a value of zero,
  // check if the index is less than the length of our string,
  // and increment index by one once the code block finishes executing
  for (let i = 0; i < s.length; i++) {
    // Store the current character in a variabl
    const char = s[i];
    // Our if condition is going to check if the key value pair exists
    if (map[char]) {
      // If it does we going to push the value to our stack
      stack.push(map[char]);
      // else if the current character does not equal the element that we pop off our stack,
    } else if (char !== stack.pop()) {
      // We return false
      return false;
    }
  }
  // Once we exit our for loop, we going to check if the stack length is
  // zero because if we have a empty stack that means were have a valid
  // input string so we return it
  stack.length === 0;
};

// Time: O(n) because we loop through the string once and the stack once
// Space: O(n) because we create a stack and a map that are both the size of the string