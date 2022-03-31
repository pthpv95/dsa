
class Solution:
  def solve(self, s: str) -> int:
    dp = [0 for i in range(len(s) + 1)]
    dp[0] = 1
    # base case
    if s[0] == '0':
      return 0
    else:
      dp[1] = 1

    for i in range(2, len(s) +1):
      if s[i-1] == '0':
        if s[i-2] == '1' or s[i-2] == '2':
          dp[1] = dp[i-2]
        else:
          return 0
      else:
        if(s[i-2] == '1') or(s[i-2] == '2' and int(s[i-1]) < 7):
          dp[i] = dp[i-2] + dp[i-1]
        else:
          dp[i] = dp[i-1]
    return dp[len(s)]
  
  def solve2(self, s: str) -> int:
    ## 01
    if not s or s[0]=='0':
            return 0
    n = len(s)
    dp = [0] * (n + 1); 

    # base case initialization
    dp[0:2] = [1,1]
    res = []
    for x in s:
      res.append(x)

    for i in range(2, n + 1):
        # One step jump
        if 0 < int(s[i-1:i]):
            dp[i] = dp[i - 1]
        # Two step jump
        if 10 <= int(s[i-2:i]) <= 26:
            dp[i] += dp[i - 2]
    print(res)
    return dp[-1]

# possible cases
# 01 return 0
# 22 max 2 ways
# 29 max 1 way
# 10 max 1 way
# 90 return 0
# up to each position we store how many way to decode
sl = Solution()
s = '12721'
result = sl.solve2(s)
# [1, 2, 3] [1, 23] [12, 3]
print(result)