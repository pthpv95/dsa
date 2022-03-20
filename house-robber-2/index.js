let rob = (nums) => {
  return Math.max(nums[0], helper(nums.slice(0)), helper(nums.slice(0, nums.length - 1)))
}

let helper = (nums) => {
  let rob1 = 0, rob2 = 0
  for (let i = 0; i < nums.length; i++) {
    // 2 choices:
    // - select rob1 + current
    // - select rob2 because we're not allowed to select adjacent 
    // up until this current number, what's maximum we could rob
    let newRob = Math.max(nums[i] + rob1, rob2)
    //since we're shifting by one, we gonna assign rob2 to the previous value that were at rob2
    rob1 = rob2
    // the we update rob2 with the value we jus computed newRob
    rob2 = newRob
  }

  // rob2 will contain the max amount from the entire array
  return rob2
}

nums = [1,2,3,1]
console.log(rob(nums));