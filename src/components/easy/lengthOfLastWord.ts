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
        if (s[i] !== ' ') {
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
