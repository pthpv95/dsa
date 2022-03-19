// 
var coinChange = (coins, amount) => {
  if (amount < 1) {
    return 0
  }

  return coinChange(coins, amount, new Array(amount))

  // return res when it hits 0
  function coinChange(coins, rem, count) {
    if (rem < 0) {
      return -1
    }
    if (rem === 0) {
      return 0
    }

    // check prev value in cache table if value calculated then return it
    if (count[rem - 1] && count[rem - 1] !== 0) {
      return count[rem - 1]
    }

    let min = Number.MAX_VALUE;
    for (let i = 0; i < coins.length; i++) {
      const res = coinChange(coins, rem - coins[i], count)

      // increase when result is greater than or equal to 0
      if (res >= 0 && res < min) {
        min = res + 1
      }
    }
    count[rem - 1] = min === Number.MAX_VALUE ? -1 : min;
    return count[rem - 1];
  }
}

let coinChange1 = (coins, amount) => {
  let max = amount + 1;
  let dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}

let coins = [1,2,3] // 3+2
let amount = 5

console.log(coinChange(coins, amount));
// console.log(coinChange(coins, amount));