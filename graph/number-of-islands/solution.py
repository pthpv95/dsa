from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        count = 0
        visited = set()

        def dfs(grid, row, col):
            if row < 0 or col < 0 or row >= len(grid) or col >= len(grid[0]) or grid[row][col] != "1" or (row, col) in visited:
                return

            visited.add((row, col))

            dfs(grid, row + 1, col)
            dfs(grid, row - 1, col)
            dfs(grid, row, col + 1)
            dfs(grid, row, col - 1)

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1" and (i, j) not in visited:
                    dfs(grid, i, j)
                    count += 1
        return count

sl = Solution()
grid = [
    ["1", "1", "0", "0", "1"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
res = sl.numIslands(grid)
print('number of island:', res)
# pattern for dfs is:
# check stop condition
# then store the visited node then run dfs for 4 directions
