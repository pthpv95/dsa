// problem: find-minimum-in-rotated-sorted-array
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  if (nums[0] < nums[nums.length - 1]) {
    return nums[0]
  }

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1]
    }
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]
    }
    if (nums[mid] > nums[0]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}

// nums = [11, 13, 15, 17]
// nums = [3,4,5,1,2]
// nums = [4,5,6,7,2,3]
// nums = [4,5,6,7,0,1,2]
// nums = [3, 1, 2]
// nums = [2, 1]
// nums = [1, 3, 2]
nums = [2, 3, 4, 5, 1]
console.log(findMin(nums));
