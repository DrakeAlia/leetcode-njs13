// Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// * 1 <= nums.length <= 105
// * -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution using a set (hash table) and a loop (Fast runtime and low memory usage)
var containsDuplicate = function (nums: any) {
  // Set object lets you store unique values of any
  // type, whether primitive values or object references.
  // create a set to store the elements of the array
  let set = new Set();
  // loop through the array and check if the set has the current element.
  for (let i = 0; i < nums.length; i++) {
    // if the set has the current element
    if (set.has(nums[i])) {
      // return true because it means that the array has a duplicate
      return true;
      // if the set doesn't have the current element
    } else {
      // add the current element to the set because
      set.add(nums[i]);
    }
  }
  // return false because it means that the array doesn't have a duplicate
  return false;
};

// Time Complexity: O(n) because we loop through the array once
// Space Complexity: O(n) because we create a set to store the elements of the array

// Tests cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

// Alternative solution using a loop and sorting the array (Slow runtime)
var containsDuplicate2 = function (nums: any) {
  // The sort() method sorts the elements of an array
  // in place and returns the sorted array.
  // sort the array
  nums.sort((a: any, b: any) => a - b);
  // iterate over the sorted array
  for (let i = 0; i < nums.length; i++) {
    // if the current element is equal to the next element
    if (nums[i] === nums[i + 1]) {
      // return true
      return true;
    }
  }
  // return false
  return false;
};

// Time Complexity: O(n log n) because we sort the array
// Space Complexity: O(1) because we don't create any additional data structures
