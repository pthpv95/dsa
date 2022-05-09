# todo: 
#   try to understand the problem
#   do dfs each cell, keep track of visited

from typing import List

class Solution:
    def pacificAtlantic(self, matrix: List[List[int]]) -> List[List[int]]:
        if not matrix: return []
        self.directions = [(1,0),(-1,0),(0,1),(0,-1)]
        row = len(matrix) #row
        col = len(matrix[0]) #col
        p_visited = [[False for _ in range(col)] for _ in range(row)]
        
        a_visited = [[False for _ in range(col)] for _ in range(row)]
        result = []
        
        for r in range(row):
            # p_visited[i][0] = True
            # a_visited[i][n-1] = True
            self.dfs(matrix, r, 0, p_visited, row, col)
            self.dfs(matrix, r, col-1, a_visited, row, col)
        for c in range(col):
            # p_visited[0][j] = True
            # a_visited[m-1][j] = True
            self.dfs(matrix, 0, c, p_visited, row, col)
            self.dfs(matrix, row-1, c, a_visited, row, col)
            
        for r in range(row):
            for c in range(col):
                if p_visited[r][c] and a_visited[r][c]:
                    result.append([r,c])
        return result
                
    def dfs(self, matrix, i, j, visited, row, col):
        # when dfs called, meaning its caller already verified this point 
        visited[i][j] = True
        for dir in self.directions:
            #x -> row
            #y -> col
            x, y = i + dir[0], j + dir[1]
            if x < 0 or x >= row or y < 0 or y >= col or visited[x][y] or matrix[x][y] < matrix[i][j]:
                continue
            self.dfs(matrix, x, y, visited, row, col)


sl = Solution()
heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
res = sl.pacificAtlantic(heights)
print(res)