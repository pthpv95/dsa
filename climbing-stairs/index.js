// var climbStairs = function (n) {
//   let one = 1, two = 1
//   for (let i = 0; i < n - 1; i++) {
//     let tmp = one
//     one = one + two
//     two = tmp
//   }
//   return one;
// };

var climbStairs = function (n) {
  const memo = {};
  const helper = (n) => {
    let result = 0

    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    
    if (memo[n]) {
      return memo[n]
    }
    result = helper(n - 1) + helper(n - 2);
    memo[n] = result
    return result
  }

  return helper(n);
};

console.log(climbStairs(4));