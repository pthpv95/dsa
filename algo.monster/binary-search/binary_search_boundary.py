from typing import List


def find_boundary(arr: List[bool]) -> int:
    boundary_index = -1
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = (l+r)//2
        if arr[mid]:
            boundary_index = mid
            r = mid - 1
        else:
            l = mid+1
    return boundary_index


arr = [True, True, True, True, True]
res = find_boundary(arr)
print(res)

# 5/2 = 2 -> 4
