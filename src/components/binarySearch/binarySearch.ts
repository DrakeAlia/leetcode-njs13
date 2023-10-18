// Binary Search

// For both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're
// looking for

// it's up to you what to return if the object isn't found (we're not testing that)

// linear search works regardless of whether the array is sorted or not

function linearSearch(id: any, array: any) {
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // if the current id is equal to the id we're looking for
    if (id === array[i].id) {
      // return the current object
      return array[i];
    }
  }
  // if we get here, we didn't find the element so return undefined
  return void 0;
}

// Time Complexity: O(n) where n is the length of the array because we have to loop through the array once.
// Space Complexity: O(1) because we're not creating any new data structures.

// binary search is a lot more complicated than linear search
// it's also a lot more efficient but it only works
// if the array is sorted

function binarySearch(id: any, array: any) {
  // set min to 0
  let min = 0;
  // set max to the length of the array - 1
  let max = array.length - 1;
  // set index to the middle index of the array
  let index;
  // set element to the element at the middle index of the array
  let element;

  //   while min is less than or equal to max
  while (min <= max) {
    // set index to the middle index of the array
    index = Math.floor((min + max) / 2);
    // set element to the element at the middle index of the array
    element = array[index];
    // if the element's id is less than the id we're looking for
    if (element.id < id) {
      // set min to index + 1 because we know the element we're looking for is greater than the current element
      min = index + 1;
      // if the element's id is greater than the id we're looking for
    } else if (element.id > id) {
      // set max to index - 1 because we know the element we're looking for is less than the current element
      max = index - 1;
      //   otherwise the element's id is equal to the id we're looking for so return the element
    } else {
      return element;
    }
  }
  //   if we get here, we didn't find the element so return undefined
  return void 0;
}

// Time Complexity: O(log n) where n is the length of the array because we're cutting the array in half each time.
// Space Complexity: O(1) because we're not creating any new data structures.

// Tests cases:
// Example 1
// const array = [{id: 1, name: 'joe'}, {id: 2, name: 'jane'}, {id: 3, name: 'sally'}]
// linearSearch(2, array) // {id: 2, name: 'jane'}
// binarySearch(2, array) // {id: 2, name: 'jane'}
// Example 2
// const array = [{id: 1, name: 'joe'}, {id: 2, name: 'jane'}, {id: 3, name: 'sally'}]
// linearSearch(4, array) // undefined
// binarySearch(4, array) // undefined
