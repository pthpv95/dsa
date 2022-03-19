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
// total amx sub array item
nums = [-2, 1, -3, -1, 2, 1, -5]
console.log(maxSubArray(nums));
