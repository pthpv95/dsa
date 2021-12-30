
// working but exceed time
// var maxArea = function (height) {
//   let result = 0
//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < height.length; j++) {
//       if (i === j) {
//         continue
//       }

//       let val = Math.min(height[i], height[j]) * (i - j)
//       if(val > result){
//         result = val
//       }
//     }
//   }
//   return result;
// };

var maxArea = function (height) {
  let max = 0, l = 0, r = height.length - 1;
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max;
};

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 7 * (8 - 1)
// height = [1, 1] // length = 9
// height = [1,2] -> 1 * distance (2) -> 2
// height = [2, 1] -> distance(2) -> 2
height = [2, 3, 4, 5, 18, 17, 6] // 
let result = maxArea(height)
console.log('result', result);

module.exports = {
  maxArea
}