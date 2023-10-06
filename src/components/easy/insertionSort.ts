// Insertion Sort

/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
*/


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

// Time Complexity: O(n^2) because we have a nested loop
// Space Complexity: O(1) because we are not using any additional data

// Test cases:
// Example 1
// const nums = [5, 4, 3, 2, 1];
// console.log(insertionSort(nums)); // [1, 2, 3, 4, 5]

// Example 2
// const nums2 = [4, 3, 1, 2, 5];
// console.log(insertionSort(nums2)); // [1, 2, 3, 4, 5]

// We have a for loop that starts at 1 because we assume that the first
// element is already sorted. We create a variable called numberToInsert
// that will store the number we're looking to insert. We create a variable
// called j that will be used to iterate through the sorted part of the
// array. We loop from the right to the left, moving numbers to the right
// until we find where to insert. We do the insertion and return the sorted
// array.


// Another solution:
function insertionSort2(nums: any) {
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // store the current value
        const value = nums[i];
        // store the current index
        let index = i;
        // while the current index is greater than 0 and the value of the
        // previous index is greater than the current value, swap the
        // values and decrement the index
        while (index > 0 && nums[index - 1] > value) {
        nums[index] = nums[index - 1];
        index--;
        }
        // set the value at the current index to the current value
        nums[index] = value;
    }
    // return the sorted array
    return nums;
}

// Time Complexity: O(n^2) because we have a nested loop
// Space Complexity: O(1) because we are not using any additional data