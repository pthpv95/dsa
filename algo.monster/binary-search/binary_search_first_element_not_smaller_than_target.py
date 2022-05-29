from typing import List


def first_not_smaller(arr: List[int], target: int) -> int:
    # WRITE YOUR BRILLIANT CODE HERE
    l, r = 0, len(arr) - 1
    boundary = -1
    while l <= r:
        mid = (l+r)//2
        if arr[mid] >= target:
            boundary = mid
            r = mid - 1
        else:
            l = mid+1
    return boundary


arr = [1,2,3,4,5,6,7,8,9,10]
target = 10
res = first_not_smaller(arr, target)
print(res)
 
  
   
    
    