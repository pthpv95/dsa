// let numsArr = [1, 2, 3];
// let result = []
// var permute = function (nums, l, r) {
//   if (l & r && l === r) {
//     result.push(nums)
//   } else {
//     if (!l) {
//       l = 0
//     }
//     if (!r) {
//       r = nums.length - 1
//     }
//     for (let i = l; i <= r; i++) {
//       let swapnums = swap(nums, l, i)
//       permute(swapnums, l + 1, r)
//       nums = swap(nums, l, i)
//     }
//     return result;
//   }
// };

// function swap(nums, i, j) {
//   let temp = nums[i]
//   nums[i] = nums[j]
//   nums[j] = temp;
//   return [...nums];
// }

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
