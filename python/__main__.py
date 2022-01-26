
from typing import List
from datetime import date

class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    result = []
    if(len(nums) == 1):
      return [nums.copy()]

    for i in range(len(nums)):
      n = nums.pop(0)
      perms = self.permute(nums)
      
      for perm in perms:
        perm.append(n)
      result.extend(perms)
      nums.append(n)
    return result
  
  def longestPalindrome(self, s: str) -> str:
      if s == "":
          return s
      res = ""
      dp = [None for i in range(len(s))]
      for j in range(len(s)):
          for i in range(j+1):
              if i == j:
                  dp[i] = True
              elif j == i+1:
                  dp[i] = (s[i] == s[j])
              else:
                  dp[i] = (dp[i+1] and s[i] == s[j])
              if dp[i] and j - i + 1 > len(res):
                  res = s[i:j+1]
      return res

  def lengthOfLongestSubstring(self, s: str):
    charSet = set()
    l = 0
    res = 0
    for r in range(len(s)):
      while s[r] in charSet:
        charSet.remove(s[l])
        l += 1
      charSet.add(s[r])
      res = max(res, r - l + 1)
    return res

  def findSmallestNumber(self, nums: List[int], curr: int):
    return
  
  def reverseBits(self, n: int) -> int:
    ans = 0
    for i in range(32):
      ans<<=1
      ans = ans | (n & 1)
      n>>=1
    return ans

nums = [1,2,3]
sl = Solution()
# print(sl.longestPalindrome('1221'))
# print(sl.findSmallestNumber([1, 3, 2, -1, 5]))
print(sl.reverseBits(964176192))