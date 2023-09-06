// Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// This solution uses a for loop
var searchInsert = function(nums: any, target: any) {
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // if the current element is equal to the target
        if (nums[i] === target) {
        // return the index of the current element
        return i;
        }
        // if the current element is greater than the target
        if (nums[i] > target) {
        // return the index of the current element
        return i;
        }
    }
    // otherwise, return the length of the array
    return nums.length;
};

// this function's time complexity is O(n) because we are using a for loop
// this function's space complexity is O(1) because we are not using any additional data structures

// Test cases:
const numsPositon = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(numsPositon, target1)); // 2


// This solution uses binary search
var searchInsert2 = function(nums: any, target: any) {
    // set the start to 0
    let start = 0;
    // set the end to the length of the array minus 1
    let end = nums.length - 1;
    // while the start is less than or equal to the end
    while (start <= end) {
        // set the middle to the start plus the end divided by 2
        let middle = Math.floor((start + end) / 2);
        // if the middle is equal to the target
        if (nums[middle] === target) {
        // return the middle
        return middle;
        }
        // if the middle is greater than the target
        if (nums[middle] > target) {
        // set the end to the middle minus 1
        end = middle - 1;
        // otherwise
        } else {
        // set the start to the middle plus 1
        start = middle + 1;
        }
    }
    // return the start
    return start;
}

// this function's time complexity is O(log n) because we are using binary search
// this function's space complexity is O(1) because we are not using any additional data structures


