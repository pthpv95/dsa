// Search in rotated sorted array
// example = [4, 5, 6, 7, 0, 1, 2]
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // left sorted array
    if (nums[l] <= nums[mid]) {
      // if target is greater than the mid              // [0,1,2] target = 2
      // or target is smaller than the "left most value" //  [2,3,4,1] target = 1
      // then we increase the left value
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    // right sorted array
    else {
      // if target is smaller than mid value       // [0,1,2] target = 0
      // or target is greater the "right most value" // [5,1,3] target = 5
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }
  return -1;
};

// two cases:
nums = [4, 5, 6, 7, 0, 1, 2]
// nums = [1,3]
target = 2

// nums = [5,1,3]
// target = 5


function search1(arr, l, h, key) {
  if (l > h)
    return -1;

  let mid = Math.floor((l + h) / 2);
  if (arr[mid] == key)
    return mid;

  /* If arr[l...mid] is sorted */
  if (arr[l] <= arr[mid]) {
    /* As this subarray is sorted, we can quickly
    check if key lies in half or other half */
    if (key >= arr[l] && key <= arr[mid])
      return search(arr, l, mid - 1, key);
    /*If key not lies in first half subarray, 
       Divide other half  into two subarrays,
       such that we can quickly check if key lies 
       in other half */
    return search(arr, mid + 1, h, key);
  }

  /* If arr[l..mid] first subarray is not sorted, 
  then arr[mid... h]
  must be sorted subarray */
  if (key >= arr[mid] && key <= arr[h])
    return search(arr, mid + 1, h, key);

  return search(arr, l, mid - 1, key);
}

console.log(search(nums, target));