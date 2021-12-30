var rob = function (nums) {
  let currMax = 0, preMax = 0
  for (let i = 0; i < nums.length; i++) {
    let tmp = currMax
    currMax = Math.max(currMax, nums[i] + preMax)
    preMax = tmp;
  }
  return currMax
}

// max houses = 2 //
// nums = [1, 2, 3, 1, 3, 5, 7]
// nums = [2, 7, 9, 3, 1]
// nums = [2, 1, 1, 2, 0] // 2 
nums = [1, 2, 3, 1]
console.log(rob(nums));