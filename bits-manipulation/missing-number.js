/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  // slow
  let curr = nums[0];
  for (let i = 0; i <= nums.length; i++) {
    curr = i;
    if (nums[i] !== curr) {
      return i;
    }
  }

  // binary search solution
  // let l = 0, r = nums.length - 1;
  // while (l <= r) {
  //   let mid = Math.floor((l + r) / 2);
  //   if (nums[mid] == mid) {
  //     l = mid + 1
  //   } else {
  //     r = mid - 1
  //   }
  // }
  // return l;
  // kinda like sum a - sum b
  // XOR operator solution
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += (i - nums[i])
  }
  return res;
};

nums = [0, 1, 2, 4, 5] // -> [3, 0, 1]
console.log(missingNumber(nums));

// TODO: Need visualization