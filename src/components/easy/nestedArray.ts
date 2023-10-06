// Nested Array

// Write a function that accepts an array that only contains
// two types of things: numbers and arrays. those nested arrays
// also only contain numbers and other, nested arrays.

// Example:
// nestedAdd([1, 2, [3]]) = 6
// nestedAdd([[[2]], 1, [1, 3]]) = 7

function nestedAdd(array: any) {
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // if the current element is an array,
    // call the function recursively
    if (Array.isArray(array[i])) {
      array[i] = nestedAdd(array[i]);
    }
  }
  // return the sum of the array
  return array;
}

// Time Complexity: O(n) because we are iterating through the array
// Space Complexity: O(n) because we are creating new arrays

// Test cases:
// Example 1:
// const array = [1, 2, [3]];
// console.log(nestedAdd(array)); // 6

// Example 2:
// const array2 = [[[2]], 1, [1, 3]];
// console.log(nestedAdd(array2)); // 7

// Example 3:
// const array3 = [1, 2, [3, [4]]];
// console.log(nestedAdd(array3)); // 10

// Another solution:
function nestedAdd2(array: any) {
  // create a variable to store the sum
  let sum = 0;
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // if the current element is an array,
    // call the function recursively
    // const current = array[i];
    if (Array.isArray(array[i])) {
      // add the sum of the nested array to the sum
      sum += nestedAdd2(array[i]);
      // Otherwise, add the current element to the sum
    } else {
      sum += array[i];
    }
  }
  // return the sum
  return sum;
}

// Time Complexity: O(n) because we are iterating through the array
// Space Complexity: O(1) because we are not creating any new arrays
