// Bubble Sort

// Write a bubble sort here
// Name the function bubbleSort
// Return the sorted array at the end

// Bubble sort works by comparing two adjacent numbers next to each other and then
// swapping their places if the smaller index's value is larger than the larger
// index's. Continue looping through until all values are in ascending order

function bubbleSort(nums: any) {
  // initialize swapped variable as false. This will be used to determine
  // if we have swapped any numbers.
  let swapped = false;
  // enter the do...while loop.
  do {
    // set swapped to false because we have not swapped any numbers yet.
    swapped = false;
    // iterate through the array, comparing each element to the next.
    for (let i = 0; i < nums.length; i++) {
      // if the current element is greater than the next element,
      // swap them and set swapped to true.
      if (nums[i] > nums[i + 1]) {
        // store the value of the current index.
        const temp = nums[i];

        // set the value of the current index to the value of the next
        // index
        nums[i] = nums[i + 1];

        // set the value of the next index to the value of the current
        // index
        nums[i + 1] = temp;

        // set swapped to true to indicate that a swap has occurred
        swapped = true;
      }
    }
    // if swapped is true, we will execute the loop again.
  } while (swapped);
  // return the sorted array after all swaps have been made.
  return nums;
}

// Time Complexity: O(n^2) because we have a nested loop and we are iterating through the array twice
// Space Complexity: O(1) because we are not using any additional data
// structures

// Test cases:
// const nums = [5, 4, 3, 2, 1];
// console.log(bubbleSort2(nums)); // [1, 2, 3, 4, 5]

// 1. We have a do-while loop. This means that we will execute the code
// inside the loop at least once and then check the condition. As long
// as the condition is true, we will execute the code inside the loop
// again and again. So we will swap the numbers as long as we have to.
// We will set a flag to false and then change it to true if we swap
// two numbers. At the end of the loop, we will check if the flag is true.
// If it is, we will execute the loop again. If it is not, we will exit
// the loop. So we will execute the loop as long as we have swapped two
// numbers.

// 2. We will iterate through the array and compare each number with the
// number that follows it. If the first number is greater than the second
// number, we will swap them.

// 3. After swapping the numbers, we will set the flag to true, so that
// the loop will execute again.

// 4. At the end of the loop, we will check if the flag is true.
// If it is true, we will execute the loop again. If it is not true,
// we will exit the loop.

// 5. We will return the array.
