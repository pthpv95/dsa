from typing import List


class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        ROWS, COLS = len(heights), len(heights[0])
        pac, alt = set(), set()

        def dfs(r, c, visited: set, prevHeight):
            if ((r, c) in visited or r < 0 or c < 0 or r == ROWS or c == COLS
                # only allow to go from greater or equal height
                    or heights[r][c] < prevHeight):
                return

            visited.add((r, c))

            dfs(r-1, c, visited, heights[r][c])
            dfs(r+1, c, visited, heights[r][c])
            dfs(r, c+1, visited, heights[r][c])
            dfs(r, c-1, visited, heights[r][c])

        for c in range(COLS):
            dfs(0, c, pac, heights[0][c])  # first row
            dfs(ROWS-1, c, alt, heights[ROWS-1][c])  # last row

        for r in range(ROWS):
            dfs(r, 0, pac, heights[r][0])  # first col
            dfs(r, COLS-1, alt, heights[r][COLS-1])  # last col
        res = []
        for r in range(ROWS):
            for c in range(COLS):
                if (r, c) in pac and (r, c) in alt:
                    res.append([r, c])

        return res


sl = Solution()
heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [
    2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
res = sl.pacificAtlantic(heights)
print(res)
