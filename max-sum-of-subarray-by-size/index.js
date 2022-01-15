let maxSum = (nums, k) => {
  let result = 0;
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    if (i >= k) {
      sum = sum - nums[i - k]
    }
    if (result < sum) {
      result = sum
    }
  }
  return result
}

let findMax = (nums, k) => {
  let max = 0;
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (i >= k - 1) {
      max = Math.max(max, sum)
      sum -= nums[i - (k - 1)]
    }
  }
  return max
}

let smallestSubArrayOfGivenSum = (target, nums) => {
  let currentSum = 0;
  let windowSize = Number.MAX_VALUE;
  let windowsStart = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    while (currentSum >= target) {
      windowSize = Math.min(windowSize, i - windowsStart + 1)
      currentSum -= nums[windowsStart]
      windowsStart++
    }
  }
  return windowSize === Number.MAX_VALUE ? 0 : windowSize;
}

function lengthOfLongestSubstringKDistinct(str, k) {
  let max = 0
  let map = {}
  let leftWindows = 0;
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;

    while (Object.keys(map).length > k) {
      map[str[leftWindows]]--;
      if (map[str[leftWindows]] === 0) {
        delete map[str[leftWindows]];
      }
      leftWindows++
    }
    max = Math.max(max, i - leftWindows + 1)
  }
  return max;
}


let nums = [4, 2, 2, 7, 8, 1, 2, 8, 1, 0]
let k = 3
console.log(smallestSubArrayOfGivenSum(7, [2, 3, 1, 2, 4, 3]));
let str = 'aaahhibc';
// test cases
// aba k = 1
console.log(lengthOfLongestSubstringKDistinct(str, 2)); // 3