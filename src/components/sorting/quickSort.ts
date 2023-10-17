// Quick Sort

// Name your function quickSort.

// Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
// into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
// lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
// list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
// is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

function quickSort(nums: number[]) {
  // base case, array of length 0 or 1
  if (nums.length <= 1) {
    return nums;
  }
  // choose a pivot(in this case, the last element in the array)
  const pivot = nums[nums.length - 1];

  // separate into left and right arrays
  const left = [];
  const right = [];

  // iterate through the array, comparing each element to the pivot
  for (let i = 0; i < nums.length - 1; i++) {
    // if the element is less than the pivot, push it into the left array
    if (nums[i] < pivot) {
      left.push(nums[i]);
      // if the element is greater than or equal to the pivot, push it into the right array
    } else {
      right.push(nums[i]);
    }
  }

  // call quickSort on left and right arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // return the left array concatenated with the pivot and then the right array
  return sortedLeft.concat(pivot, sortedRight);
}

// Time Complexity: O(n log n) because we are splitting the array in half and then merging them
// back together
// Space Complexity: O(n) because we are creating a new array to store the sorted elements

// Test cases:
// Example 1
// const nums = [5, 4, 3, 2, 1];
// console.log(quickSort(nums)); // [1, 2, 3, 4, 5]

// unit tests
// do not modify the below code
// test("quickSort", function () {
//   const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
//   const answer = quickSort(input);

//   expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// });
