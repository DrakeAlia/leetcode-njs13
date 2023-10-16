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


// create a mergeSort function
const mergeSort = (nums: any) => {
  // if the array is less than 2 elements long, return it
  if (nums.length < 2) {
    return nums;
  }

  // find the middle of the array
  const length = nums.length;
  const middle = Math.floor(length / 2);

  // slice the array into left and right halves
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // sort the left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge the sorted halves
  return merge(sortedLeft, sortedRight);
};

// create a merge function
const merge = (left: any[], right: any[]) => {
  // create an empty array to store the results
  const results = [];

  // while both left and right arrays have elements in them
  while (left.length && right.length) {
    // if the first element of the left array is smaller or equal to the first element of the right array
    if (left[0] <= right[0]) {
      // push the first element of the left array into the results array
      results.push(left.shift());
    } else {
      // otherwise, push the first element of the right array into the results array
      results.push(right.shift());
    }
  }

  // return the results array concatenated with the left and right arrays
  return results.concat(left, right);
};