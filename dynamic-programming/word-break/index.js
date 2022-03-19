/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// bottom up manner
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      // condition to do a match
      if (i + wordDict[j].length <= s.length) {
        if (s.substring(i, i + wordDict[j].length) == wordDict[j]) {
          // starting index of match word
          dp[i] = dp[i + wordDict[j].length]
        }
      }

      // if it match then continue with next word
      if (dp[i]) {
        break
      }
    }
  }
  console.log(dp);
  return dp[0]
};

// top down manner
let ww = (s, wordDict) => {
  let dp = Array(s.length + 1).fill(false);
  
  // base case
  dp[0] = true
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(i, j))) {
        dp[i] = true;
        break
      }
    }
  }
  return dp[s.length]
}
s = "leetcode", wordDict = ["leet", "code"]
// leet code
// leet 
// console.log(wordBreak(s, wordDict));
console.log(ww(s, wordDict));
