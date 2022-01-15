/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = Math.max(...nums);
  let currMax = 1, currMin = 1;
  for (let i = 0; i < nums.length; i++) {
    let tmp = currMax * nums[i];
    currMax = Math.max(currMax * nums[i], currMin * nums[i], nums[i])
    currMin = Math.min(tmp, currMin * nums[i], nums[i])
    result = Math.max(result, currMax)
  }
  return result
};

nums = [-1, 2, 4, -2, 3] // -> [-1,-8]
// 2 -2 8 -8 16 -16 48 -48 -> 48
// 2 6 -12 -48
// [-1, 2, 4, -2, 3] -> 48
// -1 -2 -8 16 48
// -2 - 8 16 48
// 0 1 - 0 2 - 1 2
// nums = [0,2]
nums = [3, -1, 4]
// 3 -3 -12
console.log(maxProduct(nums));