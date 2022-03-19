/**
 * @param {number} target
 * @param {number[]} candidates
 * @return {number[][]}
 */

// var combinationSum = function (candidates, target) {
//   let res = [];
//   dfsTraversal(candidates, 0, target, [], res);
//   return res;
//   // T.C: O(N^M), where N = # of candidate elements and M = target
//   // S.C: O(N^M)
// };

// const dfsTraversal = (candidates, startIdx, remaining, curPath, res) => {
//   if (remaining === 0) {
//     res.push(curPath.slice());
//   }
//   for (let i = startIdx; i < candidates.length; i++) {
//     if (remaining - candidates[i] >= 0) {
//       curPath.push(candidates[i]);

//       dfsTraversal(candidates, i, remaining - candidates[i], curPath, res);

//       // backtrack
//       curPath.pop();
//     }
//   }
// }

var combinationSum = function (candidates, target) {
  let index = 0;
  let newArray = [];
  let result = [];

  // we need an index to make sure the same combination (different order) is not repeated again and start your loop from the index.
  _combinationSum(candidates, target, index, newArray);
  return result;

  function _combinationSum(candidates, target, index, newArray) {
    console.log('_combinationSum');
    if (target === 0) {
      result.push([...newArray]);
      return;
    }

    if (target < 0) {
      // backtracking
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      newArray.push(candidates[i])
      _combinationSum(candidates, target - candidates[i], i, newArray);

      // backtracking
      newArray.pop()
    }
    return result;
  }
};

// let candidates = [2, 3, 6, 4, 7]; target = 6;
let candidates = [1,2]; target = 3;
console.log(combinationSum(candidates, target));