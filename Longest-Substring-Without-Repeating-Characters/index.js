/**
 * @param {string} s
 * @return {number}
 */

// recursive solution
var lengthOfLongestSubstring1 = function (s, curr) {
  let longest = '';
  let index = 0;
  for (let char of s) {
    index++;

    if (!longest.includes(char)) {
      longest = longest + char;
    } else {
      let dupCharIndex = longest.indexOf(char) + 1;
      let remaining = s.substring(dupCharIndex)

      let currLongest = longest
      if (curr && curr.length > longest.length) {
        currLongest = curr
      }

      if (remaining.length < currLongest.length) {
        return currLongest.length
      }

      return lengthOfLongestSubstring(remaining, currLongest)
    }
  }

  return longest.length;
};
// dvdf -> dv -> v -> vd -> vdf
var lengthOfLongestSubstring = function (s) {
  // hash map
  let map = {}
  let ans = 0
  let l = 0
  for (let j = 0; j < s.length; j++) {
    // if this character exists in map
    if (map[s[j]]) {
      l = Math.max(map[s[j]], l)
    }

    // got it
    ans = Math.max(ans, j - l + 1)

    // store current index + 1 of a character
    map[s[j]] = j + 1
  }

  return ans;
}

// sliding widow technique
var lengthOfLongestSubstring = function (s) {
  let result = 0
  let set = {}
  let l = 0
  for (let r in s) {
    while (set[s[r]]) {
      delete set[s[l]]
      l++
    }
    if (!set[s[r]]) {
      set[s[r]] = s[r]
    }

    result = Math.max(result, r - l + 1)
  }
  return result
}

console.log(lengthOfLongestSubstring('pwwkew'));
// 0
// 
module.exports = {
  lengthOfLongestSubstring
}

// s = p w w k e w
// case 1: curr = a -> ab -> abc
// case 2: curr = b
//        skip = 1
// case 3: curr = p -> pw -> w -> wk -> wke