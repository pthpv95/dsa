from typing import List


def find_min_rotated(arr: List[int]) -> int:
    l, r = 0, len(arr) - 1
    boundary_index = -1
    while l <= r:
        mid = (l+r)//2
        # if <= last element, then belongs to lower half
        if arr[mid] <= arr[-1]:
            boundary_index = mid
            r = mid - 1
        else:
            l = mid + 1
    return boundary_index

# arr = [30, 40, 50, 10, 20]
# case 1: mid (50) is greater than both next and prev -> check first and last

# arr = [3, 5, 7, 11, 13, 17, 19, 2]
# case 2: mid (11) is greater than prev and smaller than next -> check first and last


arr = [30, 40, 50, 10, 20, 25]
# case 3: mid (10) is smaller than both next and prev

# arr = [3, 5, 7, 11, 13, 17, 19]
# case 4: mid (11) is greater than prev and smaller than next -> return 0

res = find_min_rotated(arr)
print(res)
