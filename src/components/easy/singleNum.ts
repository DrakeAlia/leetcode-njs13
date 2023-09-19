// Single Number
// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.
// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// * 1 <= nums.length <= 3 * 104
// * -3 * 104 <= nums[i] <= 3 * 104
// * Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */

// solution with a linear runtime complexity and constant extra space
var singleNumber = function (nums: any) {
  // create a variable to store the result
  let result = 0;
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Bitwise XOR operator (^) returns a 1 in each bit position for which
    // the corresponding bits of either but not both operands are 1s.
    // if the result is 0, it means that the current element is repeated
    // if the result is not 0, it means that the current element is not repeated
    result ^= nums[i];
  }
  // return the result
  return result;
};

// Time Complexity: O(n) because we loop through the array once
// Space Complexity: O(1) because we don't create any new data structures

// Tests cases:
// console.log(singleNumber([2, 2, 1])); // 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // 4
// console.log(singleNumber([1])); // 1
// console.log(singleNumber([1, 2, 3, 4, 5, 1, 2, 3, 4])); // 5

// The bitwise XOR (^) operator returns a number or BigInt whose binary
// representation has a 1 in each bit position for which the
// corresponding bits of either but not both operands are 1.
