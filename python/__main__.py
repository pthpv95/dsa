
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
  
  def lengthOfLIS(slf, nums: List[int]) -> int:
    LIS = [1] * len(nums)
    for i in range(len(nums) -1,-1,-1):
      for j in range(i+1, len(nums)):
        if nums[i] < nums[j]:
          LIS[i]= max(LIS[i], 1 + LIS[j])
    return max(LIS)

  def fib(self, n: int):
    fib = [0] * n
    fib[1] = 1
    for i in range(2, n):
      fib[i] = fib[i-1]+fib[i-2]
    return fib[n-1]

nums = [1,2,3]
sl = Solution()
# print(sl.longestPalindrome('1221'))
# print(sl.findSmallestNumber([1, 3, 2, -1, 5]))
# print(sl.reverseBits(964176192))
# print( dp = [float('inf')] * (amount + 1))
# print(sl.lengthOfLIS([0,1,0,3,2,3]))
print(sl.fib(10))
text2 = 'ace'
text1 = 'abcde'
dp = [[0 for j in range(len(text2)+1)] for i in range(len(text1)+1)]
print(dp)