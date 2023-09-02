// Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// Given two strings needle and haystack, return the index of the first
// occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack: any, needle: any) {
  // if needle is empty, return 0
  if (needle === "") {
    return 0;
  }
  // if haystack is empty, return -1
  if (haystack === "") {
    return -1;
  }
  // otherwise, return the index of needle in haystack
  return haystack.indexOf(needle);
};

// time complexity: O(n) because of the indexOf method
// space complexity: O(1) because we are not creating any new data structures

var strStr2 = function (haystack: any, needle: any) {
  return haystack.indexOf(needle);
};

// time complexity: O(n) because of the indexOf method
// space complexity: O(1) because we are not creating any new data structures

var strStr3 = function (haystack: any, needle: any) {
  let pointer = 0;
  for (let i = 0; i < haystack.length; i++) {
    // If the character in haystack does not equal the character in needle at the current pointer
    if (haystack[i] !== needle[pointer]) {
      // Reset the index of haystack to the index of haystack minus the current pointer
      i = i - pointer;
      pointer = 0;
    }
    // If the pointer is at the end of needle
    else if (pointer === needle.length - 1)
      // Return the index of the start of the needle in haystack
      return i - pointer;
    // Increase the pointer
    else pointer++;
  }
  // Return -1 if the needle is not in the haystack
  return -1;
};

// const result = strStr3("sadbutsad", "sad");
// console.log("Expected output: ", 0);
// console.log("result:", result);

// const result2 = strStr3("leetcode", "leeto");
// console.log("Expected output: ", -1);
// console.log("result2:", result2);

// const result3 = strStr3("dinosaur", "saur");
// console.log("Expected output: ", 4);
// console.log("result3:", result3);

// time complexity: O(n) because of the for loop
// space complexity: O(1) because we are not creating any new data structures
