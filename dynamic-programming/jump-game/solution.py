from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums) - 1
        for i in range(len(nums) - 1, -1, -1):
            # to make sure current index to jump to the goal
            if i + nums[i] >= goal:
                goal = i
        return True if goal == 0 else False 

    def canReach(self, nums: List[int]):
        def dfs(nums: List[int], idx: int):
            if idx >= len(nums) - 1:
                return True
            if nums[idx] == 0:
                return False
            
            for i in range(1, nums[idx] + 1):
                if dfs(nums, idx+i):
                    return True
                else: 
                    return False
        return dfs(nums, 0)

    
sl = Solution()
last = 4
prev = 3 + 1
nums = [2,3,1,1,4]
# nums = [3,2,1,0,4]

res = sl.canReach(nums)
print(res)
