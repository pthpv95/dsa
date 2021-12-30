/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let minPrice = Number.MAX_VALUE
  // let maxProfit = 0
  // for (let i = 0; i < prices.length; i++) {
  //   if (prices[i] < minPrice) {
  //     minPrice = prices[i]
  //   } 

  //   // if it not min value then calculate the maximum profit
  //   else if (prices[i] - minPrice > maxProfit) {
  //     console.log(minPrice);
  //     maxProfit = prices[i] - minPrice
  //   }
  // }
  // return maxProfit;

  let l = 0, r = 1, maxProfit = 0
  while (l < prices.length) {
    if (prices[l] < prices[r]) {
      maxProfit = Math.max(maxProfit, prices[r] - prices[l])
    } else {
      l = r
    }
    r++
  }
  return maxProfit
};


console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]));
// [7,1,5,3,6,4] // 7 -> 1
// [2,1,4]
// [3,4,1]
// [3,2,6,5,0,3]
// [1,2,4]