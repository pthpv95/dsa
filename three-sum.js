/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a,b) => a - b)
  let result = []

  for (let i = 0; i < nums.length; i++) {
    // check current number is same as previous then continue
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1; r = nums.length - 1;
    while (l < r) {
      let threeSum = nums[l] + nums[r] + nums[i]
      if (threeSum > 0) {
        r--
      } else if (threeSum < 0) {
        l++
      } else {
        result.push([nums[i], nums[l], nums[r]])
        l++
        // increase left in case duplicate with prev value
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }
  return result;
};

// nums = [-1, -1, -4, 0, 1, 2]
nums = [-1, 0, 1, 2, -1, -4]
nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
// nums = [0, 0, 0, 0]
console.log(threeSum(nums));
var twoSum = function (numbers, target) {
  let result = []
  let dp = {}
  for (let i = 0; i < numbers.length; i++) {
    dp[numbers[i]] = i + 1

    let tmp = target - numbers[i]
    if (dp[tmp] !== undefined) {
      result = [dp[tmp], i + 1]
    }

  }
  return result
};


// nums = [2,7,11,15]
// target = 9

nums = [0, 0, 3, 1]
target = 0

// console.log(twoSum(nums, target));