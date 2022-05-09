from typing import List


class Solution:
    def canFinish1(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        if len(prerequisites) == 0 and numCourses > 0:
            return False
        mp = {}
        total = 0
        possible = True
        for i in range(len(prerequisites)):
            item = prerequisites[i]
            prev = item[-1]
            if item[0] in mp:
                possible = False
            else:
                mp[prev] = item[0]
        return possible

    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        preMap = {i: [] for i in range(numCourses)}

        # [[0,1]]: course 0 -> prev: 1
        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        visitedSet = set()

        def dfs(crs):
            # base case
            if crs in visitedSet:
                return False
            if preMap[crs] == []:
                return True

            visitedSet.add(crs)
            for pre in preMap[crs]:
                if not dfs(pre):
                    return False
            visitedSet.remove(crs)
            preMap[crs] = []
            return True

        for crs in range(numCourses):
            if not dfs(crs):
                return False
        return True


sl = Solution()
numCourses = 5
prerequisites = [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]]
res = sl.canFinish(numCourses, prerequisites)
print(res)
