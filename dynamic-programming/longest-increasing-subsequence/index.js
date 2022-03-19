/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let lis = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        lis[i] = Math.max(lis[i], 1 + lis[j])
      }
    }
  }
  return Math.max(...lis)
};

let lis = (nums) => {
  let lis = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1)
      }
    }
  }

  return Math.max(...lis);
}

// nums = [1, 2, 4, 3]
nums = [-1, 3, 4, 5, 2, 2, 2, 2]
// [0,1,4]
// console.log(lengthOfLIS(nums));
console.log(lis(nums));

// f(4)  {f(4) = 1 + max(f(1), f(2), f(3))}
// /    |    \
// f(1)  f(2)  f(3) {f(3) = 1, f(2) and f(1) are > f(3)}
//      |      |  \
//     f(1)  f(2)  f(1) {f(2) = 1 + max(f(1)}
//             |
//           f(1) {f(1) = 1}

// /  |  \