/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // naive approach O(n log n)
  
  // let res = []
  // for(let i = 0; i <= n; i++){
  //   res.push(count1Bit(i))
  // }
  // return res;
  // function count1Bit(num) {
  //   let counter = 0
  //   while (num !== 0) {
  //     if (num & 1) {
  //       counter++
  //     }
  //     num = num >> 1
  //   }
  //   return counter
  // }

  // linear time
  let dp = [0];
  let offset = 1
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 == i) {
      offset = i
    }
    dp[i] = 1 + dp[i - offset]
  }
  return dp
};

console.log(countBits(5));

// TODO: Need visualization