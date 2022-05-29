from typing import List

def binary_search(arr: List[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    while left <= right:
      mid = (left + right) // 2
      if arr[mid] == target:
        return mid
      elif arr[mid] > target:
        right = mid - 1
      else:
        left = mid + 1
    return -1

# res = binary_search([2, 8, 89, 120, 1000], 120)
res = binary_search([120], 120)
print(res)