/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   function checkDefinedValue(value) {
//     return value !== undefined ? value : 1
//   }
//   let result = []
//   let prefix = [nums[0]]
//   let postfix = []

//   for (let i = 1; i < nums.length; i++) {
//     prefix[i] = nums[i] * prefix[i - 1]
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     postfix[i] = nums[i] * (checkDefinedValue(postfix[i + 1]))
//   }

//   for (let j = 0; j < nums.length; j++) {
//     let res = (checkDefinedValue(prefix[j - 1])) * (checkDefinedValue(postfix[j + 1]))
//     result.push(res)
//   }

//   return result;
// };

var productExceptSelf = function (nums) {
  let result = []
  let pre = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre
    pre = pre * nums[i]
  }

  let post = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = post * result[i]
    post = post * nums[i]
  }

  return result;
};

nums = [-1, 1, 0, -3, 3] // [1, 2, 6, 24] || [4, 12, 24, 24]
nums = [1, 2, 3, 4]
// nums = [4,3,2,1,2]
// ->  [24, 12, 8, 6]
// 3 

console.log(productExceptSelf(nums));