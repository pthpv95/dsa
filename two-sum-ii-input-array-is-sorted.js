// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function search(nums, value) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === value) {
      return mid
    }
    if (nums[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

var twoSum = function (numbers, target) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    let idx = search(numbers, target - numbers[i])
    if (idx > -1) {
      if(idx === i){
        return [i + 1, idx + 2]  
      }
      return [i + 1, idx + 1]
    }
  }
  return result
};

var twoSum = (numbers, target) => {
  let l = 0, r = numbers.length - 1
  while(r > l){
    let sum = numbers[l] + numbers[r]
    if(target === sum){
      return [l + 1, r + 1]
    }
    if(sum < target){
      l++
    }else{
      r--
    }
  }
}
// nums = [2,7,11,15]
// target = 9

// nums = [0,0,3,4]
// target = 0
nums = [1,2,3,4,4,9,56,90]
target = 8

// console.log(search(nums, 0));
console.log(twoSum(nums, target));