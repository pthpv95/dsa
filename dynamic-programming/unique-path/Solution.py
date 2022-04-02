class Solution:
    def uniquePathsPlay(self, m: int, n: int) -> int:
      # [col, row]
      row = [1] * n
      grid = [[0 for x in range(m)] for y in range(n)]
      for row in range(n):
        for col in range(m):
          grid[row][col] = [row, col]
      print(grid[0][1])

    def uniquePaths(self, m: int, n: int) -> int:
      col = [1] * n
      # last row is always 1
      for i in range(m-1):
         # start from second to the last col
        for j in range(n-2,-1,-1):
          # col = right col + bottom col
          col[j] = col[j+1] + col[j]
      return col[0]
sl = Solution()
m = 7 # col
n = 3 # row
res = sl.uniquePaths(m, n)
print(res)
#store path first