
// 1 2 3 4 5 6 7 ?? 2
let binarySearch = (nums, value) => {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor(left + right) / 2
    if (nums[mid] === value) {
      return true
    }
    if (nums[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return false
}

let binarySearchRecursive = (nums, value, left, right) => {
  if (left > right) {
    return false
  }

  let mid = Math.floor((left + right) / 2)
  if (nums[mid] === value) return true

  if (value < nums[mid]) {
    return binarySearchRecursive(nums, value, left, mid - 1)
  } else {
    return binarySearchRecursive(nums, value, mid + 1, right)
  }
}

let nums = [1, 3, 4, 5, 6, 7];
let result = binarySearchRecursive(nums, 7, 0, nums.length - 1)

console.log('found it ?', result);