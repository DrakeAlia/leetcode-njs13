// Palindrome Number:
// Link: https://leetcode.com/problems/palindrome-number/

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
// integer to a string ?





// copliot solution:
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x: number) {
//   0(n) time | 0(n) space
    // check if number is negative
    if (x < 0) return false;
    // initialize reversed number
    let reversed = 0;
    // initialize number
    let num = x;
    // loop through number
    while (num > 0) {
        // multiply reversed by 10 and add remainder of num
        reversed = reversed * 10 + (num % 10);
        // divide num by 10 and round down
        num = Math.floor(num / 10);
    }
    // return boolean if reversed is strictly equal to number
    return reversed === x;
};
