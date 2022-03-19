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

  // return dp[n] = solve(n - 1) + solve(n - 3) + solve(n - 5)
  return dp[n] = solve(n - 1) + solve(n - 2)
}
console.log(solve(4));