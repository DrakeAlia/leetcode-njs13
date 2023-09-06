// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different 
// day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

var maxProfit = function(prices: any) {
    // Initialize the minimum buy price to the first price in the array
    let minBuyPrice = prices[0];
    // Initialize the maximum profit to 0
    let maxProfitSoFar = 0;

    // Loop through the array of prices starting with the second price
    for (let i = 1; i < prices.length; i++) {
      // Get the current price
      const currentPrice = prices[i];
      // Update the minimum buy price if the current price is lower
      minBuyPrice = Math.min(minBuyPrice, currentPrice);
      // If the current price is the same as the minimum buy price, skip the rest of the loop
      if (currentPrice === minBuyPrice) continue;
      // Calculate the current profit
      const currentProfit = currentPrice - minBuyPrice;
      // Update the maximum profit if the current profit is higher
      maxProfitSoFar = Math.max(maxProfitSoFar, currentProfit);
    }

    return maxProfitSoFar;
}

// Test cases:

// Example 1
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // 5

// Example 2
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // 0

// Example 3
const prices3 = [1, 2];
console.log(maxProfit(prices3)); // 1


// this function's time complexity: O(n) because we are using a for loop 
// this function's space complexity: O(1) because we are not using any additional data structures