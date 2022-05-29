from typing import List


def find_first_occurrence(arr: List[int], target: int) -> int:
    # WRITE YOUR BRILLIANT CODE HERE
    boundary = -1
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = (l+r)//2
        if arr[mid] == target:
            boundary = mid
            r = mid - 1
        else:
            l = mid+1
    return boundary

# arr = [2, 3, 5, 7, 11, 13, 17, 19]
# target = 6


arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
target = 3

res = find_first_occurrence(arr, target)
print(res)
