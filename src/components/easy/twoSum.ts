// Two Sum:
// Link: https://leetcode.com/problems/two-sum/description/

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

};















// copliot solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums: any, target: any) {
  // Create a new map to store the numbers and their indices
  const map = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Find the complement of the current number
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.has(complement)) {
      console.log(map.get(complement), i);
      // If it does, return the indices of the two numbers
      return [map.get(complement), i];
    }

    // If the complement doesn't exist in the map,
    // add the current number and its index to the map
    map.set(nums[i], i);
  }
};
twoSum2([2, 7, 11, 15], 9);

// GOAL:
// 1. iterate over each of the  elements in our array
// with a loop

// 2. create another loop to look for the value that is
// equal to our target if we sum both numbers

// 3. return the indices in our empty output array
// (i = first pointer & j = second poitner)

// var twoSum = function (nums: string | any[], target: number) {
// 1.
// for (let i = 0; i < nums.length; i++) {
// 2.
// for (let j = i + 1; j < nums.length; j++) {
//   if (nums[i] + nums[j] === target) {
// -> console.log(nums[i, j]) *incorrect console.log postion
// console.log([i, j]);
// 3.
//         return [i, j];
//       }
//     }
//   }
// };
// twoSum([2, 7, 11, 15], 9);

// test case:
// nums = [2,7,11,15]
// target = 9

// nums = [3,2,4]
// target = 6

// nums = [3,3]
// target = 6
