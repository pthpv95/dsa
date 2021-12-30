/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = ''
  let resultLength = 0
  let l, r
  for (let i = 0; i < s.length; i++) {
    // odd length
    l = i
    r = i
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resultLength) {
        result = s.substring(l, r + 1)
        resultLength = r - l + 1
      }
      l--
      r++
    }

    // even length
    l = i
    r = i + 1
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resultLength) {
        result = s.substring(l, r + 1)
        resultLength = r - l + 1
      }
      l--
      r++
    }
  }
  return result;
};

function checkPalindrome(str) {
  let curr = ''
  for (let item of str) {
    curr = item + curr
  }
  return curr === str;
}

let s = "cbbd";
let result = longestPalindrome(s);
console.log(result);
//bb ac
// aradaroem