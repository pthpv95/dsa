// https://www.techiedelight.com/coin-change-problem-find-total-number-ways-get-denomination-coins/

function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i
  }

  return res;
}

let dp = [];
function solve(n) {
  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1
  }

  if (dp[n]) {
    return dp[n]
  }

  return dp[n] = solve(n - 1) + solve(n - 3) + solve(n - 5)
  // return dp[n] = solve(n - 1) + solve(n - 2)
}

// S = { 1, 2, 3 }, target = 4
// result: 
let dp1 = {}
function count(s, target) {
  if (target < 0) {
    return 0
  }

  if (target === 0) {
    return 1;
  }

  if (dp1[target]) {
    return dp1[target]
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    result += count(s, target - s[i])
  }
  return dp1[target] = result;
}

// console.log(solve(4));
s = [1, 2, 3]
target = 3
console.log(count(s, target));