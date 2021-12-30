var containsDuplicate = function (nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined){
      map[nums[i]] = nums[i]
    }else{
      return true
    }
  }

  return false
};

nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums));