/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = []
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (map[complement] !== undefined) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }
  return result;
};

// nums = [2,7,11,15], target = 9
// nums = [1, 4, 2, 3, 7], target = 7
// nums = [3,2,4], target = 6
nums = [3, 3], target = 6
console.log(twoSum(nums, target));