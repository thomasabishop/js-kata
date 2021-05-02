/*
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
 *
 * Example: prices = [7,1,5,3,6,4]
 * Highest output = 5
 * Buy on day [2] (value=1), sell on day [5] (value = 6)
 */

function stockOptions(arr) {
  let highest = Math.max(...arr);
  let lowest = Math.min(...arr);
  const store = [];

  return lowest;
}

const test = [7, 1, 5, 3, 6, 4];

console.log(stockOptions(test));
