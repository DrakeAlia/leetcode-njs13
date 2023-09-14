// Two Sum:
// https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Explanation: Can't use the same element twice, so we can't say 3 and 3.
// We have to use 2 and 4, those indices are 1 and 2

// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Follow - up: Can you come up with an algorithm that is less than O(n2)
// time complexity ?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums: any, target: any) {
  // create an empty output array
  let output = [];
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // iterate through the array again
    for (let j = i + 1; j < nums.length; j++) {
      // if the sum of the current element and the next element is equal to the target
      if (nums[i] + nums[j] === target) {
        // push the indices of the two numbers into the output array
        output.push(i, j);
      }
    }
  }
  // return the output array
  return output;
};

// Test cases:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0, 1]

// this function's time complexity: O(n^2) because we are using two for loops
// this function's space complexity: O(n) because we are using an output array

// Create a function that is less than O(n2) time complexity
var twoSum2 = function (nums: any, target: any) {
  // create a map to store the numbers and their indices
  const map = new Map();
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // find the complement of the current number
    const complement = target - nums[i];
    // check if the complement exists in the map
    if (map.has(complement)) {
      console.log(map.get(complement), i);
      // if it does, return the indices of the two numbers
      return [map.get(complement), i];
    }
    // if the complement doesn't exist in the map, add the current number and its index to the map
    map.set(nums[i], i);
  }
};

// this function's time complexity: O(n) because we are using one for loop
// this function's space complexity: O(n) because we are using a map
