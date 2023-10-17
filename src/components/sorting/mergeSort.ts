// Merge Sort

// Write a function that performs mergesort
// Name the function mergeSort
// It will take in a array of numbers and return a sorted array numbers
// You'll need to write more than just one function!!!!

const mergeSort = (nums: any) => {
  // base case, return if length is 1 or 0
  if (nums.length < 2) {
    return nums;
  }

  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle); // slice will return a sub array(smaller left array), from 0 to middle array
  const right = nums.slice(middle); // if we give it middle, it will automatically go to the end of the array

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left); // this will return a sorted array
  const sortedRight = mergeSort(right);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

// Remember that left and right are already sorted, merge will not work if they are not sorted

const merge = (left: any[], right: any[]) => {
  const results = [];

  // while there are still elements in both arrays,
  // either left is going to be empty or right is going to be empty first
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift()); // put on the end the front of the left array
    } else {
      results.push(right.shift()); // put on the end the front of the right array
    }
  }
  // return the merged array
  return results.concat(left, right); // concat will take the remaining elements and put them on the end
};

// Time Complexity: O(n log n) because we are splitting the array in half and then merging them
// back together
// Space Complexity: O(n) because we are creating a new array to store the sorted elements

// Test cases:
// Example 1
// const nums = [5, 4, 3, 2, 1];
// console.log(mergeSort(nums)); // [1, 2, 3, 4, 5]

// unit tests
// do not modify the below code
// test("merge sort", function () {
//   const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
//   const ans = mergeSort(nums);
//   expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// });

// Steps:
// 1. We have a function called mergeSort that takes in an array of numbers.
// 2. If the length of the array is less than 2, we will return the array.
// 3. Otherwise, we will break the array into two smaller arrays.
// 4. We will call mergeSort on the two smaller arrays.
// 5. We will return the result of calling the merge function on the two
// smaller arrays.
// 6. The merge function takes in two arrays.
// 7. We will create an empty array called results.
// 8. While there are still elements in both arrays, we will compare the
// first element of each array.
// 9. If the first element of the left array is less than or equal to the
// first element of the right array, we will remove the first element of
// the left array and push it onto the results array.
// 10. Otherwise, we will remove the first element of the right array and
// push it onto the results array.
// 11. We will return the results array concatenated with the left array
// and the right array.
// 12. We will return the sorted array.
