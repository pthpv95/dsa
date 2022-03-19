/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = createDP(text1, text2)
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1]
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
      }
    }
  }
  console.log(dp);
  return dp[0][0]
};

function createDP(text1, text2) {
  let arr = []
  let row = new Array(text2.length + 1).fill(0);
  for (let i = 0; i < text1.length + 1; i++) {
    arr.push(row)
  }
  return arr
}

// O(nm)

function lcs(text1, text2) {
  let common = '';
  let dp = new Array(text1.length + 1)
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(i + 1)
  }

  // j is row; i is column
  for (let i = 0; i <= text1.length; i++) {
    for (let j = 0; j <= text2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else if (text1[i - 1] === text2[j - 1]) { // if characters are match
        common = common + text1[i - 1]
        // diagonal cell + 1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // max of left cell and top cell
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  console.log(dp, common);
  return dp[text1.length][text2.length]
}

// let text1 = 'abcba', text2 = 'abcbcba';
let text1 = 'abcde', text2 = 'ace';
// let result = longestCommonSubsequence('abcba', 'abcbcba')
let result = lcs(text1, text2)
console.log(result);

let x = [[2, 3, 3], [2, 5, 4], [2, 3, 4]]
var index = 2
// console.table(x);