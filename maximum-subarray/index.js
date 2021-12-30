/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let currSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0
    }
    currSum = currSum + nums[i]
    max = Math.max(max, currSum)
  }
  return max;
};

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));
