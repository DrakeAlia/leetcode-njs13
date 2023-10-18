// Radix Sort:

// Implement a radix sort in a function called radixSort.
// You'll probably need several functions
// You can implement it using a binary or decimal based bucketing
// but I'd recommend the decimal based buckets because it ends
// up being a lot more simple to implement.

// number = 1391, place = 0, longestNumber = 4
// returns 1

function getDigit(number: any, place: any, longestNumber: any) {
  // turn number into string
  const string = number.toString();
  // get the size of the string
  const size = string.length;

  // get the mod of the longest number and the size of the string.
  const mod = longestNumber - size;
  // return the number at the place - mod
  return string[place - mod] || 0;
}

function getLongestNumber(array: any) {
  // set longest to 0
  let longest = 0;
  // loop through array and get the length of each number
  for (let i = 0; i < array.length; i++) {
    // if the current length is greater than longest
    const currentLength = array[i].toString().length;
    // set longest to current length if current length is greater than longest
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

// inital code here
function radixSort(array: any) {
  // find longest number
  const longestNumber = getLongestNumber(array);

  // create how many buckets you need an array of 10 arrays
  const buckets = new Array(10).fill().map(() => []);
  // loop through the array from the longest number to 0
  for (let i = longestNumber - 1; i >= 0; i--) {
    // loop through the array
    while (array.length) {
      // get the current number
      const current = array.shift();
      // push the current number into the bucket at the current digit
      buckets[getDigit(current, i, longestNumber)].push(current);
    }
    // loop through the buckets
    for (let j = 0; j < 10; j++) {
      // loop through the bucket at the current index
      while (buckets[j].length) {
        // push the shifted number into the array
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

// Time Complexity: O(nk) where n is the length of the array and k is the number of digits(average).
// This is because we have to loop through the array n times and then loop through each number k times.
// Space Complexity: O(n + k) because we are creating a new array of length n and a new array of length k

// Tests cases
// Example 1
// radixSort([8, 6, 1, 12]) // [1, 6, 8, 12]
// Example 2
// radixSort([10, 100, 1, 1000, 10000000]) // [1, 10, 100, 1000, 10000000]