// Merge Sorted Array

// You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers
// m and n, representing the number of elements in
// nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by
// the function, but instead be stored inside the
// array nums1. To accommodate this, nums1 has a
// length of m + n, where the first m elements denote
// the elements that should be merged, and the last n
// elements are set to 0 and should be ignored.
// nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6],
// n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3]
// and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the
// underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1]
// and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in
// nums1. The 0 is only there to ensure the merge
// result can fit in nums1.

// Constraints:
// nums1.length == m + n;
// nums2.length == n;
// 0 <= m, n <= 200;
// 1 <= m + n <= 200 - 109 <= nums1[i], nums2[j] <= 109;

// Follow up: Can you come up with an algorithm that
// runs in O(m + n) time?

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// var merge = function(nums1, m, nums2, n)

// algorithm that runs in O(m + n) time is to use two pointers (Fast runtime)
var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
  // create a variable to hold the index of the last element in nums1
  let index = m + n - 1;
  // decrement the index of nums1 and nums2
  m--;
  n--;
  // loop while the index of nums1 is greater than or equal to 0
  while (index >= 0) {
    // if the index of nums2 is less than 0 or the current element of nums1 is greater than the current element of nums2
    if (n < 0 || nums1[m] > nums2[n]) {
      // set the current element of nums1 to the current element of nums1
      nums1[index] = nums1[m];
      // decrement the index of nums1
      m--;
      // otherwise
    } else {
      // set the current element of nums1 to the current element of nums2
      nums1[index] = nums2[n];
      // decrement the index of nums2
      n--;
    }
    // decrement the index of nums1
    index--;
  }
  // return nums1
  return nums1;
};

// Time Complexity: O(m + n) because we are looping through both arrays
// Space Complexity: O(1) because we are not creating any new data structures

// Test cases:
// const nums1 = [1,2,3,0,0,0];
// const m = 3;
// const nums2 = [2,5,6];
// const n = 3;
// console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]

// Another solution(Fast runtime and low memory usage)
var merge2 = function (nums1: number[], m: number, nums2: number[], n: number) {
  // The first step is to move backwards from the end of both arrays.

  // create a variable to hold the index of the last element in nums1
  let i = m - 1;
  // create a variable to hold the index of the last element in nums2
  let j = n - 1;
  // create a variable to hold the the index of the last element in the merged array
  let k = m + n - 1;

  // Start from the end of the two arrays
  // and move backwards
  // while loop will stop when i is less than 0 or j is less than 0
  while (i >= 0 && j >= 0) {
    // If the element in nums1 is greater than
    // the element in nums2, move it to the end of
    // the array
    if (nums1[i] > nums2[j]) {
      // set the current element of nums1 to the current element of nums1
      nums1[k] = nums1[i];
      // decrement the index of nums1
      k--;
      // decrement the index of nums1
      i--;
      // Otherwise, move the element in nums2 to the end
      // of the array
    } else {
      // set the current element of nums1 to the current element of nums2
      nums1[k] = nums2[j];
      // decrement the index of nums1
      k--;
      // decrement the index of nums2
      j--;
    }
  }
  // If we still have elements in nums2, move them to
  // the end of the array
  // while loop will stop when j is less than 0
  while (j >= 0) {
    // set the current element of nums1 to the current element of nums2
    nums1[k] = nums2[j];
    // decrement the index of nums1
    k--;
    // decrement the index of nums2
    j--;
  }
};

// Time Complexity: O(m + n) because we are looping through both arrays
// Space Complexity: O(1) because we are not creating any new data structures
