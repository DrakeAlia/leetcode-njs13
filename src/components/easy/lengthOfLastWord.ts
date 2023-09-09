// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s: any) {
  // create a variable to hold the length of the last word
  let lastWord = 0;
  // iterate through the string backwards
  for (let i = s.length - 1; i >= 0; i--) {
    // if the current element is not a space
    if (s[i] !== " ") {
      console.log(s[i]);
      // increment the length of the last word
      lastWord++;
      // if the current element is a space
    } else {
      console.log(s[i]);
      // and the length of the last word is greater than 0
      if (lastWord > 0) {
        // return the length of the last word
        return lastWord;
      }
    }
  }
  console.log(lastWord);
  // return the length of the last word
  return lastWord;
};

// this function's time complexity is O(n) because we are using a for loop
// this function's space complexity is O(1) because we are not using any additional data structures

// Test cases:
const s = "Hello World";
console.log(lengthOfLastWord(s)); // 5

// Using built-in method but not recommended
var lengthOfLastWord2 = function (s2: any) {
  return s2.trim().split(" ").pop().length;
};

// this function's time complexity is O(n) because we are using a for loop
// this function's space complexity is O(1) because we are not using any additional data structures

// using two while loops
var lengthOfLastWord3 = function (s3: any) {
  let i = s3.length - 1; // i is the index of the last character in s3
  let length = 0; // length is the length of the last word in s3
  // remove the trailing spaces
  while (i >= 0) {
    if (s3[i] != " ") {
      // starting at index i, count the number of characters in the last word
      while (i >= 0 && s3[i] != " ") {
        length += 1;
        i -= 1;
      }
      // return the length of the last word
      return length;
    }
    // skip all of the trailing spaces
    i -= 1;
  }
};

// this function's time complexity is O(n) because we are using a for loop
// this function's space complexity is O(1) because we are not using any additional data structures

// using one while loop
var lengthOfLastWord4 = function (s4: any) {
  // set i to the last character in the string
  let i = s4.length - 1;
  // set letter count to 0
  let letterCount = 0;
  // while i is greater than or equal to 0...
  while (i >= 0) {
    // if the character at the index i is not a space...
    if (s4[i] !== " ") {
      // increment letterCount
      letterCount++;
      // otherwise, if letterCount is greater than 0...
    } else if (letterCount > 0) {
      // return letterCount
      return letterCount;
    }
    // decrement i
    i--;
  }
  return letterCount;
};

// this function's time complexity is O(n) because we are a while loop
// this function's space complexity is O(1) because we are not using any additional data structures
