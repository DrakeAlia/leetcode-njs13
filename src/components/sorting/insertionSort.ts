// Insertion sort

// Be sure to call your function insertionSort!

// The idea here is that the beginning of your list is sorted and the everything else is assumed
// to be an unsorted mess.
// The outer loop goes over the whole list, the index of which signifies where the "sorted"
// part of the list is. The inner
// loop goes over the sorted part of the list and inserts it into the correct position in the
// array.

// Like bubble sort, there's a visualization mechanism available to you.
// Just call snapshot(myArray) at the beginning of
// your inner loop and it should handle the rest for you!

// And you put xdescribe instead of describe if you want to suspend running the unit tests.

function insertionSort(nums: any) {
  // We start a for loop with the variable i equal to 1.
  for (let i = 1; i < nums.length; i++) {
    // the numberToInsert number we're looking to insert
    let numberToInsert = nums[i];
    // the inner counter
    let j;

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }
    // do the insertion
    nums[j + 1] = numberToInsert;
  }
  // return the sorted array
  return nums;
}

// Time Complexity: O(n^2) because we have a nested loop because we have a nested loop
// Space Complexity: O(1) because we are not using any additional data

// Test cases:
// Example 1
// const nums = [5, 4, 3, 2, 1];
// console.log(insertionSort(nums)); // [1, 2, 3, 4, 5]
// Example 2
// const nums2 = [4, 3, 1, 2, 5];
// console.log(insertionSort(nums2)); // [1, 2, 3, 4, 5]

// unit tests
// do not modify the below code
// test("insertion sort", function () {
//   const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
//   insertionSort(nums);
//   expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// });

// Steps:
// 1. We start a for loop with the variable i equal to 1.
// 2. We set the numberToInsert variable to the value of the current index.
// 3. We set the inner counter to the value of the current index minus 1.
// 4. We enter a while loop. We will continue to iterate through the array
// until we reach the end of the array or until the number at the current
// index is less than the number at the previous index.
// 5. We set the number at the current index to the number at the previous
// index.
// 6. We decrement the inner counter.
// 7. We exit the while loop.
// 8. We set the number at the previous index plus 1 to the numberToInsert
// variable.
// 9. We increment the outer counter.
// 10. We exit the for loop.
// 11. We return the sorted array.
