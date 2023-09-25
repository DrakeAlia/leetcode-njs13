// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can
// you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// * 1 <= n <= 45

// Fibonacci sequence is a series of numbers in which each numbers
// is the sum of the two that precede it. Starting at 0 and 1,
// the first 10 numbers of the sequence look
// like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 and so on forever.
// The fibonacci sequence can be described using a mathematical
// equation: Xn + 2 = Xn + 1 + Xn

/**
 * @param {number} n
 * @return {number}
 */

// This is a fibonacci sequence problem (Best way to solve this problem. Runtime is faster and memory is less)
var climbStairs = function (n: any) {
  // if n is less than or equal to 2, return n
  if (n <= 2) {
    return n;
    // This is because if n is 1, there is only 1 way to climb the
    // stairs. If n is 2, there are 2 ways to climb the stairs.
  }
  // create 3 variables
  let a = 1;
  let b = 2;
  // Temp will be used to store the values of a and b
  let temp = 0;
  // create a for loop that starts at 3 and goes up to n,
  // this is because we already know the answer for n = 1 and n = 2.
  for (let i = 3; i <= n; i++) {
    // temp is equal to a + b, the reason why we are using temp is
    // because we will be changing the values of a and b in the
    // next step.
    temp = a + b;
    // a is equal to b, this is because a will be the previous b value.
    a = b;
    // b is equal to temp, this is because b will be the previous temp value.
    b = temp;
  }
  // return b, this is because b will be the final value for
  // the number of ways to climb the stairs.
  return b;
};

// Time Complexity: O(n) because we have a for loop that runs n times
// Space Complexity: O(1) because we only have 3 variables that are constant

// Tests cases:
console.log(climbStairs(2)); // [1, 2]
console.log(climbStairs(3)); // [1, 2, 3]
console.log(climbStairs(4)); // [1, 2, 3, 5]
console.log(climbStairs(5)); // [1, 2, 3, 5, 8]
console.log(climbStairs(6)); // [1, 2, 3, 5, 8, 13]
console.log(climbStairs(7)); // [1, 2, 3, 5, 8, 13, 21]
console.log(climbStairs(8)); // [1, 2, 3, 5, 8, 13, 21, 34]
console.log(climbStairs(9)); // [1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(climbStairs(10)); // [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Another way to solve this problem using dynamic programming
var climbStairs2 = function (n: any) {
  // create a variable called dp and set it equal to an empty array
  // let dp = [];
  // // create a for loop that starts at 0 and goes up to n
  // for (let i = 0; i <= n; i++) {
  //     // if i is less than or equal to 2, push i into dp
  //     if (i <= 2) {
  //         dp.push(i);
  //     } else {
  //         // else push dp[i - 1] + dp[i - 2] into dp
  //         dp.push(dp[i - 1] + dp[i - 2]);
  //     }
  // }
  // // return dp[n]
  // return dp[n];
};

// Time Complexity: O(n) because we have a for loop that runs n times
// Space Complexity: O(n) because we have an array that is size n
