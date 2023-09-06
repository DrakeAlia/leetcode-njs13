// Remove Element
// https://leetcode.com/problems/remove-element/description/

// Given an integer array nums and an integer val, remove all
// occurrences of val in nums in-place. The order of the elements
// may be changed. Then return the number of elements in nums which
// are not equal to val.

// Consider the number of elements in nums which are not equal to
// val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums
// contain the elements which are not equal to val. The remaining
// elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first
// two elements of nums being 2.
// It does not matter what you leave beyond the returned k
// (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5,
// with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k
// (hence they are underscores).

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums: number[], val: number) {
  // k is the index of the next position to be filled
  let k = 0;
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // if the current element is not equal to the target
    if (nums[i] !== val) {
      // put the current element at index k
      nums[k] = nums[i];
      // increment k
      k++;
    }
  }
  // return k, which is the new length of the array
  return k;
};

// Test cases:

// Example 1
const nums1 = [3, 2, 2, 3];
const val1 = 3;
console.log(removeElement(nums1, val1)); // 2
console.log(nums1); // [2, 2, _, _]

// Example 2
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
console.log(removeElement(nums2, val2));
console.log(nums2);

// this function's time complexity: O(n) because we are using a for loop
// this function's space complexity: O(1) because we are not using any additional data structures
