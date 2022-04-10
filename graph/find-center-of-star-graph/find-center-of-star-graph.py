from typing import List

class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        u = edges[0][0]
        v = edges[0][1]
        
        if edges[1][0] == u or edges[1][0] == v:
            return edges[1][0]
        return edges[1][1]

sl = Solution()
res = sl.findCenter([[1,4],[4,1],[4,3],[5,4],[2,4]])
print(res)