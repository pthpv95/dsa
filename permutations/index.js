let numsArr = [1, 2, 3];

var permute = function (nums) {
  let result = []

  function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp;
    return [...nums];
  }

  function findPermutations(nums, l = 0) {
    if (l === nums.length - 1) {
      result.push(nums)
    }

    for (let i = l; i < nums.length; i++) {
      let swapped = swap(nums, l, i);
      findPermutations(swapped, l + 1)
      swap(nums, l, i)
    }
  }
  findPermutations(nums)
  return result;
};

// nums = [1, 2, 3]
// a = permute(nums);
// console.log(a);

// backtracking solution
var permute = function (nums) {
  let result = []
  if (nums.length === 1) {
    return [[...nums]]
  }

  for (let x of nums) {
    // remove first element
    let first = nums.shift()
    let perms = permute(nums)
    for (y of perms) {
      y.push(first)
    }
    result.push(...perms)

    // add first element back
    nums.push(first)
  }

  return result;
}

a = permute([1,2,3]);
console.log(a);

// function permute(str, l, r) {
//   if (l == r) {
//     console.log(str);
//   } else {
//     for (let i = l; i <= r; i++) {
//       str = swap(str, l, i);
//       permute(str, l + 1, r);
//       str = swap(str, l, i);
//     }
//   }
// }

// function swap(a, i, j) {
//   let temp;
//   let charArray = a.split("");
//   temp = charArray[i];
//   charArray[i] = charArray[j];
//   charArray[j] = temp;
//   return (charArray).join("");
// }

// let str = "ABC";
// let n = str.length;
// let result = permute(str, 0, n - 1);
