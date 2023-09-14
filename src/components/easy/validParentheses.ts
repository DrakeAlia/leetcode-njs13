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

// Time: O(n) because we loop through the string once and the stack once
// Space: O(n) because we create a stack and a map that are both the size of the string

// Test cases
const s1 = "()";
console.log(isValid(s1)); // true


// Another solution:
var isValid2 = function (s: string | any[]) {

}
